/**
 * Fetch JSON model data from the app server (Problem 2).
 * @param {string} url - e.g. "/user/list", "/user/u1", "/photosOfUser/u1"
 * @returns {Promise<unknown>}
 */
export function fetchModel(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      const err = new Error(response.statusText || `HTTP ${response.status}`);
      err.status = response.status;
      throw err;
    }
    return response.json();
  });
}

export default fetchModel;
