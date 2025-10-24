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
  editBlog:any = {};
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
    this.errors={};
    this.blogService.create(this.newBlog).subscribe({
      next: result => this.blogs.push(result.data),
      error: result=> {
        alertify.error("An Error Occured!");
        console.log(result.error.errors);
        this.errors=result.error.errors;

      },
      complete: ()=> {alertify.success("Blog Created!");
         setTimeout(()=>{
      location.reload();
    },1000);
    this.errors={};
      }
    })
  }

getCategories(){
this.categoryService.getCategories().subscribe({
  next: result=> this.categories=result.data
})
}

onSelected(blog){
  this.errors={};
this.editBlog=blog;
}

update(){
  this.blogService.update(this.editBlog).subscribe({
    error: result=>{alertify.error("An Error Occured!")
      this.errors = result.error.errors
    },
    complete: () => {alertify.success("Blog Updated!")
       setTimeout(()=>{
      location.reload();
    },1000);
    this.errors = {};
    }
  })
}


async delete(id){

  const isConfirmed = await this.swal.areYouSure();

  if(isConfirmed){

  this.blogService.delete(id).subscribe({
  error: result => alertify.error("An Error Occured!"),
  complete: ()=>{alertify.success("Blog Deleted!");
  this.getBlogs()
  }
})
  }
  else{
    console.log("Delete Reverted!")

  }


}


}
