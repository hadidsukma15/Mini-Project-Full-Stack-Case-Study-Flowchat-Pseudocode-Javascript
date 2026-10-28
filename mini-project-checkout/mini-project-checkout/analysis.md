# Problem Decomposition — Sistem Checkout Produk Sederhana

## 1. Deskripsi masalah

Program menerima harga produk, jumlah produk, dan status member. Program memvalidasi input, lalu menghitung subtotal, diskon member, ongkos kirim, dan total pembayaran sesuai aturan assignment.

## 2. Input

- `harga`: angka lebih besar dari 0 dan harus berupa angka finite.
- `jumlah`: bilangan bulat lebih besar dari 0.
- `isMember`: boolean (`true` untuk member, `false` untuk non-member).

Jika salah satu input tidak valid, program mengembalikan pesan error dan menghentikan perhitungan.

## 3. Proses

1. Validasi `harga`.
2. Validasi `jumlah`.
3. Validasi `isMember`.
4. Hitung `subtotal = harga × jumlah`.
5. Jika member, hitung diskon sebesar 10% subtotal. Jika non-member, diskon = 0.
6. Hitung `totalSetelahDiskon = subtotal - diskon`.
7. Jika `totalSetelahDiskon >= 250000`, ongkos kirim = 0. Jika tidak, ongkos kirim = 15000.
8. Hitung `totalPembayaran = totalSetelahDiskon + ongkosKirim`.
9. Kembalikan seluruh rincian perhitungan.

## 4. Output

Untuk input valid, program mengembalikan objek yang berisi:

- status sukses (`success: true`)
- harga dan jumlah
- status member
- subtotal
- diskon
- total setelah diskon
- ongkos kirim
- total pembayaran

Untuk input tidak valid, program mengembalikan `success: false` dan pesan `error`.

## 5. Aturan keputusan

- Harga valid jika bertipe angka, finite, dan lebih besar dari 0.
- Jumlah valid jika bertipe angka, bilangan bulat, dan lebih besar dari 0.
- Status member valid jika bertipe boolean.
- Member mendapat diskon 10%; non-member tidak mendapat diskon.
- Ongkos kirim gratis jika total setelah diskon minimal Rp250.000; jika kurang, ongkir Rp15.000.

## 6. Pattern recognition

Masalah dapat dipecah menjadi pola yang berulang:

- Validasi dilakukan sebelum perhitungan.
- Diskon ditentukan oleh satu kondisi, yaitu status member.
- Ongkos kirim ditentukan oleh perbandingan total setelah diskon terhadap ambang Rp250.000.
- Semua hasil akhir dibentuk dari operasi aritmetika sederhana.

## 7. Abstraction

Program hanya memproses tiga input dan aturan checkout yang diberikan. Detail lain seperti katalog produk, stok, metode pembayaran, alamat pelanggan, UI, API, database, dan deployment tidak dimasukkan karena tidak diminta dalam assignment.

## 8. Asumsi implementasi

- `isMember` direpresentasikan sebagai boolean `true` atau `false`.
- Harga boleh berupa angka desimal positif karena instruksi hanya mensyaratkan angka positif.
- Ambang gratis ongkir diterapkan pada **total setelah diskon**, bukan subtotal sebelum diskon.
- Perhitungan menggunakan angka JavaScript; format Rupiah hanya diterapkan saat menampilkan contoh output, bukan pada nilai perhitungan.
