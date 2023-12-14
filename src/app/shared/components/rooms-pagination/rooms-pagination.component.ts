import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { Page } from 'src/app/core/domain/page';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms-pagination',
  templateUrl: './rooms-pagination.component.html',
  styleUrls: ['./rooms-pagination.component.scss']
})
export class RoomsPaginationComponent implements OnInit {
  roomPaginationState$: Observable<{ componentState: string, componentData?: Page, error?: HttpErrorResponse }>;
  responseSubject = new BehaviorSubject<Page>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomPaginationState$ = this.roomService.rooms$().pipe(
      map((response: Page) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.pageable.pageNumber);
        console.log(response);
        return ({ componentState: "COMPONENT_LOADED", componentData: response })
      }),
      startWith({ componentState: "COMPONENT_LOADING" }),
      catchError((error: HttpErrorResponse) => of({ componentState: "COMPONENT_ERROR", error }))
    );
  }

  goToPage(pageNumber?: number): void {
    this.roomPaginationState$ = this.roomService.rooms$(pageNumber).pipe(
      map((response: Page) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return ({ componentState: "COMPONENT_LOADED", componentData: response })
      }),
      startWith({ componentState: "COMPONENT_LOADED", componentData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) => of({ componentState: "COMPONENT_ERROR", error }))
    );
  }

  goToNextOrPreviousPage(direction?: string): void {
    this.goToPage(direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }
}
