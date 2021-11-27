import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HDComponent } from './pages/hd/hd.component';
import { CoolerComponent } from './pages/cooler/cooler.component';
import { FonteComponent } from './pages/fonte/fonte.component';
import { GabineteComponent } from './pages/gabinete/gabinete.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { PlacaMaeComponent } from './pages/placa-mae/placa-mae.component';
import { PlacaVideoComponent } from './pages/placa-video/placa-video.component';
import { ProcessadorComponent } from './pages/processador/processador.component';
import { RamComponent } from './pages/ram/ram.component';
import { SsdComponent } from './pages/ssd/ssd.component';
const routes: Routes = [
  {path:'hd', component: HDComponent},
  {path: 'cooler', component:CoolerComponent },
  {path: 'fonte', component:FonteComponent },
  {path: 'gabinete', component: GabineteComponent},
  {path: 'monitor', component: MonitorComponent},
  {path: 'placa-mae', component: PlacaMaeComponent},
  {path: 'placa-video', component: PlacaVideoComponent},
  {path: 'processador', component: ProcessadorComponent},
  {path: 'ram', component: RamComponent},
  {path: 'ssd', component: SsdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
