// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)



let x = 8 //membuat variabel x dengan jumlah 8
let y = 4 //membuat variabel y dengan jumlah 4
console.log(x, y) //menampilkan variabel x dan y
console.log('x + y =', x + y) //menjumlahkan variabel x dan y
console.log('x - y =', x - y) //mengurangi variabel dengan x dan y
console.log('x * y =', x * y) //mengkali variabel dengan x dan y
console.log('x / y =', x / y) //mengurangi variabel dengan x dan y
console.log('x % y =', x % y) //membagi variabel dengan x dan y
console.log('x++ =', x++) //menjumlahkan dengan variabel x itu sendiri maka akan menghasilkan 8
console.log('++x =', ++x) //penambahan nilai x dan kemudian kembali x
console.log('x-- =', x--) //kebalikan dari ++x
console.log('--x =', --x) //kebalikan dar x++



let a = 8 //membuat variabel a dengan jumlah 8
let b = 4 //membuat variabel b dengan jumlah 4
console.log(a, b)
console.log('a > b =', a > b) //karena 8 lebih besar dari 4 hasilnya true 
console.log('a < b =', a < b) //karena 8 lebih kecil dari 4 hasilnya false
console.log('a >= b =', a >= b) //karena 8 Lebih besar atau sama dengan 4
console.log('a <= b =', a <= b) //karena 8 Lebih kecil atau sama dengan 4
console.log('a == b =', a == b) //karena 8 Lebih tidak sama 4
console.log('a != b =', a != b) //karena  8 bukan sama dengan 4 
console.log('a === b =', a === b)//karena 8 Lebih tidak sama 4
console.log('a !== b =', a !== b)//karena  8 bukan sama dengan 4 



console.log('true && true =', true && true) //Akan menghasilkan true jika kedua kondisi true
console.log('true && false =', true && false)//jika expression sebelah kiri setelah dievaluasi menghasilkan nilai true, maka operator akan mengembalikan expression kedua
console.log('false && true =', false && true)//jika expression sebelah kiri setelah dievaluasi menghasilkan nilai false, maka operator akan mengembalikan expression pertama
console.log('false && false =', false && false)//karena keduanya false 
console.log('true || true =', true || true)//Akan menghasilkan true jika kedua kondisi true
console.log('true || false =', true || false) //jika expression sebelah kiri setelah dievaluasi menghasilkan nilai true, maka operator akan mengembalikan expression pertama
console.log('false || true =', false || true) //jika expression sebelah kiri setelah dievaluasi menghasilkan nilai false, maka operator akan mengembalikan expression kedua
console.log('false || false =', false || false) //karena keduanya false
console.log('!true =', !true)//jika expression yang diberikan setelah dievaluasi menghasilkan nilai true, maka operator akan mengembalikan false
console.log('!false =', !false) //ika expression yang diberikan setelah dievaluasi menghasilkan nilai false, maka operator akan mengembalikan true.



var nh = ["Domba","Lebah","Ayam","Panda","Kuda","Lumba-Lumba"] // memebuat array
console.log(nh[0]); // Menampikan Array 0
console.log(nh[1]); // Menampikan Array 1
console.log(nh[2]); // Menampikan Array 2
console.log(nh[3]); // Menampikan Array 3
console.log(nh[4]); // Menampikan Array 4
console.log(nh[5]); // Menampikan Array 5
nh[1]="Monyet"; //mengganti array 1 menjadi monyet
console.log(nh); // menampilkan array terbaru

nh.push("Buaya"); //menambah array baru "buaya"
console.log(nh); // menampilkan array terbaru

nh.pop("Monyet"); // melihat dan menghapus item dari Array
console.log(nh); // menampilkan array terbaru

console.log('Panjang Array = ', nh.length); // menghitung panjang Array

nh.unshift("Hiu"); // menambah Hiu di awal Array
console.log(nh); // menampilkan array terbaru

nh.shift(); // menampilkan dan menghapus item awal dari array
console.log(nh); // menampilkan array terbaru

console.log(nh.sort()); // mengurutkan Array
console.log(nh); // menampilkan array terbaru



let t_pesawat={
    nama:"Rizki Hermansyah", //membuat variabel nama yang beris
    kd_tiket:"11223",//membuat variabel kd_tujuan yang beris
    tujuan:"Jakarta",//membuat variabel tujuan yang beris
    jumlah_tiket:"3",//membuat variabel jumlah_tiket yang beris
    harga_tiket:"Rp.500.000",//membuat variabel harga_tiket yang beris

    info_tiket : function(){ //membuat fungsi info_tiket
        return this.kd_tiket + " " +this.nama + " " + this.tujuan; //menggabungkan kd_tiket, nama, dan tujuan
   }
};

console.log(t_pesawat.nama);//menampilkan nama menggunakan metode Dot Notation
console.log(t_pesawat.kd_tiket)//menampilkan kd_tiketmenggunakan metode Dot Notation
console.log(t_pesawat.tujuan);//menampilkan tujuan menggunakan metode Dot Notation
console.log(t_pesawat.jumlah_tiket);//menampilkan jumlah_tiket menggunakan Dot Notation
console.log(t_pesawat.harga_tiket);//menampilkan harga_tiket menggunakan Dot Notation
console.log(t_pesawat.info_tiket()); //menampilkan info_tiket menggunakan Dot Notation


console.log(t_pesawat["nama"]);//menampilkan nama menggunakan metode Bracket Notation
console.log(t_pesawat["kd_tiket"]);//menampilkan kd_tiketmenggunakan metode Bracket Notation
console.log(t_pesawat["tujuan"]);//menampilkan tujuan menggunakan metode Bracket Notation
console.log(t_pesawat["jumlah_tiket"]);//menampilkan jumlah_tiket menggunakan metode Bracket Notation
console.log(t_pesawat["harga_tiket"]);//menampilkan harga_tiket menggunakan metode Bracket Notation
console.log(t_pesawat["info_tiket"]()); //menampilkan info_tiket menggunakan metode Bracket Notation




console.log(0.1 + 0.2 == 0.3) //hasil dari 0.1 + 0.2 = 0.300000000000000004 jika di hitung, maka tidak sama dengan 0.3 karaena itu hasilnya false
console.log(1 + "1") //hasilnya 11 karena angka numerik di jumlahkan dengan string maka 1 + "1" = 11 
console.log(1 - "1") //hasilnya 0 karena - merupakan pengurangan untuk numerik maka jika di kurang hasilnya 0
console.log(1 < 2 < 3) // 1 lebih kecil dari 2 menghasilkan nilai true, true < dari 3 maka hasil akhirnya true
console.log(3 > 2 > 1) // 3 lebih besar dari 2 menghasilkan nilai fales, false lebih besar dari 1 maka hasil akhirnya false
console.log(null == 0) // null tidak sama dengan 0 karena null tidak memiliki nilai
console.log(null > 0) // karena null tidak memiliki nilai sedangkan 0 memilikli arti maka hasil akhir true
console.log(null >= 0) //karena 0 buka lebih besar sama dengan null, sedangkan null tidak memiliki arti 