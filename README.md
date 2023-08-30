# Introdution

Welcome to react-use-scroll-to API!
Which allows to use bind scroll points in any place at your react project easily ✨. Package is light and supports TS natively.
Let`s have some fun! ⚡️

## Instalation

To install package you will need to use

```bash
  npm i react-use-scroll-to
```

Types are also available

```bash
  npm i @types/react-use-scroll-to
```

## Documentation

Let`s see what do we have here ?

API itself has several components:

- `<ScrollTopContextProvider>` - top-level context based on React context API which stores all the `<ScrollPoints>` refs. Just wrap everything you have in App or somewhere with it to provide the scope.

- `<ScrollPoint>` - one of possible point to scroll at. Basically just a component based on React `HTMLElement` with one additional prop named `tag`. Tag is just attribute you will need to use to bind window scroll to certain block (section) of your application.

- `<Link>` - component which takes an `elementTag` props and binds scroller to given element (just like `<a>` tag at html with `href="#"` attribute)

Using things above will be super enough to build basic scroll-points functionality. If you will need to build custom logical stuff - you will be happy to know that package has `useScrollTo` hook. Just check it out 😉

## Usage/Examples

First of all let's cover scope of your application with `<ScrollTopContextProvider>`. It's needed to collect all the `<Link>` components and store them into refs. Yes, this thing is react-friendly and using refs underhood 🤓.

```typescript
import {
  ScrollTopContextProvider,
} from "react-use-scroll-to";


function MyAwesomeApp () => {
    <ScrollTopContextProvider>
        // your components here
    </ScrollTopContextProvider>
}
```

Then would be needed to add some scroll points...

```typescript
import {
  ScrollTopContextProvider,
  ScrollPoint
} from "react-use-scroll-to";


function MyAwesomeApp () => {
    <ScrollTopContextProvider>

       <ScrollPoint tag="section-1">
         <h1>I am first section</h1>
       </ScrollPoint>

       <ScrollPoint tag="section-2">
         <h2>I am second section</h2>
       </ScrollPoint>

       <ScrollPoint tag="section-3">
         <h3>I am third section</h3>
       </ScrollPoint>

    </ScrollTopContextProvider>
}
```

Looks good, and finally, let's add links to our scroll points!

```typescript
import {
  ScrollTopContextProvider,
  ScrollPoint,
  Link
} from "react-use-scroll-to";


function MyAwesomeApp () => {
    <ScrollTopContextProvider>
       <header>
        <Link elementTag="section-1" >Section 1</Link>
        <Link elementTag="section-2" >Section 2</Link>
        <Link elementTag="section-3" >Section 3</Link>
       </header>

       <ScrollPoint tag="section-1">
         <h1>I am first section</h1>
       </ScrollPoint>

       <ScrollPoint tag="section-2">
         <h2>I am second section</h2>
       </ScrollPoint>

       <ScrollPoint tag="section-3">
         <h3>I am third section</h3>
       </ScrollPoint>

    </ScrollTopContextProvider>
}
```

Wonderful! This is it! 🦾

## Author

![](https://avatars.githubusercontent.com/u/62031924?s=100&v=4)
[@SpaceHolderDjs](https://www.github.com/spaceholderdjs)

## Badges

![](https://img.shields.io/badge/JS%20based-black?style=for-the-badge&logo=javascript)
![](https://img.shields.io/badge/For%20React-blue?style=for-the-badge&logo=react)
![](https://img.shields.io/badge/TS%20Friendly-darkblue?style=for-the-badge&logo=typescript)
