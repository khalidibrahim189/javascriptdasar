//variable statis
const jumlahMatKul = 3;

//variable dinamis 
let matkul_1;
let matkul_2;
let matkul_3;
let total;
let rataRata;



//asigment
//parseInt() = untuk merubah data string menjadi number
matkul_1 = parseInt(prompt('Masukan nilai matakkuliah 1: '));
matkul_2 = parseInt(prompt('Masukan nilai matakkuliah 2: '));
matkul_3 = parseInt(prompt('Masukan nilai matakkuliah 3: '));



//proses
total = matkul_1 + matkul_2 + matkul_3;
rataRata = total / jumlahMatKul;

//output
document.write('nilai ujian');
document.write("<br>");
document.write('-------------------------------------');
document.write("<br>");
document.write('Nilai Mata Kuliah 1 : ' + matkul_1);
document.write("<br>");
document.write('Nilai Mata Kuliah 2 : ' + matkul_2);
document.write("<br>");
document.write('Nilai Mata Kuliah 3 : ' + matkul_3);

document.write("<br>");
document.write('-------------------------------------');
document.write("<br>");
document.write('total nilai mata kuliah : ' + total);

document.write("<br>");
document.write('Rata - rata : ' + rataRata);