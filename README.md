Next.js Meetup App, new meetup can be added and displayed.

For this app, mongodb has to be installed as it will use MongoDB Atlas.

Env variables used. See notes to understand how to put an env file.

Rule,
You can use "_app.js" file to wrap a component which is expected to appear in all of your app. For example you want to include a navbar you can add it in here. For more detail search for "Next-Including-Special-Component-To-Wrap-All-Components" keyword.

Keywords:
- Next-Dynamic-Routing-Folder-Method
- Next-Including-Special-Component-To-Wrap-All-Components
- Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
- Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
- Next-Getting-Access-To-Dynamic-Link-Params-In-getStaticProps()-SSG-Static-Site-Generation-Alternative-To-useRouter-Hook-Dynamic-Link-Parameter-Extraction
- Next-getStatic-Paths-Needed-If-File-Is-Dynamic-Component-File-And-getStaticProps-Function-Is-Used
- Next-Data-Fetching-For-Static-Pages-ServerSideProps()-SSR-Server-Side-Rendering
- Next-Backend-Files-Folder-For-API-Functions-Reserved-Name-Folder-Called-api-Folder
- Next-MongoDB-Atlas
- Next-Env-Variables-For-Server-Side
- Next-MongoDB-Insert-Data

Highlights:
- getStaticProps is good for SEO. getStaticProps is a reserved name.Next.js will look for this function and executes it during the pre-rendering process and prepare the HTML file with data instead of rendering it inside the client's browser.

- getServerSideProp is a reserved name. Next.js will look for this function and executes it on the server side. This function is good if your database is updating really frequently and in case you want to reach out to request and response's from the server you need this function. HTML data will be loaded on the client which will be also good for SEO.

- getStaticPaths is a reserved name. This section is needed because, Next.js needs to pregenerate the dynamic page paths and needed if we are also using getStaticProps functions. Under this function, we have to list all dynamic paths.

- Special Backend Folder For API Routes: This folder adds API routes and endpoints, Next.js needs a special folder under the "pages" folder. The name of the file must be named as "api" folder. Under that folder, we can add javascript files which can act as path segments in the URL. Remember that the files under this folder will be treated as backend files so we can use special keys under this path if needed.

- MongoDB Atlas is used in this project.

- Environmental variable file is named as ".env.local" and stored in the root directory of the project. The file is excluded in ".gitignore" and the variables inside can only be accessed by the Backend files folder "/pages/api/*". The example content of the .env.local file is given down below.

```
// .env.local
MONGODB_ATLAS_USER="example-user"
MONGODB_ATLAS_PASSWORD="example-pass"
```