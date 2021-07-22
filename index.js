const LIBRARY = { 
  API: async (url = '' ,params = {}) => { 
    const urlAPI = new URL(url); 
    urlAPI.search = new URLSearchParams(params).toString(); 
    return await (await fetch(urlAPI)).json(); 
  } 
};
(async () => { 
  const result = await LIBRARY.API('https://jsonplaceholder.typicode.com/todos'); 
  console.log(result); 
  console.log(LIBRARY);
})();