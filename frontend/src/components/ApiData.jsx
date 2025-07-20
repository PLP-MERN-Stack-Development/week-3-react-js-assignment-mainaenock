import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import { fetchPosts, searchPosts } from '../api/postsApi';

/**
 * API Data component for displaying posts from JSONPlaceholder
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const postsPerPage = 10;

  // Fetch posts on component mount and page change
  useEffect(() => {
    if (!searchQuery) {
      loadPosts();
    }
  }, [currentPage, searchQuery]);

  // Load posts from API
  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await fetchPosts(currentPage, postsPerPage);
      setPosts(result.posts);
      setTotalCount(result.totalCount);
      setHasMore(result.hasMore);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Search posts
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setCurrentPage(1);
      return;
    }

    try {
      setIsSearching(true);
      setError(null);
      
      const searchResults = await searchPosts(searchQuery);
      setPosts(searchResults);
      setTotalCount(searchResults.length);
      setHasMore(false);
    } catch (err) {
      setError('Failed to search posts. Please try again later.');
      console.error('Error searching posts:', err);
    } finally {
      setIsSearching(false);
    }
  };

  // Clear search and reset to first page
  const clearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  // Navigate to next page
  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Navigate to previous page
  const prevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card title="API Data - Posts from JSONPlaceholder">
        {/* Search Section */}
        <div className="mb-6">
          <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search posts by title..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
            <Button 
              type="submit" 
              variant="primary"
              disabled={isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
            {searchQuery && (
              <Button 
                type="button" 
                variant="secondary"
                onClick={clearSearch}
              >
                Clear
              </Button>
            )}
          </form>
          
          {searchQuery && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {posts.length} results for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Loading posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-8">
            <div className="text-red-600 dark:text-red-400 mb-2">⚠️</div>
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <Button 
              variant="primary" 
              onClick={loadPosts}
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {post.body}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Post #{post.id}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      User {post.userId}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && !searchQuery && (
              <div className="text-center py-8">
                <div className="text-4xl mb-2">📄</div>
                <p className="text-gray-600 dark:text-gray-400">No posts found</p>
              </div>
            )}

            {/* Pagination */}
            {!searchQuery && totalCount > 0 && (
              <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {((currentPage - 1) * postsPerPage) + 1} to {Math.min(currentPage * postsPerPage, totalCount)} of {totalCount} posts
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                    Page {currentPage}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={nextPage}
                    disabled={!hasMore}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default ApiData; 