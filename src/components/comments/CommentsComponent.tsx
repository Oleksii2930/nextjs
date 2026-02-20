import {getAllComments} from "@/services/api.service";
import Link from "next/link";

const CommentsComponent = async () => {
    const comments = await getAllComments();
    console.log(comments);
    return (
        <div>
            {
                comments.map((comment) => <div key={comment.id}>
                    <Link href={'/comment/' + comment.id.toString()}>{comment.id} {comment.name} </Link>
                </div>)
            }
        </div>
    );
};

export default CommentsComponent;