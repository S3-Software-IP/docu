import axios from "axios";
const secrets = require("@/../../secrets.json");

const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_ENDPOINT = "https://api.spotify.com/v1/me";

export const SpotifyService = {
  //Open the pop-up for login/scopes
  getAuthorizationToken: () => {
    const STATE = "your_random_state";
    const SCOPES = "user-read-private";
    const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${secrets.CLIENT_ID}&redirect_uri=${secrets.REDIRECT_URI}&scope=${SCOPES}&response_type=code&state=${STATE}`;
    window.location.href = LOGIN_URL;
  },

  setAccessToken: async function (authorizationCode) {
    //Create the body to get an access token from the authorization code.
    const requestBody = new URLSearchParams();
    requestBody.append("grant_type", "authorization_code");
    requestBody.append("code", authorizationCode);
    requestBody.append("redirect_uri", secrets.REDIRECT_URI);

    //Make a request to the token endpoint to set the access token to local storage.
    await this.setAccessRefreshToken(requestBody);
  },

  checkAndRefreshAccessToken: async () => {
    //If the accessToken does not have a value it means something went wrong or it's invalid. Try to get a new access token.
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      SpotifyService.getAuthorizationToken();
      return;
    }

    //Add the (new-) access token to the header for the API call.
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    //Request the user Id and display name from the Spotify API.
    try {
      await axios
        .get(SPOTIFY_API_ENDPOINT, { headers })
        .then((response) => {
          //Set the values from the Spotify API.
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("displayName", response.data.display_name);
        })
        .catch(function (error) {
          //Catch the errors, the most common error is the accessToken being expired

          if (error.response) {
            //Log the caught error
            console.log(error.response.data);

            //Get the refresh token from the storage.
            const refreshToken = localStorage.getItem("refreshToken");

            //Create a new body to request a new access token using the refresh token.
            const requestBody = new URLSearchParams();
            requestBody.append("grant_type", "refresh_token");
            requestBody.append("refresh_token", refreshToken);

            //Hand the body down to the token refresh function.
            this.setAccessRefreshToken(requestBody);
          } else {
            console.log("Error", error.message);
          }
        });
    } catch (error) {
      console.error("Error while checking or refreshing access token:", error);
    }

    //Navigate back to the index url.
    const homePageURL = `http://localhost:3000/`;
    window.location.href = homePageURL;
  },

  setAccessRefreshToken: async (requestBody) => {
    //Encode the client ID + Secret and add it to the header.
    const headers = {
      Authorization:
        "Basic " +
        new Buffer.from(
          secrets.CLIENT_ID + ":" + secrets.CLIENT_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };

    //Make a request to the token endpoint with the body parameters.
    axios
      .post(SPOTIFY_TOKEN_ENDPOINT, requestBody, { headers })
      .then((response) => {
        //Set the access & refresh tokens.
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
      })
      .catch((error) => {
        //Oops.
        console.error("Error while fetching access token:", error);
      });
  },
};
