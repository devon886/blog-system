import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthorBio from '@/components/blog/AuthorBio';
import { prisma } from '@/lib/db';
import { CodeBracketIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
export default async function AboutPage() {
  const siteConfig = await prisma.siteConfig.findFirst();
  
  const author = {
    name: siteConfig?.name || '赵龙飞',
    avatar: '/images/touxiang.jpg',
    bio: siteConfig?.description || '热爱技术，专注前端开发，分享学习心得和经验。',
    social: {
      github: 'https://github.com/Devon886',
      douyin: 'https://www.douyin.com/user/self?from_tab_name=main',
      linkedin: 'https://linkedin.com/in/zhaolongfei',
      email: 'minecraftlove1902@outlook.com'
    }
  };

  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'Python', 'Prisma', 'PostgreSQL', 'Git', 'Docker',
    'CI/CD', 'RESTful API', 'GraphQL', 'AWS', 'Vercel'
  ];

  const experiences = [
    {
      title: '全栈开发工程师',
      company: '某科技公司',
      period: '2022 - 至今',
      description: '负责Web应用的全栈开发，使用React、Next.js和Node.js构建高性能的现代化应用。主导多个项目的架构设计和技术选型，推动团队采用最佳实践。'
    },
    {
      title: '前端开发工程师',
      company: '某互联网公司',
      period: '2020 - 2022',
      description: '专注于前端开发，使用React和Vue.js构建用户友好的界面。参与多个大型项目的开发，积累了丰富的组件设计和状态管理经验。'
    },
    {
      title: '软件工程师',
      company: '某初创公司',
      period: '2018 - 2020',
      description: '作为早期团队成员参与产品从0到1的开发过程，负责前后端开发和数据库设计，积累了丰富的全栈开发经验。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我</h1>
            <p className="text-lg text-gray-600">
              一名热爱技术、乐于分享的全栈开发者
            </p>
          </div>

          {/* 作者介绍 */}
          <div className="mb-12">
            <AuthorBio author={author} />
          </div>

          {/* 个人简介 */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserGroupIcon className="h-6 w-6 mr-2" />
              个人简介
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                我是一名热爱技术创新的全栈开发工程师，精通Web前端开发、Python和C语言。在多年的开发实践中，我独立完成了众多前端网站项目，开发了多款Python小游戏，甚至动手实现了简单的电脑操作系统。我相信技术的力量可以改变世界，而持续学习和创新是工程师的核心竞争力。
              </p>
              <p>
                生活中，我热爱中长跑运动，享受在奔跑中挑战自我的过程，这让我学会了坚持和专注。音乐是我编程时的最佳伴侣，黄家驹的经典歌曲总能激发我的创作灵感，让我在代码的世界里找到节奏和激情。篮球、乒乓球、足球等球类运动让我保持活力，培养团队合作精神，平衡工作与生活。我相信健康的身体是高效工作的基础。
              </p>
            </div>
          </div>

          {/* 技能栈 */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CodeBracketIcon className="h-6 w-6 mr-2" />
              技术栈
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* 工作经历 */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2" />
              工作经历
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-sm text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">联系方式</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">邮箱</h3>
                <a
                  href={`mailto:${author.social.email}`}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  {author.social.email}
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">社交媒体</h3>
                <div className="flex space-x-4 mt-2">
                  {author.social.github && (
                    <a
                      href={author.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      GitHub
                    </a>
                  )}
                  {author.social.douyin && (
                    <a
                      href={author.social.douyin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      抖音
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}