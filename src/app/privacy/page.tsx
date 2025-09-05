import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">隐私政策</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              最后更新时间：2025年9月6日
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. 信息收集</h2>
            <p className="text-gray-600 mb-4">
              我们重视您的隐私。本博客是一个静态博客，不会主动收集您的个人信息。
              当您发表评论时，我们会收集您提供的信息，包括您的昵称、邮箱地址和评论内容。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Cookie使用</h2>
            <p className="text-gray-600 mb-4">
              本网站使用必要的Cookie来确保基本功能正常运行，例如用户登录状态保持。
              我们不会使用Cookie进行用户跟踪或广告目的。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. 第三方服务</h2>
            <p className="text-gray-600 mb-4">
              本博客可能会使用第三方服务，如评论系统和分析工具。
              这些服务有自己的隐私政策，我们建议您查看它们的政策。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. 数据安全</h2>
            <p className="text-gray-600 mb-4">
              我们采取合理的技术和组织措施来保护您的个人信息安全，
              防止未经授权的访问、使用或泄露。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. 您的权利</h2>
            <p className="text-gray-600 mb-4">
              您有权随时查看、修改或删除您在本博客留下的评论信息。
              如果您希望删除您的评论，请通过联系页面与我们取得联系。
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. 政策变更</h2>
            <p className="text-gray-600 mb-4">
              我们可能会不时更新本隐私政策。任何变更都会在本页面发布，
              重大变更我们会通过适当方式通知您。
            </p>

            <div className="mt-8 pt-6 border-t">
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                如有疑问，请联系我们 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}