import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { users } from 'src/app/user';
import { User } from '../interface/user-interface';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserDetailsComponent', () => {

  let mockActivatedRoute = {
    params: of({
      id: '1',
    }),
  };

  class mockedUserService {
    getUser(id:string): User | undefined {
      return users.find((user)=>user.id===id);
    }
  }

  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
        {
          provide: UserService,
          useClass: mockedUserService,
        },
      ],
    })
    .compileComponents();
    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const debugHeading = fixture.debugElement.query(By.css('h2'));
    const heading: HTMLElement = debugHeading.nativeElement;
    expect(heading.textContent).toEqual(users[0].firstName +" "+ users[0].lastName);
  });

});
