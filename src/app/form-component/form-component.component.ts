import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  name: string = '';
  gender: string = '';
  country: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  profilePic: string | ArrayBuffer | null = null;
  head: string = '';
  showWelcomeMessage: boolean = false;
  profilePicUrl: string = '';

  onProfilePicChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePic = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.profilePic = null;
    }
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.head = "Welcome " + this.name;
      this.showWelcomeMessage = true;
      if (typeof this.profilePic === 'string') {
        this.profilePicUrl = this.profilePic;
      }
    }
  }

  resetForm() {
    this.name = '';
    this.gender = '';
    this.country = '';
    this.email = '';
    this.phone = '';
    this.message = '';
    this.head = '';
    this.showWelcomeMessage = false;
    this.profilePicUrl = '';
  }
}
