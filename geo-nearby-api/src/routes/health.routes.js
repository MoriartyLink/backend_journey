import { Router } from "express";

const router = Router();



Router.get("/health",(req, res)=> { 
    res.json({
        status:'ok',
        uptime:process.uptime()
    });
});

export default router ; 