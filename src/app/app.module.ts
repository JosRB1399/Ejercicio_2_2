import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* 🌈 Angular Material Modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

/* 🧩 Componentes propios */
import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { TarjetaCursosComponent } from './tarjeta-cursos/tarjeta-cursos.component';

/* ⚡ Configuración del módulo principal */
@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TarjetaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // 🧱 Angular Material imports
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatRippleModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
