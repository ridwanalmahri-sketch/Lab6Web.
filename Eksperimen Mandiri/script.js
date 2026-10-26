
// Mengambil elemen HTML
const formTodo = document.getElementById("formTodo");
const inputTodo = document.getElementById("inputTodo");
const daftarTodo = document.getElementById("daftarTodo");
const pesan = document.getElementById("pesan");

// Menambahkan tugas ke daftar
formTodo.addEventListener("submit", function (event) {
    event.preventDefault();

    const teksTodo = inputTodo.value.trim();

    if (teksTodo === "") {
        pesan.textContent = "Tugas tidak boleh kosong.";
        return;
    }

    // Membuat item tugas
    const item = document.createElement("li");
    const teks = document.createElement("span");
    const tombolHapus = document.createElement("button");

    teks.textContent = teksTodo;
    tombolHapus.textContent = "Hapus";
    tombolHapus.type = "button";

    // Menghapus satu item yang dipilih
    tombolHapus.addEventListener("click", function () {
        item.remove();
        pesan.textContent = "Satu tugas berhasil dihapus.";
    });

    item.appendChild(teks);
    item.appendChild(tombolHapus);
    daftarTodo.appendChild(item);

    inputTodo.value = "";
    pesan.textContent = "Tugas berhasil ditambahkan.";
});
