import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../../../services/api/posts';
import GalleryGrid from './GalleryGrid';
import { Button } from 'rizzui';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const loadPosts = async (isLoadMore = false) => {
    try {
      setLoading(true);
      const newPosts = await fetchPosts(page);
      setPosts(prev => isLoadMore ? [...prev, ...newPosts] : newPosts);
      setError(null);
      if (isLoadMore) {
        setPage(prev => prev + 1);
      }
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="relative z-10 bg-gradient-to-b from-[#0B1D26] to-[#2D8074] py-32 overflow-hidden">
      <div className="container mx-auto !block relative">
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#64DA8D] text-center text-2xl font-bold tracking-widest">
            BLOG POSTS
          </span>
          <h2 className="text-white text-center text-[44px] font-bold">
            Latest Updates & Articles
          </h2>
        </motion.div>

        {error ? (
          <div className="text-center text-red-500 mb-8">
            <p>{error}</p>
            <Button
              variant="outline"
              className="mt-4 text-white border-white/20"
              onClick={() => loadPosts()}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <GalleryGrid posts={posts} loading={loading} />
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                className="text-white rounded-lg border-2 border-white/40 hover:bg-white/10 transition-colors px-8"
                onClick={() => loadPosts(true)}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More Posts'}
              </Button>
            </motion.div>
          </>
        )}

        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#64DA8D]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default Gallery; 