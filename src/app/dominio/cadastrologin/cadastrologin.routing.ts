import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CadastrologinComponent } from './cadastrologin/cadastrologin.component';

const cadastrologinRoutes: Routes = [
    { path: '', component: CadastrologinComponent}
];


@NgModule({
    imports: [RouterModule.forChild(cadastrologinRoutes)],
    exports: [RouterModule]
  })

  export class CadastrologinRouting {}