import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DynamicBindingComponent } from './dynamic-binding/dynamic-binding.component';
import { ConditionalifComponent } from './conditionalif/conditionalif.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DaySwitchComponent } from './day-switch/day-switch.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DynamicBindingComponent,
    ConditionalifComponent,
    StudentListComponent,
    DaySwitchComponent,
    DateDisplayComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoListComponent,
    StudentDetailsComponent,
    BrowserAnimationsModule
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
