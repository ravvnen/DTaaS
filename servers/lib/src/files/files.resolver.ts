import { Resolver, Query, Args } from "@nestjs/graphql";
import { IFilesService } from "../files/interfaces/files.service.interface";
import { FilesServiceFactory } from "../files/services/files-service.factory";
import { Blob, Tree } from "./types";

@Resolver()
export class FilesResolver {
  private readonly filesService: IFilesService;

  constructor(filesServiceFactory: FilesServiceFactory) {
    this.filesService = filesServiceFactory.create();
  }

  @Query(() => Tree)
  async listDirectory(@Args("path") path: string): Promise<Tree> {
    // Call the GitLab API and transform the data to your Tree type
    return this.filesService.listDirectory(path);
  }

  /* @Query(() => Blob)
  async readFile(@Args("path") path: string): Promise<Blob> {
    const result = await this.filesService.readFile(path);
    return this.toBlob(result);
  }

  private toBlob(node: any): Blob {
    return {
      flatPath: node.flatPath,
      id: node.id,
      name: node.name,
      path: node.path,
      webPath: node.webPath,
      webUrl: node.webUrl,
      rawBlob: node.rawBlob,
      rawTextBlob: node.rawTextBlob,
    };
  } */
}
