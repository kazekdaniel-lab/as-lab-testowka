import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    author: z.string().default('AS-LAB'),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const machines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/machines' }),
  schema: z.object({
    name: z.string(),
    shortName: z.string().optional(),
    model: z.string().optional(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum([
      'kruszarki-mlynki',
      'mielenie-katalizatorow',
      'sita',
      'przesiewacze',
      'beben-los-angeles',
      'mas-pirotechniczne',
      'inne-urzadzenia',
      'nietypowe-zamowienia',
    ]),
    categoryPath: z.string(),
    industries: z.array(z.enum([
      'recykling-katalizatorow',
      'serwis-przemyslowy',
      'zbrojeniowka',
      'laboratoria',
      'kopalnie',
      'budownictwo',
      'farmaceutyka',
      'chemia',
    ])).default([]),
    norms: z.array(z.string()).default([]),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    applications: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, machines };
