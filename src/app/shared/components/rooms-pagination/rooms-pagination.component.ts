import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Page } from 'src/app/core/domain/page';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms-pagination',
  templateUrl: './rooms-pagination.component.html',
  styleUrls: ['./rooms-pagination.component.scss']
})
export class RoomsPaginationComponent implements OnInit {
  roomPaginationState$: Observable<{ componentState: string, componentData?: Page, error?: HttpErrorResponse }>;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomPaginationState$ = this.roomService.rooms$().pipe(
      map((response: Page) => {
        console.log(response);
        return ({ componentState: "COMPONENT_LOADED", componentData: response })
      }),
      startWith({ componentState: "COMPONENT_LOADING" }),
      catchError((error: HttpErrorResponse) => of({ componentState: "COMPONENT_ERROR", error }))
    );
  }
}
