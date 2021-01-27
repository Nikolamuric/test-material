import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './style.css';

const Mainpage = () => {
  const [state, setState] = React.useState({
    name: '',
  });

  async function checkUsername(username) {
    // simulate API response delay
    await new Promise((res) => setTimeout(res, 100));

    if (RegExp(/^[a-z-_.]+$/i).test(username) === false) {
      return { error: "InvalidFormat", data: "username can only consist of characters a-z, A-Z, '-', '_' and '.'" };
    }

    if (["admin", "null", "root"].includes(username)) {
      return { error: "AlreadyExists", data: "this username is already taken" };
    }

    return {
      error: null,
      data: `${username.toLowerCase()}@dig-it-ally.com`,
    };
  }

  const onChangeField = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = async () => {
    const userEmail = await checkUsername(state.name);
    console.log(userEmail);
    alert(userEmail.data);
  };

  return (
    <div className="main-body">
      <div className="d-flex justify-content-center align-items-center">
        <div className="main-content d-flex">
          <TextField
            className="w-100 mr-5"
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={(e) => onChangeField(e)}
          />
          <Button variant="contained" color="secondary" onClick={() => onSubmit()}>
            Submit
          </Button>
        </div>

      </div>
    </div>

  );
};

export default Mainpage;
