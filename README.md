<h1>Aplikasi Todo</h1>
<h2>Deskripsi</h2>
<p>Aplikasi ini adalah aplikasi untuk mencatat Todo List
Aplikasi ini dibuat menggunakan framework Django dengan front end yang dibangun dari HTML, Tailwind dan Javascript.
Aplikasi ini tidak memiliki server side yang begitu krusial. peran dari django hanya untuk routing saja. Tentunya masih banyak kekurangan yang ada pada aplikasi yang saya buat.
Kedepannya saya akan menerapkan clean code dan menggunakan bundler pada file javascriptnya. Media penyimpanan untuk list todo menggunakan web storage. Sehingga bisa
dikatakan aplikasi ini adalah aplikasi client side saja</p>
<h2>Cara Menjalankan Aplikasi</h2>
<ol>
  <li>Buat sebuah folder dan clone aplikasi ini</li>
  <li>Satu tingkat dengan folder project, buat sebuah environment Env dengan cara jalankan perintah <strong>py -m venv Env</strong></li>
  <li>Jalankan Envronment tersebut dengan cara masuk ke Env\Scripts\Activate.bat</li>
  <li>Pindah folder dengan masuk ke folder project dan menjalankan perintah <strong>pip install -r requirements.txt</strong> untuk mengistall dependensi</li>
  <li>Jalankan perintah <strong>py manage.py runserver</strong></li>
  <li>Aplikasi Siap digunakan</li>
</ol>
<div style="display:flex; flex-direction:column; align-items:center; width:100%">
  <h2>Cara Menggunakan Aplikasi</h2>
  <ol>
    <li>
       <p><strong>Anda hanya perlu menginputkan sesuatu (Hal yang ingin anda lakukan) kedalam form lalu mengklik tombol 'tambah'</strong></p>
      <img src="https://github.com/user-attachments/assets/8ac4b591-fd2c-4143-ac30-fa767a756eb3" style="width:600px"/>
    </li>
    <li>
       <p><strong>Lalu sesuatu yang anda ketik akan tampil di bagian Todo List</strong></p>
      <img src="https://github.com/user-attachments/assets/c0cf6a51-d653-439e-92cf-027634376f00" style="width:600px"/>
    </li>
    <li>
      <p><strong>Jika anda mengklik checklist, catatan anda akan berpindah bagian ke 'Done List'</strong></p>
      <img src = "https://github.com/user-attachments/assets/76c4067c-3e1c-4876-ad3f-8f14565af215" style="width:600px"/>
    </li>
    <li>
      <p>Di bagian Done List terdapat dua tombol, yaitu 'back' dan 'remove'. Jika tombol back ditekan ia akan mengembalikan item todo anda ke kembali ke todo list.
        Lalu jika tombol 'remove ditekan ia akan menghapus item todo anda'</p>
       <img src="https://github.com/user-attachments/assets/91d286c9-8e86-4bcb-9069-af039753ead5" style="width:400px"/>
    </li>
  </ol>
</div>
<h2>Credit</h2>
<p>Aplikasi yang saya buat ini sangat terbantu dengan learning path 'Belajar Membuat Front-End Web untuk Pemula' di platform Dicoding</p>
