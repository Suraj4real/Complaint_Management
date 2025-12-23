const Complaint = require("../Model/complaintModel")

async function createComplaint(req, res){
    const {name, email, title, description, category, priority, status} = req.body
    
    await Complaint.create({
        name: name,
        email: email,
        title: title,
        description: description,
        category: category,
        priority: priority,
        status: status
    })
    
    res.json({
        message: "धन्यवाद complaint ko laagi!!"
    })   
}

async function getComplaint(req, res){
    const data = await Complaint.find()
    res.json({
        data: data
    })
}

async function getComplaintById(req, res){
    const id = req.params.id
    const data = await Complaint.findById(id)
    res.json({
        data: data
    })
}

async function updateComplaint(req, res){
    const id = req.params.id
    const {name, email, title, description, category, priority, status} = req.body
    
    await Complaint.findByIdAndUpdate(id, {
        name: name,
        email: email,
        title: title,
        description: description,
        category: category,
        priority: priority,
        status: status
    })
    
    res.json({
        message: "Complaint Updated Successfully!!"
    })
}

async function deleteComplaint(req, res){
    const id = req.params.id
    await Complaint.findByIdAndDelete(id)
    res.json({
        message: "Deleted successfully!!!"
    })
}

module.exports = {
    createComplaint,
    getComplaint,
    getComplaintById,
    updateComplaint,
    deleteComplaint
}