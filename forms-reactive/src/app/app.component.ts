import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(this.genders[0]),
      passwordForm: new FormGroup({
        password: new FormControl(null, Validators.required),
      }),
      hobbies: new FormArray([]),
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm);
  }

  checkFormControlIsValid(controlName: string): boolean {
    return (
      !this.signUpForm.get(controlName).valid &&
      this.signUpForm.get(controlName).touched
    );
  }

  onAddHobby(): void {
    const hobbyController = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get("hobbies")).push(hobbyController);
  }

  get getHobbyControls(): AbstractControl[] {
    return (<FormArray>this.signUpForm.get("hobbies")).controls;
  }
}
