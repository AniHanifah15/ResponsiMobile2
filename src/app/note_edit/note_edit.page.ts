
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-note_edit',
  templateUrl: './note_edit.page.html',
  styleUrls: ['./note_edit.page.scss'],
})
export class NoteEditPage implements OnInit {
   id: any;
								judul: any;
								deskripsi: any;
								tanggal: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilNote(this.id);
    })
  }

  ngOnInit() {
  }

  ambilNote(id: any) {
    this._apiService.lihat(id, '/lihatNote.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let note = hasil; 
								 this.judul= note.judul;
								 this.deskripsi= note.deskripsi;
								 this.tanggal= note.tanggal;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editNote() {
    let data = {
      id: this.id,
								 judul:this.judul,
								 deskripsi:this.deskripsi,
								 tanggal:this.tanggal,
    }
    this._apiService.edit(data, '/editNote.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.judul='';
								 this.deskripsi='';
								 this.tanggal='';
          this._apiService.notif('berhasil edit Note');
          this.router.navigateByUrl('/note');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Note');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */