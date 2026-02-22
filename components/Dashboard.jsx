import { useEffect, useState } from "react";
import { getTasks } from "../services/api";

export default function Dashboard() {
    const [stats, setStats] = useState({ total: 0, completed: 0 });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await getTasks();
        const tasks = res.data;

        setStats({
            total: tasks.length,
            completed: tasks.filter(t => t.completed).length
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Dashboard</h2>
            <h3>Total Tasks: {stats.total}</h3>
            <h3>Completed: {stats.completed}</h3>
        </div>
    );
}