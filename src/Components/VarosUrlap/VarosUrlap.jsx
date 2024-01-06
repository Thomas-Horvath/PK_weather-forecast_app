import React from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap"

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
        <Form onSubmit={handleSubmit} className="m-5">
            <FormGroup>
                <Label for="varosInput" > Város </Label>
                <Input
                    type="text"
                    name='varos'
                    id=" varosInput"
                    placeholder="Város"
                    value={varos}
                    onChange={handleVarosChange} />
            </FormGroup>
            <Button type="submit" color="warning">Lekérdez</Button>
        </Form>)
}