import { Component } from '@angular/core';
import { SheetsService } from '../services/sheets.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public sheet: SheetsService) {
  }

  itemStorage() {
    return this.sheet.getStore('MaterialStorage')?.length ?? 0
  }

}
