import { Component, inject, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ExampleService } from '../../services/example/example.service';
import { Observable } from 'rxjs';
import { ExampleData } from '../../interfaces/exampleData.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  private readonly exampleService = inject(ExampleService);

  protected exampleData$!: Observable<ExampleData>;

  public ngOnInit(): void {
    this.exampleData$ = this.exampleService.getExampleData(1);
  }
}
