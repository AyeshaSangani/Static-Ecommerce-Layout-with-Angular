import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';
import { Footer } from "../../footer/footer";
import { Subcriptionbanner } from "./subcriptionbanner/subcriptionbanner";
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Navbar, Banner, Cards, Subcriptionbanner , Testimonials , Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
