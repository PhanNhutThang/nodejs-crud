import db from "../models/index";

let getAllServices = (serviceId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let services = '';
            if (serviceId === 'ALL') {
                services = await db.Service.findAll({
                })
            }
            if (serviceId && serviceId !== 'ALL') {
                services = await db.Service.findOne({
                    where: { id: serviceId },
                })
            }
            resolve(services)
        }
        catch (e) {
            reject(e);
        }
    })
}
let checkServiceName = (serviceserviceName) => {
    return new Promise(async (resolve, rejects) => {
        try {
            let service = await db.Service.findOne({
                where: { serviceName: serviceserviceName }
            })
            if (service) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            rejects(e);
        }
    })
}
let createNewService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkServiceName(data.serviceName);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Dịch vụ đã tồn tại'
                })
            } else {
                await db.Service.create({
                    serviceName: data.serviceName,
                    introduce: data.introduce,
                    unitPrice: data.unitPrice,
                    image: data.avatar
                })
                resolve({
                    errCode: 0,
                    message: 'OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}
let deleteService = (serviceId) => {
    return new Promise(async (resolve, reject) => {
        let foundService = await db.Service.findOne({
            where: { id: serviceId }
        })
        if (!foundService) {
            resolve({
                errCode: 2,
                errMessage: `The service isn't exist`
            })
        }
        await db.Service.destroy({
            where: { id: serviceId }
        })
        resolve({
            errCode: 0,
            errMessage: `The service is delete`
        })
    })
}
let updateServiceData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let service = await db.Service.findOne({
                where: { id: data.id },
                raw: false
            })
            if (service) {
                service.serviceName = data.serviceName;
                service.introduce = data.introduce;
                service.unitPrice = data.unitPrice;
                if (data.avatar) {
                    service.image = data.avatar;
                }
                await service.save();
                resolve({
                    errCode: 0,
                    message: 'Update the service succeeds!!!!'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `Service's not found!!!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = {

    getAllServices: getAllServices,
    createNewService: createNewService,
    deleteService: deleteService,
    updateServiceData: updateServiceData,

}