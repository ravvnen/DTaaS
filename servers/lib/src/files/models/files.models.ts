import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class Query {
  @Field((type) => Project, { nullable: true })
  project: Project;
}

@ObjectType({ description: "Represents a GitLab project" })
export class Project {
  @Field((type) => String, { nullable: true })
  fullPath: string;

  @Field((type) => String, { nullable: true })
  webUrl: string;

  @Field((type) => String)
  path: string;

  @Field((type) => Repository, { nullable: true })
  repository: Repository;
}

@ObjectType({ description: "Represents a GitLab repository" })
export class Repository {
  @Field((type) => TreeConnection)
  paginatedTree: TreeConnection;

  @Field((type) => String, { nullable: true })
  diskPath: string;
}

@ObjectType({
  description: "Files and directories are represented as entries in a tree",
})
export class TreeConnection {
  @Field((type) => [Tree])
  nodes: Tree[];
}

@ObjectType({
  description: "Entries can be either a blob (file) or a tree (directory)",
})
export class Tree {
  @Field((type) => BlobConnection)
  blobs: BlobConnection;

  @Field((type) => TreeEntryConnection, { nullable: true })
  trees: TreeEntryConnection;
}

@ObjectType({ description: "Represents a connection to a list of blobs" })
export class BlobConnection {
  @Field((type) => [Blob])
  nodes: Blob[];
}

@ObjectType({ description: "Represents a file in a directory tree" })
export class Blob {
  @Field((type) => String)
  flatPath: string;

  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  path: string;

  @Field((type) => String, { nullable: true })
  webPath: string;

  @Field((type) => String, { nullable: true })
  webUrl: string;
}

@ObjectType({
  description: "Represents a connection to a list of tree entries",
})
export class TreeEntryConnection {
  @Field((type) => [TreeEntry])
  nodes: TreeEntry[];
}

@ObjectType({ description: "Represents a directory in a repository" })
export class TreeEntry {
  @Field((type) => String)
  flatPath: string;

  @Field((type) => String)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  path: string;

  @Field((type) => String, { nullable: true })
  webPath: string;

  @Field((type) => String, { nullable: true })
  webUrl: string;
}
