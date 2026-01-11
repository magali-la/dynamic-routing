// interface for posts
export interface Post {
    id: number;
    slug: string;
    title: string;
    content: string;
}

// list of posts
export const posts: Post[] = [
    {
        id: 1,
        slug: 'understanding-routing',
        title: 'Understanding Dynamic Routing in React',
        content: 'sample blog content'
    }, 
    {
        id: 2,
        slug: 'context-authentication',
        title: 'Why Context Is Useful for Authentication State',
        content: 'sample blog content'
    }
]