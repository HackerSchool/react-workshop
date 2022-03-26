# Wordle Clone - React Workshop

This repository contains a clone of the Wordle game, made in React.  
There is a `design-only` branch that holds the code of the app without any logic, perfect for skipping tedious bootstraping.

## Attending the Workshop

If you're going to attend the workshop on March 29th, please make sure to follow the steps below.

### Setup Requirements

- A Linux/MacOS environment (a Windows environment might also work, but it may cause issues)
- NodeJS (any recent version will do, I'll be using v16)
- Yarn (optional)
- Git (optional)
- An editor of your choice (I'll be using VSCode)

A tutorial on how to setup all of this can be found on [resumos-leic's wiki](https://github.com/diogotcorreia/resumos-leic/wiki/Development-Environment).

After your environment is setup, you should download the source code of this repository from the `design-only` branch, since this is what we'll be using in the workshop.

If you have Git installed, simply type this in the terminal:

```sh
git clone -b design-only https://github.com/HackerSchool/react-workshop.git
```

Alternatively, [download the zip from GitHub](https://github.com/HackerSchool/react-workshop/archive/refs/heads/design-only.zip).

If you are comfortable using the command line, you can go ahead, install dependencies and try out the code you've just downloaded.
Otherwise, we'll do this in the workshop.

```sh
cd react-workshop # go inside the website folder
yarn # install dependencies
yarn start # start development server (by default, on localhost:3000)
```

### Knowledge Requirements

Although not strictly necessary, you are expected to know the following when coming to the workshop:

- Basic HTML/CSS: how websites are structured, how to style DOM Nodes, CSS classes, etc
- A programming language (preferably JavaScript, but any programming language will do)
  - A great resource for learning more about JavaScript is [javascript.info](https://javascript.info/)
  - We'll be using [arrow functions](https://javascript.info/arrow-functions-basics), [`const` and `let`](https://javascript.info/variables),
    [logical operators (`&&` and `||`)](https://javascript.info/logical-operators),
    [objects (just a little bit)](https://javascript.info/object-basics),
    [arrays](https://javascript.info/array),
    [various array methods (`.slice`, `.map`, `.reduce`)](https://javascript.info/array-methods),
    [spread operator](https://javascript.info/rest-parameters-spread)
    and [DOM events](https://javascript.info/introduction-browser-events) (more specifically, the [`keydown` event](https://javascript.info/keyboard-events)).
    Don't worry if you don't know all of this! It'll be explained in the workshop.
- Very basic shell knowledge (change your current directory, run commands, etc). If you have never used a shell before, we'll help you out during the workshop.

## Resources

Below are various resources if you want to learn more about React.
Other resources about the internet, HTML/CSS and Git are also listed.

- [React Developer Roadmap](https://roadmap.sh/react)
- [React Documentation (Getting Started)](https://reactjs.org/docs/getting-started.html)
- [freeCodeCamp React course](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)
- [useHooks](https://usehooks.com/) (various pre-made React hooks)

### Useful React Libraries/Frameworks

- [reach-router](https://github.com/reach/router) (Routing)
- [react-helmet](https://github.com/nfl/react-helmet) (Document Head Manager)
- [Next.js](https://nextjs.org/) (Server Side Rendering/Static Site Generator)
- [Gatsby](https://www.gatsbyjs.com/) (Static Site Generator)
- [Axios](https://github.com/axios/axios) (HTTP REST client)
- [Apollo](https://www.apollographql.com/docs/react/get-started/) (GraphQL client)
- [Material UI](https://mui.com/) (Design Library)
- [Styled Components](https://styled-components.com/) (CSS in JS)

### Internet

- ["How the Internet Works" playlist by Code.org](https://www.youtube.com/playlist?list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7)
- ["What is DNS?" by Cloudflare](https://www.cloudflare.com/learning/dns/what-is-dns/)

### HTML/CSS/JS

- ["Responsive Web Design" course on freeCodeCamp](https://www.freecodecamp.org/learn/responsive-web-design/)
- ["A Complete Guide to Flexbox" on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- ["A Complete Guide to Grid" on CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- ["CSS Diner" - Learn CSS Selectors](https://flukeout.github.io/)
- ["The Modern JavaScript Tutorial"](https://javascript.info/)

### Version Control Systems (VCS)

- ["Version Control (Git)" by MIT Missing Semester](https://missing.csail.mit.edu/2020/version-control/) (the [whole Missing Semester series](https://missing.csail.mit.edu/) is also great)

## Where next?

After attending the workshop, you have a lot of things you could do.
I'm gonna go ahead and recommend you to create another game on your own.

Here are some ideas:

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
  - The [official React tutorial](https://reactjs.org/tutorial/tutorial.html) uses this as an example and is an excellent learning challenge.
    Keep in mind that it uses class components instead of the subjetively better functional components.
- [Four in a row](https://en.wikipedia.org/wiki/Connect_Four)
- [Mastermind](<https://en.wikipedia.org/wiki/Mastermind_(board_game)>)
- [Battleship](<https://en.wikipedia.org/wiki/Battleship_(game)>)
  - I've [made this a while ago](https://github.com/diogotcorreia/battleship-js) (but it has online multiplayer so it's a bit more advanced)
- ...and much more

Alternatively, feel free to build anything you want. After all, you get to decide!
