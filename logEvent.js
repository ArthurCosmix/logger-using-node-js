import {existsSync, mkdir} from 'fs'
import { writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";
import path from 'path'
import * as url from 'url';
const __dirname = url.fileURLToPath( new URL ('.', import.meta.url))

const logEvent = async (dataInput) => {
    console.log('this is args : ', dataInput)
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const loggerData = `${dateTime}\t${uuidv4()}\t${dataInput}`
    if(!existsSync(path.join(__dirname, 'files'))){
         mkdir(path.join(__dirname, 'files'), (error) =>{
            if(!!error) throw error
         })
    }

    await writeFile(path.join(__dirname, 'files', 'logger.txt'), `${loggerData} \n`, {flag : 'a'} )
}

export default logEvent