import { CategoryDto } from "./category";
import { UserDto } from "./userDto";

export class BlogDto{
  id;
  title;
  coverImage;
  blogImage;
  description;
  categoryId;
  category:CategoryDto;
  userId;
  createdAt;
  updatedAt;
  user: UserDto


}
