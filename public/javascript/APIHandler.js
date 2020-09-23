class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL);
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/" + id)
  }

  createOneRegister (data) {
    return axios.create(this.BASE_URL + "/create", data)
  }

  updateOneRegister (id, data) {
    return axios.patch(this.BASE_URL +"/" + id, data )
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/" + id)
  }
};

export default APIHandler;
