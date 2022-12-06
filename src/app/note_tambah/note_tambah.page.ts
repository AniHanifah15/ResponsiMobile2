
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-note_tambah',
  templateUrl: './note_tambah.page.html',
  styleUrls: ['./note_tambah.page.scss'],
})
export class NoteTambahPage implements OnInit {
  id: any;
   
								judul: any;
								deskripsi: any;
								tanggal: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addNote() {
    let data = {
								judul: this.judul,
								deskripsi: this.deskripsi,
								tanggal: this.tanggal,
    }
    this._apiService.tambah(data, '/tambahNote.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.judul='';
								 this.deskripsi='';
								 this.tanggal='';
          this._apiService.notif('berhasil input Note');
          this.router.navigateByUrl('/note');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Note');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */