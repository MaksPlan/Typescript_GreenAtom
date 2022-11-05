import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, vehicleTypeTitles, } from "../data/vehicles/contracts";

interface IPropsItem {
    vehicle: Vehicle,
    number: number,
}

const TableItem: React.FC<IPropsItem> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
          
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td> 
             <td>{vehicleTypeTitles[vehicle.type] }</td>
        </tr>
    );
};

interface IProps {
    vehicles: Vehicle[]
    
}

export const Table: React.FC<IProps> = ({ vehicles }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Цена, ₽</th>
                <th>Tип ТС</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((x, i) => (
                <TableItem key={x.id} number={i + 1} vehicle={x} />
            ))}
            </tbody>
        </table>
    );
};
