import { useState } from "react";
import { UsersData } from "../data/data";
import UserModal from "./UserModal";


function UserPage() {

  const [users, setUsers] = useState(UsersData);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    joinedDate: "",
    status: ""
  });

  const openAddForm = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      role: "",
      joinedDate: "",
      status: ""
    });
    setShowForm(true);
  };

  const openEditForm = (user) => {
    setEditingUser(user);
    setFormData(user);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      // Update
      setUsers(users.map(user =>
        user.id === editingUser.id ? { ...formData, id: editingUser.id } : user
      ));
    } else {
      // Add
      const newUser = {
        ...formData,
        id: users.length + 1
      };
      setUsers([...users, newUser]);
    }

    setShowForm(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  

  return (
    <div>
      <div className="page-header">
        <h2>Users Page</h2>
        <button onClick={openAddForm}className="btn-add"> Add User</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Role</th>
            <th>Joined</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>
                <div>
                  <strong>{user.name}</strong>
                  <br />
                  <small style={{ color: "#666" }}>{user.email}</small>
                </div>
              </td>

              <td>{user.role}</td>

              <td>{user.joinedDate}</td>

              <td>
                <span
                  className={
                    user.status === "active"
                      ? "badge active"
                      : "badge inactive"
                  }
                >
                  {user.status}
                </span>
              </td>

              <td>
                <button
                  className="btn-edit"
                  onClick={() => openEditForm(user)}
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
       <UserModal
        showForm={showForm}
        editingUser={editingUser}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        closeForm={closeForm}
      />
    </div>
  );
}

export default UserPage;
