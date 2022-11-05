import React, {  FC, useEffect, useState } from 'react';
import { VehicleApi } from '../data/vehicles/api';
import { Vehicle, vehicleTypes, vehicleTypeTitles } from '../data/vehicles/contracts';

interface IProps {
    onChange: React.Dispatch<React.SetStateAction<Vehicle[]>>
}


const Filter: FC<IProps> = ({onChange}) => {

const [vehicleTitle, setvehicleTitle] = useState<string | null>(null)
const [vType, setVType] = useState<string | null>(null)


 useEffect(() => {

 const type: number = vType == null ? -1 : +vType;
    
 const filtred = VehicleApi.search({type: vehicleTypes[type], title: vehicleTitle || ''})
   onChange(filtred)

 }, [vehicleTitle, vType])   
   
    return (
        <div>
            <input type="search" onChange={(e) => setvehicleTitle(e.target.value)} />
            <select onChange={e => setVType(e.target.value)}>
            <option value={-1}>Все</option>
                {
                    vehicleTypes.map((type) => {
                        return <option value={type}>
                            {vehicleTypeTitles[type]}
                        </option>
                    }
                    )
                }
               
            </select>
        </div>
    );
};

export default Filter;
