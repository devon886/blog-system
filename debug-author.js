import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function debugAuthors() {
  try {
    // 检查所有用户
    const users = await prisma.user.findMany();
    console.log('所有用户:', users);

    // 检查所有文章
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    console.log('文章数量:', posts.length);
    
    posts.forEach(post => {
      console.log(`文章: ${post.title}`);
      console.log(`作者: ${post.author?.name || '无作者'}`);
      console.log('---');
    });

  } catch (error) {
    console.error('查询失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugAuthors();