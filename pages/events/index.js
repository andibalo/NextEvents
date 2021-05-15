import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
