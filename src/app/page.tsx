import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import TagCloud from '@/components/blog/TagCloud';
import CategoryNav from '@/components/blog/CategoryNav';
import AuthorBio from '@/components/blog/AuthorBio';
import Link from 'next/link';
import { mockPosts, mockCategories, mockAuthor, mockTags } from '@/data/mockData';

export default function Home() {
  const recentPosts = mockPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* 英雄区域 */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              欢迎来到我的技术博客
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              分享前端开发、技术思考和项目经验，记录成长历程
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#latest-posts"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                查看最新文章
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                了解更多 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-3">
            {/* 最新文章 */}
            <section id="latest-posts" className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">最新文章</h2>
                <Link href="/posts" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                查看全部 →
              </Link>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {recentPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </section>

            {/* 热门文章 */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">热门文章</h2>
              </div>
              
              <div className="space-y-4">
                {mockPosts
                  .sort((a, b) => b.likes - a.likes)
                  .slice(0, 3)
                  .map((post, index) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                          <Link href={`/posts/${post.slug}`} className="hover:text-indigo-600">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.likes} 点赞 · {post.readTime} 分钟阅读
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
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
