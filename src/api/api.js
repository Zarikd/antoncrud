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

const read = async () => {
    const _response = await fetch(URL, {
        method: 'GET',
        headers,
    });
    const response = _response.json();
    return response
}

const update = async (id, data) => {
    const _response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
    });
    const response = _response.text();
    return response
}

const _delete = async (id) => {
    const _response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers,
    });
    const response = _response.text();
    return response
}


export default {create, read, update, delete:_delete};
