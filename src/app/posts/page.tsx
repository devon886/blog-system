import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchSection from '@/components/blog/SearchSection';
import TagCloud from '@/components/blog/TagCloud';
import CategoryNav from '@/components/blog/CategoryNav';
import AuthorBio from '@/components/blog/AuthorBio';
import { mockPosts, mockCategories, mockAuthor, mockTags } from '@/data/mockData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "所有文章 - 技术博客",
  description: "浏览技术、生活、思考等多个领域的精彩文章，学习React、Next.js、Tailwind CSS等现代Web开发技术",
};

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">所有文章</h1>
          <p className="mt-2 text-gray-600">
            探索技术、生活、思考等多个领域的精彩内容
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-3">
            <SearchSection posts={mockPosts} />
          </div>

          {/* 侧边栏 */}
          <aside className="lg:col-span-1 space-y-6">
            <AuthorBio author={mockAuthor} postCount={mockPosts.length} />
            <CategoryNav categories={mockCategories} />
            <TagCloud tags={mockTags} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}