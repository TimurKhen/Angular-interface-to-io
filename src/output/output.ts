import * as vscode from 'vscode';
import { updateImports } from '../global/updateImports';
import { isTypeString } from '../global/checkIsType';
import { getInterfaceName } from '../global/isNameOfInterface';

let interfaceName: string = '';

async function convert(string: string) {
    const splited = string.split(': ');
    const name = splited[0];
    let type = splited[1];
    type = type.slice(0, -1);
    // Left - name,
    // Right - type

    if (interfaceName !== '') {
        type = `${interfaceName}["${name}"]`;
    }

    return `    ${name}Event = output<${type}>();`;
}

export async function output(text: string) {
    const splited = text.split('\n');
    const output: string[] = [];

    for (let i = 0; i < splited.length; i++) {
        
        let text = splited[i].trim();

        if (text.at(-1) !== ';' || text.at(-1) === ',') {
            text = text + ';';
        }

        if (isTypeString(text)) {
            convert(text).then((val) => {
                output.push(val);
            });
        } else if (getInterfaceName(text)) {
            interfaceName = text.split(' ')[1];
        }
    }

    let needToImport: string[] = ['output']; 

    await updateImports(needToImport);

    try {
        return output.join('\n');
    } catch (error) {
        vscode.window.showErrorMessage('Error while working on input');
        return "";
    }
}

function isNameOfInterface(text: string) {
    throw new Error('Function not implemented.');
}
