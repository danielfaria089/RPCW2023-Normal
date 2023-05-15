var express = require('express');
var router = express.Router();

var ContractController = require('../controllers/contract')

router.get('/contracts/', (req,res,next)=>{
    if(req.query.year){
        ContractController.getByYear(req.query.year)
            .then(jobs=>{
                res.status(200).json(jobs)
            }).catch(erro=>{
                res.status(500).json(erro);
            });
    }
    else if (req.query.inst){
        ContractController.getByInstitution(req.query.inst)
            .then(jobs=>{
                res.status(200).json(jobs)
            }).catch(erro=>{
                res.status(500).json(erro);
            });
    }
    else{
        ContractController.getAll()
            .then(jobs=>{
                res.status(200).json(jobs)
            }).catch(erro=>{
                res.status(500).json(erro);
            });
    }
});

router.get('/contracts/courses', (req,res,next)=>{
    ContractController.getCourses()
        .then(courses=>{
            res.status(200).json(courses);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});

router.get('/contracts/institutions', (req,res,next)=>{
    ContractController.getInstitutions()
        .then(institutions=>{
            res.status(200).json(institutions);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});


router.get('/contracts/:id', (req,res,next)=>{
    ContractController.getById(req.params.id)
        .then(job=>{
            res.status(200).json(job);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});

router.post('/contracts', (req,res,next)=>{
    ContractController.addContract(req.body)
        .then(contract=>{
            res.status(200).json(contract);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});

router.delete('/contracts/:id', (req,res,next)=>{
    ContractController.deleteContract(req.params.id)
        .then(contract=>{
            res.status(200).json(contract);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});

module.exports = router;
