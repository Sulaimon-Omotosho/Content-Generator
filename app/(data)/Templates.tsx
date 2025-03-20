export default [
  {
    name: 'Blog Title',
    desc: 'An ai tool that searches for the perfect blog title',
    category: 'Blog',
    icon: 'https://www.flaticon.com/free-icon/website_13225927',
    aiPrompt: 'Give me 5 blog topic idea in bullet wise only',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      { label: 'Enter blog outline', field: 'textarea', name: 'outline' },
    ],
  },
  {
    name: 'Blog Content',
    desc: 'An ai tool that searches for the perfect blog content',
    category: 'Blog',
    icon: 'https://www.flaticon.com/free-icon/website_13225927',
    aiPrompt: 'Generate blog title based on topic and outline',
    slug: 'generate-blog-content',
    form: [
      {
        label: 'Enter blog topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
      { label: 'Enter blog outline', field: 'textarea', name: 'outline' },
    ],
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'An ai tool that searches for the perfect blog Topic ideas',
    category: 'Blog',
    icon: 'https://www.flaticon.com/free-icon/website_13225927',
    aiPrompt: 'Generate top 5 trending blog topic idea in bullet wise only',
    slug: 'generate-blog-topic',
    form: [
      {
        label: 'Enter blog Niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      { label: 'Enter blog outline', field: 'textarea', name: 'outline' },
    ],
  },
  {
    name: 'Youtube SEO Title',
    desc: 'An ai tool that searches for the perfect youtube seo ideas',
    category: 'Youtube Tool',
    icon: 'https://www.flaticon.com/free-icon/website_13225927',
    aiPrompt: 'Generate top 5 trending blog topic idea in bullet wise only',
    slug: 'generate-youtube-seo',
    form: [
      {
        label: 'Enter Youtube Topic Keywords',
        field: 'input',
        name: 'keywords',
        required: true,
      },
      {
        label: 'Enter description outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Youtube Description',
    desc: 'An ai tool that searches for the perfect youtube description ideas',
    category: 'Youtube Tool',
    icon: 'https://www.flaticon.com/free-icon/website_13225927',
    aiPrompt: 'Generate youtube description for me',
    slug: 'generate-youtube-description',
    form: [
      {
        label: 'Enter Youtube topic',
        field: 'input',
        name: 'topic',
        required: true,
      },
      { label: 'Enter outline', field: 'textarea', name: 'outline' },
    ],
  },
]
