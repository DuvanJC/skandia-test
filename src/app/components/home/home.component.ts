import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CardComponent, FooterComponent, NavbarComponent, SidebarComponent, BannerComponent, CommonModule]
})
export class HomeComponent {
  isVisible: boolean = false

  isVisibleChange(isVisible: boolean) {
    this.isVisible = isVisible;
    console.log('Evento recibido del hijo:', isVisible);
    console.log('Valor actual de isVisible en el padre:', this.isVisible);
  }
  handleClick() {
    alert("hola mundo")
  }

}
