import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SearchBarComponent,
    DataTableComponent,
    FilterSelectorComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
