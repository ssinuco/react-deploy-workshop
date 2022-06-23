const API_URL = process.env.REACT_APP_API_URL;

export const getToken = (...args) => {
    if(args.length > 0){
        const [email, password] = args;
        return fetch(`${API_URL}/login`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then(json => {
                const accessToken = json.accessToken;
                if(accessToken){
                    localStorage.setItem('accessToken', json.accessToken);
                }
                return accessToken;
            })
    }
    else{
        return Promise.resolve(localStorage.getItem('accessToken'));
    }
}

export const removeToken = () => {
    return Promise.resolve(localStorage.removeItem('accessToken'));
}

export const getProducts = () => {
    return getToken()
    .then(accessToken => {
      return fetch(`${API_URL}/products`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      })
      .then(response => response.json());  
    })
}