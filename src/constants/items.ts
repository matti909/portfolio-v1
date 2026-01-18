export type NavigationItem = {
  name: string;
  path: string;
};

export const SITE = {
  name: "MattiDev",
  title: "Fullstack Developer",
  description: "Personal portfolio",
  url: "https://bytekai.dev",
  defaultImage: "/default-og-image.jpg",
} as const;

export const NAVIGATION = {
  es: [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contact" },
  ],
  en: [
    { name: "Home", path: "/en" },
    { name: "Blog", path: "/en/blog" },
    { name: "Contact", path: "/en/contact" },
  ],
} as const;

export const CONTENT = {
  postsPerPage: 10,
  recentPostsLimit: 3,
  featuredProjectsLimit: 3,
} as const;

export const META = {
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  twitter: {
    cardType: "summary_large_image",
  },
} as const;
