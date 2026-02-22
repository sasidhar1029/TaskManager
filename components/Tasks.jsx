import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    const load = async () => {
        const res = await getTasks();
        setTasks(res.data);
    };

    useEffect(() => { load(); }, []);

    const remove = async (id) => {
        await deleteTask(id);
        load();
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Tasks</h2>

            {tasks.map(t => (
                <div key={t.id} style={{ border: "1px solid #ddd", margin: 10, padding: 10 }}>
                    <b>{t.title}</b>
                    <p>{t.description}</p>
                    <p>{t.completed ? "✅ Completed" : "⏳ Pending"}</p>
                    <button onClick={() => remove(t.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}