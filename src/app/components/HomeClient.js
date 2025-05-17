"use client"; // This makes sure the file runs in the browser, not the server

import { useEffect } from "react";

export default function HomeClient() {
  useEffect(() => {
    // ✅ Now safe to use document
    const el = document.getElementById("myDiv");
    console.log(el);
  }, []);

  return (
    <div id="myDiv">
      Hello from client side!
    </div>
  );
}
