import {getAllPosts} from "@/services/api.service";
import Link from "next/link";

const PostsComponent = async () => {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div>
            {
                posts.map((post) => <div key={post.id}>
                    <Link href={'/posts/' + post.id.toString()}>{post.id} {post.title} {post.content}</Link>
                </div>)
            }
        </div>
    );
};

export default PostsComponent;