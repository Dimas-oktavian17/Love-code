<p align="center">
  <img width="300" alt="loveCode" src="https://user-images.githubusercontent.com/92313885/187837437-5aba4299-6001-41e1-b8d0-3e84c12bc948.png">
<br>
    <br>Landing-Page-UI-Design-(Community) Wiith litle modification<br><br>
    <br>
    <a href="https://github.com/Dimas-oktavian17/Love-code.git">Git Repository →</a>
  <br>
    <a href="https://dimas-oktavian17.github.io/Love-code/public/">Site Preview →</a>
</p>

---

### Styled Components

You can use A utility-first CSS or Component TailwindCss:

```js

Example

@layer components {
  .container {
    @apply max-w-5xl mx-auto py-8;
  }
}
/* this */
@layer components {
  .active > div > p:nth-child(1) {
    @apply rotate-45 origin-bottom-left bg-primary dark:bg-primary2hover;
  }
}
@layer components {
  .active > div > p:nth-child(2) {
    @apply scale-0;
  }
}
/* this */
@layer components {
  .active > div > p:nth-child(3) {
    @apply -rotate-[45deg] origin-top-left w-[30px] bg-primary dark:bg-primary2hover;
  }
}
```

And clone and style existing components:

```js
const PurpleInput = tw(Input)`border-purple-500`
```

Switch to the styled import to add conditional styling:

```js
import tw, { styled } from 'twin.macro'

const StyledInput = styled.input(({ hasBorder }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
])
const Input = () => <StyledInput hasBorder />
```

Or use backticks to mix with sass styles:

```js
import tw, { styled } from 'twin.macro'

const StyledInput = styled.input`
  color: black;
  ${({ hasBorder }) => hasBorder && tw`border-purple-500`}
`
const Input = () => <StyledInput hasBorder />
```

## How it works

You should run `npx tailwindcss -i ./public/src/input.css -o ./public/src/style.css --watch` or `npm run Dev` if you want to run TailwindCss with `npm run Dev`. you have to set the script package.json section to be like this
`
"scripts": {
     "Dev": "npx tailwindcss -i ./public/src/input.css -o ./public/src/style.css --watch"
   }
`:

```js

Simple Example
class=`text-sm md:text-lg`

// ↓ ↓ ↓ ↓ ↓ ↓

<div class="flex flex-col justify-center items-center py-[6.25rem] gap-[10px]">             
            </div>
```

## Features

**👌 Login & Logout** - Login & Logout feature, very simple to use local storage and only accommodates one account:

```js
  function onLogin() {
  localStorage.setItem("username", usernameInput.value);

  if (usernameInput.value == "myLisa" && passwordInput.value == "myLisa123") {
    localStorage.setItem("role", "admin");
    form_login.classList.remove("h-screen");
    header.classList.remove("hidden-me");
    main.classList.remove("hidden-me");
  } else {
    alert("salah");
    localStorage.setItem("role", "basic");
  }
}

if (localStorage.getItem("username")) {
  if (localStorage.getItem("role") == "admin") {
    form_login.classList.remove("h-screen");
    form_login.classList.add("h-0");
    form_login.classList.add("hidden-me");
    header.classList.remove("hidden-me");
    main.classList.remove("hidden-me");

    onload = function () {
      const id = document.getElementById("bounce");
      let loading = document.getElementById("loading");

      let loaded = setInterval(() => {
        loading.classList.add("animate-bounce");
        main.classList.add("hidden-me");
        header.classList.remove("container");
      }, 500);

      setTimeout(() => {
        clearInterval(loaded);
        main.classList.add("pt-8");
        main.classList.remove("hidden-me");
        header.classList.remove("hidden-me");
        header.classList.add("container");
        loading.classList.add("hidden");
        id.classList.remove("h-screen");
        form_login.classList.add("h-screen");
        body.classList.remove("overflow-hidden");
      }, 3000);
    };
  } else {
    form_login.classList.remove("hidden-me");
  }

  function onLogout() {
    header.classList.remove("container");
    localStorage.clear();
    location.reload();
  }
}
```

**🐹 Bounce animation** - A loading animation, when you login or logout. The bounce animation will always appear for a few seconds and will disappear after a while.

**🍱 Bounce animation dibuat dengan `Setinterval` & `SetTimeout`**

```js

onload = function () {
  const id = document.getElementById("bounce");
  let loading = document.getElementById("loading");

  let loaded = setInterval(() => {
    loading.classList.add("animate-bounce");
  }, 1000);

  setTimeout(() => {
    clearInterval(loaded);
    loading.classList.add("hidden");
    id.classList.remove("h-screen");
    form_login.classList.remove("hidden-me");
    body.classList.remove("overflow-hidden");
  }, 5000);
};

```

**💥 `tailwind.config.js` Structure!**

```js

// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  // content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      main: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4A72FF",
        primary2: "#e9eeff",
        primarySponsor: "#ebefff",
        primary2hover: "#dae0f7",
        secondary: "#0C1B4D",
        secondary2: "#F4F7FF",
        secondary3: "#657094",
        Theme: "#eef2ff",
        btnDark: "rgba(51, 65, 85, 0.3)",
        donwlod: "rgba(74, 114, 255, 0.25)",
        "bg-icon": "rgba(12, 27, 77, 0.1)",
        dark: "rgba(12, 27, 77, 1)",
        accordion: "rgba(12, 27, 77, 0.6)",
        footer: "rgba(74, 114, 255, 0.05)",
        darkFooter: "rgba(30, 41, 59, .3)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

```

Add !important to multiple classes with bracket groups:

```js
<div tw="(hidden ml-auto)!" />
// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
<div css={{ "display": "none !important", "marginLeft": "auto !important" }} />
```

## Get started

Twin works within many modern stacks - take a look at these examples to get started:

<!-- ### App build tools and libraries -->
<!-- - **Parcel**<br/>[styled-components](https://github.com/ben-rogerson/twin.examples/tree/master/react-styled-components) / [emotion](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion) / [emotion (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion-typescript)
- **Webpack**<br/>[styled-components (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/webpack-styled-components-typescript) / [emotion (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/webpack-emotion-typescript)
- **Preact**<br/>[styled-components](https://github.com/ben-rogerson/twin.examples/tree/master/preact-styled-components) / [emotion](https://github.com/ben-rogerson/twin.examples/tree/master/preact-emotion) / [goober](https://github.com/ben-rogerson/twin.examples/tree/master/preact-goober)
- **Create React App**<br/>[styled-components](https://github.com/ben-rogerson/twin.examples/tree/master/cra-styled-components) / [emotion](https://github.com/ben-rogerson/twin.examples/tree/master/cra-emotion)
- **Vite**<br/>[styled-components (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/vite-styled-components-typescript) / [emotion (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/vite-emotion-typescript)
 -->
 
 ### Tech Stack

- **Html-5**<br/>A markup language / [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **Css**<br/>A stylesheet language / [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Javascript**<br/>A scripting language / [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


 
### Advanced frameworks

- **TailwindCss**<br/>[A utility-first CSS framework](https://tailwindcss.com/docs/installation) / [Documentation](https://github.com/tailwindlabs/tailwindcss.git)
<!-- - **Next.js**<br/>[styled-components](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components) / [emotion](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion) / [emotion (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion-typescript) / [stitches (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/next-stitches-typescript)
- **Blitz.js**<br/>[emotion (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/blitz-emotion-typescript)
- **Laravel**<br/>[styled-components (ts)](https://github.com/ben-rogerson/twin.examples/tree/master/laravel-styled-components-typescript) -->

### Component libraries

- **Flowbite**<br/>[styled-components for TailwindCss](https://flowbite.com/docs/getting-started/introduction) / [Documentation](https://github.com/themesberg/flowbite.git)
- **AnimateCss**<br/>[animation-css libraries](https://animate.style/) / [Documentation](https://github.com/animate-css/animate.css.git)
- **Aos**<br/>[Animation-scroll-css libraries ](https://michalsnik.github.io/aos/) / [Documentation](https://github.com/michalsnik/aos.git)

## Community

[Drop into our Discord server](https://discord.gg/Xj6x9z7) for announcements, help and styling chat.

<a href="https://discord.gg/Xj6x9z7"><img src="https://img.shields.io/discord/705884695400939552?label=discord&logo=discord" alt="Discord"></a>

## Resources

- 🔥 [Docs: TailwindCss Guide](https://tailwindcss.com/docs/installation) - A must-read guide to styling your website
- 🔥 [Design: Figma Design](https://www.figma.com/community/file/1061306005803309728) - A must-have design figma for the slicing design process
- [Docs: Prettier](https://prettier.io/docs/en/options.html) - Learn the extension formatter that keeps code organized
- [Plugin: babel-plugin-twin](https://github.com/ben-rogerson/babel-plugin-twin) - Use the tw and css props without adding an import
- [Example: Advanced theming](https://github.com/ben-rogerson/twin.macro/blob/master/docs/advanced-theming.md) - Add custom theming the right way using css variables
- [Example: React + Tailwind breakpoint syncing](https://gist.github.com/ben-rogerson/b4b406dffcc18ae02f8a6c8c97bb58a8) - Sync your tailwind.config.js breakpoints with react
- [Helpers: Twin VSCode snippets](https://gist.github.com/ben-rogerson/c6b62508e63b3e3146350f685df2ddc9) - For devs who want to type less
- [Plugins: VSCode plugins](https://github.com/ben-rogerson/twin.macro/discussions/227) - VScode plugins that work with twin
- [Article: "Why I Love Tailwind" by Max Stoiber](https://mxstbr.com/thoughts/tailwind) - Max (inventor of styled-components) shares his thoughts on twin

## Special thanks

This project stemmed from [Array ID](https://www.figma.com/@mhd) so a big shout out goes to Muhamad Nauval Azhar(https://www.figma.com/community/file/1061306005803309728 ) for the amazing work he produced. Thank you very much for reading my documentation to the end.
