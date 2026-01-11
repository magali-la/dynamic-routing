import { Link } from "react-router";

export default function BlogIndex() {

    return (
        <>
            <h1>blog index page</h1>
            <Link to="/blog/post1">post 1 sample</Link>
            <Link to="/blog/post2">post 2 sample</Link>
        </>
    )
}