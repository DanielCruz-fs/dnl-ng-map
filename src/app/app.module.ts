import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeoMapComponent } from './components/geo-map/geo-map.component';

import { AgmCoreModule } from '@agm/core';
import { EditModalComponent } from './components/geo-map/edit-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    EditModalComponent
  ],
  declarations: [
    AppComponent,
    GeoMapComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'dnl456$%$#$%cvcv'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
