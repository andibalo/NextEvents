import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";
import { useRouter } from "next/router";

const AllEventsPage = (props) => {
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList items={props.events} />
    </div>
  );
};

export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
