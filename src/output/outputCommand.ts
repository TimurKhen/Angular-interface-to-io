import * as vscode from 'vscode';
import { output } from './output';
import { analizator } from '../global/analizator/analizator';

export async function outputCommand() {
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
    
    output(selectedText).then((val: any) => {
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