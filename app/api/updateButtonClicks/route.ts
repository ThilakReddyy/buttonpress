// pages/api/updateButtonClicks.js

let totalButtonPresses = 0;
export async function POST(request: Request) {
  totalButtonPresses++;
  return Response.json(
    { totalButtonPresses: totalButtonPresses },
    { status: 200 },
  );
}
