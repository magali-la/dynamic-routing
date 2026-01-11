# React Dynamic Routing Lab

## Description
**This project demonstrates dynamic routing, protected routes, and state management in React using React Router and TypeScript. This lab was created as part of an assignment in Per Scholas Full Stack Engineering Bootcamp.**

Live Site: https://lab10-4.netlify.app/


### Tech Stack
TypeScript
JavaScript
CSS

React
React Router

Vite
Netlify

## Features
1. Home, Blog Index, and Blog Post pages with dummy content
2. List of all available Blogs to read
3. Dynamic rendering of post content using URL slug with error fallback content
4. Protected Admin Dashboard accessible to authenticated user or redirect to login page if not authenticated
5. Conditional nav bar with additional links based on login status

## Process & Reflections
* Created mock blog dataset in `posts.ts` with an id, slug, title, and sample content and defined types for the post shape
* Set up pages and routes with React Router for the home, blog, and blog post pages, nested under the `/blog` route
* Mapped blog post data into the Blog Index page, creating relative links to individual posts rendering the title and content using slugs with `useParams`
* Implemented conditional fallback content for invalid slugs and provided link for user to go back to the Blog Index page
* Built a demo authentication system with `AuthContext` and a custom `useAuth` state to manage the `isAuthenticated` state
* Created a `ProtectedRoute` component with `Navigate` and `Outlet` to restrict access to the Admin page and redirect to login page for manually entered `/admin` URL
* Wrote conditional nav bar link rendering, with admin link and logout button based on auth state
* Added logout functionality resetting auth state and redirecting users to the Home page
* Styled the nav bar and elements for a simple demo interface

### Challenges
One of the biggest challenges was understanding relative vs. absolute paths and navigating TypeScript errors while using AuthContext. Using a custom useAuth hook helped ensure components accessing the auth state are wrapped by the AuthProvider and provided an error. This specifically helped avoid using non-null assertions when importing the AuthContext and reduced TypeScript errors. Even though the demo app is small, this helped understand how to set up AuthContext in a scalable way.

## Resources
For react router v7 setup
https://www.robinwieruch.de/react-router/

For useAuth custom hook
https://hhpendleton.medium.com/useauth-265512bbde3c

For protected routes
https://www.robinwieruch.de/react-router-private-routes/
https://medium.com/@sustiono19/how-to-create-a-protected-route-in-react-with-react-router-dom-v7-6680dae765fb

For use in Protected Route
https://www.geeksforgeeks.org/reactjs/difference-between-link-and-navigate-component-in-react-router/