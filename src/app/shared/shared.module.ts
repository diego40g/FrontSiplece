import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Nav Components
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

//Componentes
import { DetalleIndicadorComponent } from './detalle-indicador/detalle-indicador.component';
import { EstadoEvidenciaComponent } from './detalle-indicador/estado-evidencia/estado-evidencia.component';
import { ModalEvidenciasComponent } from './detalle-indicador/modal-evidencias/modal-evidencias.component';
import { SelectorIndicadoresComponent } from './selector-indicadores/selector-indicadores.component';
import { IndicadorTableComponent } from '../shared/selector-indicadores/indicador-table/indicador-table.component';
import { InformacionModalComponent } from './detalle-indicador/estado-evidencia/informacion-modal/informacion-modal.component';
import { EvidenciaFileContenedorComponent } from './detalle-indicador/estado-evidencia/evidencia-file-contenedor/evidencia-file-contenedor.component';


@NgModule({
  declarations: [ 
    SelectorIndicadoresComponent,
    DetalleIndicadorComponent,
    NavbarComponent,
    SidebarComponent,
    IndicadorTableComponent,
    EstadoEvidenciaComponent,
    ModalEvidenciasComponent,
    InformacionModalComponent,
    EvidenciaFileContenedorComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    SelectorIndicadoresComponent,
    DetalleIndicadorComponent,
    NavbarComponent,
    SidebarComponent,
    IndicadorTableComponent,
    EstadoEvidenciaComponent,
    ModalEvidenciasComponent,
  ]
})
export class SharedModule { }
