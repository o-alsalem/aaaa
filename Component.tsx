import React from 'react'
import type { BlogPostBlock as BlogPostBlock } from '@/payload-types'
import RichText from '@/components/RichText'

export const BlogPostComponent = async ({ postsPerPage }: BlogPostBlock) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog?limit=${postsPerPage}`,
    {
      next: { revalidate: 3600 },
    },
  )
  const data = await response.json()
  const posts = data.docs

  return (
    <div className="blog-posts-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2 className="text-blue-600">{post.title}</h2>
          {/* {showFeaturedImagesInList && post.featuredImage && (
            <img src={post.featuredImage.url} alt={post.title} />
          )} */}
          <div className="content">
            <RichText content={post.content} />
          </div>
          <div className="meta">
            <span>By: {post.author?.name}</span>
            <span>Published: {new Date(post.publishedDate).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogPostComponent
