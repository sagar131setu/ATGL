import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectProgressComponent } from './components/project-progress/project-progress.component';
import { PermissionsComponent } from './components/permissions/permissions.component';

const routes: Routes = [
  { path: 'project-progress', component: ProjectProgressComponent },
  { path: 'permissions', component: PermissionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
