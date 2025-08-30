import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mockCategories, mockPosts } from '@/data/mockData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "文章分类 - 技术博客",
  description: "按主题浏览文章，包括React、Next.js、Tailwind CSS等技术分类，以及生活和思考类文章",
};

export default function CategoriesPage() {
  const categoriesWithCount = mockCategories.map(category => ({
    ...category,
    postCount: mockPosts.filter(post => post.category === category.name).length
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">文章分类</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索不同主题的技术文章，从React到Next.js，从Tailwind CSS到现代Web开发
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithCount.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {category.postCount} 篇文章
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* 最近文章预览 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">最近文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPosts.slice(0, 4).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <time>{new Date(post.publishedAt).toLocaleDateString('zh-CN')}</time>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    <Link href={`/posts/${post.slug}`} className="hover:text-indigo-600">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}