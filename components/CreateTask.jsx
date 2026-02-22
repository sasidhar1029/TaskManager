import { useState } from "react";
import { createTask } from "../services/api";

export default function CreateTask({ setPage }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        completed: false
    });

    const change = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const submit = async () => {
        await createTask(form);
        setPage("tasks");
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Create Task</h2>

            <input name="title" placeholder="Title" value={form.title} onChange={change} />
            <br />

            <input name="description" placeholder="Description" value={form.description} onChange={change} />
            <br />

            <label>
                Completed
                <input type="checkbox" name="completed" checked={form.completed} onChange={change} />
            </label>

            <br />
            <button onClick={submit}>Save</button>
        </div>
    );
}