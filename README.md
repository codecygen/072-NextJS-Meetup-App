Next.js Meetup App, new meetup can be added and displayed.

Rule,
You can use "_app.js" file to wrap a component which is expected to appear in all of your app. For example you want to include a navbar you can add it in here. For more detail search for "Next-Including-Special-Component-To-Wrap-All-Components" keyword.

Keywords:
- Next-Dynamic-Routing-Folder-Method
- Next-Including-Special-Component-To-Wrap-All-Components
- Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
- Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
- Next-Data-Fetching-For-Static-Pages-ServerSideProps()-SSR-Server-Side-Rendering

Highlights:
- getStaticProps is good for SEO. getStaticProps is a reserved name.Next.js will look for this function and executes it during the pre-rendering process and prepare the HTML file with data instead of rendering it inside the client's browser.

- getServerSideProp is a reserved name. Next.js will look for this function and executes it on the server side. This function is good if your database is updating really frequently and in case you want to reach out to request and response's from the server you need this function. HTML data will be loaded on the client which will be also good for SEO.