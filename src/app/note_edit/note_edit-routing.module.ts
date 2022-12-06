
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteEditPage } from './note_edit.page';

const routes: Routes = [
  {
    path: '',
    component: NoteEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */