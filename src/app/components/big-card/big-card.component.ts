import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  photoCover: string ="";
  @Input()
  cardTitle: string = 'SILKSONG ANUNCIADO MDS';
  @Input()
  cardDescription: string =
    'Hollow Knight: Silksong es un videojuego de plataformas y acción desarrollado por Team Cherry. Es la secuela del aclamado Hollow Knight, lanzado en 2017. En Silksong, los jugadores asumen el papel de Hornet, un personaje jugable que fue un antagonista en el juego original. El juego presenta un nuevo mundo, nuevos enemigos y una jugabilidad centrada en la agilidad y la exploración. Aunque se anunció por primera vez en 2019, la fecha de lanzamiento aún no se ha confirmado. Los fanáticos esperan ansiosos más información sobre este esperado título.';
}
