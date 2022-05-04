// our-domain.com

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://cdn.pixabay.com/photo/2014/07/01/13/52/toronto-381281_960_720.jpg',
        address: '111 Wellesley St W, Toronto, ON M7A 1A2',
        description: 'This is our first meetup!'
    },

    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://cdn.pixabay.com/photo/2015/11/07/11/00/toronto-city-hall-1030731_960_720.jpg',
        address: '100 Queen St W, Toronto, ON M5H 2N2',
        description: 'This is our second meetup!'
    }
];

const HomePage = props => {

    return (
        // Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
        <MeetupList meetups={props.meetups} />
    );
};

// Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
// getStaticProps is a reserved name. Next.js will look for this
// function and executes it during the pre-rendering process.
export const getStaticProps = async () => {
    // fetch data from an API

    return {
        props: {
            meetups: DUMMY_MEETUPS
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