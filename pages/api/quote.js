// pages/api/quote.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'quotes.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const quotes = JSON.parse(fileContents);

  // Pilih quote secara acak
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  res.status(200).json(randomQuote);
}
