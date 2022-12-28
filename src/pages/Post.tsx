import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import styles from "../styles/post.module.css"

export type IPost = {
    id: string;
    title: string;
    createdAt: Date;
    elements: IPostElement[];
};

export interface IPostElement {
    element: "h1" | "h2" | "p",
    content: string;
}

function Post() {
    const { postId } = useParams();

    const [post, setPost] = useState<IPost>({} as IPost);

    useEffect(() => {
        const postfinded = posts.find(p => p.id === postId);
        setPost(postfinded ?? {} as IPost);
    }, [post, postId])

    return (
        <div>
            <Link to="/">{"< Posts"}</Link>
            {
                post?.elements?.map((postElement, index) => {
                    const element = GetElement(postElement);

                    return (
                        <div key={index}>
                            {element}
                        </div>
                    )
                })
            }
        </div>
    )
}

function GetElement({ element, content }: IPostElement): JSX.Element {
    switch(element) {
        case "h1":
            return (
                <h1>{content}</h1>
            )
        case "h2":
            return (
                <h2>{content}</h2>
            )
        case "p":
            return (
                <p>{content}</p>
            )
    }

    return <></>
}

export default Post;