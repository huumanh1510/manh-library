import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    cover: z.string().optional(),
    description: z.string().optional(),
    category: z.enum([
      'Phát triển bản thân',
      'Tài chính',
      'Kinh doanh',
      'Tâm lý học',
      'Triết học',
      'Văn học',
      'Khoa học',
      'Khác',
    ]).optional(),
    totalChapters: z.number().optional(),
    currentChapter: z.number().default(0),
    status: z.enum(['reading', 'completed', 'to-read']).default('to-read'),
    dateAdded: z.coerce.date().optional(),
    dateCompleted: z.coerce.date().optional(),
    rating: z.number().min(1).max(5).optional(),
    readingTime: z.string().optional(),
    chapter: z.number().optional(),
  }),
});

export const collections = { books };
