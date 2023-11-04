const database = require('../database') // getPoolDB
const all_events = require('../JSONDATE/EVENTS')



const findIndexOf = (array,searchID) =>{
    for(let i = 0; i <= array.length-1; i++){
        if(array[i].event_id == searchID){
            return i;
        }
    }
}



class JSONDateController{

    async getAllEvents(req,res){
        res.json(all_events)
    }
    async putNewDate(req,res){
        const {event_id,
            event_image,
            event_name,
            event_subtitle,
            event_text,
            event_authorID,
            event_location,
            event_start,
            event_end,
            event_type} = req.body;

            console.log(all_events)

        all_events.push({event_id,
            event_image,
            event_name,
            event_subtitle,
            event_text,
            event_authorID,
            event_location,
            event_start,
            event_end,
            event_type})

            console.log(all_events)

        res.json({event_id,
            event_image,
            event_name,
            event_subtitle,
            event_text,
            event_authorID,
            event_location,
            event_start,
            event_end,
            event_type})
    }

    async deleteAEvent(req,res){
        const {event_id} = req.body;
        all_events.splice(findIndexOf(all_events,event_id),1)
        console.log(all_events)
        res.json('ok')
    }

}   

module.exports = new JSONDateController;