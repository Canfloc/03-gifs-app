import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

    public gifsList: string[] = [];

    constructor( private gifsService: GifsService ){

    }

    get tagList(): string[]{

      return this.gifsService.tagsHistory;

    }

    buttonSearch( tag: string): void{
      debugger;
      this.gifsService.searchTag( tag )
    }

}
