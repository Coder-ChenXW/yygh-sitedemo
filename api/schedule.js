import request from '@/utils/request'

export default {
    getSchedulePage(hoscode,depcode,pageNum,pageSize) {
        return request({
          url: `/user/hosp/schedule/${hoscode}/${depcode}/${pageNum}/${pageSize}`,
          method: 'get'
        })
    },
    getScheduleDetail(hoscode,depcode,workDate) {
        return request({
          url: `/user/hosp/schedule/${hoscode}/${depcode}/${workDate}`,
          method: 'get'
        })
    },
    getSchedule(scheduleId) {
        return request({
          url: `/user/hosp/schedule/info/${scheduleId}`,
          method: 'get'
        })
    },
      
}
