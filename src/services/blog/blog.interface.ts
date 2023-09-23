export interface Details {
    id?: string;
    title: string;
    publish_date: number;
    description: string;
    slug: string;
    seo?: string;
    picture: string;
    author: { name: string; picture: string };
};

export interface BlogInterface {
  getPostList(): Promise<Details[]>;
  getPost(slug: string): Promise<Details>;
}
