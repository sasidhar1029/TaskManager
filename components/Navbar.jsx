export default function Navbar({ setPage }) {
    return (
        <div style={{ display: "flex", gap: 20, padding: 15, background: "#222", color: "#fff" }}>
            <button onClick={() => setPage("dashboard")}>Dashboard</button>
            <button onClick={() => setPage("tasks")}>Tasks</button>
            <button onClick={() => setPage("create")}>Create Task</button>
        </div>
    );
}