import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server/server.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directives/directive.component';
import { BasicHighLightDirective } from './directives/basic-highlights/basic-highlight.directive';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectiveComponent,
    BasicHighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
