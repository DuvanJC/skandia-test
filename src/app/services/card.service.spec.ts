import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas para HttpClient
import { CardsService } from './card.service';

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para manejar solicitudes HTTP en pruebas
      providers: [CardsService] // Proporciona el servicio que estás probando
    });
    service = TestBed.inject(CardsService); // Inyecta el servicio
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio se haya creado correctamente
  });
});
