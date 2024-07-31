import './App.css';
import Header from './Components/Header'
import EventsRail from './Components/EventsRail';
import EventTile from './Components/EventTile'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import LoginPage from './Components/LoginRegPage';
import CreateEventForm from './Components/CreateEventForm';
import ProfileForm from './Components/ProfileForm';
import userData from './userData.json';
import events from './resources/skySocial.json';
import MyEvents from './Components/MyEvents';

function App() {
  const eventTiles = events.events.map((event) => {
                        return <EventTile title={event.eventTitle} image={event.image} tags = {event.tags}/>
                    });

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element = {<Header/>}>
          <Route path="/" element={
            <EventsRail>
                {eventTiles}
          </EventsRail>
          }/>
          <Route path="/MyEvents" element={<MyEvents/>}/>
          <Route path="/CreateEvent" element={<CreateEventForm/>}/>
          <Route path="/Profile" element={<ProfileForm user={userData.users[1]}/>}/>
          <Route path="/Search" element={<h1>Search Bar Goes here</h1>}/>
        </Route>
        <Route path="/Login" element={<LoginPage displayLoginRegPage={true}/>}/>
        <Route path="/Registration" element={<LoginPage displayLoginRegPage= {false}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
