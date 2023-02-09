import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import clientController from "../controllers/clientController";
import staffController from "../controllers/staffController";
import serviceController from '../controllers/serviceController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getcrud);
    router.post('/post-crud', homeController.postcrud);
    router.get('/get-crud', homeController.displayGetCrud);
    router.get('/edit-crud', homeController.getEditCrud);
    router.post('/put-crud', homeController.putcrud);
    router.get('/delete-crud', homeController.deletecrud);


    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.post('/api/login-client', clientController.handleLogin)
    router.get('/api/get-all-clients', clientController.handleGetAllClients);
    router.post('/api/create-new-client', clientController.handleCreateNewClient);
    router.delete('/api/delete-client', clientController.handleDeleteClient);
    router.put('/api/edit-client', clientController.handleEditClient);
    router.get('/api/get-one-clients', clientController.handleGetOneClients);

    router.post('/api/login-staff', staffController.handleLogin)
    router.get('/api/get-all-staffs', staffController.handleGetAllStaffs);
    router.post('/api/create-new-staff', staffController.handleCreateNewStaff);
    router.delete('/api/delete-staff', staffController.handleDeleteStaff);
    router.put('/api/edit-staff', staffController.handleEditStaff);
    router.get('/api/get-one-staffs', staffController.handleGetOneStaffs);

    router.get('/api/get-all-services', serviceController.handleGetAllServices);
    router.post('/api/create-new-service', serviceController.handleCreateNewService);
    router.delete('/api/delete-service', serviceController.handleDeleteService);
    router.put('/api/edit-service', serviceController.handleEditService);

    router.get('/api/loaitk', userController.getLoaitk);

    return app.use("/", router);
}
module.exports = initWebRoutes;
