import { Component, OnInit } from '@angular/core';
import { SheetsService } from '../services/sheets.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  material: any = []
  search: string = ''
  constructor(private sheet: SheetsService) { }

  ionViewWillEnter() {
    this.loadData()
  }

  loadData() {
    this.material = (() => {
      let data: any = []
      let res_list: any = this.sheet.getStore('MaterialStorage') ?? []
      res_list.forEach((res_item: any) => {
        res_item.amount = 1
        data.push(res_item)
      });
      return data
    })()
  }

  addMaterial(para: number, item: any) {
    item.amount += para
    if (item.amount < 1) {
      let txt_value: string = JSON.stringify(item)
      let tmp_data: any = []
      this.material.forEach((ms_item: any) => {
        let txt_item: string = JSON.stringify(ms_item)
        if (txt_item != txt_value) {
          tmp_data.push(ms_item)
        }
      });
      this.material = tmp_data
      this.sheet.setStore('MaterialStorage', this.material)
    }
  }

  removeMaterial(item: any) {
    let txt_value: string = JSON.stringify(item)
    let tmp_data: any = []
    this.material.forEach((ms_item: any) => {
      let txt_item: string = JSON.stringify(ms_item)
      if (txt_item != txt_value) {
        tmp_data.push(ms_item)
      }
    });
    this.material = tmp_data
    this.sheet.setStore('MaterialStorage', this.material)
  }

  onChangeAmount(item: any) {
    if (item.amount < 1) {
      let txt_value: string = JSON.stringify(item)
      let tmp_data: any = []
      this.material.forEach((ms_item: any) => {
        let txt_item: string = JSON.stringify(ms_item)
        if (txt_item != txt_value) {
          tmp_data.push(ms_item)
        }
      });
      this.material = tmp_data
      this.sheet.setStore('MaterialStorage', this.material)
    }
  }

  clearMaterial(){
    this.sheet.setStore('MaterialStorage', [])
    this.loadData()
  }

  totalPrice(){
    let total: number = 0
    this.material.forEach((ms_item: any) => {
      total += ms_item.amount * ms_item.PRICE
    });
    return total
  }
}
