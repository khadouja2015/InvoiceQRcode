import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { ReconnaissanceTextPage } from './reconnaissance-text.page';

describe('ReconnaissanceTextPage', () => {
  let component: ReconnaissanceTextPage;
  let fixture: ComponentFixture<ReconnaissanceTextPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconnaissanceTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReconnaissanceTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
