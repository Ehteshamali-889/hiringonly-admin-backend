const express = require("express");
const Job = require("../models/job.model.js");
const router = express.Router();
const {getJobs, getJob, createJob, updateJob, deleteJob} = require('../controllers/job.controller.js');


router.get('/', getJobs);
router.get("/:id", getJob);

router.post("/", createJob);

// update a Job
router.put("/:id", updateJob);

// delete a Job
router.delete("/:id", deleteJob);




module.exports = router;