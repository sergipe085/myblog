import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import styles from "../styles/home.module.css";

function Home() {
  return (
        <div className={styles.homeContainer}>
            <h1>Posts</h1>
            {
                posts.map((post, index) => {
                    return (
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "2px 0"
                        }}>
                            <p style={{
                                margin: "0",
                                marginRight: "5px"
                            }}>{post.id} - </p>
                            <Link key={post.id} to={`/post/${post.id}`}> {post.title}</Link>
                            <p style={{
                                margin: "0",
                                marginLeft: "5px"
                            }}>[{post.createdAt.toLocaleDateString()}]</p>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default Home;