const db = require('./conn')

class ClassInfo {
    constructor(id, name, rank) {
        this.name = name;
        this.rank = rank;
        this.id = id;
    }

    static async getAllTopicData() {
        try {
            const response = await db.any(`SELECT * FROM topics
            INNER JOIN class_status 
            on topics.status_id = class_status.id
            ORDER BY topics.id;`);
            // console.log(response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
    static async getAllStatuses() {
        try {
            const response = await db.any(`SELECT * FROM class_status;`)
            console.log(response);
            return response
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async update(topic, rank) {
        const query = `UPDATE topics SET status_id=${rank} WHERE topic_name = '${topic}'`
        try {
            const response = await db.result(query);
            console.log("response is", response);
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        }
    }
}

module.exports = ClassInfo;