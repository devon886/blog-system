import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthorBio from '@/components/blog/AuthorBio';
import { mockAuthor } from '@/data/mockData';
import { CodeBracketIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
/*修改技能*/
export default function AboutPage() {
  const skills = [
    '你的技能1', '你的技能2', '你的技能3', '你的技能4', '你的技能5',
    '你的技能6', '你的技能7', '你的技能8', '你的技能9', '你的技能10',
    '你的技能11', '你的技能12', '你的技能13', '你的技能14', '你的技能15'
  ];
/*修改工作经历*/
  const experiences = [
    {
      title: '你的职位',
      company: '你的公司名称',
      period: '开始年份 - 至今',
      description: '描述你的工作职责和成就。'
    },
    {
      title: '你的前一个职位',
      company: '前一个公司名称',
      period: '开始年份 - 结束年份',
      description: '描述你在前一个工作中的经验和收获。'
    },
    {
      title: '你的第一个职位',
      company: '第一个公司名称',
      period: '开始年份 - 结束年份',
      description: '描述你的第一份工作经历。'
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
            <AuthorBio author={mockAuthor} />
          </div>

          {/* 个人简介 */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserGroupIcon className="h-6 w-6 mr-2" />
              个人简介
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                这里写你的个人简介第一段，可以包括你的教育背景、专业方向、工作年限等。
              </p>
              <p>
                这里写你的个人简介第二段，可以包括你的兴趣爱好、技术追求、博客目标等。
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
                  href={`mailto:${mockAuthor.social.email}`}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  {mockAuthor.social.email}
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">社交媒体</h3>
                <div className="flex space-x-4 mt-2">
                  {mockAuthor.social.github && (
                    <a
                      href={mockAuthor.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      GitHub
                    </a>
                  )}
                  {mockAuthor.social.twitter && (
                    <a
                      href={mockAuthor.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Twitter
                    </a>
                  )}
                  {mockAuthor.social.linkedin && (
                    <a
                      href={mockAuthor.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      LinkedIn
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