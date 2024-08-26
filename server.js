import EventEmitter from 'events'
import logEvent from './logEvent.js'

class MessageProvider extends EventEmitter {
    constructor(client){
        super()
        process.nextTick(() =>{
            this.emit(
                'response',
                'Type something '
            )
        })

        client.on('request', (dataInput) =>{
            logEvent(dataInput)
        })
    }
}

export default client => new MessageProvider(client)