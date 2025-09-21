import mongoose from "mongoose" // import

const deploymentSchema = new mongoose.Schema({ //create a schema
    status: {
        type: String,
        enum: ["Success","Pending","Failed"],
        default: "Pending",   
    },
    BuildLogs:{
        type: String,
    },
    DeployedUrl:{
        type: String,
    },

},{timestamps:true});

export const Deployment = mongoose.model("Deployment", deploymentSchema); // model creation and exportk