const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Organization Name
  description: { type: String }, // Brief about the organization
  departments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
  ], // List of departments managed by the organization
//   orgAdmin: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   }, // Organization Admin User
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Organization', organizationSchema);
