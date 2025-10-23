import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../_services/blog-service';
import { SweetalertService } from '../../_services/sweetalert-service';
import { Observable } from 'rxjs';
import { BlogDto } from '../../_models/blog';
import { CategoryService } from '../../_services/category-service';
import { CategoryDto } from '../../_models/category';
declare const alertify:any;

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit{

  constructor(private blogService:BlogService,
              private swal:SweetalertService,
              private categoryService:CategoryService
  ){}

  blogs:BlogDto[];
  categories:CategoryDto[];
  newBlog:BlogDto = new BlogDto();
  errors:any=[];

  ngOnInit(): void {
    this.getBlogs();
    this.getCategories();
  }

  getBlogs(){
      this.blogService.getAll().subscribe({
      next: result =>this.blogs = result.data,
      error: result=>alertify.error("An Error Occured!")
    })
  }

  create(){
    this.blogService.create(this.newBlog).subscribe({
      next: result => this.blogs.push(result.data),
      error: Result=> alertify.error("An Error Occured!"),
      complete: ()=> alertify.success("Blog Created!")
    })
  }

getCategories(){
this.categoryService.getCategories().subscribe({
  next: result=> this.categories=result.data
})
}

}
