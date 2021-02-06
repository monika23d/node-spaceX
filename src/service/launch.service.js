const request  = require('request')
const { removeEmitHelper } = require('typescript')

const launchService = {
    getLaunch(){
        return new Promise((resolve, reject) =>{
            const options = {
                uri: 'https://api.spaceXdata.com/v3/launches?limit=100',
                method:'GET',
                json:{},
                headers : {
                    'content-types':'application/json',
                    'Authorization':''
                }
            }
            
            request(options,(error,restResp, body) => {
                if(!error){
                    resolve(body)
                } else {
                    reject(error)
                }
            })
        })
    }
}

module.exports = launchService