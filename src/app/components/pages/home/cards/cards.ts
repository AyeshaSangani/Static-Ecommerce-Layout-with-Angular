import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

  cards = [

    {
      title: "Chopard Whatch",
      price: "2999",
      image: "https://images.unsplash.com/photo-1689372828184-fff989d6a553?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

      {
      title: "silver and blue analog watch ",
      price: "5899",
      image: "https://images.unsplash.com/photo-1612177343582-665b93b34403?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

      {
      title: "Rolex",
      price: "9500",
      image: "https://images.unsplash.com/photo-1719213073194-0d23de296a58?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

      {
      title: "Orient Star Automatic watch",
      price: "4999",
      image: "https://images.unsplash.com/photo-1642034195783-ec0001229b85?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

      {
      title: "Original watch CASIO",
      price: "8000",
      image: "http://images.unsplash.com/photo-1603850179998-3a57f293b2c5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

     {
      title: "Rolex Submariner 126613LB",
      price: "7500",
      image: "https://images.unsplash.com/photo-1670404160620-a3a86428560e?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ]

}

