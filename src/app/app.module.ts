import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { NexusComponent } from './nexus/nexus.component';
import { DocComponent } from './doc/doc.component';
import { ProtoDocComponent } from './proto-doc/proto-doc.component';
import { ProtoApiComponent } from './proto-api/proto-api.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PortalComponent,
    NexusComponent,
    DocComponent,
    ProtoDocComponent,
    ProtoApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
