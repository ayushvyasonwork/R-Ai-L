const axios = require('axios');

module.exports.getDepartment = async (complaintData) => {
  const response = await axios.post('http://flask-api-url/determine-department', complaintData);
  return response.data.departmentId;
};
