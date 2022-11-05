import React, { useState, useEffect,  } from "react";
import { Vehicle, VehicleFilter,  } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import  Filter  from "./components/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};

export interface IContext {
vehicles: Vehicle[],
setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>
}

export const AppContext = React.createContext<IContext | null>(null)

export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    // const value: IContext = {vehicles, setVehicles}


    useEffect(() => {
        const data = VehicleApi.search(initialFilter);
      setVehicles(data);
    }, []);

    return (
        <>
    
            <Filter onChange={setVehicles} />
            <Table vehicles={vehicles} />
           
        </>
        
    
    );
}
