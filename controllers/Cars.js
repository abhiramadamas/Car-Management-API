import Cars from "../models/Cars.js";
import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { where } from "sequelize";

export const getCars = async(req, res) => {
    const cars = await Cars.findAll({
        attributes:['id','nama','sewa','ukuran','userId']
    });
    res.json(cars);
}

export const getCarById = async(req, res) => {
    const { id } = req.params;
    const cars = await Cars.findOne({
        where:{ id: id },
    });
    res.json(cars);
}

export const createCars = async(req, res) => {
    const { nama, sewa, ukuran} = req.body;
    try {
        await Cars.create({
            nama: nama,
            sewa: sewa,
            ukuran: ukuran
        });
        return res.status(200).json({
            success: true,
            message: "Cars Created"
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateCars = async(req, res) => {
    const { id } = req.params;
    const { nama, sewa, ukuran} = req.body;
    try {
        await Cars.update(
            {
                nama: nama,
                sewa: sewa,
                ukuran: ukuran
            },
            {
                where: {id: id}
            }
        )
        return res.status(200).json({
            success: true,
            message: "Cars Updated"
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteCars = async(req, res) => {
    const { id } = req.params;
    const dataBeforeDelete = await Cars.findOne({
        where:{ id: id },
    });

    const parsedData = JSON.parse(JSON.stringify(dataBeforeDelete));

    if(!parsedData) {
        return res.status(400).json({ 
        success: false,
        message: "Data not found" 
    });
    }

    await Cars.destroy({
        where:{ id },
    });

    return res.status(200).json({
        success: true,
        message: "Data deleted"
    });
}