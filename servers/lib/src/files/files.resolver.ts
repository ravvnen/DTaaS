import { Resolver, Query, Args } from "@nestjs/graphql";
import { FilesService } from "./files.service";

// The FilesResolver class uses the FilesService class to fetch the file names, which encapsulates the business logic for handling files.
@Resolver(() => String)
export class FilesResolver {
  // The constructor takes an instance of the FilesService as parameter, which is the service that handles all of the business logic
  constructor(private readonly filesService: FilesService) {}

  @Query(() => [String])
  async listDirectory(@Args("path") path: string): Promise<string[]> {
    return this.filesService.Wrapper("listDirectory", path);
  }

  @Query(() => [String])
  async readFile(@Args("path") path: string): Promise<string[]> {
    return this.filesService.Wrapper("readFile", path);
  }
}
