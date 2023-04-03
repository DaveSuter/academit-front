import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Card } from 'src/app/modelos/card';
import { CardService } from 'src/app/servicios/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent {
  arrayCards:Array<Card>; //= traerCards();
  formGroup:FormGroup;


  constructor(private service:CardService) {
    
  }
  
  ngOnInit(): void {
    this.service
      .getAll()
      .subscribe(response => this.arrayCards = response,
        (err) => {
        console.log(err)
        })
  }

}



/*function traerCards():Array<Card> {
  let cardsMain:Array<Card> = [
    {nombre:'WESTWOD GAMES 2023', imgcard:'/assets/img/card1.jpeg'},
    {nombre:'VAN GOGH - MDP', imgcard:'/assets/img/card2.jpeg'},
    {nombre:'CAMPEONATO INTERNACIONAL...', imgcard:'/assets/img/card3.jpeg'},
    {nombre:'SUPER JUMP - PINAMAR', imgcard:'/assets/img/card4.jpeg'}
  ];
  return cardsMain
}*/


