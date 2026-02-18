import Link from "next/link";
import {getAllUsers} from "@/app/services/api.service";

export const UsersComponent = async () => {

    const users = await getAllUsers();


    return (
        <div>
            {
                users.map((user) => <div key={user.id}>
                    <Link href={'/users/' + user.id.toString()}>{user.id} {user.name}</Link>

                </div>)
            }
        </div>
    );
};