import { BlogPost, Author, Category } from '@/types/blog';

export const mockAuthor: Author = {
  name: '赵龙飞',
  avatar: '/images/zhaolongfei-avatar.jpg',
  bio: '我是一名热爱技术创新的全栈开发工程师，精通Web前端开发、Python和C语言。在多年的开发实践中，我独立完成了众多前端网站项目，开发了多款Python小游戏，甚至动手实现了简单的电脑操作系统。',
  social: {
    github: 'https://github.com/zhaolongfei',
    twitter: 'https://twitter.com/zhaolongfei_dev',
    linkedin: 'https://linkedin.com/in/zhaolongfei',
    email: 'zhaolongfei.dev@example.com'
  }
};
/*修改分类*/
export const mockCategories: Category[] = [
  { 
    name: '技术', 
    slug: 'technology', 
    count: 4, 
    color: 'bg-blue-500',
    icon: '💻',
    description: '探索最新的前端技术、框架和工具，包括React、Next.js、TypeScript等现代Web开发技术'
  },
  { 
    name: '生活', 
    slug: 'life', 
    count: 0, 
    color: 'bg-green-500',
    icon: '🌱',
    description: '分享技术人的日常生活、工作经验和人生感悟，记录成长路上的点点滴滴'
  },
  { 
    name: '教程', 
    slug: 'tutorial', 
    count: 1, 
    color: 'bg-purple-500',
    icon: '📚',
    description: '提供详细的技术教程和实战指南，帮助开发者快速掌握新技能'
  },
  { 
    name: '思考', 
    slug: 'thinking', 
    count: 1, 
    color: 'bg-yellow-500',
    icon: '💭',
    description: '对技术、产品和人生的深度思考，分享独特的见解和观点'
  },
  { 
    name: '项目', 
    slug: 'project', 
    count: 0, 
    color: 'bg-red-500',
    icon: '🚀',
    description: '分享实际项目开发经验，包括项目架构、技术选型和开发心得'
  }
];
/*修改文章*/
export const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: '深入理解React Hooks：从基础到高级应用',
    excerpt: 'React Hooks 彻底改变了我们编写React组件的方式。本文将深入探讨Hooks的工作原理，以及如何在实际项目中优雅地使用它们。',
    content: `<h2>React Hooks简介</h2>
<p>React Hooks是React 16.8版本引入的新特性，它允许我们在函数组件中使用状态和其他React特性。</p>

<h3>useState Hook</h3>
<p>useState是最常用的Hook之一，它让我们在函数组件中添加本地状态。</p>

<pre><code>const [count, setCount] = useState(0);</code></pre>

<h3>useEffect Hook</h3>
<p>useEffect用于处理副作用，如数据获取、订阅或手动更改DOM。</p>

<pre><code>useEffect(() => {
  document.title = 'You clicked ' + count + ' times';
}, [count]);</code></pre>

<h2>自定义Hooks</h2>
<p>我们可以创建自定义Hooks来封装和复用状态逻辑。</p>

<pre><code>function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  return size;
}</code></pre>

<h2>最佳实践</h2>
<ol>
<li>只在顶层调用Hooks，不要在循环、条件或嵌套函数中调用</li>
<li>只在React函数组件或自定义Hooks中调用Hooks</li>
<li>使用ESLint插件eslint-plugin-react-hooks来强制执行这些规则</li>
</ol>`,
    coverImage: '/images/new-react-hooks-banner.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    category: 'technology',
    tags: ['React', 'JavaScript', '前端开发', 'Hooks'],
    readTime: 8,
    likes: 128,
    slug: 'understanding-react-hooks'
  },
  {
    id: '2',
    title: 'Tailwind CSS实战指南：从入门到精通',
    excerpt: '全面解析Tailwind CSS的核心概念和最佳实践，通过实际案例展示如何构建现代化、响应式的用户界面。',
    content: `<h2>Tailwind CSS简介</h2>
<p>Tailwind CSS是一个功能类优先的CSS框架，它提供了一系列预定义的类，让我们能够快速构建自定义设计。</p>

<h3>为什么选择Tailwind CSS？</h3>
<ul>
<li>无需离开HTML即可快速构建样式</li>
<li>高度可定制化</li>
<li>响应式设计支持</li>
<li>优秀的开发体验</li>
</ul>

<h2>核心概念</h2>
<h3>Utility-First</h3>
<p>与传统的CSS框架不同，Tailwind CSS采用utility-first的方法...</p>

<h3>响应式设计</h3>
<p>Tailwind CSS内置了响应式设计支持...</p>`,
    coverImage: '/images/tailwind-css-tutorial.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    category: 'technology',
    tags: ['TailwindCSS', 'CSS', '前端', 'UI设计'],
    readTime: 6,
    likes: 95,
    slug: 'tailwind-css-practical-guide'
  },
  {
    id: '3',
    title: '我的2024年技术学习路线图',
    excerpt: '分享我2024年的技术学习计划，包括前端、后端、DevOps等多个领域的学习路径和资源推荐。',
    content: '<h2>前言</h2><p>技术日新月异，制定一个合理的学习计划至关重要...</p>',
    coverImage: '/images/my-new-cover.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    category: 'thinking',
    tags: ['学习计划', '职业发展', '技术成长'],
    readTime: 12,
    likes: 156,
    slug: '2024-learning-roadmap'
  },
  {
    id: '4',
    title: '从零搭建Next.js博客系统',
    excerpt: '详细介绍如何使用Next.js 14、TypeScript和Tailwind CSS从零开始搭建一个现代化的个人博客系统。',
    content: '<h2>项目初始化</h2><p>首先，我们需要创建一个新的Next.js项目...</p>',
    coverImage: '/images/nextjs-blog.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-03'),
    category: 'tutorial',
    tags: ['Next.js', '教程', '全栈开发', '博客系统'],
    readTime: 15,
    likes: 234,
    slug: 'build-nextjs-blog-from-scratch'
  },
  {
    id: '5',
    title: 'TypeScript高级类型系统详解',
    excerpt: '深入探讨TypeScript的高级类型特性，包括泛型、条件类型、映射类型等，提升代码的类型安全性。',
    content: '<h2>TypeScript类型系统概述</h2><p>TypeScript的类型系统非常强大...</p>',
    coverImage: '/images/typescript-types.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    category: 'technology',
    tags: ['TypeScript', '类型系统', '前端开发'],
    readTime: 10,
    likes: 89,
    slug: 'typescript-advanced-types'
  },
  {
    id: '6',
    title: 'CSS Grid布局完全指南',
    excerpt: 'CSS Grid是现代网页布局的强大工具，本文将详细介绍Grid布局的核心概念和实用技巧。',
    content: '<h2>CSS Grid简介</h2><p>CSS Grid是一个二维布局系统...</p>',
    coverImage: '/images/css-grid.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
    category: 'technology',
    tags: ['CSS', 'Grid', '布局', '前端'],
    readTime: 8,
    likes: 76,
    slug: 'css-grid-complete-guide'
  },
  {
    id: '7',
    title: '如何成为一名优秀的全栈开发者',
    excerpt: '分享成为全栈开发者的学习路径、技能要求和实践经验，帮助你在技术道路上快速成长。',
    content: '<h2>全栈开发者的定义</h2><p>全栈开发者是指能够处理...</p>',
    coverImage: '/images/fullstack-developer.jpg',
    author: mockAuthor,
    publishedAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
    category: 'tutorial',
    tags: ['全栈开发', '职业发展', '学习路线'],
    readTime: 11,
    likes: 145,
    slug: 'become-fullstack-developer'
  }
];
/*修改标签*/
export const mockTags = [
  'React', 'JavaScript', 'TypeScript', 'Next.js', 'TailwindCSS', 
  'Node.js', 'CSS', 'HTML', '前端开发', '全栈开发', 
  'UI设计', '用户体验', '性能优化', '代码规范', '最佳实践'
];