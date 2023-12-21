import { SpotifyService } from "@/services/SpotifyService.js";
import { useEffect } from "react";

export default function Callback() {
  useEffect(() => {
    //Get the authorization code from the redirect URL supplied earlier to the Spotify URL.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    //If code is in the URL, means the request was successful.
    if (code) {
      //get and set the access token using the authorization code.
      SpotifyService.setAccessToken(code)
        .then(() => {
          refreshAccessToken();
        })
        .catch((error) => {
          console.error("Error setting access token:", error);
        });
    }
  }, []);

  //Function to validate the access and refresh token, if invalid get new ones.
  const refreshAccessToken = async () => {
    try {
      await SpotifyService.checkAndRefreshAccessToken();
    } catch (error) {
      console.error("Error refreshing access token:", error);
    }
  };
}
