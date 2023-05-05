# Remotion video with Tailwind

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.gif">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## 一些工具网站

[插值曲线 cubic-bezier.com](https://cubic-bezier.com/#.17,.67,.83,.67)

[前端GPT机器人 HOPBot - Poe](https://poe.com/HOPBot)

[官方文档 Remotion](https://www.remotion.dev/docs/)

[可视化编辑 figma](https://www.figma.com/file/IZsBQDdD4LJEOE9m2hybbC/FantasiaMonthly?node-id=0%3A1&t=rMLlKPjSk4UCpvJm-1)

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Using server-side rendering

This template uses a [custom Webpack override](https://www.remotion.dev/docs/webpack). If you are using server-side rendering, you need to import the override function from `./src/webpack-override.ts` and pass it to [`bundle()`](https://www.remotion.dev/docs/bundle) (if using SSR) and [`deploySite()`](https://www.remotion.dev/docs/lambda/deploysite) (if using Lambda).

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

Get started with Tailwind by reading the [&#34;Utility first&#34; page](https://tailwindcss.com/docs/utility-first)

## Help

We provide help [on our Discord server](https://remotion.dev/discord).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
