import { CarrinhoRouting } from './carrinho.routing';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        CarrinhoComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        CarrinhoRouting
    ],
    providers: [
        // Serviços
    ]
})

export class CarrinhoModule { }