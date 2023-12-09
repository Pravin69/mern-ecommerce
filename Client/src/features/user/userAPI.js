// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders/own/");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/own");
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/", {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
