const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function debugSiteName() {
  try {
    const siteConfig = await prisma.siteConfig.findFirst();
    console.log('当前网站配置：');
    console.log('名称:', siteConfig?.name);
    console.log('描述:', siteConfig?.description);
    console.log('Logo:', siteConfig?.logo);
    console.log('Favicon:', siteConfig?.favicon);
    console.log('社交链接:', siteConfig?.socialLinks);
  } catch (error) {
    console.error('查询网站配置时出错:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugSiteName();