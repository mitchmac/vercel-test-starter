export default function handler(request, response) {
  response.status(200).json({
    env: JSON.stringify(process.env)
  });
}
