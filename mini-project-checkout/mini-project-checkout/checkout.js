function hitungCheckout(harga, jumlah, isMember) {
  if (
    typeof harga !== "number" ||
    !Number.isFinite(harga) ||
    harga <= 0
  ) {
    return {
      success: false,
      error: "Input tidak valid: harga harus berupa angka positif."
    };
  }

  if (
    typeof jumlah !== "number" ||
    !Number.isInteger(jumlah) ||
    jumlah <= 0
  ) {
    return {
      success: false,
      error: "Input tidak valid: jumlah harus berupa bilangan bulat positif."
    };
  }

  if (typeof isMember !== "boolean") {
    return {
      success: false,
      error: "Input tidak valid: status member harus berupa boolean (true/false)."
    };
  }

  const subtotal = harga * jumlah;
  const diskon = isMember ? subtotal * 0.10 : 0;
  const totalSetelahDiskon = subtotal - diskon;
  const ongkosKirim = totalSetelahDiskon >= 250000 ? 0 : 15000;
  const totalPembayaran = totalSetelahDiskon + ongkosKirim;

  return {
    success: true,
    harga,
    jumlah,
    isMember,
    subtotal,
    diskon,
    totalSetelahDiskon,
    ongkosKirim,
    totalPembayaran
  };
}

// Contoh penggunaan saat file dijalankan langsung dengan Node.js.
if (require.main === module) {
  const hasil = hitungCheckout(100000, 2, true);

  if (!hasil.success) {
    console.error(hasil.error);
  } else {
    const rupiah = (angka) =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 2
      }).format(angka);

    console.log("=== HASIL CHECKOUT ===");
    console.log(`Harga produk       : ${rupiah(hasil.harga)}`);
    console.log(`Jumlah produk      : ${hasil.jumlah}`);
    console.log(`Status member      : ${hasil.isMember ? "Member" : "Non-member"}`);
    console.log(`Subtotal           : ${rupiah(hasil.subtotal)}`);
    console.log(`Diskon             : ${rupiah(hasil.diskon)}`);
    console.log(`Total setelah diskon: ${rupiah(hasil.totalSetelahDiskon)}`);
    console.log(`Ongkos kirim       : ${rupiah(hasil.ongkosKirim)}`);
    console.log(`Total pembayaran   : ${rupiah(hasil.totalPembayaran)}`);
  }
}

module.exports = { hitungCheckout };
