# CRUD API dengan Node.js

Proyek ini adalah aplikasi CRUD sederhana menggunakan Node.js dan Express.js. Aplikasi ini memungkinkan pengguna untuk melakukan operasi Create, Read, Update, dan Delete pada data yang tersimpan di database.

## Fitur

- **Membuat data** (Create)
- **Membaca data** (Read)
- **Memperbarui data** (Update)
- **Menghapus data** (Delete)

## Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB / MySQL (sesuaikan dengan database yang digunakan)
- dotenv (untuk konfigurasi lingkungan)

## Instalasi dan Menjalankan Proyek

1. **Clone repositori ini**

   ```sh
   git clone https://github.com/username/nama-repo.git
   cd nama-repo
   ```

2. **Instal dependensi**

   ```sh
   npm install
   ```

3. **Buat file .env** dan atur variabel lingkungan seperti berikut:

   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/nama_database
   ```

4. **Jalankan server**

   ```sh
   npm start
   ```

## Endpoint API

| Metode | Endpoint    | Deskripsi                       |
| ------ | ----------- | ------------------------------- |
| GET    | /items      | Mendapatkan semua data          |
| GET    | /items/\:id | Mendapatkan data berdasarkan ID |
| POST   | /items      | Menambahkan data baru           |
| PUT    | /items/\:id | Memperbarui data berdasarkan ID |
| DELETE | /items/\:id | Menghapus data berdasarkan ID   |

## Struktur Proyek

```
📂 nama-repo
 ┣ 📂 src
 ┃ ┣ 📂 routes
 ┃ ┃ ┗ 📜 items.js
 ┃ ┣ 📂 controllers
 ┃ ┃ ┗ 📜 itemsController.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 itemModel.js
 ┃ ┣ 📜 server.js
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## Kontribusi

Jika ingin berkontribusi, silakan buat pull request atau buka issue untuk diskusi lebih lanjut.

## Lisensi

Proyek ini menggunakan lisensi MIT.

