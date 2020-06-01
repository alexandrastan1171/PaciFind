import { Component, OnInit } from '@angular/core';
import { PacientiService } from 'src/app/core/Services/pacienti.service';

@Component({
  selector: 'app-pacients-list',
  templateUrl: './pacients-list.component.html',
  styleUrls: ['./pacients-list.component.css']
})
export class PacientsListComponent implements OnInit {

  constructor(public pacientService:PacientiService) {
   }
   getPacientsClass()
   {
     return this.pacientService.getAll();
   }

  ngOnInit(): void {
  }

}
