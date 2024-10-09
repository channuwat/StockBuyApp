import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SheetsService } from './services/sheets.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private sheet: SheetsService) {
    sheet.getProduct().then(res => {
      console.log(res);

    })
  }
}
