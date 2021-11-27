import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HDComponent } from './pages/hd/hd.component';
import { SsdComponent } from './pages/ssd/ssd.component';
import { ProcessadorComponent } from './pages/processador/processador.component';
import { FonteComponent } from './pages/fonte/fonte.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { RamComponent } from './pages/ram/ram.component';
import { GabineteComponent } from './pages/gabinete/gabinete.component';
import { PlacaMaeComponent } from './pages/placa-mae/placa-mae.component';
import { PlacaVideoComponent } from './pages/placa-video/placa-video.component';
import { CoolerComponent } from './pages/cooler/cooler.component';

@NgModule({
  declarations: [AppComponent, HDComponent, SsdComponent, ProcessadorComponent, FonteComponent, MonitorComponent, RamComponent, GabineteComponent, PlacaMaeComponent, PlacaVideoComponent, CoolerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}