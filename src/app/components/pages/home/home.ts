import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

@Component({
  selector: 'app-home',
  imports: [Navbar,Banner,Cards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
