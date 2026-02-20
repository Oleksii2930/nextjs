import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params:{id:string};
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'Post page title' + id,
    }
}

const PostPage:FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <>
            Post Page content {id}
    </>
);
};
export default PostPage;
