import { Link, useParams } from "react-router"
import { posts, type Post } from "../lib/posts";

export default function BlogPost() {
    // read the slug from the url and find the matching post from it to extract info
    const { slug } = useParams();

    // import the post if the slug is found - set union type for undefined in case it's not found to avoid TS error
    const post: Post | undefined = posts.find((post) => post.slug === slug);

    return (
        <>
            {/* import title of the article or Post not found if post/slug doesn't exist */}
            <h1>{post ? post.title : 'Post Not Found'}</h1>
            {/* if no post found, then give user a link to go back to /blog index page */}
            <p>{post ? post.content : <Link to="/blog">Find other posts to read</Link>}</p>
        </>
    )
}