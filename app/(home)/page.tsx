import { getAuthSession } from '@/lib/auth'
import { Post } from '@/src/feature/post/Post'
import { getLatestPosts } from '@/src/query/post.query'
import React from 'react'

export default async function Home() {
    const session = await getAuthSession()

    const posts = await getLatestPosts(session?.user.id);
    return (
        <div className='divide-y divide-muted'>
            {posts.map(p => (
                <Post post={p} key={p.id} />
            ))}
        </div>
    )
}
