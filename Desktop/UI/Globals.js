
/* Root objects*/
let UI = {
    projects: {},
    schemas: { projectSchema: undefined },
    environment: undefined,
    running: {}
}

let SA = {
    projects: {} ,
    nodeModules: {
        flexSearch: require("flexsearch")
    }
}
/*
We will use this to load functions originally intended for Nodejs
*/
let exports = {}

