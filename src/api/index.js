const API = process.env.REACT_APP_API;

async function fetchPhotos(path, params) {
  try {
    const res = await fetch(`${API}${path}?` + new URLSearchParams(params), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error("Error while fetching categories");
  } catch (e) {
    throw new Error(e.message);
  }
}

export default fetchPhotos;
