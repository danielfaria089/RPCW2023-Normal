var ContractModel = require('../models/contract')

module.exports.getAll = () => {
    return ContractModel.find()
        .then(jobs=>{
            return jobs;
        }).catch(err=>{
            return err;
        });
};

module.exports.getById = (id) => {
    return ContractModel.findOne({_id:id})
        .then(job=>{
            return job;
        }).catch(err=>{
            return err;
        });
};

module.exports.getByYear = (year) => {
    return ContractModel.find({"DataInicioContrato":{$regex:year}})
        .then(jobs=>{
            return jobs;
        }).catch(err=>{
            return err;
        });
};

module.exports.getByInstitution = (institution) => {
    return ContractModel.find({NIPCInstituicao:institution})
        .then(jobs=>{
            return jobs;
        }).catch(err=>{
            return err;
        });
};

module.exports.getCourses = () => {
    return ContractModel.distinct("Curso").sort()
        .then(courses=>{
            return courses;
        }).catch(err=>{
            return err;
        });
};

module.exports.getInstitutions = () => {
    return ContractModel.distinct("InstituicaoEnsino").sort()
        .then(institutions=>{
            return institutions;
        }).catch(err=>{
            return err;
        });
};

module.exports.addContract = (contract) => {
    return ContractModel.create(contract)
        .then(contract=>{
            return contract;
        }).catch(err=>{
            return err;
        });
};

module.exports.deleteContract = (id) => {
    return ContractModel.deleteOne({_id:id})
        .then(contract=>{
            return contract;
        }).catch(err=>{
            return err;
        });
};