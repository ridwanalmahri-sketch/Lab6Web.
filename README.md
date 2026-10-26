# Lab6Web — Praktikum Pemrograman Web

## Dokumentasi Praktikum JavaScript

Repository ini berisi pengerjaan praktikum Pemrograman Web yang berfokus pada penggunaan JavaScript untuk membuat halaman web yang interaktif, mengelola elemen HTML, menangani event, dan melakukan validasi formulir.

## 1. Tujuan Praktikum

Tujuan praktikum ini adalah:

1. Memahami penggunaan JavaScript pada halaman web.
2. Memahami manipulasi DOM (*Document Object Model*).
3. Menggunakan event seperti `click`, `input`, `change`, dan `submit`.
4. Membuat validasi formulir menggunakan JavaScript.
5. Menambahkan fitur interaktif pada halaman web.
6. Menguji program melalui browser dan Developer Tools.

## 2. Teknologi yang Digunakan

- **HTML5** — membangun struktur halaman web.
- **CSS3** — mengatur tampilan halaman.
- **JavaScript** — menambahkan fungsi dan interaksi.
- **Visual Studio Code** — menulis dan mengelola kode program.
- **Web Browser** — menjalankan dan menguji program.
- **Git dan GitHub** — menyimpan serta mendokumentasikan proyek.

## 3. Struktur Folder

Struktur folder proyek dapat disesuaikan dengan file yang terdapat di repository.

```text
Lab6Web/
├── index.html
├── script.js
├── style.css
└── README.md
```

Keterangan:

- `index.html` berisi struktur halaman web.
- `script.js` berisi kode JavaScript untuk mengatur interaksi halaman.
- `style.css` berisi aturan desain dan tata letak halaman.
- `README.md` berisi dokumentasi praktikum.

Jika proyek menggunakan folder terpisah untuk setiap eksperimen, sesuaikan struktur tersebut dengan susunan file yang sebenarnya.

## 4. Eksperimen Mandiri

### Eksperimen 1 — Tombol Hapus pada To-do List

**Tujuan:** Menambahkan fitur untuk menghapus satu item dari daftar tugas.

**Penjelasan:**

Program To-do List memungkinkan pengguna menambahkan tugas ke dalam daftar. Setiap tugas dilengkapi tombol Hapus sehingga pengguna dapat menghapus tugas tertentu tanpa menghapus seluruh daftar.

Metode JavaScript yang digunakan:

- `document.createElement()` untuk membuat elemen HTML.
- `addEventListener()` untuk menangani klik tombol.
- `appendChild()` untuk menambahkan item ke daftar.
- `remove()` untuk menghapus item yang dipilih.

**Hasil yang diharapkan:** Tugas yang dipilih berhasil dihapus, sedangkan tugas lainnya tetap ditampilkan.

**Screenshot hasil:**

- Sebelum penghapusan: `[Masukkan screenshot daftar tugas]`
- Sesudah penghapusan: `[Masukkan screenshot setelah satu tugas dihapus]`

### Eksperimen 2 — Validasi Nama Minimal Tiga Karakter

**Tujuan:** Memastikan nama yang dimasukkan pengguna memiliki minimal tiga karakter.

**Penjelasan:**

Validasi dilakukan menggunakan properti `length`. Jika nama kurang dari tiga karakter, program menampilkan pesan kesalahan dan mencegah formulir diproses.

Contoh kode:

```javascript
if (namaValue.length < 3) {
    document.getElementById("errorNama").textContent =
        "Nama wajib diisi minimal 3 karakter.";
    valid = false;
}
```

**Hasil yang diharapkan:**

- Nama dengan satu atau dua karakter ditolak.
- Nama dengan minimal tiga karakter lolos dari validasi nama, selama input lainnya juga valid.

**Screenshot hasil:** `[Masukkan screenshot pesan validasi nama]`

### Eksperimen 3 — Menampilkan Sesi Workshop yang Dipilih

**Tujuan:** Menampilkan pilihan sesi workshop ketika pengguna mengganti pilihan dropdown.

**Penjelasan:**

Event `change` digunakan untuk mendeteksi perubahan pilihan pada dropdown. Nilai pilihan diambil menggunakan properti `value`, kemudian ditampilkan pada halaman.

Contoh kode:

```javascript
sesi.addEventListener("change", function () {
    const sesiDipilih = document.getElementById("sesiDipilih");

    if (sesi.value === "") {
        sesiDipilih.textContent = "";
    } else {
        sesiDipilih.textContent =
            "Sesi yang dipilih: " + sesi.value;
    }
});
```

**Hasil yang diharapkan:** Teks sesi yang dipilih berubah sesuai dengan pilihan pengguna.

**Screenshot hasil:** `[Masukkan screenshot dropdown dan sesi terpilih]`

### Eksperimen 4 — Menyembunyikan dan Menampilkan Paragraf

**Tujuan:** Membuat tombol yang dapat menyembunyikan dan menampilkan paragraf menggunakan class CSS.

**Penjelasan:**

JavaScript menggunakan `classList.toggle()` untuk menambah atau menghapus class CSS. Class `.sembunyi` menggunakan `display: none` untuk menyembunyikan paragraf.

Contoh CSS:

```css
.sembunyi {
    display: none;
}
```

Contoh JavaScript:

```javascript
tombolTampil.addEventListener("click", function () {
    paragrafInfo.classList.toggle("sembunyi");
});
```

**Hasil yang diharapkan:** Paragraf dapat disembunyikan dan ditampilkan kembali melalui tombol.

**Screenshot hasil:**

- Paragraf tampil: `[Masukkan screenshot]`
- Paragraf tersembunyi: `[Masukkan screenshot]`

### Eksperimen 5 — Penggunaan Script Tanpa `defer`

**Tujuan:** Mengamati perbedaan perilaku JavaScript ketika script diletakkan pada bagian `<head>` tanpa atribut `defer`.

**Penjelasan:**

Ketika script biasa dijalankan sebelum elemen HTML selesai diparsing, pemanggilan `document.getElementById()` dapat menghasilkan `null` karena elemen yang dicari belum tersedia. Akibatnya, pemasangan event seperti `addEventListener()` dapat menghasilkan error.

Contoh script tanpa `defer`:

```html
<script src="script.js"></script>
```

Contoh script dengan `defer`:

```html
<script src="script.js" defer></script>
```

Atribut `defer` membuat browser menjalankan script setelah dokumen HTML selesai diparsing.

**Hasil pengamatan:** Catat apakah error muncul di Console ketika script dijalankan tanpa `defer`, kemudian bandingkan dengan hasil setelah atribut tersebut dikembalikan.

**Screenshot hasil:** `[Masukkan screenshot Console browser]`

## 5. Cara Menjalankan Program

1. Buka folder `Lab6Web` menggunakan Visual Studio Code.
2. Pastikan file HTML, JavaScript, dan CSS berada di lokasi yang sesuai.
3. Buka file HTML yang ingin diuji menggunakan browser atau ekstensi Live Server.
4. Lakukan pengujian sesuai dengan masing-masing eksperimen.
5. Gunakan tombol `F12` untuk membuka Developer Tools.
6. Periksa tab Console untuk melihat pesan atau error JavaScript.
7. Ambil screenshot hasil pengujian untuk dokumentasi laporan.

## 6. Dokumentasi Screenshot

Tambahkan screenshot asli hasil pengerjaan ke dalam repository agar proses dan hasil praktikum dapat diperiksa.

Contoh struktur folder screenshot:

```text
Lab6Web/
├── screenshot/
│   ├── eksperimen1-sebelum.png
│   ├── eksperimen1-sesudah.png
│   ├── eksperimen2-validasi.png
│   ├── eksperimen3-sesi.png
│   ├── eksperimen4-tampil.png
│   ├── eksperimen4-sembunyi.png
│   └── eksperimen5-console.png
└── README.md
```

Jika screenshot sudah tersedia, tampilkan dengan format Markdown berikut:

```markdown
### Eksperimen 1 — To-do List

![Hasil To-do List](screenshot/eksperimen1-sebelum.png)

### Eksperimen 2 — Validasi Nama

![Hasil Validasi](screenshot/eksperimen2-validasi.png)
```

Nama file pada dokumentasi harus sama dengan nama file screenshot yang sebenarnya.

## 7. Kesimpulan

Melalui praktikum ini, mahasiswa mempelajari penggunaan JavaScript untuk membuat halaman web yang lebih interaktif. Materi yang dipraktikkan meliputi manipulasi DOM, penanganan event, validasi formulir, penggunaan class CSS, serta pengamatan waktu eksekusi script.

Praktikum ini juga membantu memahami pentingnya penempatan script yang tepat agar elemen HTML dapat diakses dengan benar dan program berjalan sesuai harapan.

## 8. Repository

Repository GitHub:

https://github.com/ridwanalmahri-sketch/Lab6Web..git

---

**Dokumentasi Praktikum Pemrograman Web**

Bahasa pemrograman: HTML, CSS, dan JavaScript.

Editor: Visual Studio Code.

Platform penyimpanan: GitHub.
