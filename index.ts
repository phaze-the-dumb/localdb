import fs from 'fs';

export default class{
    constructor(path: string){
        let file: string = fs.readFileSync(path).toString();
    }
}