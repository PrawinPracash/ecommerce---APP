import express from "express";
class apiResponseHandler{

    onSuccess(res: express.Response, message: string, data?: any){
        return res.status(200).json({
            status: 200,
            message,
            data
        })
    }
    onError(res: express.Response, message: string){
        return res.status(500).json({
            status: 500,
            message,
        })
    }
}

export default new apiResponseHandler();