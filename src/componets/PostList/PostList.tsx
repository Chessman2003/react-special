import React from "react";
import { PostProps, PostItem } from "../PostItem/PostItem";

type Props = {
    posts: Array<PostProps>,
    tittle: string
}
export const PostList = ({
    posts,
    tittle
}: Props) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {tittle}
            </h1>
            {
                posts.map(post =>
                    <PostItem id={post.id} tittle={post.tittle} body={post.body} key={post.id} />
                )
            }
        </div>
    )
}