# one-line-layouts
> This repository highlights a few powerful lines of CSS that do some serious heavy lifting and help you build robust modern layouts.

## Intro
To be update...

### Design Reference
Getting the design from UI Design Daily.
UI Design Daily is free, Open-source UI design resources updated daily.
Here's some design reference to create some layouts :

1. [Design 1](https://www.uidesigndaily.com/posts/sketch-stats-card-analytics-day-1266)
    ![Sample design-1](https://github.com/wongdarjo/one-line-layouts/blob/feature/v1/design-1.png?raw=true)
2. [Design 2](https://www.uidesigndaily.com/posts/sketch-stats-statistics-gradient-card-day-1301)
    ![Sample design-2](https://github.com/wongdarjo/one-line-layouts/blob/feature/v1/design-2.png?raw=true)

### Tech Stack
Here's some of tech-stack that used in development process :

| List | Description |
| --- | --- |
| [Gulp](https://gulpjs.com/) | A toolkit to automate & enhance your workflow. Using it as task runner. |
| [AtomicCSS](https://acss.io/) | Utility first CSS like inline styles, offers single-purpose units of style, but applied via classes. |
| [SASS](https://sass-lang.com/) | CSS-preproceccor. Using it to tackle undefined CSS-property in Atomizer such as ***grid***, ***aspect-ratio***, etc. |
| [Vercel](https://vercel.com/) | Serverless hosting for host websites and web services that deploy instantly and scale automatically – all without any configuration. |

### Cases
Here's some cases that i choosed based on glitch

#### 1. Super Centered layout
This feature is to make the content centered using CSS property ***grid*** also ***place-items: center***.

#### 2. The Deconstructed Pancake layout
This feature is to make the content has fixed width, stacked when on the mobile screen, also spanning into the same line.

#### 3. Pancake Stack Pancake layout
This feature is to make the content has same dimension.

#### 4. RAM (Repeat, Auto, Minmax) Pancake layout
description...

#### 5. Respect for Aspect layout
This feature is maintain ratio of content using CSS property ***aspect-ratio***.

## Get started
Clone this repository.

Enter directory of project
```shell
cd one-line-layouts
```

...then install dependency
```shell
npm install
```

Run local development
```shell
npm run serve
```
or
```shell
npm run start
```

Build for `development` env
```shell
npm run dev
```

Build for `production` env
```shell
npm run build
```
