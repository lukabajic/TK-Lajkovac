import * as actionTypes from "./actionTypes";

const userStart = () => ({ type: actionTypes.USER_START });

export const userSuccess = (user) => ({ type: actionTypes.USER_SUCCESS, user });

const allUsersSuccess = (users) => ({
  type: actionTypes.ALL_USER_SUCCESS,
  users,
});

export const updateUser = (user) => ({ type: actionTypes.UPDATE_USER, user });

const userFail = (error) => ({ type: actionTypes.USER_FAIL, error });

export const fetchCurUser = (token) => async (dispatch) => {
  dispatch(userStart());

  const URI = `http://localhost:8000/api/v1/user/get`;

  try {
    const res = await fetch(URI, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (!data.error) {
      const { user } = data;
      dispatch(userSuccess(user));
    } else {
      dispatch(userFail(data.error));
    }
  } catch (err) {
    dispatch(userFail(err.message || err));
  }
};

export const fetchAllUsers = (token) => async (dispatch) => {
  dispatch(userStart());

  const URI = `http://localhost:8000/api/v1/user/get-all`;

  try {
    const res = await fetch(URI, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (!data.error) {
      const { users } = data;
      dispatch(allUsersSuccess(users));
    } else {
      dispatch(userFail(data.error));
    }
  } catch (err) {
    dispatch(userFail(err.message || err));
  }
};

export const verifyEmail = (token) => async (dispatch) => {
  dispatch(userStart());

  const URI = `http://localhost:8000/api/v1/user/verify`;

  try {
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (!data.error) {
      const { user } = data;
      dispatch(userSuccess(user));
    } else {
      dispatch(userFail(data.error));
    }
  } catch (err) {
    dispatch(userFail(err.message || err));
  }
};

export const resendVerify = (token) => async (dispatch) => {
  dispatch(userStart());

  const URI = `http://localhost:8000/api/v1/user/resend`;

  try {
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (!data.error) {
      dispatch(userFail(null));
    } else {
      dispatch(userFail(data.error));
    }
  } catch (err) {
    dispatch(userFail(err.message || err));
  }
};

export const updateData = (token, displayName, phone) => async (dispatch) => {
  dispatch(userStart());

  const URI = `http://localhost:8000/api/v1/user/update`;

  try {
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ displayName, phone }),
    });
    const data = await res.json();

    if (!data.error) {
      const { user } = data;
      dispatch(userSuccess(user));
    } else {
      dispatch(userFail(data.error));
    }
  } catch (err) {
    dispatch(userFail(err.message || err));
  }
};
