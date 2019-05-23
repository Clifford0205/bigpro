async function checkUserState() {
  try {
    const response = await fetch('http://localhost:5555/is_logined', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    // if (!response.ok) throw new Error(response.statusText);

    const jsonObject = await response.json();

    console.log('1:', jsonObject);

    return jsonObject;
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export default checkUserState;
