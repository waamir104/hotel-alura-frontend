import { Component, Input } from '@angular/core';
import { Room } from 'src/app/core/domain/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  @Input() room: Room;

  constructor(){}

}
