import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ContatoComponent } from './contatos/contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatosService } from './contatos/contatos.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContatosComponent,
    ContatoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/contatos',
        pathMatch: 'full'
      },
      {
        path: 'contatos',
        component: ContatosComponent
      },
      {
        path: 'sobre',
        component: SobreComponent
      }
    ])
  ],
  providers: [ContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
