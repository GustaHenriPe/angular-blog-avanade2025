import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {noticias } from '../../../data/noticias';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input()
  photoCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string|null) {
    const result = noticias.filter((article) => article.id== id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
