import customError from "./customError.js";

const getTypes = (data, config) => {
    if (!data) throw customError("Data not found", 400, "fail");

    for (let key in config) {
      if (
        data[key] && typeof data[key] != config[key].type || 
        !data[key] && config[key]?.required
      )
        throw customError("Invalid user input "+key, 400, "fail");   
    }
}

export default getTypes;