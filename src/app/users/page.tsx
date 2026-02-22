import UsersComponent from "@/components/users/UsersComponent";

const UsersPage = () => {
    return (
        <>
            <UsersComponent/>
            <form action="/submit">
                <input type="text" name={'name'} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
export default UsersPage;
