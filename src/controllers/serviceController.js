import { rejects } from "assert";
import { resolve } from "path";
import db from "../models";
import serviceService from "../services/serviceService";


let handleGetAllServices = async (req, res) => {
    let id = req.query.id; //ALL, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameter",
            services: []
        })
    }

    let services = await serviceService.getAllServices(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: "OK",
        services
    })
}
let handleCreateNewService = async (req, res) => {
    let message = await serviceService.createNewService(req.body);
    console.log(message);
    return res.status(200).json(message);
}
let handleEditService = async (req, res) => {
    let data = req.body;
    let message = await serviceService.updateServiceData(data);
    return res.status(200).json(message)

}
let handleDeleteService = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required prameters!!!"
        })
    }
    let message = await serviceService.deleteService(req.body.id);
    return res.status(200).json(message);
}


module.exports = {
    handleGetAllServices: handleGetAllServices,
    handleCreateNewService: handleCreateNewService,
    handleEditService: handleEditService,
    handleDeleteService: handleDeleteService,
}