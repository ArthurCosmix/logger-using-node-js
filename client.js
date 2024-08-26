import readline from 'readline'
import EventEmitter from 'events'
import connectServer from './server.js'
import { da } from 'date-fns/locale'

class Eventemiiter extends EventEmitter {}
const client = new EventEmitter()
const cursorPrompt = 'Enter message here >'
const server = connectServer(client)

server.on('response', (response) => {
    process.stdout.write('\u001B[2J\u001B[0;0f'),
    process.stdout.write(response),
    process.stdout.write(`\n${cursorPrompt}`)
})


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : cursorPrompt
})

rl.on('line', (input) => {
    const dataInput = input.trim().split(',').join()
    client.emit('request' , dataInput)
})