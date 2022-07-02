## Backend
### Setup
* Arahkan folder dari terminal dengan perintah `$ cd backend`.
* Install node_modules dengan perintah `$ npm install`.
* Isi konfigurasi di `/config/config.js` sesuai device Anda.
* Buat database baru dengan perintah `$ sequelize db:create`.
* Jalankan migrasi dengan perintah `$ sequelize db:migrate`.
* Untuk menjalankan aplikasi ini lakukan perintah `$ npm run start`.
### Dokumentasi Swagger
* Buka dokumen swagger dengan mengakses di browser dengan alamat `localhost:4000/docs`.
### Mengakses API di Postman
* `(POST) localhost:4000/api/v1/players` untuk membuat player baru dengan mengisi `"username", "email", "password", "experience", "lvl"` pada body json.
* `(GET) localhost:4000/api/v1/players` untuk melihat daftar players.
* `(GET) localhost:4000/api/v1/players/:id` untuk melihat player berdasarkan id.
* `(PUT) localhost:4000/api/v1/players/:id` untuk mengupdate player berdasarkan id dengan cara mengisi column dan isinya pada body json.
* `(DELETE) localhost:4000/api/v1/players/:id` untuk mendelete player berdasarkan id.
* `(POST) localhost:4000/api/v1/players/exp/:id` untuk mengupdate column experience dengan cara mengisi di body json.