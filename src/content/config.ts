import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['상속세', '증여세', '양도소득세', '기장', '컨설팅']),
    date: z.string(),          // "2024-03" 형식
    summary: z.string(),       // 목록 페이지에 표시될 한 줄 요약
    image: z.string().optional(), // 신고접수증 마스킹 이미지 경로
    amount: z.string().optional(), // "약 12억 상속재산" 등 (민감하면 생략)
    result: z.string().optional(), // "절세액 약 X천만원" 등 (선택)
  }),
});

export const collections = { cases };
