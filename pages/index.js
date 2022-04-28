// our-domain.com

import { useEffect, useState } from 'react';

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

const HomePage = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // Fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return (
        <MeetupList meetups={loadedMeetups} />
    );
};

export default HomePage;