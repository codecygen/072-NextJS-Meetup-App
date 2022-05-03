// our-domain.com/[meetupId]
// Next-Dynamic-Routing-Folder-Method
// here index.js can also be put inside [meetupId]
// and can be used for dynamic routing.

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail
            title="First Meetup"
            image="https://cdn.pixabay.com/photo/2014/07/01/13/52/toronto-381281_960_720.jpg"
            address="111 Wellesley St W, Toronto, ON M7A 1A2"
            description="This is our first meetup!"
        />
    );
};

// Next-getStatic-Paths-Needed-If-File-Is-Dynamic-Component-File-And-getStaticProps-Function-Is-Used
// This section is needed because, Next.js needs to pregenerate the dynamic page paths.
// and needed if we are also using getStaticProps functions Here we have to list all dynamic paths.
export const getStaticPaths = async () => {
    return {
        // fallback parameter tells Next.js what to do in case the all paths are not
        // specified. If you set it to false, it will not generate any other page that
        // are outside of what is described in the paths section and the app will throw
        // a 404 error.
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },

            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
};

// Next-Data-Fetching-For-Static-Pages-getStaticProps()-SSG-Static-Site-Generation
// Next-Getting-Access-To-Dynamic-Link-Params-In-getStaticProps()-SSG-Static-Site-Generation-Alternative-To-useRouter-Hook-Dynamic-Link-Parameter-Extraction
export const getStaticProps = async (context) => {
    // fetch data for a single meetup

    // Next-Getting-Access-To-Dynamic-Link-Params-In-getStaticProps()-SSG-Static-Site-Generation-Alternative-To-useRouter-Hook-Dynamic-Link-Parameter-Extraction
    // Here, we cannot use useRouter hook to access dynamic link parameter because,
    // This function is not a component function. So we have to use the alternative here.
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: 'https://cdn.pixabay.com/photo/2014/07/01/13/52/toronto-381281_960_720.jpg',
                id: 'm1',
                title: 'First Meetup',
                address: '111 Wellesley St W, Toronto, ON M7A 1A2',
                description: '111 Wellesley St W, Toronto, ON M7A 1A2'
            }
        },

        revalidate: 1
    };
};

export default MeetupDetails;