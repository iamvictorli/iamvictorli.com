---
title: What I learned from building 7GUIs
description: What I learned from building 7GUIs
---

[7GUIs](https://7gui.iamvictorli.com/) is 7 programming tasks on the frontend while comparing different implementations in other languages or frameworks. Similar to the [todomvc](https://todomvc.com/)

[Source code](https://github.com/iamvictorli/7gui)

I wanted to build these 7 tasks by using Redux as the data (state) layer and shared code for the view layer in React/React Native. [Inspiration](https://michel.codes/blogs/ui-as-an-afterthought)

## Redux Toolkit

Redux Toolkit is the [new standard and modern way to use redux](https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today). **It eliminates the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.**

[Structuring Nested/Relational State](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape), using _byId_ and _allIds_.

[_byId_ and _allIds_ type definitions](https://github.com/iamvictorli/7gui/blob/main/packages/state/src/types.ts)

Usage Examples:

- [CRUD](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/src/crudSlice.ts#L24-L27)
- [Circle Drawer](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/src/circleDrawerSlice.ts#L49-L51)
- [Cells](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/src/cellsSlice.ts#L44)

## Headless UI libraries

Headless UI libraries are collections of unstyled, accessible, and reusable components that provide core functionality without enforcing a specific design or style. They are also built with accessibility in mind.

I used headless UI libraries [Radix](https://www.radix-ui.com/) and [React Aria](https://react-spectrum.adobe.com/react-aria/)

Additional Resources:

- https://nerdy.dev/headless-boneless-and-skinless-ui

## Testing using Vitest

[Vitest](https://vitest.dev/) is another testing framework similar to [Jest](https://jestjs.io/), and works in combination with [Vite](https://vite.dev/) and [Testing Library](https://testing-library.com/).

Supports [workspaces](https://vitest.dev/guide/workspace) making it easy to test in monorepos

Currently Vitest [does not support react native](https://github.com/vitest-dev/vitest/issues/1321#issuecomment-1127898662)

## Monorepo setup with pnpm

I used [pnpm](https://pnpm.io/) to setup the monorepo

There are 4 packages:

- apps/web: Web version in React
- apps/mobile: Mobile version in Expo React Native
- packages/state: Shared state built with Redux
- packages/tsconfig: Shared typescript tsconfig that is extended in the other packages

I also added subpath exports for the [packages/state](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/packages/state/package.json#L6-L35), so that applications can import subpaths.

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

## Setting up React Native Expo in a monorepo with pnpm

Setting up React Native Expo in a monorepo with pnpm requires [some workarounds](https://github.com/byCedric/expo-monorepo-example?tab=readme-ov-file#pnpm-workarounds)

- [.npmrc](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/.npmrc)
- [Updates to metro config](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/apps/mobile/metro.config.js)

To add support for importing subpaths, set **unstable_enablePackageExports** to **true** in the [metro config](https://metrobundler.dev/docs/package-exports/). [Example](https://github.com/iamvictorli/7gui/blob/6488468aeac146f3488bb5dbaff0de2d1440f094/apps/mobile/metro.config.js#L35-L36)

Additional resources:

- https://github.com/byCedric/expo-monorepo-example
- https://docs.expo.dev/guides/monorepos/
- https://github.com/infinitered/ignite-cookbook/pull/173
