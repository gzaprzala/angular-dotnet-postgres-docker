import { TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CustomToastrService } from './custom-toastr.service';

describe('CustomToastrService', () => {
  let service: CustomToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [ToastrService],
    });

    service = TestBed.inject(CustomToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
