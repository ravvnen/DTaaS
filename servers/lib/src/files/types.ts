import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Tree {
  @Field(() => [Blob])
  blobs: Blob[];

  @Field(() => [TreeEntry])
  trees: TreeEntry[];
}

@ObjectType()
export class TreeNode {
  @Field(() => Tree)
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
export class Query {
  @Field()
  listDirectory: Tree;

  @Field()
  readFile: Blob;
}

@ObjectType()
export class Mutation {
  @Field(() => Blob)
  createFile: Blob;
}

@ObjectType()
export class Subscription {
  @Field(() => Blob)
  fileCreated: Blob;
}

@ObjectType()
export class TreeEdge {
  @Field(() => TreeNode)
  node: TreeNode;

  @Field()
  cursor: string;
}

@ObjectType()
export class PageInfo {
  @Field()
  hasNextPage: boolean;

  @Field()
  endCursor: string;
}

@ObjectType()
export class TreeConnection {
  @Field(() => [TreeEdge])
  edges: TreeEdge[];

  @Field(() => [Tree])
  nodes: Tree[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class BlobEdge {
  @Field(() => Blob)
  node: Blob;

  @Field()
  cursor: string;
}

@ObjectType()
export class BlobConnection {
  @Field(() => [BlobEdge])
  edges: BlobEdge[];

  @Field(() => [Blob])
  nodes: Blob[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class TreeEntryEdge {
  @Field(() => TreeEntry)
  node: TreeEntry;

  @Field()
  cursor: string;
}

@ObjectType()
export class TreeEntryConnection {
  @Field(() => [TreeEntryEdge])
  edges: TreeEntryEdge[];

  @Field(() => [TreeEntry])
  nodes: TreeEntry[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class Repository {
  @Field(() => TreeConnection)
  tree: TreeConnection;

  @Field(() => BlobConnection)
  blobs: BlobConnection;

  @Field(() => TreeEntryConnection)
  trees: TreeEntryConnection;
}

@ObjectType()
export class Project {
  @Field(() => Repository)
  repository: Repository;
}

@ObjectType()
export class BlobNode {
  @Field(() => Blob)
  node: Blob;
}

@ObjectType()
export class BlobEdgeConnection {
  @Field(() => [BlobEdge])
  edges: BlobEdge[];

  @Field(() => [BlobEdge])
  nodes: BlobEdge[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class RepositoryBlobEdge {
  @Field(() => Blob)
  node: Blob;

  @Field()
  cursor: string;
}

@ObjectType()
export class RepositoryBlob {
  @Field(() => [RepositoryBlobEdge])
  edges: RepositoryBlobEdge[];

  @Field(() => [RepositoryBlob])
  nodes: RepositoryBlob[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class RawBlob {
  @Field()
  content: string;
}
