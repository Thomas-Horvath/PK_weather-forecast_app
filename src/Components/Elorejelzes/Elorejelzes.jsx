import React from "react";
import { Table } from 'reactstrap';

export default function Elorejelzes({ idojarasInfo }) {
    if (idojarasInfo === null) {
        return <div>Válassz egy várost!</div>
    }
    const napiAdatok = idojarasInfo.idojaras.daily;
    const mertekegysegek = idojarasInfo.idojaras.daily_units;
    const SorokJsx = [];
    for (let i = 0; i < 7; i++) {
        SorokJsx.push(
            <tr>
                <th scope="row">
                    {napiAdatok.time[i]}
                </th>
                <td>
                    {napiAdatok.temperature_2m_min[i]}  {mertekegysegek.temperature_2m_min}
                </td>
                <td>
                    {napiAdatok.temperature_2m_max[i]} {mertekegysegek.temperature_2m_max}
                </td>
                <td>
                    {napiAdatok.rain_sum[i]} {mertekegysegek.rain_sum}
                </td>
            </tr>
        )
    }
   

    return (
        <div className="elorejelzes">
           {/*  {JSON.stringify(idojarasInfo)} */}
            <Table
                dark
                hover
                responsive
                striped
            >
                <thead>
                    <tr>
                        <th>
                            Dátum
                        </th>
                        <th>
                            Minimum hőmérséklet
                        </th>
                        <th>
                            Maximum hőmérséklet
                        </th>
                        <th>
                            Csapadék
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {SorokJsx}
                </tbody>
            </Table>
        </div>
    );
}