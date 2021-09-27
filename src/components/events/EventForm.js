import  { useState } from 'react';

function EventForm({addEvent}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const createEvent = (e) => {
        e.preventDefault();
        addEvent({title, description});
    }

    return (
        <form className="form-group" onSubmit={createEvent}>
        <label className="control-label">Title:
        <input type="text" className="form-control" 
        value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="control-label">Description:
        <input type="text" className="form-control" 
        value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
    )
}

export default EventForm;