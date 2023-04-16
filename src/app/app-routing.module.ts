import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FaleComponent } from './fale/fale.component';
import { ContatoComponent } from './contato/contato.component';
import { AcessorioComponent } from './acessorio/acessorio.component';

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'fale', component: FaleComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'acessorio', component: AcessorioComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
