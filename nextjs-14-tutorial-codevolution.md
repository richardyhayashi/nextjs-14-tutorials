# Next.js 14 Tutorial
by `Codevolution`

YouTube: `https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI`

Source: 'https://github.com/gopinav/Next.js-14-Tutorials'

01. Introduction
02. Hello World
03. Project Structure
04. Before We Start
05. Routing
06. Nested Routes
07. Dynamic Routes
08. Nested Dynamic Routes
09. Catch all Segments
10. Not Found Page
11. File Colocation
12. Private Folders
13. Route Groups
14. Layouts
15. Nested Layouts
16. Route Group Layout
17. Routing Metadata
18. title Metadata
19. Link Component Navigation
20. Active Links
21. Navigating Programmatically
22. Templates
23. Loading UI
24. Error Handling
25. Recovering from Errors
26. Handling Errors in Nested Routes
27. Handling Errors in Layouts
28. Parallel Routes
29. Unmatched Routes
30. Conditional Routes
31. Intercepting Routes
32. Parallel Intercepting Routes
33. Route Handlers
34. Handling GET Request
35. Handling POST Request
36. Dynamic Route Handlers
37. Handling PATCH Request
38. Handling DELETE Request
39. URL Query Parameters
40. Redirects in Route Handlers
41. Headers in Route Handlers
42. Cookies in Route Handlers
43. Caching in Route Handlers
44. Middleware
45. Rendering
46. Client-side Rendering (CSR)
47. Server-side Rendering (SSR)
48. Suspense for SSR
49. React Server Components (RSC)
50. Server and Client Components
51. RSC Rendering Lifecycle
52.
53.
54.
55.
56.
57.
58.
59.
60.



Notes:

## Application

### Create NextJS App

`$ npx create-next-app@latest .`

* TypeScript: yes, ESLint: yes, Tailwind CSS: yes, `src/`: yes, App Router: yes, Customize import alias: no

### Run NextJS App

`$ npm run dev`

## NextJS

React Server Components (RSC)

* Server Components
* Client Components

### Colocation

1. In the same directory in 'app/' not named page.tsx.
2. Or in the components directory in 'components/'.

### Private Folders

`_private-folder`

N.B.: Cannot access in browser.
* replace '_' with %5F to allow underscore in the URL.

### Route Groups

`(admin)`

### Layouts vs Templates

???

### Special Files

* layout.tsx
* template.tsx
* error.tsx
* loading.tsx
* not-found.tsx
* page.tsx

### Routing

* Route definition
* Pages & Layouts
* Dynamic Routes
* Route Groups
* Linking & Navigation
* Handling errors in routes
* Parallel & Intercepting routes
* Route handlers & middleware