function UserModal({
  showForm,
  editingUser,
  formData,
  handleInputChange,
  handleSubmit,
  closeForm
}) {
  return (
    <>
      {showForm && (
        <div className="model-overlay">
          <div className="modal">

            <h3>{editingUser ? "Edit User" : "Add User"}</h3>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Joined Date</label>
                <input
                  type="date"
                  name="joinedDate"
                  value={formData.joinedDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="form">
                <button type="submit" className="btn-add">
                  {editingUser ? "Update" : "Add"}
                </button>

                <button
                  type="button"
                  className="btn-cancel"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
}

export default UserModal;
