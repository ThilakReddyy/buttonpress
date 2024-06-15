// pages/api/updateButtonClicks.js

import { promises as fs } from "fs";
import path from "path";

const filePath = path.resolve("./data", "buttonPresses.json");

// Global variable to store the count
let totalButtonPresses = 0;

// Load the initial value from the file when the server starts
async function loadInitialValue() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const { totalButtonPresses: initialCount } = JSON.parse(data);
    totalButtonPresses = initialCount;
  } catch (error) {
    console.error("Error loading initial value:", error);
  }
}

// Save the current value to the file
async function saveCurrentValue() {
  try {
    await fs.writeFile(
      filePath,
      JSON.stringify({ totalButtonPresses }),
      "utf-8",
    );
  } catch (error) {
    console.error("Error saving current value:", error);
  }
}

// Load the initial value when the server starts
loadInitialValue();

export async function POST(request: Request) {
  try {
    totalButtonPresses++;
    await saveCurrentValue();
    return Response.json(
      { totalButtonPresses: totalButtonPresses },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { totalButtonPresses: totalButtonPresses },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    return Response.json(
      { totalButtonPresses: totalButtonPresses },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { totalButtonPresses: totalButtonPresses },
      { status: 500 },
    );
  }
}
