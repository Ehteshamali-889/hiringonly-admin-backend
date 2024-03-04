const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
    {
        jobTitle: {
            type: String,
            required: [true, "Please enter job title"],
        },

        companyName: {
            type: String,
            required: false,
        },

        salaryDescription: {
            type: String,
            required: false,
        },

        jobDescription: {
            type: String,
            required: false,
        },

        tags: {
            type: String,
            required: false,
        },

        experience: {
            type: String,
            required: false,
        },

        fullDescription:{
            type: String,
            required: true,
        },

        skills:{
            type: String,
            required: false,
        },

        jobType:{
            type: String,
            required: false,
        },

        location:{
            type: String,
            required: false,
        },

        applyLink:{
            type: String,
            required: false,
        }
        
    },
    {
        timestamps: true,
    }
);


const Job = mongoose.model("Job", JobSchema);

module.exports = Job;