const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch posts from JSONPlaceholder API
 * @param {number} page - Page number for pagination
 * @param {number} limit - Number of posts per page
 * @returns {Promise<Array>} - Array of posts
 */
export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    
    return {
      posts,
      totalCount: parseInt(totalCount, 10),
      hasMore: page * limit < parseInt(totalCount, 10),
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Search posts by title
 * @param {string} query - Search query
 * @returns {Promise<Array>} - Array of filtered posts
 */
export const searchPosts = async (query) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?title_like=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};

/**
 * Fetch a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} - Post object
 */
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}; 