// This component file fires up when we click on "Show Details" buttons.
// This is how this file works.
// First getStaticPaths() function will return the _id of each entry from database
// It will be used as a path to reach the details page
// http://localhost:3000/6273420b575db6048cc5d98b
// This id can be reached from getStaticProps() function
// const meetupId = context.params.meetupId;
// By using this info, getStaticProps() function will return props
// values for the specific _id entry. Once it fetched the data of the specified _id
// props can be accessed from component function "MeetupDetails" and then renders the page properly.


// our-domain.com/[meetupId]
// Next-Dynamic-Routing-Folder-Method
// here index.js can also be put inside [meetupId]
// and can be used for dynamic routing.

// Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = props => {
    return (
        <MeetupDetail
            title={props.meetupData.title}
            image={props.meetupData.image}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
};

// Next-getStatic-Paths-Needed-If-File-Is-Dynamic-Component-File-And-getStaticProps-Function-Is-Used
// This section is needed because, Next.js needs to pregenerate the dynamic page path names.
// and needed if we are also using getStaticProps functions Here we have to list all dynamic paths.
export const getStaticPaths = async () => {

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
    // This returns only the id field of the entire collection as an array
    const fetchedMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    client.close();

    return {
        // fallback parameter tells Next.js what to do in case the all paths are not
        // specified. If you set it to false, it will not generate any other page that
        // are outside of what is described in the paths section and the app will throw
        // a 404 error.
        fallback: false,
        paths: fetchedMeetups.map(fetchedMeetup => ({
            params: {
                // Here the meetupId will be used as path for "Show Details" button
                // It will fetch the _id key of MongoDB database and use it as a path
                // http://localhost:3000/6273420b575db6048cc5d98b
                meetupId: fetchedMeetup._id.toString()
            }
        }))
    };
};

// Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
// Next-Getting-Access-To-Dynamic-Link-Params-In-getStaticProps()-SSG-Static-Site-Generation-Alternative-To-useRouter-Hook-Dynamic-Link-Parameter-Extraction
export const getStaticProps = async (context) => {
    // fetch data for a single meetup

    // Next-Getting-Access-To-Dynamic-Link-Params-In-getStaticProps()-SSG-Static-Site-Generation-Alternative-To-useRouter-Hook-Dynamic-Link-Parameter-Extraction
    // Here, we cannot use useRouter hook to access dynamic link parameter because,
    // This function is not a component function. So we have to use the alternative here.
    // context.params.meetupId accesses the meetupId inside getStaticPaths() function
    const meetupId = context.params.meetupId;

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
    // This filters the collections and only returns the object of the matching id.
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    // Next-HTTP-Request-Treated-As-Backend-Code-And-Hidden-From-Client-For-Database-Request-If-Put-Inside-getStaticProps()-Or-getServerSideProps()-Or-getStaticPaths()
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        },

        revalidate: 1
    };
};

export default MeetupDetails;