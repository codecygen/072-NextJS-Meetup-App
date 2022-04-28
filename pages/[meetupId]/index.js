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

export default MeetupDetails;