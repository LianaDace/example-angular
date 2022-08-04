import {Component} from '@angular/core';
import {CharactersService} from "../../shared/services/characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  charactersResponse$ = this.charactersService.getCharacters();
  constructor(private charactersService: CharactersService) {
  }

}
