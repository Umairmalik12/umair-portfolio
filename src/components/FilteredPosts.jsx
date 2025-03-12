'use client'
import { useState } from 'react'
import PostList from './PostList'

const FilteredPosts = ({ posts, categories = [], postType }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = posts?.filter(
    post => post.metadata.category?.title === filterCategory
  )

  return (
    <>
      <ul className="flex flex-wrap gap-y-2 sm:gap-y-0 gap-x-4 my-4">
        <li
          className={
            filterCategory === 'All'
              ? 'cursor-pointer font-bold filter--active transition'
              : 'cursor-pointer text-fore-subtle transition'
          }
          onClick={() => setFilterCategory('All')}
          key="All"
        >
          All
        </li>
        {Array.isArray(categories) &&
          categories.map((category, index) => (
            <li
              className={
                category?.title === filterCategory
                  ? 'cursor-pointer font-bold filter--active transition'
                  : 'cursor-pointer text-fore-subtle transition hover:text-accent'
              }
              onClick={() => setFilterCategory(category?.title)}
              key={category?.id || index}
            >
              {category?.title || 'Unnamed'}
            </li>
          ))}
      </ul>
      <PostList
        allPosts={filterCategory === 'All' ? posts : filteredPosts}
        postType={postType}
        home={false}
      />
    </>
  )
}

export default FilteredPosts
