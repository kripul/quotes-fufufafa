// pages/404.js
export default function Custom404() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        <a href="/" style={styles.link}>Kembali ke Beranda</a>
      </div>
    );
  }
  
  const styles = {
    container: {
      fontFamily: '"Segoe UI", sans-serif',
      textAlign: 'center',
      padding: '50px'
    },
    title: {
      fontSize: '2.5em',
      color: '#e74c3c'
    },
    link: {
      marginTop: '20px',
      display: 'inline-block',
      textDecoration: 'none',
      color: '#3498db'
    }
  };
  