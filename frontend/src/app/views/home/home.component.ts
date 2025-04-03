import { Component, inject, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ExampleService } from '../../services/example/example.service';
import { catchError, Observable, of } from 'rxjs';
import { ExampleData } from '../../interfaces/exampleData.interface';
import { AsyncPipe } from '@angular/common';
import { CustomToastrService } from '../../services/custom-toastr/custom-toastr.service';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  private readonly exampleService = inject(ExampleService);

  private readonly customToastrService = inject(CustomToastrService);

  protected exampleData$!: Observable<ExampleData | null>;

  public ngOnInit(): void {
    this.exampleData$ = this.exampleService.getExampleData(1).pipe(
      catchError(() => {
        this.customToastrService.error('Try again after a minute');
        return of(null);
      })
    );
  }
}
