# Web application

_Take me back to the [home](../README.md#learning-outcomes) page!_

- [Web application](#web-application)
  - [Description](#description)
    - [Learning outcome](#learning-outcome)
    - [Clarification](#clarification)
  - [Implementation](#implementation)
  - [Relevant questions](#relevant-questions)
    - [When is an application 'user-friendly'?](#when-is-an-application-user-friendly)
    - [What does a 'full-stack web application' encompass?](#what-does-a-full-stack-web-application-encompass)
      - [Fullstack applications](#fullstack-applications)
    - [What are Javascript frameworks?](#what-are-javascript-frameworks)
    - [When should one use a Javascript framework?](#when-should-one-use-a-javascript-framework)
    - [What is an ORM?](#what-is-an-orm)
    - [What is asynchronous communication and what issues can arise from it?](#what-is-asynchronous-communication-and-what-issues-can-arise-from-it)
    - [Why did we choose Next.js as our JavaScript framework?](#why-did-we-choose-nextjs-as-our-javascript-framework)

## Description

<p align="center">
  <img src=https://www.capthronetechnologies.com/assets/images/web-application-development.png alt="Header image by 'Capthrone Technologies Inspiring Minds'" width=500 height=500>
</p>

### Learning outcome

> You design and build user-friendly, full-stack web applications.

### Clarification

_User friendly:_ You apply best practices when creating user interfaces and basic user experience testing and development techniques.

_Full-stack:_ You design and build a full stack application using a commonly accepted front end Javascript framework and back end application implementing relevant communication protocols, persistence of data by usage of ORM and addressing asynchronous communication issues.

## Implementation

Even though the concept of a user-friendly, full-stack web application is relatively simple. Working out the concept in a validated manner can come with it's problems. Such as: how does one make sure an application is 'user-friendly'? To ensure the 'friendliness' of our application we implemented the following solutions:

- Look at other 'good' implementation as a source of inspiration,
- Validate with others in regard to the frontend of our web-application.

It is important to note that taking inspiration from others is a meaningful way to not only get an improved UI/UX but it is also a very valuable opportunity to learn good habits which other web-applications implement. This creates an environment in which the user automatically feels connected to the application due to systematic consistencies such as a 'home' navigational button in the top-left, clicking the logo returns to the home page, top-right may contain a 'user' button, dropdown or other reference etc.

## Relevant questions

### When is an application 'user-friendly'?

An application is considered 'user-friendly' when it is simple for users to understand and use. The interface should feel intuitive and require very little to no explanation. The navigation between pages should be fluent and logical, essentially the user should feel 'guided' through the application by intuition only, this provides a positive user experience (UX).

### What does a 'full-stack web application' encompass?

A 'full-stack web application' should encompass all aspects of an application. The entire depth of a computer system application should be covered. In todays terms this essentially boils down to

- A frontend
- A backend (sometimes split into)
  - API (for logic)
  - Database (for data)

#### Fullstack applications

Some implementation examples of fullstack projects for both the individual and group projects

- ['TeamFinder' - Group project (Organization page)](https://github.com/S3-IO-Dev)

  - [Mobile application front-end (React Native)](https://github.com/S3-IO-Dev/S3-DB-IO-Front-end#s3_db_io)
  - [Web API (ASP.NET Web API using EF)](https://github.com/S3-IO-Dev/S3_DB_IO#project-name)

- ["SpottedCharts" - Individual project (Organization page)](https://github.com/S3-Software-IP)
  - [User front-end (ReactJS)](https://github.com/S3-Software-IP/monorepo/tree/main/frontend)
  - [Spotify Snapshot API (ASP.NET Web API using EF)](https://github.com/S3-Software-IP/monorepo/tree/main/backend)

### What are Javascript frameworks?

A Javascript framework is essentially a pre-built extension of the [Javascript language](https://developer.mozilla.org/en-US/docs/Web/JavaScript) whose goal it is to simplify web-development.[^1] They provide a set of tools to assist in 'rudimentary' tasks, handling data, navigation between pages, user interfacing etc.

### When should one use a Javascript framework?

In todays ICT ecosystem there are very few reasons as NOT to use a javascript framework. When building complex applications more robust frameworks such as React, Angular & Ember. If you're just making a small application as proof of concept or for a personal project one might be more inclined to use a minimalist framework such as Alpine.js, Sling.js or Next.js.

### What is an ORM?

An ORM (Object-Relational Mapping) is a technique in which data within the database is mapped to entities/objects within a program. It allows developers to work with objects rather than raw SQL queries.

### What is asynchronous communication and what issues can arise from it?

As said by [MDN](https://developer.mozilla.org/): [^2]

> "Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result."

### Why did we choose Next.js as our JavaScript framework?

- **Seamless Development:**
  Next.js simplifies frontend development, making it more efficient and
  enjoyable for our team.

- **Server-Side Rendering:**
  The built-in server-side rendering capabilities enhance performance and SEO,
  ensuring a great user experience.

- **Comprehensive Documentation:**
  Next.js provides robust documentation and interactive tutorials, making it easy
  to learn and work with.

These reasons make React with Next.js the ideal choice for crafting our frontend
application.

[^1]: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks
[^2]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
