<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$judul=trim($data['judul']);
$deskripsi=trim($data['deskripsi']);
$tanggal=trim($data['tanggal']);

if($judul!='' and $deskripsi!='' and $tanggal!=''){
$query = mysqli_query($koneksi,"insert into note(judul,deskripsi,tanggal) values('$judul','$deskripsi','$tanggal')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */