import React, {useState} from 'react';
import './App.css';
import { useQuery } from 'react-query';
import Post from './Post';

function App() {
	// let's go
    const [postId, setPostId] = useState(null)
    const {isLoading, data: posts} = useQuery(
      'posts', 
      () => fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    )

    const goBack = () => setPostId(null)

    if(isLoading)
        return <div>Data is fetching...</div>

    if(postId !== null)
        return <Post postId = {postId} goBack = {goBack}/>

	return (
		<div className="App">
			<h2>Blog posts</h2>
            <div className = 'left'>
            {posts.map(post => <a href="#" onClick = {() => setPostId(post.id)}><div> ( {post.id} ) {post.title}</div></a>)}
            </div>
		</div>
	)
}

export default App

