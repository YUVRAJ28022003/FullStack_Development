function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "chaicode", url: "https://chaicode.com/" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("fetching user data...");
    const userData = await fetchUserData();
    console.log("user data: ", userData);
  } catch (error) {
    console.log("Error fetching data ", error);
  }
}

getUserData();
