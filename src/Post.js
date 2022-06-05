import React from 'react'
import { useQuery } from 'react-query'

const Post = ({postId, goBack}) => {

    const {isLoading, data: post} = useQuery(['post', postId], () => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json())
    )

    if(isLoading)
        return <div>Data is fetching...</div>

    return (
        <div>
            <button onClick = {goBack}>GO BACK</button>
            <h1>({post.id}) {post.title}</h1>
            <div>
                {post.body}
            </div>
            
        </div>
    )

}

export default Post
