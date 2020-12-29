import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector : 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  // @ts-ignore
  @Output() outputfeature = new EventEmitter<string>();
  OnSelect(Feature: string) {
    this.outputfeature.emit(Feature);

  }
}
