import styled from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };
  return (
    <Wrapper>
      <button className="clear-btn" onClick={deleteUsers}>
        Clear Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #ff0000;
    margin-top: 2rem;
    padding: 0.8rem;
  }
`;

export default DeleteAllUser;
