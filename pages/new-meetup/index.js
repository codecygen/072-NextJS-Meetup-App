// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {

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
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};

export default NewMeetupPage;