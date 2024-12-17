const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Department', departmentSchema);
