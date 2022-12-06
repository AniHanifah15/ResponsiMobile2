import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteEditPageRoutingModule } from './note_edit-routing.module';

import { NoteEditPage } from './note_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteEditPageRoutingModule
  ],
  declarations: [NoteEditPage]
})
export class NoteEditPageModule {}




/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */