import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteTambahPageRoutingModule } from './note_tambah-routing.module';

import { NoteTambahPage } from './note_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteTambahPageRoutingModule
  ],
  declarations: [NoteTambahPage]
})
export class NoteTambahPageModule {}




/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */