import request from 'request';
const url = "http://dev.ao.com/c/heartbeat";

exports.interval = 5000;
exports.promise = function(fulfill, reject) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const json = JSON.parse(body);
      const services = json.services;

      let toFulfill = {};

      for(let index = 0; index < services.length; index ++ ){
        const service = services[index];
        const serviceName = service.ServiceName;
        const serviceStatus = service.Status;
        toFulfill[serviceName] = {text: serviceStatus};
      }

      console.log(toFulfill);
      fulfill(toFulfill);
      
    }
  });
};


