
# 👀 gatsby-remark-images-modal

Bring [modal-zoom](https://github.com/pszafer/gatsby-remark-images-modal) to [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)

> **Note**: this plugin requires [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/) and [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark) or gatsby-mdx.

## Install

TODO

## How to use

```js
// In your gatsby-config.js, under gatsby-transformer-remark plugins

plugins: [
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-images`,
      `gatsby-remark-images-modal`,
    ],
  }
];
```

## Configuration

All options from [medium zoom](https://github.com/francoischalifour/medium-zoom) are available:

| Property       | Type                                  | Default  | Description                                      |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------ |
| `margin`       | `number`                              | `0`      | The space outside the zoomed image               |
| `background`   | `string`                              | `"#fff"` | The background of the overlay                    |
| `zIndex`       | `number`                              | `42`     | The z-index of the overlay                       |
| `scrollOffset` | `number`                              | `40`     | The number of pixels to scroll to close the zoom |
| `container`    | `string` \| `HTMLElement` \| `object` | `null`   | The viewport to render the zoom in               |
| `template`     | `string` \| `HTMLTemplateElement`     | `null`   | The template element to display on zoom          |
