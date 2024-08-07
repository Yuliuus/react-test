import AppBar from "../AppBar/AppBar";
import officers from "../officers.json";
import OfficersList from "../OfficersList/OfficersList";


// const firstPilot = {
//     "id": 1,
//     "name": "Jacob Mercer",
//     "rank": "Commander",
//     "age": 42,
//     "spec": "Fighter Pilot",
//     "skills": ["Combat Maneuvers", "Navigation", "Strategic Planning"],
//     "status": "Active",
//   };

export default function App() {
  return (
    <div>
      <AppBar />
      <OfficersList items={officers}/>
    </div>
  );
}
