import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { CardsService } from '../../services/card.service';
import { AmountPipe } from '../../pipes/amounmtPipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card:not(p)',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, AmountPipe, HttpClientModule],
})
export class CardComponent implements OnInit {
  payloadCards: any;
  payloadTres: any;
  groupedItems: any[][] = [];
  itemsPerSlide: number = 3;
  currentItem = 1;
  borderColor: string = "#A5D7E1";
  colors = ["#A4D071", "#A5D7E1", "#63AABC", "#FF9460"];
  @Output() isVisible = new EventEmitter<boolean>();

  constructor(private serviceCards: CardsService) { }

  ngOnInit(): void {
    this.borderColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.serviceCards
      .getCards('https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards')
      .pipe(take(1))
      .subscribe(
        (datos) => {
          this.payloadCards = datos;
          this.payloadTres = this.payloadCards?.listCard || [];
          this.updateGrouping();
        },
        (error) => {
          console.error('Error al cargar los datos:', error);
        }
      );
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateGrouping();
  }

  updateGrouping(): void {
    if (!this.payloadTres || !Array.isArray(this.payloadTres)) {
      return;
    }

    const width = window.innerWidth;

    if (width < 750) {
      this.itemsPerSlide = 1;
    } else if (width < 999) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }

    this.groupedItems = this.chunkArray([...this.payloadTres, { finalslide: true }], this.itemsPerSlide);
  }

  chunkArray(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  handleExplore() {
    this.isVisible.emit(true);
  }
}
