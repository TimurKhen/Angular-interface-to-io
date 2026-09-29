import * as vscode from 'vscode';
import { signal } from './signal';
import { analizator } from '../global/analizator/analizator';

export async function signalCommand() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);

    if (!selectedText) {
        vscode.window.showWarningMessage('Выделите текст перед запуском команды!');
        return;
    }

    signal(selectedText).then((val) => {
        const textToInsert = `\n${val}\n`;
    
        const position = analizator(editor.document);
        if (!position) {
            return;
        }
        
        
        editor.edit(editBuilder => {
            editBuilder.insert(position, textToInsert);
        });
    });
}