import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templates';
  constructor(private UserService: UserService) { }
  get nameInput() { return this.loginForm.get('nameInput') }



  loginForm: FormGroup = new FormGroup({
    nameInput: new FormControl("", [
      Validators.required,
      this.createValidator()
    ])
  });

  createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.UserService
        .usernameExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { doesntExist: true } : null
          )
        );
    };
  }

  validateUsernameAsync(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;

    //this works fine
    this.UserService.usernameExists(username).subscribe(response => console.log(response));

    // Using console.log for debugging
    console.log('Entering validateUsernameAsync');

    return this.UserService.usernameExists(username).pipe(
      tap((response: boolean) => {
        console.log('Response from service:', response);
      }),
      map((response: boolean) => {
        // Log to see if this block is reached
        console.log('Inside map:', response);
        return response ? null : { doesntExist: true };
      }),
      catchError((error) => {
        // Log to see if this block is reached
        console.log('Inside catchError:', error);
        return of({ error: true });
      })
    );

  }
}
