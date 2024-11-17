---
title: Setting up Web Analytics
description: Setting up Web Analytics
---

When it came to setting up web analytics for my website, I ended using [Umami](https://umami.is/).

You can view my site's public analytics here: [iamvictorli.com analytics](https://cloud.umami.is/share/Q7sqwpDZFsrTdDeu/iamvictorli.com)

Why Umami:

- **Free tier**: Generous enough for personal and small projects.
- **Easy setup**: minimal effort to setup. Add website and add a script tag.
- **Open source**: [Github Repo](https://github.com/umami-software/umami)

## My Integration Code

Here's how I integrated Umami. The snippet dynamically loads the analytics script only in production mode:

```astro
---
const isProd = import.meta.env.PROD
---

{
  isProd ? (
    <script is:inline src="https://cloud.umami.is/script.js" data-website-id="b6fcbcca-55fc-44da-94b3-f160f56023ae" />
  ) : null
}
```

[Code in my project's repo](https://github.com/iamvictorli/iamvictorli.com/blob/d317afb3c3626b0fdf0774d88bb4e2b08d1f61b5/src/layouts/BaseLayout.astro#L278-L286)

## Self-Hosting: A Flexible Alternative

Both Umami and Plausible support self-hosting, which can be a great option if you want:

- **Full control**: Complete ownership over your data and server environment.
- **Cost efficiency**: Reduced long-term costs by leveraging your own hosting.

### Self-Hosting Resources for Umami:

- https://www.youtube.com/watch?v=Z4KPslyoxyM

### Self-Hosting Resources for Plausible:

- https://stephenhaney.com/2023/self-hosting-plausible-web-analytics/
- https://flaviocopes.com/how-to-self-host-plausible-analytics/
- https://www.youtube.com/watch?v=p1YnUobgngo

List of great analytics with Astro: https://github.com/Destiner/astro-analytics
