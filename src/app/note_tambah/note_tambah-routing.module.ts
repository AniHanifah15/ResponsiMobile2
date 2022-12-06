
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteTambahPage } from './note_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: NoteTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 19:43:46 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */