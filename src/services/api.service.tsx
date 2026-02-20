import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

export  const getAllUsers = async ():Promise<IUser[]> => {
    const users = await fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

    return users;
}

export  const getAllPosts = async ():Promise<IPost[]> => {
    const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

    return posts;
}



export  const getAllComments = async ():Promise<IComment[]> => {
    const comments = await fetch('http://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())

    return comments;
}

