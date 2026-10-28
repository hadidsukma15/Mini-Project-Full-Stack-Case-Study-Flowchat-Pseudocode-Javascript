## Deskripsi

Program checkout sederhana yang menerima harga produk, jumlah produk, dan status member. Program memvalidasi input, menghitung subtotal, menerapkan diskon member 10%, menentukan ongkos kirim, lalu menghasilkan total pembayaran.

## Aturan bisnis

1. Harga harus berupa angka positif.
2. Jumlah harus berupa bilangan bulat positif.
3. Member mendapat diskon 10% dari subtotal; non-member tidak mendapat diskon.
4. Ongkos kirim gratis apabila total setelah diskon minimal Rp250.000.
5. Jika total setelah diskon kurang dari Rp250.000, ongkos kirim Rp15.000.
6. Total pembayaran adalah total setelah diskon ditambah ongkos kirim.

## Struktur file

- `analysis.md`: problem decomposition, pattern recognition, dan abstraction.
- `flowchart.png`: hasil visual flowchart.
- `pseudocode.md`: pseudocode.
- `checkout.js`: fungsi `hitungCheckout(harga, jumlah, isMember)`.
- `testing.md`: daftar skenario dan hasil yang diharapkan.
- `README.md`: panduan project.

## Cara menjalankan

Dari folder project, jalankan:

```bash
node checkout.js
```

Contoh tersebut menjalankan checkout dengan harga Rp100.000, jumlah 3, dan status member. Untuk mencoba input lain, ubah argumen pada pemanggilan `hitungCheckout` di bagian bawah `checkout.js`.

## Penggunaan AI

AI digunakan sebagai partner untuk membantu menyusun kerangka analisis dan skenario pengujian.
