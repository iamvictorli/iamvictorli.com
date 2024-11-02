---
layout: ~/layouts/BaseLayout.astro
title: Kitchen Sink
---

# Markdown Kitchen Sink

<time>Oct 21, 2024</time>

## Emphasis

```
**bold** _italics_ ~~strikethrough~~ <mark>highlight</mark>
```

**bold** _italics_ ~~strikethrough~~ <mark>highlight</mark>

---

## Headers

```
# Big header

## Medium header

### Small header

#### Tiny header
```

# Big header

## Medium header

### Small header

#### Tiny header

---

## Lists

```
- Generic list item
- Generic list item
- Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item
```

- Generic list item
- Generic list item
- Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item

---

## Task Lists

```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

## Links

```
<http://www.example.com>

[Open in same tab](http://www.example.com)

Or use the heading id (the slugified name of the header) as an internal link...

[Internal link](#headers)
```

<http://www.example.com>

[Open in same tab](http://www.example.com)

Or use the heading id (the slugified name of the header) as an internal link...

[Internal link](#headers)

---

## Linebreaks

Adding a single line break will not be rendered as a line break.

```
Here's some text.
Here's some more text.
```

Here's some text.
Here's some more text.

To add a single line break use a \ or two spaces at the end of the line.

```
Here's some text.\
Here's some more text.
```

Here's some text.\
Here's some more text.

Adding 2 line breaks starts a new paragraph.

```
Here is one paragraph with lengthly text.

Here is another.
```

Here is one paragraph with lengthly text.

Here is another.

---

## Footnotes

```
Here is a simple footnote,[^1] and here is a longer one.[^named-note]

Then at the bottom of your post...

[^1]: This is the first footnote.

[^named-note]: Here is another one.
```

Here is a simple footnote,[^1] and here is a longer one.[^named-note]

Then at the bottom of your post...

---

## Quotes

```
> This is a quote.
>
> It can span multiple lines!
```

> This is a quote.
>
> It can span multiple lines!

---

## Images

```
![Cheatsheet img example](https://i.ibb.co/Vvh17pr/3jxqrKP.jpg)

<img src="https://github.com/iamvictorli.png" alt="Victor Li" width="260" height="260"/>

```

![Cheatsheet img example](https://i.ibb.co/Vvh17pr/3jxqrKP.jpg)

<img src="https://github.com/iamvictorli.png" alt="Victor Li" width="260" height="260"/>

---

## Tables

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |
```

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

---

## Displaying code

````
```javascript
const example = "hello!";
console.log(example);
```
````

```javascript
const example = 'hello!'
console.log(example)
```

_For language specific syntax highlighting, specify the language at the beginning of the code block._

---

## Dropdown

```
<details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details>
```

<details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details>

---

## Youtube Embed

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/8IHhvkaVqVE" title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>

---

## Valtown

```
<iframe width="100%" height="400px" src="https://www.val.town/embed/victorli/aigreeting" title="Val Town" frameborder="0" allow="web-share" allowfullscreen></iframe>
```

<iframe width="100%" height="400px" src="https://www.val.town/embed/victorli/aigreeting" title="Val Town" frameborder="0" allow="web-share" allowfullscreen loading="lazy"></iframe>

---

## Support iframe prototypes

- [ ] Repl to run typescript/javascript and install dependencies. [runkit](https://runkit.com/home), [playcode.io](https://playcode.io/), [repl.it](https://replit.com/), or stick with [valtown](https://www.val.town/), would be nice to support url imports?
- [ ] Cloud IDE to run quick react/web prototype, use [stackblitz](https://stackblitz.com/), [codesandbox](https://codesandbox.io/), [gitpod](https://www.gitpod.io/)
- [ ] [Expo Snack](https://github.com/expo/snack) to show off React Native projects
- [ ] Analytics with [Plausible](https://plausible.io/) self hosting
- [ ] Put RSS feed?

---

[^1]: This is the first footnote.

[^named-note]: Here is another one.
