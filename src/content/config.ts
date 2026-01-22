import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    lang: z.enum(["es", "en"]),
  }),
});

const experience = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/experience",
  }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    url: z.string().url().optional(),
    logo: z.string(),
    description: z.string(),
    techs: z.array(z.string()).optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    current: z.boolean().optional().default(false),
    lang: z.enum(["es", "en"]),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    production: z.string().url().optional(),
    github: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
    techs: z.array(z.string()).optional(),
    lang: z.enum(["es", "en"]),
  }),
});

const site = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/site",
  }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    introduction: z.string(),
    about: z.object({
      title: z.string(),
      content: z.string(),
      highlights: z.array(z.string()),
    }),
    sections: z.object({
      blog: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }),
      projects: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }),
      experience: z.object({
        title: z.string(),
        viewAllText: z.string(),
      }),
    }),
    socialLinks: z
      .array(
        z.object({
          platform: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/notes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().optional().default(false),
    lang: z.enum(["es", "en"]),
  }),
});

const bookmarks = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/bookmarks",
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["article", "book", "video"]),
    author: z.string(),
    url: z.string().url(),
    publishedAt: z.coerce.date(),
    createdAt: z.coerce.date(),
    description: z.string().optional(),
    lang: z.enum(["es", "en"]),
  }),
});

const stack = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/stack",
  }),
  schema: z.object({
    name: z.string(),
    category: z.enum(["frontend", "backend", "database", "devops", "tools"]),
    logo: z.string(),
    proficiency: z.number().min(1).max(5),
    order: z.number(),
    lang: z.enum(["es", "en"]),
  }),
});

export const collections = {
  blog,
  experience,
  projects,
  site,
  notes,
  bookmarks,
  stack,
};
