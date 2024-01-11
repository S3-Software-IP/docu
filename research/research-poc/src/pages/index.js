import { Inter } from "next/font/google";
import { React, useEffect, useState } from "react";
import { SpotifyService } from "@/services/SpotifyService.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let accessTokenValue = localStorage.getItem("accessToken");
    let refreshTokenValue = localStorage.getItem("refreshToken");
    let displayNameValue = localStorage.getItem("displayName");
    let userIdValue = localStorage.getItem("userId");

    setAccessToken(accessTokenValue);
    setRefreshToken(refreshTokenValue);
    setDisplayName(displayNameValue);
    setUserId(userIdValue);
  }, []);

  const handleAuthorize = () => {
    SpotifyService.getAuthorizationToken();
  };

  const logOut = () => {
    localStorage.clear();
    const loginUrl = "http://localhost:3000/";
    window.location.href = loginUrl;
  };

  return (
    <main>
      <div className="flex flex-row">
        <div className="w-full bg-neutral-900 min-h-screen ">
          <div className="flex flex-col mx-5 my-10 text-white bg-blue-500 rounded-lg content-center w-8/12">
            <button className="mx-10 my-5" onClick={logOut}>
              Logout
            </button>

            <button className="mx-10 my-5 " onClick={handleAuthorize}>
              Login
            </button>

            <span>User id: {userId}</span>
            <br></br>
            <span>Access token: {accessToken}</span>
            <br></br>
            <span>Refresh token: {refreshToken}</span>
            <br></br>
            <span>Display name: {displayName}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
