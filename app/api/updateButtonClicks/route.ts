// pages/api/updateButtonClicks.js

let totalButtonPresses = 0;
export async function POST(request: Request) {
  totalButtonPresses++;
  return Response.json(
    { totalButtonPresses: totalButtonPresses },
    { status: 200 },
  );
}
export async function GET(request: Request) {
  return Response.json(
    { totalButtonPresses: totalButtonPresses },
    { status: 200 },
  );
}
