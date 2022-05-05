// Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  // Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
  const router = useRouter();

  const showDetailsHandler = () => {
    // Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook
    // with push() method we can go back.
    // with replace() method we cannot go back.
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* Next-ReRouting-To-Other-Dynamic-Or-Static-Link-useRouter-Hook */}
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
