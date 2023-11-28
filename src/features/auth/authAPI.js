// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;

    const response = await fetch("http://localhost:8000/users?email=" + email);

    const data = await response.json();

    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
        console.log(data);
      } else {
        reject("Wrong Credentials");
      }
    } else {
      reject("No User Found with this Email");
    }

    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function updateUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/users/" + userData.id, {
      method: "PATCH",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
