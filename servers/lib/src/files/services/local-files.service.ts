import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { join } from "path";
import { IFilesService } from "../interfaces/files.service.interface";
import { ConfigService } from "@nestjs/config";
import { Tree, TreeEntry } from "../types";

@Injectable()
export class LocalFilesService implements IFilesService {
  constructor(private configService: ConfigService) {}

  /* async listDirectory(path: string): Promise<Tree> {
    const dataPath = this.configService.get("LOCAL_PATH");
    const fullpath = join(dataPath, path);
    const filenames = fs.readdirSync(fullpath);

    let blobs: Blob[] = [];
    let trees: TreeEntry[] = [];

    for (let filename of filenames) {
      const fileStat = fs.statSync(join(fullpath, filename));
      if (fileStat.isDirectory()) {
        trees.push({
          id: null,
          name: filename,
          path: join(fullpath, filename),
          flatPath: join(fullpath, filename),
          webPath: null,
          webUrl: null,
        });
      } else {
        blobs.push({
          id: null,
          name: filename,
          path: join(fullpath, filename),
          flatPath: join(fullpath, filename),
          webPath: null,
          webUrl: null,
          rawBlob: null,
          rawTextBlob: null,
        });
      }
    }

    return { blobs, trees };
  }
 */
  /* async readFile(path: string): Promise<Tree> {
    const dataPath = this.configService.get("LOCAL_PATH");
    const fullpath = join(dataPath, path);

    try {
      const content = fs.readFileSync(fullpath, "utf8");
      return [content];
    } catch (error) {
      return ["Invalid query"];
    }
  } */
}
