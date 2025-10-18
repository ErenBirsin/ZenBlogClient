import { Component } from '@angular/core';
import { CategoryService } from '../../_services/category-service';
import { CategoryDto } from '../../_models/category';
declare const alertify : any;

@Component({
  selector: 'admin-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {

constructor(private categoryService : CategoryService){
this.getCategories();
}

categories : CategoryDto[] ;
newCategory: CategoryDto = new CategoryDto();
errors: any=[];

getCategories(){
  this.categoryService.getCategories().subscribe({
    next: result=> this.categories = result.data,
    error: result=> console.log(result)
  })
}


createCategory(){
this.categoryService.create(this.newCategory).subscribe({
  next: result=>this.categories.push(result.data),
  error: result => {
    alertify.error("An Error Occured!");

    if(result.status===400){
      console.log(result.error)
      this.errors= result.error.errors
    }
  },
  complete : () => {
    alertify.success("Category Created!")

    setTimeout(()=>{
      location.reload();
    },1000)



  }
})
}


delete(id){
this.categoryService.delete(id).subscribe({
  error: result => {console.error(result.error);
  alertify.error("An Error Occured!")
  },
  complete:()=>{alertify.success("Category Deleted!")
    this.getCategories();
  }
})
}

}
