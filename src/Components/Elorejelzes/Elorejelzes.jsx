import React from "react";

export default function Elorejelzes({ idojarasInfo }) {
    if (idojarasInfo === null) {
        return <div>Válassz egy várost!</div>
    }
    return <div className="elorejelzes">{ JSON.stringify(idojarasInfo)}</div>
}