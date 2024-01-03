import React from "react";
import './VarosUrlap.css';

export default function VarosUrlap({ updateVaros }) {

    const [varos, setVaros] = React.useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        updateVaros(varos)
    }

    const handleVarosChange = (event) => {
        setVaros(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Város:
                <input
                    type="text"
                    name='varos'

                    value={varos}
                    onChange={handleVarosChange} />
            </label>
            <button type="submit" >Lekérdez</button>
        </form>)
}