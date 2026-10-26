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

<img width="1672" height="846" alt="Screenshot 2026-10-26 160352" src="https://github.com/user-attachments/assets/da64c769-24ce-495b-bad3-c772df9415cc" />
<img width="1781" height="946" alt="Screenshot 2026-10-26 160423" src="https://github.com/user-attachments/assets/9a68aa42-4011-4153-803e-d76b2f9a7bf9" />
<img width="1665" height="411" alt="Screenshot 2026-10-26 160452" src="https://github.com/user-attachments/assets/b709d486-8255-453c-9d46-5c9a1c85f5e0" />


**Screenshot hasil program:**

<img width="1919" height="445" alt="Screenshot 2026-10-26 161247" src="https://github.com/user-attachments/assets/f7237c89-9f64-4be2-9d58-c42695a14c4c" />
<img width="1919" height="446" alt="Screenshot 2026-10-26 161309" src="https://github.com/user-attachments/assets/fe19fec6-b1f5-480a-bc9e-b069cbc0d388" />
<img width="1919" height="572" alt="Screenshot 2026-10-26 161327" src="https://github.com/user-attachments/assets/97d55dc6-7a5b-4dbf-8d03-01cb67c34b70" />


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

- <img width="1919" height="1027" alt="Screenshot 2026-10-26 163427" src="https://github.com/user-attachments/assets/18c60bfd-406c-4a38-b0b9-5f69236c8ee2" />

- <img width="1919" height="1034" alt="Screenshot 2026-10-26 163519" src="https://github.com/user-attachments/assets/9ee3c81e-03c7-4a0e-94ef-5ca46f22ea85" />

- <img width="1919" height="1045" alt="Screenshot 2026-10-26 164150" src="https://github.com/user-attachments/assets/d578f952-da94-41f0-ac4b-b05d53c11005" />

- <img width="1919" height="1038" alt="Screenshot 2026-10-26 164348" src="https://github.com/user-attachments/assets/9ab40a5c-c2db-4519-8995-108fef3e8522" />

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
