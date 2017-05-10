import config from './config';
import moment from 'moment';
import Heartbeat from './jobs/heartbeat'; 

const redis = config.getRedisClient();
const jobs = [new Heartbeat()];

function update_widget(name, data, next_time) {
  console.log("updating widget: " + name);
  redis.set(name, JSON.stringify({
    payload: data,
    next_time: next_time
  }), function(err, res) {
    if(err) {
      console.log(err);
    }
  });
}

function reschedule(job) {
  setTimeout(function() {start_recurring_job(job)}, job.interval)
}

function start_recurring_job(job) {
    new Promise(job.promise)
    .then(
      function(widget_data) {
        for (var widget in widget_data) {
          update_widget(widget, widget_data[widget], moment().add(job.interval, 'ms'));
        }
        reschedule(job);
      }
    )
    .catch(
      function(error) {
        console.log(error);
        reschedule(job);
      }
    );
}

export default () => {
  for (var job in jobs) {
    start_recurring_job(jobs[job]);
  }
}

