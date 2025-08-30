'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { ClockIcon, EyeIcon, TagIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.publishedAt.toISOString()} className="text-gray-500">
          {format(post.publishedAt, 'yyyy年MM月dd日', { locale: zhCN })}
        </time>
        <Link
          href={`/categories/${post.category}`}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.category}
        </Link>
      </div>
      
      <div className="mt-4 flex-1">
        <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
          <Image
            src={post.coverImage}
            alt={`文章封面图：${post.title}`}
            width={800}
            height={450}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
          <Link href={`/posts/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.excerpt}
        </p>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            <span>{post.readTime}分钟阅读</span>
          </div>
          
          <div className="flex items-center gap-1">
            <EyeIcon className="h-4 w-4" />
            <span>{post.likes} 阅读</span>
          </div>
          
          <div className="flex items-center gap-1">
            <TagIcon className="h-4 w-4" />
            <span>{post.tags.length} 标签</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
          >
            {tag}
          </span>
        ))}
        {post.tags.length > 3 && (
          <span className="text-xs text-gray-500">+{post.tags.length - 3}</span>
        )}
      </div>
      
      <div className="mt-4 flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Image
            src={post.author.avatar}
            alt={`作者头像：${post.author.name}`}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full bg-gray-50"
            loading="lazy"
          />
          <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
        </div>
      </div>
    </motion.article>
  );
}