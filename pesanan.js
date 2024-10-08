function akhiriPesanan() {
    var makananTerpilih = [];
    
    // Mendapatkan checkbox dari form
    var checkbox = document.querySelectorAll('input[name="makanan"]:checked');
    
    // Mengambil nilai makanan yang dipilih
    checkbox.forEach((item) => {
        makananTerpilih.push(item.value);
    });

    // Menampilkan hasil pesanan di console
    if (makananTerpilih.length > 0) {
        console.log("Pesanan Anda: " + makananTerpilih.join(", "));
    } else {
        console.log("Anda belum memilih makanan.");
    }
}
