import { Component, OnInit } from '@angular/core';
import { AboutDto } from '../../_models/aboutDto';
import { AboutService } from '../../_services/about-service';
import { AuthService } from '../../_services/auth-service';
import { SweetalertService } from '../../_services/sweetalert-service';
declare const alertify: any;

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutAdmin implements OnInit {

  abouts: AboutDto[];
  newAbout: AboutDto = new AboutDto();
  editAbout: any = {};
  errors: any = [];

  ngOnInit(): void {
    this.getAbouts();
  }

  constructor(private aboutService: AboutService,
              private authService: AuthService,
              private swal: SweetalertService) {
  }

  getAbouts() {
    this.aboutService.getAll().subscribe({
      next: result => this.abouts = result.data,
      error: result => alertify.error("An Error Occured!")
    })
  }

  create() {
    this.errors = {};
    this.aboutService.create(this.newAbout).subscribe({
      next: result => this.abouts.push(result.data),
      error: result => {
        alertify.error("An Error Occured!");
        console.log(result.error.errors);
        this.errors = result.error.errors;
      },
      complete: () => {
        alertify.success("About Created!");
        setTimeout(() => {
          location.reload();
        }, 1000);
        this.errors = {};
      }
    })
  }

  onSelected(model) {
    this.errors = {};
    this.editAbout = model;
  }

  update() {
    this.aboutService.update(this.editAbout).subscribe({
      error: result => {
        alertify.error("An Error Occured!")
        this.errors = result.error.errors
      },
      complete: () => {
        alertify.success("About Updated!")
        setTimeout(() => {
          location.reload();
        }, 1000);
        this.errors = {};
      }
    })
  }

  async delete(id) {
    const isConfirmed = await this.swal.areYouSure();

    if (isConfirmed) {
      this.aboutService.delete(id).subscribe({
        error: result => alertify.error("An Error Occured!"),
        complete: () => {
          alertify.success("About Deleted!");
          this.getAbouts()
        }
      })
    }
    else {
      console.log("Delete Reverted!")
    }
  }
}

