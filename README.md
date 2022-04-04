# Math API

Ini repositori latihan REST API situs Dicoding bertema Math.

### Tech stack

NodeJS, Hapi framework, Jest untuk testing

### Instalasi

Untuk menjalankan di komputer masing-masing:

1. Clone repositori ini
2. Pastikan sudah punya Nodejs di komputer. API ini pakai v16.14.0
3. Buka terminal, arahkan ke folder proyek ini lalu ketikkan 'npm install' di terminal
4. Kalau installnya sudah selesai jalankan server dengan mengetik 'npm run start'
5. Kalau mau lihat hasil test ketik 'npm run test'

### Daftar endpoint

Ada beberapa operasi Math dasar yang bisa dijalankan yaitu:
Catatan: ganti {a} dan {b} dengan bilangan yang diinginkan, misalnya
http://localhost:5000/subtract/5/7 akan menghasilkan value -2

1. Operasi penjumlahan a+b http://localhost:5000/add/{a}/{b} 
2. Operasi pengurangan a-b http://localhost:5000/subtract/{a}/{b}
3. Operasi perkalian a*b http://localhost:5000/multiply/{a}/{b}
4. Operasi pembagian a/b http://localhost:5000/divide/{a}/{b}
5. Keliling persegi panjang, panjang a lebar b http://localhost:5000/rectangle/perimeter/{a}/{b}
6. Luas persegi panjang, panjang a lebar b http://localhost:5000/rectangle/area/{a}/{b}
7. Keliling segitiga, sisi a, b, dan c http://localhost:5000/triangle/perimeter/{a}/{b}/{c}
8. Luas segitiga, alas a tinggi b http://localhost:5000/triangle/area/{a}/{b}
