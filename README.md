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

## 一些需要注意的地方

### npm run build时No local browser could be found

可能您的系统中并没有edge浏览器，路径为： `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`

如果的确没有/是其他浏览器/移动了位置的话，请打开 `remotion.config.ts`中修改

```ts
Config.setBrowserExecutable(
	//将下面的路径改为你浏览器的exe路径
	'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
);

```
