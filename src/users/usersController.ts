import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  Deprecated,
} from "tsoa";
import { User } from "./user";

/**
 * User create paramssss!
 */
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  @Deprecated()
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<User> {
    return {
      id: userId,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    console.log(requestBody);
    return;
  }
}
