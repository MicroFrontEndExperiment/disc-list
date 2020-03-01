import { TestBed } from '@angular/core/testing';
import { LongplayService } from './longplay.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LongplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LongplayService]
  }));

  it('should be created', () => {
    const service: LongplayService = TestBed.get(LongplayService);
    expect(service).toBeTruthy();
  });
});
