# 🎲 API Random Quotes Bijak FUFUFAFA

Sebuah API sederhana untuk mengambil kutipan random dari akun anonim forum kaskus bernama FUFUFAFA seorang filsuf bijak abad ke-21. 
---

## 🛰 Deploy ke Vercel

1. Fork repo ini
2. Buka [vercel.com](https://vercel.com)
3. Import repo
4. Vercel akan otomatis deploy

---

## 📦 Cara Menggunakan API

Aplikasi menyediakan dua endpoint utama:

### 1. Mendapatkan Random Quote

- **Endpoint:** `/api/quote`  
- **Deskripsi:** Mengembalikan sebuah quote secara acak dalam format JSON.
- **Contoh Penggunaan dengan Curl:**
  ```bash
  curl https://<nama-proyek-anda>.vercel.app/api/quote
  ```

### 2. Filtering Quote Berdasarkan Keyword

- **Endpoint:** `/api/quotes?keyword=kataKunci`  
- **Deskripsi:** Mengembalikan seluruh quote yang mengandung keyword yang dicari. Filtering dilakukan berdasarkan properti seperti `comment`, `fullComment`, atau `threadTitle`.
- **Contoh Penggunaan dengan Curl:**
  ```bash
  curl "https://<nama-proyek-anda>.vercel.app/api/quotes?keyword=musik"
  ```

---
## 🧠 Credits

Data kutipan diambil dari [forum Kaskus (2013 era) sebagai bahan eksperimen open source API.](https://github.com/hbagqynamon/fufufafa_archive)

---

Keseluruhan kode di repositori ini dibuat menggunakan AI / [chatgpt](https://chatgpt.com/) sesuai arahan dari Mas Wapress Gibran untuk meningkatkan penggunaan AI