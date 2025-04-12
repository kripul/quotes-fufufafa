// pages/api/quotes.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { keyword } = req.query;
  const filePath = path.join(process.cwd(), 'data', 'quotes.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const quotes = JSON.parse(fileContents);

  // Jika parameter keyword disediakan, filter quotes yang mengandung keyword (case-insensitive)
  const filteredQuotes = keyword
    ? quotes.filter((quote) =>
        quote.comment.toLowerCase().includes(keyword.toLowerCase()) ||
        (quote.fullComment && quote.fullComment.toLowerCase().includes(keyword.toLowerCase())) ||
        (quote.threadTitle && quote.threadTitle.toLowerCase().includes(keyword.toLowerCase()))
      )
    : quotes;

  res.status(200).json(filteredQuotes);
}
