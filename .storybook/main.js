module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ]
}
