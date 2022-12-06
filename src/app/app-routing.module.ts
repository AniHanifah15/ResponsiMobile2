import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then(m => m.NotePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'note_tambah',
    loadChildren: () => import('./note_tambah/note_tambah.module').then(m => m.NoteTambahPageModule)
  },
  {
    path: 'note_edit/:id',
    loadChildren: () => import('./note_edit/note_edit.module').then(m => m.NoteEditPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }