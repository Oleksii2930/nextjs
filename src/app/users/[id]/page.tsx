import {FC} from "react";

type Props = {
    params:{id:string};
}

const UserPage:FC<Props> = async ({params}) => {
const {id} = await params;

    return (
        <>
            User Page content {id}
        </>
    );
};
export default UserPage;
