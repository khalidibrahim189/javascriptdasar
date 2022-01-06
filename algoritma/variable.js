//variable statis
const jumlahMatKul = 3;

//variable dinamis 
let matkul_1;
let matkul_2;
let matkul_3;
let total;
let rataRata;



//asigment
matkul_1 = 70;
matkul_2 = 80;
matkul_3 = 90;



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