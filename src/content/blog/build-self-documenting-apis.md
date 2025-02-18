---
title: Build Self-Documenting APIs with Hono, Zod, and OpenAPI
description: Build Self-Documenting APIs with Hono, Zod, OpenAPI
---

One of the biggest problems with API Documentation is keeping documentation synced with the underlying code. Over time as APIs evolve (endpoints change, request structures shift, responses get updated), static documentation lags behind often. The ideal solution is have documentation as a direct extension of the API implementation.

By leveraging the [combination of Zod, OpenAPI, and Hono](https://hono.dev/examples/zod-openapi), we can generate API documentation and implement endpoints in tandem, ensuring documentation never drift out of sync. In fact, I've found myself writing documentation first and then implementing the API logic afterward, which is usually the other way around.

I stumbled upon a [video](https://www.youtube.com/watch?v=sNh9PoM9sUE) in my feed that demonstrated how easy it can be to ensure documentation and code never fall out of step using **@hono/zod-openapi**. After [experimenting with it myself](https://github.com/iamvictorli/receipt-processor), I was impressed by how smoothly it all worked.

In this post, We'll explore how to build type-safe self-documenting APIs using [Zod OpenAPI Hono](https://hono.dev/examples/zod-openapi). Let's break down each component.

## What is OpenAPI?

[OpenAPI](https://www.openapis.org) is a specification for describing RESTful APIs. With OpenAPI, aspects of the API are defined, including:

- Endpoints (paths)
- HTTP methods (GET, POST, PUT, DELETE, etc.)
- Query and path request parameters
- Request/response schemas
- Authentication requirements

By adhering to OpenAPI specs, ensures that anyone can understand how to interact with the API.

## What is Zod?

[Zod](https://zod.dev) is a TypeScript-first schema declaration and validation library. It allows for writing schemas that both validate your data and provide type information to TypeScript.

## Combining Them: Zod-to-OpenAPI

The magic happens with [zod-to-openapi](https://github.com/asteasolutions/zod-to-openapi), a library that bridges Zod schemas with the OpenAPI-compliant specification. Traditionally, a separate OpenAPI YAML or JSON file must be manually maintained as implementation changes. With **zod-to-openapi**, OpenAPI specs can be generated directly with the Zod schemas.

What I also love is it type checks the openapi examples as well

## Hono + Zod OpenAPI

[Hono](https://hono.dev/) is a fast, lightweight web framework. The **@hono/zod-openapi** integration, built on top of **zod-to-openapi**, lets you define routes, validate requests at runtime and typecheck responses, while automatically generating OpenAPI documentation.

### The Development workflow

1. **Define Schemas and Routes Route**: Write Zod schemas for both request and responses. Include clear descriptions and examples, which will be part of the generated documentation.
2. **Implement Handlers**: Implement response aligned with the response schema. Hono with **@hono/zod-openapi**, ensures **typed** request validation and **typed** response validation.
3. **Generate Documentation**: With all the schemas already defined, zod-to-openapi automatically produces your OpenAPI specification. You can then serve the documentation and explore it using tools like Swagger UI or [Scaler Docs](https://scalar.com/).

By following these steps, you’ll end up with an API that is inherently self-documenting, type-safe, and always in sync with its documentation.

## Example API

- Implementation of an API, **users/:id**
- Generated OpenAPI documentation: https://victorli-honozodopenapi.web.val.run/reference

<iframe width="100%" height="600px" src="https://www.val.town/embed/victorli/honozodopenapi" title="Val Town" frameborder="0" allow="web-share" allowfullscreen></iframe>

## Resources

- [Example Repo](https://github.com/iamvictorli/receipt-processor) using **Hono Zod OpenAPI**
- [Free and quick Tutorial for Zod](https://www.totaltypescript.com/tutorials/zod)
