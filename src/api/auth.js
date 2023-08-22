export async function asyncRegister(user) {
  return fetch("http://gadgetarium.peaksoftprojects.com/api/v1/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

