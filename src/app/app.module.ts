import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgHierarchyComponent } from './component/org-hierarchy/org-hierarchy.component';

import { NgOrganizationChartModule } from './../ng-organization-chart/ng-organization-chart.module';

@NgModule({
  declarations: [
    AppComponent,
    OrgHierarchyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOrganizationChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
