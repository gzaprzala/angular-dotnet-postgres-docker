import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExampleData } from '../../interfaces/exampleData.interface';
import { Observable } from 'rxjs';
import { API } from '../../enums/api.enum';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private readonly httpClient = inject(HttpClient);

  public getExampleData(id: number): Observable<ExampleData> {
    return this.httpClient.get<ExampleData>(
      `${API.CoreApi}/Example/GetExampleData/${id}`
    );
  }
}
