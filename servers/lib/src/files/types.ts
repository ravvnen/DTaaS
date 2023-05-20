import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BlobConnection {
  @Field()
  edges: [BlobEdge];

  @Field()
  nodes: [Blob];
}
@ObjectType()
export class Tree {
  @Field((type) => BlobConnection)
  blobs: BlobConnection;

  @Field((type) => TreeEntryConnection, { nullable: true })
  trees: TreeEntryConnection;
}

@ObjectType()
export class TreeNode {
  @Field()
  node: Tree;
}

@ObjectType()
export class Blob {
  @Field()
  flatPath: string;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  path: string;

  @Field()
  webPath: string;

  @Field()
  webUrl: string;

  @Field()
  rawBlob: string;

  @Field()
  rawTextBlob: string;
}

@ObjectType()
export class TreeEntry {
  @Field()
  flatPath: string;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  path: string;

  @Field()
  webPath: string;

  @Field()
  webUrl: string;
}

@ObjectType()
export class TreeEdge {
  @Field()
  node: TreeNode;

  @Field()
  cursor: string;
}

@ObjectType()
export class TreeConnection {
  @Field()
  edges: [TreeEdge];

  @Field()
  nodes: [Tree];
}

@ObjectType()
export class BlobEdge {
  @Field()
  node: Blob;
}

@ObjectType()
export class TreeEntryEdge {
  @Field()
  node: TreeEntry;
}

@ObjectType()
export class TreeEntryConnection {
  @Field()
  edges: [TreeEntryEdge];

  @Field()
  nodes: [TreeEntry];
}
@ObjectType()
export class RepositoryBlobEdge {
  @Field()
  node: Blob;

  @Field()
  cursor: string;
}

@ObjectType()
export class RepositoryBlob {
  @Field()
  edges: [RepositoryBlobEdge];

  @Field()
  nodes: [RepositoryBlob];
}
export class RepositoryBlobConnection {
  @Field()
  edges: [RepositoryBlobEdge];

  @Field()
  nodes: [RepositoryBlob];
}
@ObjectType()
export class Repository {
  @Field()
  tree: Tree;

  @Field()
  blobs: RepositoryBlobConnection;
}

@ObjectType()
export class BlobNode {
  @Field()
  node: Blob;
}

@ObjectType()
export class BlobEdgeConnection {
  @Field()
  edges: [BlobEdge];

  @Field()
  nodes: [BlobEdge];
}

@ObjectType()
export class Project {
  @Field()
  repository: Repository;

  @Field()
  fullPath: string;

  @Field()
  path: string;

  @Field()
  webUrl: string;
}

@ObjectType()
export class RawBlob {
  @Field()
  content: string;
}

@ObjectType()
export class Query {
  @Field()
  listDirectory: Tree;

  @Field()
  readFile: Blob;
}
