import { Link } from "react-router";
import { posts } from "../lib/posts";

export default function BlogIndex() {

    return (
        <>
            <h1>Recent Blogs</h1>
            <ul>
                {/* map posts into a list item with a link */}
                {posts.map((post) => (
                    // set a key for the item
                    <li key={post.id}>
                        {/* the link is a relative path without a forward slash so react knows this link is relative to where user currently is in the /blog path for BlogIndex being the "home" of that path */}
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}