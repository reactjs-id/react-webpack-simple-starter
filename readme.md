# React Webpack Simple Starter

Pada saat pertama kali membuat aplikasi dengan ReactJS, kita perlu starter yang cukup sederhana untuk memulai. Repo ini akan mempermudah kita untuk mulai membuat aplikasi ReactJS.

Starter ini sangat sederhana dan hanya mencakup library berikut :

- ReactJS
- Babel Loader
	- Babel preset react
	- Babel preset ES2015
- Webpack

# Penggunaan

Clone repository ini. lalu jalankan

```sh
npm install
```

untuk membuat komponen baru, buat folder di `src/components` sesuai dengan nama component yang ingin dibuat. lihat contoh component `hello`.

untuk bisa melihat hasilnya, modifikasi file `src/index.js` dengan meng-import komponen yang baru dibuat.

Untuk memulai aplikasi dengan mode development (webpack-dev-server) jalankan perintah berikut

```sh
npm start
```

lalu buka `http://localhost:8080/`

# Testing

untuk melakukan testing, silakan buat file dengan ekstensi `.spec.js` didalam folder komponen yang baru dibuat. silakan lihat contoh yang ada pada komponen `Hello`.

untuk melakukan **continuous testing**, jalankan perintah berikut

```sh
npm run tdd
```

sedangkan untuk melakukan testing pada sistem CI (Continuous Integration) seperti wercker/travisCI, jalankan perintah berikut

```sh
npm test
```

# Deployment

Untuk build aplikasi untuk deployment, jalankan perintah berikut

```sh
npm run build
```

hasil kompilasi aplikasi akan ada di folder `dist`.

# Lain lain

## Testing on Commit
setiap anda melakukan `git commit` pada projek ini, secara otomatis komputer akan menjalankan command `npm test`. untuk melewati langkah ini, cukup gunakan perintah `git commit --no-verify`.

## Windows Development
apabila anda melakukan development menggunakan OS Windows dan virtualbox (seperti vagrant/laravel homestead), maka tambahkan `env` HOST=0.0.0.0 sebelum menjalankan command `npm start`.

```sh
$ HOST=0.0.0.0 npm start
```

# Lisensi

MIT
