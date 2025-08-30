import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TagCloud from '@/components/blog/TagCloud';
import CategoryNav from '@/components/blog/CategoryNav';
import AuthorBio from '@/components/blog/AuthorBio';
import { mockPosts, mockCategories, mockTags } from '@/data/mockData';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { ClockIcon, EyeIcon, TagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '文章不存在或已被删除',
    };
  }
  
  return {
    title: `${post.title} - 技术博客`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
    },
  };
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <p className="text-gray-600 mb-4">抱歉，您访问的文章不存在或已被删除</p>
          <Link href="/posts" className="text-indigo-600 hover:text-indigo-800">
            返回文章列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主要内容 */}
          <article className="lg:col-span-3">
            {/* 文章头部 */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-6">
                <div className="flex items-center gap-x-4 text-sm mb-4">
                  <time dateTime={post.publishedAt.toISOString()} className="text-gray-500">
                    {format(post.publishedAt, 'yyyy年MM月dd日', { locale: zhCN })}
                  </time>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
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
            </div>

            {/* 文章封面图 */}
            <div className="mb-8">
              <Image
                src={post.coverImage}
                alt={`文章封面图：${post.title}`}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
                width={800}
                height={400}
                priority
              />
            </div>

            {/* 文章内容 */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* 标签 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">标签</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>


          </article>

          {/* 侧边栏 */}
          <aside className="lg:col-span-1 space-y-6">
            <AuthorBio author={post.author} />
            <CategoryNav categories={mockCategories} currentCategory={post.category} />
            <TagCloud tags={mockTags} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}