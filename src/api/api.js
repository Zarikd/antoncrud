const URL = 'http://localhost:3000/api/antonCrud'
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const create = async (data) => {
    const _response = await fetch(URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });
    const response = _response.text();
    return response
}

export default {create};
