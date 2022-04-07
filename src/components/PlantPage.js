import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants,setPlant]=useState([])
  const [search, setSearch] = useState('')


  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(plantData=>setPlant(plantData))
  },[])


  function addPlant(plant){
    setPlant([...plants,plant])
    
  }
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
