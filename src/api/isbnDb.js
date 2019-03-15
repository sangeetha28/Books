import axios from 'axios';

export default axios.create({baseURL: 'https://www.googleapis.com/books/v1',params: {     // can be common or any other method
      key: 'AIzaSyBSGPvrJbztMNPC6JF3SWJmsh76PtpGpRo'
  }})
