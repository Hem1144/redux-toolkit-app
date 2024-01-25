import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const [userToDelete, setUserToDelete] = useState(null);

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    setUserToDelete(id);
  };

  const confirmDelete = () => {
    if (userToDelete !== null) {
      dispatch(removeUser(userToDelete));
      setUserToDelete(null);
    }
  };

  const cancelDelete = () => {
    setUserToDelete(null);
  };

  return (
    <Wrapper>
      {data.map((user, id) => (
        <li key={id}>
          {user}
          <div className="delete-section">
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </div>
          {userToDelete === id && (
            <div className="confirmation-modal">
              <p>Are you sure you want to delete this user?</p>
              <button className="confirm-btn" onClick={confirmDelete}>
                Confirm
              </button>
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          )}
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .delete-section {
    position: absolute;
    right: 0;
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }

  .confirmation-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1;

    p {
      margin: 0;
      margin-bottom: 1rem;
    }

    .confirm-btn,
    .cancel-btn {
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export default DisplayUsers;
