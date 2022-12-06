
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotePage } from './note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */