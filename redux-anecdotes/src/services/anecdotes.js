import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const get = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    console.log('response of get ', response.data)
    return response.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log('response of getAll ', response.data)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)
    return response.data
}   

export default { 
    get,
    getAll, 
    createNew, 
    update
} 