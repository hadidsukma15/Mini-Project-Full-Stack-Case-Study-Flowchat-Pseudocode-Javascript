# Testing — Sistem Checkout Produk Sederhana

| No. | Skenario                                | Input `(harga, jumlah, isMember)` | Hasil yang diharapkan                                                            |
| --: | --------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
|   1 | Member mendapat diskon                  | `(100000, 2, true)`               | Subtotal 200000; diskon 20000; setelah diskon 180000; ongkir 15000; total 195000 |
|   2 | Non-member tidak mendapat diskon        | `(100000, 2, false)`              | Subtotal 200000; diskon 0; setelah diskon 200000; ongkir 15000; total 215000     |
|   3 | Total setelah diskon di bawah Rp250.000 | `(100000, 2, true)`               | Setelah diskon 180000; ongkir 15000; total 195000                                |
|   4 | Tepat Rp250.000 setelah diskon          | `(250000, 1, false)`              | Setelah diskon 250000; ongkir 0; total 250000                                    |
|   5 | Di atas Rp250.000 setelah diskon        | `(260000, 1, false)`              | Setelah diskon 260000; ongkir 0; total 260000                                    |
|   6 | Jumlah 0                                | `(100000, 0, false)`              | Error: jumlah harus berupa bilangan bulat positif                                |
|   7 | Jumlah pecahan                          | `(100000, 1.5, false)`            | Error: jumlah harus berupa bilangan bulat positif                                |
|   8 | Harga tidak valid (nol)                 | `(0, 1, false)`                   | Error: harga harus berupa angka positif                                          |
|   9 | Harga bukan angka                       | `("seratus", 1, false)`           | Error: harga harus berupa angka positif                                          |
|  10 | Status member bukan boolean             | `(100000, 1, "ya")`               | Error: status member harus berupa boolean                                        |

## Ringkasan

Seluruh skenario valid harus menghasilkan rincian checkout yang sesuai dengan aturan. Skenario tidak valid harus menghasilkan pesan error tanpa melanjutkan perhitungan. Ambang gratis ongkir diuji pada nilai tepat Rp250.000 dan nilai di atasnya.
