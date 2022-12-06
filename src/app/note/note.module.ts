import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotePageRoutingModule
  ],
  declarations: [NotePage]
})
export class NotePageModule {}




/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */