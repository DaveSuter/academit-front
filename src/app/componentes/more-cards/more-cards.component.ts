import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Card } from 'src/app/modelos/card';
import { CardService } from 'src/app/servicios/card.service';

@Component({
  selector: 'app-more-cards',
  templateUrl: './more-cards.component.html',
  styleUrls: ['./more-cards.component.css'],
  providers: [CardService]
})
export class MoreCardsComponent {
  arrayCards:Array<Card>; //= traerCards();
  formGroup:FormGroup;
  // cards:number;
  // filas:number = 0;
  // arrayFilas:Array<number>;

  constructor(private service:CardService) {}

  ngOnInit(): void {
    this.service
      .getAll()
      .subscribe(response => this.arrayCards = response,
        (err) => {
        console.log(err)
        })
    // this.cards=this.arrayCards.length;
    // for(let i=0; i<=this.cards; i++){
    //   if((i+1)%4==0){
    //     this.arrayFilas[this.filas]=i;
    //     this.filas=this.filas + 1;

    //   }
    // }

  }

}
