---
title: What I learned from building 7GUIs
description: What I learned from building 7GUIs
---

[7GUIs](https://7gui.iamvictorli.com/) is a collection of 7 frontend programming tasks comparing different implementations in other languages or frameworks. Similar to the [todomvc](https://todomvc.com/).

The project source code is available on [Github](https://github.com/iamvictorli/7gui).

I wanted to build these 7 tasks using Redux as the data (state management) layer utilized for the view layer in React/React Native. This was inspired by this blog post on [UI as an afterthought](https://michel.codes/blogs/ui-as-an-afterthought).

## Leveraging Redux Toolkit

Redux Toolkit is the [new standard and modern way to use redux](https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today). **It eliminates the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.**

I learned to [Structure Nested/Relational State](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape), using _byId_ and _allIds_.

[_byId_ and _allIds_ type definitions](https://github.com/iamvictorli/7gui/blob/main/packages/state/src/types.ts)

Usage Highlights:

- [CRUD](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/src/crudSlice.ts#L24-L27)
- [Circle Drawer](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/src/circleDrawerSlice.ts#L49-L51)
- [Cells](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/src/cellsSlice.ts#L44)

## Building with Headless UI Libraries

Headless UI libraries are collections of unstyled, accessible, and reusable components that provide core functionality without enforcing a specific design or style. They are also built with accessibility in mind.

I used [Radix](https://www.radix-ui.com/) and [React Aria](https://react-spectrum.adobe.com/react-aria/) for this project.

For further reading, check out this insightful post: [Headless, Boneless, and Skinless UI](https://nerdy.dev/headless-boneless-and-skinless-ui).

## Testing with Vitest

[Vitest](https://vitest.dev/) is a modern testing framework similar to [Jest](https://jestjs.io/), and works in combination with [Vite](https://vite.dev/) and [Testing Library](https://testing-library.com/). It supports [workspaces](https://vitest.dev/guide/workspace) making it ideal for testing in monorepo setups.

One limitation to note is that Vitest [does not support React Native](https://github.com/vitest-dev/vitest/issues/1321#issuecomment-1127898662).

## Monorepo setup with pnpm

To manage the project structure, I used pnpm to set up a monorepo. The project is divided into four main packages:

1. `apps/web`: Web version in React
2. `apps/mobile`: Mobile version in Expo React Native
3. `packages/state`: Shared state built with Redux
4. `packages/tsconfig`: Shared typescript tsconfig that is extended in the other packages

### Subpath Exports in `packages/state`

To simplify imports, I added [subpath exports](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/package.json#L6-L35) in `packages/state`. For instance:

For example:

```ts
import { increment, selectCount } from '@7gui/state/counterSlice'
```

Resources I used to learn about monorepo setup:

- https://levelup.video/tutorials/monorepos-with-pnpm
- https://pnpm.io/workspaces
- The documentation from [turborepo](https://turbo.build/repo/docs), even when I decided to not use turborepo. Learning to structure the monorepo, manage dependencies, and build different package types.
- https://turbo.build/repo/docs/crafting-your-repository/structuring-a-repository
- https://turbo.build/repo/docs/crafting-your-repository/managing-dependencies
- https://turbo.build/repo/docs/crafting-your-repository/creating-an-internal-package
- https://turbo.build/repo/docs/core-concepts/package-types
- https://turbo.build/repo/docs/core-concepts/internal-packages

## Setting up React Native with Expo in a pnpm monorepo

Intergrating React Native Expo in a pnpm monorepo requires [a few workarounds](https://github.com/byCedric/expo-monorepo-example?tab=readme-ov-file#pnpm-workarounds)

- Updates to [.npmrc](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/.npmrc)
- Updates to [metro config file](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/apps/mobile/metro.config.js)

To enable importing subpaths, set **unstable_enablePackageExports** to **true** in the [metro config](https://metrobundler.dev/docs/package-exports/). [Example](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/apps/mobile/metro.config.js#L35-L36)

Additional resources:

- https://github.com/byCedric/expo-monorepo-example
- https://docs.expo.dev/guides/monorepos/
- https://github.com/infinitered/ignite-cookbook/pull/173
