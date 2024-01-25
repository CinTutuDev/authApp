import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, map, of, tap } from 'rxjs';
import { AuthStatus, User } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  public _currentUser = signal<User | null>(null);
  public _authStatus = signal<AuthStatus>(AuthStatus.checking);
  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    return of(true);
  }
}
