"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [buttonPressed, setButtonPressed] = useState(0);
  const handleButtonClick = async () => {
    try {
      const response = await axios.post("/api/updateButtonClicks", {});
      if (response.data && response.data.totalButtonPresses) {
        setButtonPressed(response.data.totalButtonPresses);
      }
    } catch (error) {
      console.error("Error updating button clicks:", error);
    }
  };
  useEffect(() => {
    handleButtonClick();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="w-full flex justify-center m-4">
          <button
            className="bg-red-600 hover:bg-red-500 text-white font-bold p-8 rounded-full"
            onClick={handleButtonClick}
          />
        </div>
        <div>Button has been pressed {buttonPressed} times</div>
      </div>
    </div>
  );
}
