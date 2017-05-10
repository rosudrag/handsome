import request from 'request';
import configuration from '../configuration.json';

class Heartbeat {
  constructor() {
    this.interval = 5000;
  }

  promise (fulfill, reject) {
    let url = configuration.environments[0].endpoint;
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const json = JSON.parse(body);
        const services = json.services;

        let toFulfill = {};

        for(let index = 0; index < services.length; index ++ ){
          const service = services[index];
          const serviceName = service.ServiceName;
          const serviceStatus = service.Status;
          toFulfill[serviceName] = {status: serviceStatus};
        }
        fulfill(toFulfill);
      }
    });
  };
}

export default Heartbeat;