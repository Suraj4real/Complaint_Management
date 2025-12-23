const mongoose = require('mongoose')
const Schema = mongoose.Schema

const priorityLevels = ['high', 'medium', 'low']
const complaintStatus = ['pending', 'in progress', 'resolved']

const complaintSchema = new Schema({
  name: String,
  email: String,
  title: String,
  description: String,
  category: String,
  priority: {
    type: String,
    enum: priorityLevels,
    default: 'medium'
  },
  status: {
    type: String,
    enum: complaintStatus,
    default: 'pending',
    required: true
  }
},
{
  timestamps: true 
})

const Complaint = mongoose.model("Complaint", complaintSchema)

module.exports = Complaint