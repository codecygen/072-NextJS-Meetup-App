// our-domain.com/new-meetup

// Next-Adding-Head-Tag-To-Project-For-SEO
import Head from "next/head";

// Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    // Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
    const router = useRouter();

    // Next-MongoDB-Insert-Data
    // This is the component file page for forms. Once entered, it should
    // send new data to database
    const addMeetupHandler = async (enteredMeetupData) => {

        // Next-MongoDB-Insert-Data
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Next-MongoDB-Insert-Data
        const data = await response.json();

        console.log(data);

        // Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
        // with push() method we can go back.
        // with replace() method we cannot go back.
        router.replace('/');
    };

    return (
        <>
            {/* Next-Adding-Head-Tag-To-Project-For-SEO */}
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Add a new meetup here!" />
            </Head>

            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
};

export default NewMeetupPage;