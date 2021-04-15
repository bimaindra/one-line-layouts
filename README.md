# One Line Layouts
> A highlights a few powerful lines of CSS that do some serious heavy lifting and help you build robust modern layouts.

## Intro
This project is implementation of creating simple usefull layout with simple usefull CSS property. Background use-cases of this project is based on this link [https://1linelayouts.glitch.me/](https://1linelayouts.glitch.me/). And i try to implement that use-cases with real design reference from UI Design Daily, so hopefully it can be more easily understand how to create that cases. 

### Design Reference
Getting the design from UI Design Daily.

UI Design Daily is free, Open-source UI design resources updated daily.

Here's some design reference to create some layouts :

1. [Design 1 reference](https://www.uidesigndaily.com/posts/sketch-stats-card-analytics-day-1266)

    <img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/design-1.png?raw=false" width="600">

2. [Design 2 reference](https://www.uidesigndaily.com/posts/sketch-stats-statistics-gradient-card-day-1301)

    <img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/design-2.png?raw=false" width="600">

### Tech Stack
Here's some of tech-stack that used in development process :

| List | Description |
| --- | --- |
| [Gulp](https://gulpjs.com/) | A toolkit to automate & enhance your workflow. Using it as task runner. |
| [AtomicCSS](https://acss.io/) | Utility first CSS like inline styles, offers single-purpose units of style, but applied via classes. |
| [SASS](https://sass-lang.com/) | CSS-preproceccor. Using it to tackle undefined CSS-property in Atomizer such as ***grid***, ***aspect-ratio***, etc. |
| [Vercel](https://vercel.com/) | Serverless hosting for host websites and web services that deploy instantly and scale automatically – all without any configuration. |

### Cases
Here's some cases that i choosed based on reference from [glitch](https://1linelayouts.glitch.me/)

#### 1. Super Centered layout
This feature is to make the content has vertical & horizontal centered using CSS property `grid` also `place-items: center`

In any case, we create Centering Content layout either using `absolute` with `transform` combination, using `margin: auto` in some cases, or using `flexbox` But, now we can tackle this case more easily using css `grid` This is because grid supports for creating layout with 2 dimensional. [Check it](https://css-tricks.com/snippets/css/complete-guide-grid/)

Here's the shortcode
```css
.l-center-content {
    display: grid;
    place-items: center;
}
```

<img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/example-1.gif?raw=false" width="600">

#### 2. The Deconstructed Pancake layout
This feature is to make the content has fixed width, stacked when on the mobile screen, also spanning into the same line.

Here's the shortcode
```css
.l-deconstructed-pancake {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.l-deconstructed-pancake__item {
    flex: 0 1 220px;
    margin: 0 8px;
}

.l-deconstructed-pancake__item--stretch {
    flex: 1 1 220px;
}
```

<img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/example-2.gif?raw=false" width="600">

#### 3. Pancake Stack Pancake layout
This feature is to make the content has same dimension.

This case is very suitable when we create common layout that contains header, content, footer. It's gonna make header and footer stick in their position eventho the content is not fully cover the viewport. It can tackle issue if the website doesn't has any content to show such as search not found. 

Here's the shortcode
```css
.l-pancake-stack {
    display: grid;
    grid-template-rows: auto 1fr auto;
}
```

<img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/example-3.png?raw=false" width="600">

#### 4. RAM (Repeat, Auto, Minmax) Pancake layout

Here's the shortcode
```css
.l-ram {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

<img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/example-4.gif?raw=false" width="600">

#### 5. Respect for Aspect layout
This feature is maintain ratio of content using CSS property `aspect-ratio` 

Sometimes we create ratio content using combination between `padding-top` and `position:absolute` But, now we can create that case with only simple CSS code.

Here's the shortcode
```css
.l-ratio-16x9 {
    aspect-ratio: 16 / 9;
}
```

<img src="https://github.com/wongdarjo/one-line-layouts/blob/master/src/assets/images/example-5.gif?raw=false" width="600">

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
or
```shell
yarn install
```

Run local development
```shell
npm run serve
```
or
```shell
yarn serve
```

Build for `development` env
```shell
npm run dev
```
or
```shell
yarn dev
```

Build for `production` env
```shell
npm run build
```
or
```shell
yarn build
```
