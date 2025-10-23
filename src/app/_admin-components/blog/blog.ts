import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../_services/blog-service';
import { SweetalertService } from '../../_services/sweetalert-service';
import { Observable } from 'rxjs';
import { BlogDto } from '../../_models/blog';
declare const alertify:any;

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit{

  constructor(private blogService:BlogService,
              private swal: SweetalertService
  ){}

  blogs:BlogDto[];

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
      this.blogService.getAll().subscribe({
      next: result =>this.blogs = result.data,
      error: result=>alertify.error("An Error Occured!")
    })
  }
}
