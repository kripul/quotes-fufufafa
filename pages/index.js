// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('/api/quote')
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Quote API</h1>
      <section style={styles.quoteSection}>
        <h2>Quote Acak:</h2>
        {quote ? (
          <blockquote style={styles.quote}>
            {quote.comment}
            <footer style={styles.quoteFooter}>— {quote.threadTitle}</footer>
          </blockquote>
        ) : (
          <p>Memuat quote...</p>
        )}
      </section>
      <section style={styles.docsSection}>
        <h2>Cara Penggunaan API:</h2>
        <h3>1. Random Quote</h3>
        <p>
          Endpoint: <code>/api/quote</code>
        </p>
        <p>Contoh Curl:</p>
        <pre style={styles.code}>
          {`curl https://<nama-proyek-anda>.vercel.app/api/quote`}
        </pre>
        <h3>2. Filter Quote berdasarkan Keyword</h3>
        <p>
          Endpoint: <code>/api/quotes?keyword=kataKunci</code>
        </p>
        <p>Contoh Curl:</p>
        <pre style={styles.code}>
          {`curl "https://<nama-proyek-anda>.vercel.app/api/quotes?keyword=musik"`}
        </pre>
      </section>
      <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Random Quote API.
          <br />
          Lihat proyek di: <a href="https://github.com/username/nama-repo" target="_blank" rel="noopener noreferrer">https://github.com/username/nama-repo</a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Segoe UI", sans-serif',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    color: '#4a90e2'
  },
  quoteSection: {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '1.2em'
  },
  quoteFooter: {
    marginTop: '10px',
    fontWeight: 'bold'
  },
  docsSection: {
    textAlign: 'left',
    backgroundColor: '#fafafa',
    padding: '20px',
    borderRadius: '8px'
  },
  code: {
    backgroundColor: '#eee',
    padding: '10px',
    borderRadius: '4px'
  },
  footer: {
    marginTop: '40px',
    fontSize: '0.9em',
    color: '#777',
    borderTop: '1px solid #ddd',
    paddingTop: '20px'
  }
};
