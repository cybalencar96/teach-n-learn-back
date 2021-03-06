
exports.insertClass = (req,res,next) => {
    const data = req.body.body
    if (!data.teacherId || !data.class || !data.maxStudents || !data.price || !data.dateClass) {
        res.send(error);
        return;
    }
    if (data.teacherId.length !== 24 || !isHexa(data.teacherId) ) {
        res.send(error);
        return;
    }

    
    //verifica número de atributos do objeto
    if ((!data._id && Object.keys(data).length !== 5) || (!!data._id && Object.keys(data).length !== 7)) {
        res.send(error);
        return;
    }
    if (data.dateClass.length !== 7) {
        res.send(error);
        return;
    }

    let result = true;
    data.dateClass.forEach((day,index) => {
        const days = ["monday","tuesday", "wednesday", "thursday", "friday","saturday","sunday"];
        if (day.weekday !== days[index]) {
            result = false;
        }
        if (typeof(day.hasClass) !== "boolean") {
            result = false;
        }
    });
    
    if (!result) { 
        res.send(error);
        return;
    }

    next();
}

exports.getClassById = (req,res,next) => {
    const id = req.params.id
    if (id.length !== 24 || !isHexa(id) ) {
        res.send(error);
        return;
    }

    next();
}

exports.getClassByQuery = (req,res,next) => {
    if (!!req.query.teacher){
        const id = req.query.teacher;
        if (!id || id.length !== 24 || !isHexa(id) ) {
            res.send(error);
            return;
        }
        
        next();
    } else if (!!req.query.name) {
        const name = req.query.name;
        if (!name) {
            res.send(error);
            return;
        }
        
        next();
    }

    
}

exports.deleteClass = (req,res,next) => {
    const id = req.params.id

    
    if (id.length !== 24 || !isHexa(id)) {
        res.send(error);
        return;
    }
    next();
}

exports.booking = (req,res,next) => {
    const classId = req.params.id;
    const userId = req.body.body.userId;

    if (Object.keys(req.body.body).length !== 1 || !userId) {
        res.send(error);
        return;
    }

    if (classId.length !== 24 || userId.length !== 24 || !isHexa(classId) || !isHexa(userId) ) {
        res.send(error);
        return;
    }

    next();
}

function isHexa(str) {
    const hexa = "0123456789abcdef";
    for (let i = 0; i < str.length; i++) {
        if (!hexa.includes(str[i])) {
            return false;
        }
    }
    return true;
}

const error = {
    status: 400,
    text: "Bad Request",
    description: "Object sent does not match with requirements or id pattern"
}
