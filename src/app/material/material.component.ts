import { Component } from '@angular/core';
import { SheetsService } from '../services/sheets.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  material: any = []
  search: string = ''
  constructor(private sheet: SheetsService) {
    sheet.getMaterial().then((res: any) => {
      this.material = ((res_list: any) => {
        let data: any = []
        res_list.forEach((res_item: any) => {
          res_item.amount = 1
          data.push(res_item)
        });
        return data
      })(res)
    })
  }

  onAddMaterial(item: any) {
    let MaterialStorage = this.sheet.getStore('MaterialStorage') ?? []
    if (MaterialStorage) {
      let MS_array = ((ms_list: any) => {
        let txt_value: string = JSON.stringify(item)
        let count: number = 0
        ms_list.forEach((ms_item: any) => {
          let txt_item: string = JSON.stringify(ms_item)
          if (txt_item == txt_value) {
            count++
          }
        });

        if (count < 1) {
          MaterialStorage.push(item)
          this.sheet.setStore('MaterialStorage', MaterialStorage)
        }
      })(MaterialStorage)

    } else {
      this.sheet.setStore('MaterialStorage', [item])
    }

  }

}
