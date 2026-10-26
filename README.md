# LAB6WEB — PRAKTIKUM PEMROGRAMAN WEB

Dokumentasi pengerjaan praktikum Pemrograman Web yang terdiri dari Latihan, Mini Project, dan Eksperimen Mandiri menggunakan HTML, CSS, dan JavaScript.

- Nama: M.Ridwan Al Mahri
- NIM: 312510157
- Program Studi: Teknik Informatika
- Mata Kuliah: Pemrograman Web
- Repository: `Lab6Web`


## Daftar Isi

1. [Persiapan Praktikum](#1-persiapan-praktikum)
2. [Latihan](#2-latihan)
3. [Mini Project Form Pendaftaran Workshop](#3-mini-project-form-pendaftaran-workshop)
4. [Eksperimen Mandiri](#4-eksperimen-mandiri)
   - [Eksperimen 1: Tombol Hapus To-do List](#41-eksperimen-1-tombol-hapus-to-do-list)
   - [Eksperimen 2: Validasi Nama](#42-eksperimen-2-validasi-nama)
   - [Eksperimen 3: Event Change Dropdown](#43-eksperimen-3-event-change-dropdown)
   - [Eksperimen 4: Sembunyikan dan Tampilkan Paragraf](#44-eksperimen-4-sembunyikan-dan-tampilkan-paragraf)
   - [Eksperimen 5: Script Tanpa Defer](#45-eksperimen-5-script-tanpa-defer)
5. [Dokumentasi Screenshot](#5-dokumentasi-screenshot)
6. [Kesimpulan](#6-kesimpulan)

---

## 1. Persiapan Praktikum

### 1.1 Peralatan yang Digunakan

- Visual Studio Code
- Web browser, seperti Google Chrome
- HTML5
- CSS3
- JavaScript
- Ekstensi Live Server (opsional)
- Git dan GitHub

### 1.2 Membuat Folder Proyek

Langkah-langkah:

1. Buka Visual Studio Code.
2. Pilih menu **File → Open Folder**.
3. Buat atau buka folder `Lab6Web`.
4. Buat folder `latihan`, `mini_project`, `eksperimen_mandiri`, dan `screenshot`.
5. Buat file sesuai struktur berikut.

```text
Lab6Web/
├── latihan/
│   └── file latihan sesuai modul
├── mini_project/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── eksperimen_mandiri/
│   ├── eksperimen1_todo/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── workshop/
│       ├── index.html
│       ├── script.js
│       └── style.css
├── screenshot/
└── README.md
```

**Screenshot 1 — Struktur Folder**

Simpan screenshot struktur folder VS Code dengan nama:

<img width="242" height="417" alt="Screenshot 2026-10-26 154934" src="https://github.com/user-attachments/assets/5fe25047-2ccd-41ff-ade7-097783d64ce9" />

---

## 2. Latihan

### 2.1 Langkah Pengerjaan

1. Buka folder `latihan` di VS Code.
2. Baca instruksi latihan pada modul praktikum.
3. Buat file dengan nama sesuai instruksi modul.
4. Masukkan kode HTML, CSS, atau JavaScript sesuai latihan.
5. Simpan file menggunakan `Ctrl + S`.
6. Jalankan file HTML di browser.
7. Periksa hasil program.
8. Buka Developer Tools menggunakan `F12` jika perlu memeriksa Console.
9. Ambil screenshot kode dan hasil program.

### 2.2 Dokumentasi Latihan

**Nama latihan:** Sesuaikan dengan judul pada modul.

**Tujuan:** Memahami materi dan menerapkan kode program sesuai petunjuk praktikum.

**Kode program:**

Masukkan kode asli dari modul pada bagian ini atau dokumentasikan di file latihan masing-masing. Kode latihan tidak ditambahkan di sini karena kode dan judul latihan lengkap belum dicantumkan.

**Hasil yang diharapkan:** Program berjalan sesuai instruksi latihan pada modul.

**Screenshot kode:**

`screenshot/02-latihan-kode.png`

**Screenshot hasil program:**

`screenshot/03-latihan-hasil.png`

---

## 3. Mini Project Form Pendaftaran Workshop

### 3.1 Tujuan

Membuat formulir pendaftaran workshop menggunakan HTML, CSS, dan JavaScript dengan fitur:

- Input nama peserta.
- Input alamat email.
- Pilihan sesi workshop.
- Penghitung karakter nama.
- Validasi formulir.
- Ringkasan pendaftaran.
- Tombol reset.

### 3.2 Langkah Pengerjaan

1. Buka folder `mini_project`.
2. Buat file `index.html`, `script.js`, dan `style.css`.
3. Buat struktur formulir pada HTML.
4. Hubungkan file CSS dan JavaScript.
5. Tambahkan logika validasi pada JavaScript.
6. Atur desain menggunakan CSS.
7. Simpan semua file.
8. Jalankan `index.html` di browser.
9. Uji semua fitur formulir.
10. Ambil screenshot kode dan hasil program.

### 3.3 Kode HTML — `index.html`

Berikut kerangka HTML untuk menghubungkan file CSS dan JavaScript. Sesuaikan isi formulir dengan HTML mini project yang digunakan.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Pendaftaran Workshop</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <main class="container">
        <section class="form-card">
            <header class="header">
                <p class="label">PENDAFTARAN</p>
                <h1>Workshop</h1>
                <p>Silakan isi formulir untuk mendaftar workshop.</p>
            </header>

            <form id="formWorkshop" novalidate>
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input
                        type="text"
                        id="nama"
                        maxlength="50"
                        placeholder="Masukkan nama lengkap"
                    >
                    <small id="hitungKarakter">0/50 karakter</small>
                    <small class="error" id="errorNama"></small>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="nama@email.com"
                    >
                    <small class="error" id="errorEmail"></small>
                </div>

                <div class="form-group">
                    <label for="sesi">Pilih Sesi Workshop</label>
                    <select id="sesi" name="sesi">
                        <option value="">-- Pilih sesi --</option>
                        <option value="HTML & CSS Dasar">HTML & CSS Dasar</option>
                        <option value="JavaScript Pemula">JavaScript Pemula</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                    <small class="error" id="errorSesi"></small>
                </div>

                <button type="submit" class="btn-submit">
                    Daftar Workshop
                </button>

                <button type="reset" class="btn-reset">
                    Reset Form
                </button>

                <p id="pesan"></p>

                <section id="ringkasan" class="summary" hidden>
                    <h2>Ringkasan Pendaftaran</h2>
                    <p>Nama: <span id="ringkasanNama"></span></p>
                    <p>Email: <span id="ringkasanEmail"></span></p>
                    <p>Sesi: <span id="ringkasanSesi"></span></p>
                </section>
            </form>
        </section>

        <footer>
            Praktikum Pemrograman Web
        </footer>
    </main>
</body>
</html>
```

**Catatan:** Jika HTML mini project milikmu sudah lengkap, pertahankan kode aslinya. Kerangka di atas digunakan sebagai referensi struktur elemen yang dibutuhkan oleh `script.js`.

### 3.4 Kode JavaScript — `script.js`

JavaScript digunakan untuk menghitung karakter, memvalidasi data, menampilkan ringkasan, dan mereset tampilan.

```javascript
// Mengambil elemen HTML
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const pesan = document.getElementById("pesan");
const hitungKarakter = document.getElementById("hitungKarakter");
const ringkasan = document.getElementById("ringkasan");

// Menghitung karakter nama secara langsung
nama.addEventListener("input", function () {
    hitungKarakter.textContent = nama.value.length + "/50 karakter";
    document.getElementById("errorNama").textContent = "";
    pesan.textContent = "";
});

// Menghapus pesan error saat input diperbaiki
email.addEventListener("input", function () {
    document.getElementById("errorEmail").textContent = "";
    pesan.textContent = "";
});

sesi.addEventListener("change", function () {
    document.getElementById("errorSesi").textContent = "";
    pesan.textContent = "";
});

// Validasi form saat dikirim
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mengosongkan error sebelumnya
    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSesi").textContent = "";
    pesan.textContent = "";
    pesan.className = "";

    let valid = true;

    if (namaValue.length < 3) {
        document.getElementById("errorNama").textContent =
            "Nama wajib diisi minimal 3 karakter.";
        valid = false;
    }

    if (!polaEmail.test(emailValue)) {
        document.getElementById("errorEmail").textContent =
            "Masukkan alamat email yang valid.";
        valid = false;
    }

    if (sesiValue === "") {
        document.getElementById("errorSesi").textContent =
            "Silakan pilih sesi workshop.";
        valid = false;
    }

    if (!valid) {
        pesan.textContent = "Periksa kembali data yang kamu masukkan.";
        pesan.className = "failed";
        ringkasan.hidden = true;
        return;
    }

    // Menampilkan ringkasan pendaftaran
    document.getElementById("ringkasanNama").textContent = namaValue;
    document.getElementById("ringkasanEmail").textContent = emailValue;
    document.getElementById("ringkasanSesi").textContent = sesiValue;

    ringkasan.hidden = false;
    pesan.textContent = "Pendaftaran berhasil!";
    pesan.className = "success";

    ringkasan.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// Reset form dan tampilan
form.addEventListener("reset", function () {
    pesan.textContent = "";
    pesan.className = "";

    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSesi").textContent = "";

    ringkasan.hidden = true;
    hitungKarakter.textContent = "0/50 karakter";
});
```

### 3.5 Kode CSS — `style.css`

Gunakan CSS mini project yang sudah dibuat untuk mengatur tampilan formulir, input, tombol, pesan validasi, dan ringkasan.

Pastikan CSS memuat class atau selector berikut:

- `.container`
- `.form-card`
- `.form-group`
- `.error`
- `.btn-submit`
- `.btn-reset`
- `.summary`
- `.success`
- `.failed`

Gunakan kode CSS asli mini project yang telah disiapkan agar desain tetap konsisten.

### 3.6 Pengujian Mini Project

| No. | Pengujian | Hasil yang diharapkan |
|---|---|---|
| 1 | Mengetik nama | Jumlah karakter berubah |
| 2 | Nama kurang dari 3 karakter | Muncul pesan error |
| 3 | Email tidak valid | Muncul pesan error email |
| 4 | Sesi tidak dipilih | Muncul pesan error sesi |
| 5 | Semua data valid | Pendaftaran berhasil |
| 6 | Klik Reset Form | Form dan pesan dibersihkan |

**Screenshot mini project:**

- `screenshot/04-mini-project-form.png` — tampilan formulir.
- `screenshot/05-mini-project-validasi.png` — pesan validasi.
- `screenshot/06-mini-project-berhasil.png` — ringkasan pendaftaran.
- `screenshot/07-mini-project-reset.png` — tampilan setelah reset.

---

## 4. Eksperimen Mandiri

## 4.1 Eksperimen 1: Tombol Hapus To-do List

### Tujuan

Menambahkan tombol untuk menghapus satu tugas dari daftar To-do List tanpa menghapus tugas lainnya.

### Langkah pengerjaan

1. Buka folder `eksperimen_mandiri/eksperimen1_todo`.
2. Buat file `index.html`, `script.js`, dan `style.css`.
3. Buat input tugas dan tombol Tambah.
4. Gunakan JavaScript untuk membuat item daftar.
5. Tambahkan tombol Hapus pada setiap item.
6. Gunakan `item.remove()` untuk menghapus tugas yang dipilih.
7. Jalankan halaman di browser.
8. Tambahkan minimal dua tugas.
9. Hapus satu tugas dan pastikan tugas lain tetap ada.

### Kode `index.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-do List</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <main class="container">
        <h1>To-do List</h1>
        <p>Catat tugas yang ingin kamu selesaikan.</p>

        <form id="formTodo">
            <input type="text" id="inputTodo" placeholder="Masukkan tugas">
            <button type="submit">Tambah</button>
        </form>

        <ul id="daftarTodo"></ul>
        <p id="pesan"></p>
    </main>
</body>
</html>
```

### Kode `script.js`

```javascript
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
```

### Kode `style.css`

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 20px;
    font-family: Arial, sans-serif;
    background: #f1f5f9;
    color: #1e293b;
}

.container {
    max-width: 600px;
    margin: 40px auto;
    padding: 24px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

form {
    display: flex;
    gap: 8px;
}

input {
    flex: 1;
    min-width: 0;
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
}

button {
    padding: 10px 14px;
    border: none;
    border-radius: 6px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}

ul {
    padding-left: 24px;
}

li {
    margin: 12px 0;
    overflow-wrap: anywhere;
}

li button {
    margin-left: 12px;
    background: #dc2626;
}

#pesan {
    color: #2563eb;
}
```

### Hasil pengujian

Tugas yang dipilih berhasil dihapus, sedangkan tugas lain tetap ada.

**Screenshot:**

- `screenshot/08-todo-sebelum-hapus.png`
- `screenshot/09-todo-sesudah-hapus.png`

---

## 4.2 Eksperimen 2: Validasi Nama

### Tujuan

Memastikan nama peserta minimal terdiri dari tiga karakter.

### Langkah pengerjaan

1. Buka `eksperimen_mandiri/workshop/script.js`.
2. Cari bagian validasi nama.
3. Pastikan kondisi `namaValue.length < 3` tersedia.
4. Simpan file.
5. Jalankan halaman workshop.
6. Masukkan nama dua karakter.
7. Isi email yang valid dan pilih sesi workshop.
8. Klik tombol Daftar Workshop.
9. Periksa pesan validasi.
10. Ganti nama menjadi minimal tiga karakter dan uji kembali.

### Kode JavaScript

```javascript
if (namaValue.length < 3) {
    document.getElementById("errorNama").textContent =
        "Nama wajib diisi minimal 3 karakter.";
    valid = false;
}
```

### Hasil pengujian

Nama yang kurang dari tiga karakter ditolak. Nama dengan minimal tiga karakter lolos dari validasi nama jika input lainnya juga valid.

**Screenshot:**

- `screenshot/10-validasi-nama-error.png`
- `screenshot/11-validasi-nama-berhasil.png`

---

## 4.3 Eksperimen 3: Event Change Dropdown

### Tujuan

Menampilkan sesi workshop yang dipilih oleh pengguna.

### Langkah pengerjaan

1. Buka `workshop/index.html`.
2. Cari bagian dropdown sesi.
3. Tambahkan elemen untuk menampilkan pilihan sesi.
4. Buka `workshop/script.js`.
5. Cari event `change` pada elemen `sesi`.
6. Tambahkan kode untuk menampilkan `sesi.value`.
7. Simpan semua file.
8. Jalankan halaman.
9. Pilih sesi yang berbeda dan amati perubahan teks.

### Tambahan HTML

Letakkan setelah elemen pesan error sesi:

```html
<small id="sesiDipilih"></small>
```

### Kode JavaScript

Ganti event `change` yang lama dengan:

```javascript
sesi.addEventListener("change", function () {
    document.getElementById("errorSesi").textContent = "";
    pesan.textContent = "";

    const sesiDipilih = document.getElementById("sesiDipilih");

    if (sesi.value === "") {
        sesiDipilih.textContent = "";
    } else {
        sesiDipilih.textContent =
            "Sesi yang dipilih: " + sesi.value;
    }
});
```

### Hasil pengujian

Teks pada halaman berubah sesuai dengan pilihan dropdown. Ketika pengguna kembali ke opsi awal, teks pilihan dikosongkan.

**Screenshot:**

`screenshot/12-event-change-sesi.png`

---

## 4.4 Eksperimen 4: Sembunyikan dan Tampilkan Paragraf

### Tujuan

Membuat tombol untuk menyembunyikan dan menampilkan paragraf menggunakan class CSS.

### Langkah pengerjaan

1. Buka `workshop/index.html`.
2. Tambahkan paragraf informasi dan tombol.
3. Buka `workshop/style.css`.
4. Tambahkan class `.sembunyi`.
5. Buka `workshop/script.js`.
6. Tambahkan event klik untuk mengubah class.
7. Simpan seluruh file.
8. Jalankan halaman di browser.
9. Klik tombol untuk menyembunyikan paragraf.
10. Klik kembali untuk menampilkan paragraf.

### Tambahan HTML

Letakkan di dalam formulir workshop, pada posisi yang sesuai:

```html
<p id="paragrafInfo">
    Silakan isi formulir untuk mendaftar workshop.
</p>

<button type="button" id="tombolTampil" class="btn-reset">
    Sembunyikan Paragraf
</button>
```

### Tambahan CSS

```css
.sembunyi {
    display: none;
}
```

### Tambahan JavaScript

Letakkan di bagian bawah `script.js`:

```javascript
// Menyembunyikan dan menampilkan paragraf
const paragrafInfo = document.getElementById("paragrafInfo");
const tombolTampil = document.getElementById("tombolTampil");

tombolTampil.addEventListener("click", function () {
    paragrafInfo.classList.toggle("sembunyi");

    if (paragrafInfo.classList.contains("sembunyi")) {
        tombolTampil.textContent = "Tampilkan Paragraf";
    } else {
        tombolTampil.textContent = "Sembunyikan Paragraf";
    }
});
```

### Hasil pengujian

Paragraf dapat disembunyikan dan ditampilkan kembali dengan menekan tombol. Elemen tidak dihapus dari HTML, tetapi tampilannya diubah menggunakan CSS.

**Screenshot:**

- `screenshot/13-paragraf-tampil.png`
- `screenshot/14-paragraf-tersembunyi.png`

---

## 4.5 Eksperimen 5: Script Tanpa Defer

### Tujuan

Mengamati pengaruh penempatan script pada bagian `<head>` tanpa atribut `defer`.

### Langkah pengerjaan

1. Buka `workshop/index.html`.
2. Cari pemanggilan file JavaScript pada bagian `<head>`.
3. Catat kondisi awal dengan `defer`.
4. Hapus atribut `defer` untuk pengujian.
5. Simpan file.
6. Muat ulang halaman di browser.
7. Tekan `F12` dan buka tab Console.
8. Catat apakah terjadi error atau halaman tetap berfungsi.
9. Bandingkan hasilnya dengan kondisi awal.
10. Kembalikan atribut `defer` setelah pengujian.

### Kode sebelum eksperimen

```html
<script src="script.js" defer></script>
```

### Kode saat eksperimen

```html
<script src="script.js"></script>
```

### Penjelasan

Script biasa di bagian `<head>` dapat dijalankan sebelum browser selesai mem-parsing elemen HTML pada `<body>`. Jika JavaScript mencoba mengambil elemen yang belum tersedia, `document.getElementById()` dapat menghasilkan `null`.

Jika kode kemudian menjalankan `addEventListener()` pada nilai `null`, browser dapat menampilkan error di Console.

Atribut `defer` membuat script dijalankan setelah dokumen HTML selesai diparsing, sehingga elemen HTML sudah tersedia saat JavaScript mengaksesnya.

### Hasil pengujian

Catat hasil yang benar-benar muncul di browser. Jangan menyatakan bahwa error pasti terjadi karena hasilnya bergantung pada posisi script dan struktur dokumen.

**Screenshot:**

- `screenshot/15-script-tanpa-defer.png`
- `screenshot/16-script-dengan-defer.png`

**Penting:** Setelah eksperimen selesai, kembalikan kode ke kondisi awal:

```html
<script src="script.js" defer></script>
```

---

## 5. Dokumentasi Screenshot

Simpan seluruh screenshot di folder `screenshot`.

| No. | Nama Screenshot | Keterangan |
|---|---|---|
| 1 | `01-struktur-folder.png` | Struktur proyek di VS Code |
| 2 | `02-latihan-kode.png` | Kode latihan |
| 3 | `03-latihan-hasil.png` | Hasil latihan |
| 4 | `04-mini-project-form.png` | Form workshop |
| 5 | `05-mini-project-validasi.png` | Validasi form |
| 6 | `06-mini-project-berhasil.png` | Ringkasan pendaftaran |
| 7 | `07-mini-project-reset.png` | Form setelah reset |
| 8 | `08-todo-sebelum-hapus.png` | To-do List sebelum hapus |
| 9 | `09-todo-sesudah-hapus.png` | To-do List setelah hapus |
| 10 | `10-validasi-nama-error.png` | Validasi nama gagal |
| 11 | `11-validasi-nama-berhasil.png` | Validasi nama berhasil |
| 12 | `12-event-change-sesi.png` | Sesi workshop terpilih |
| 13 | `13-paragraf-tampil.png` | Paragraf ditampilkan |
| 14 | `14-paragraf-tersembunyi.png` | Paragraf disembunyikan |
| 15 | `15-script-tanpa-defer.png` | Hasil pengujian tanpa `defer` |
| 16 | `16-script-dengan-defer.png` | Hasil pengujian dengan `defer` |

### Cara Memasukkan Screenshot ke README

Gunakan sintaks Markdown berikut:

```markdown
### Hasil Eksperimen 1

![To-do List sebelum penghapusan](screenshot/08-todo-sebelum-hapus.png)

![To-do List setelah penghapusan](screenshot/09-todo-sesudah-hapus.png)
```

Pastikan nama file dan alamat gambar sama dengan nama file screenshot yang disimpan.

Screenshot harus diambil dari hasil program yang benar-benar dijalankan, bukan gambar contoh.

---

## 6. Kesimpulan

Melalui praktikum Lab6Web, mahasiswa mempelajari dasar penggunaan HTML, CSS, dan JavaScript dalam membangun halaman web interaktif.

Latihan digunakan untuk memahami materi dasar. Mini Project menerapkan materi dalam bentuk Form Pendaftaran Workshop dengan validasi dan ringkasan pendaftaran. Eksperimen Mandiri digunakan untuk memperdalam pemahaman tentang penghapusan elemen DOM, validasi input, event `change`, manipulasi class CSS, dan perilaku script dengan atau tanpa `defer`.

Setiap program diuji melalui browser dan didokumentasikan menggunakan screenshot agar proses pengerjaan serta hasilnya dapat diperiksa kembali.

## 7. Repository GitHub

**Nama repository:** Lab6Web

**URL repository:** https://github.com/ridwanalmahri-sketch/Lab6Web..git

### Perintah Git

Jalankan perintah berikut pada terminal VS Code dari folder repository jika Git sudah terhubung dengan remote yang benar:

```bash
git status
git add .
git commit -m "Menyelesaikan praktikum Lab6Web"
git push
```

Pastikan seluruh file kode, README, dan screenshot sudah tersimpan dan masuk ke commit sebelum mengumpulkan tugas.

---

**Dokumentasi Praktikum Pemrograman Web**

Materi: Latihan, Mini Project, dan Eksperimen Mandiri.

Bahasa pemrograman: HTML, CSS, JavaScript.

Editor: Visual Studio Code.

Platform repository: GitHub.
