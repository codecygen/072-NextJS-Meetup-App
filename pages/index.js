// our-domain.com

// This component file fires up when we are on the main page.
// getStaticProps() function will return props that will display the entries that we want to show in main page.
// props can be accessed from component function "HomePage" and then renders the page properly.

// Next-Adding-Head-Tag-To-Project-For-SEO
import Head from 'next/head';


// Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = props => {

    return (
        <>
            {/* Next-Adding-Head-Tag-To-Project-For-SEO */}
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse the available meetups!" />
            </Head>

            {/* Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation */}
            <MeetupList meetups={props.meetups} />
        </>
    );
};

// Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
// getStaticProps is a reserved name. Next.js will look for this
// function and executes it during the pre-rendering process.
export const getStaticProps = async () => {
    // fetch data from an API

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    const mongoUser = process.env.MONGODB_ATLAS_USER;
    const mongoPassword = process.env.MONGODB_ATLAS_PASSWORD;

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    const meetupsDatabase = 'meetups';

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    // The link is taken from MongoDB Atlas and the content is adjusted
    const mongoAtlasLink = `mongodb+srv://${mongoUser}:${mongoPassword}@meetup-list.jagjq.mongodb.net/${meetupsDatabase}?retryWrites=true&w=majority`;

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    // Since connect returns a promise, parent function should be an async function
    const client = await MongoClient.connect(mongoAtlasLink);

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    // We get the meetups database here. If it does not exist, it will be created on the fly.
    const db = client.db();

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    const meetupsCollection = db.collection('meetups');

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    const fetchedMeetups = await meetupsCollection.find().toArray();

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    client.close();

    return {
        props: {
            // description is not necessary to be shown here.
            meetups: fetchedMeetups.map(fetchedMeetup => ({
                title: fetchedMeetup.title,
                address: fetchedMeetup.address,
                image: fetchedMeetup.image,
                id: fetchedMeetup._id.toString()
            }))
        },
        // revalidate property allows incremental static generation
        // when you write revalidate: 10 it means the page will be regenerated
        // every 1 seconds statically.
        revalidate: 1
    };
};

// // Next-Data-Fetching-For-Static-Pages-ServerSideProps()-SSR-Server-Side-Rendering
// // getServerSideProp is a reserved name. Next.js will look for this function and
// // executes it on the server side. This function is good if your database is updating
// // really frequently and in case you want to reach out to request and response's from the server
// // you need this function.
// export const getServerSideProps = async (context) => {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }

//         // revalidate is not a return object key for this type of rendering
//     };
// };

export default HomePage;