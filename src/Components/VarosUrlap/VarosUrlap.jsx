import React from "react";

export default function VarosUrlap() {
    return ( 
    <form>
        <label>
            Város:
             <input type="text" name='varos' />
        </label>
        <button type="submit">Lekérdez</button>
    </form> )
}