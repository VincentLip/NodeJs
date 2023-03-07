import readline from "readline"
import {stdin , stdout } from "process"

export const putMark = async (mark) => {
    console.log(mark)
    const readlineInterface = readline.createInterface({
        input : stdin,
        output : stdout
    })
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value

    readlineInterface.close()
    return result
}
