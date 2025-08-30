export interface Author {
  name: string;
  avatar: string;
  bio: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  publishedAt: Date;
  updatedAt: Date;
  category: string;
  tags: string[];
  readTime: number;
  likes: number;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  color: string;
  icon?: string;
  description?: string;
}

export interface SearchFilters {
  query: string;
  category: string;
  tags: string[];
  sortBy: 'latest' | 'oldest' | 'popular';
}