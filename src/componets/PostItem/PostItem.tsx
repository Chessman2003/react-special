import React from "react";
import './PostItem.css'

export type PostProps = {
    id: string,
    tittle: string,
    body: string
}

export const PostItem = ({
    id,
    tittle,
    body
}: PostProps) => {

    return (
        <div className="postItem">
            <div className="postContent">
                <strong>{id}. {tittle}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="postButton">
                <button className="deleteButton">Удалить</button>
            </div>
        </div>
    )
}