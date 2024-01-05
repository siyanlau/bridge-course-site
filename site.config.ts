import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd5023f27fe4b43248c10f5587042c26b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'NYU Bridge Course Site',
  domain: 'bridge-winter2024',
  author: 'Siyan',

  // open graph metadata (optional)
  description: 'NYU Tandon Bridge Winter 2024',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/week1': '683ab4036ff142b69cb3bafbcbb122aa',
    '/week2': '80cc4c6469ee44ee9c5064cf0689c9da',
    '/week3': '3b9dddda37424fa9b72b9636b36439b7',
    '/week4': '7e2d8f5d9fbe4e608d866b00b0688fcf',
    '/week5': '07fcc9ce960242b68a16cebcca777e2c',
    '/week6': '6eabf358f5a24061ad44e3a6115df462',
    '/week7': '11db6b0dff5e403186c3e8ec07a78920',
    '/week8': 'b57591277e8f4ed78e50b1fb8171990d',
    '/week9': '80d4fb5fcff441c7aa135c9dddef6889',
    '/week10': '72412f74932e48e09675acd823ffbaee',
    '/week11': 'e49fb1f09f8448a7a85bff01b6f6afb3',
    '/week12': 'de9afca81ec24099a347ca3507e10ee1',
    '/week13': '5cad8e78ec3a461385bcff7ef9aa66dc',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
