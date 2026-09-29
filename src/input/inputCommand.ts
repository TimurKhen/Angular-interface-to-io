import * as vscode from 'vscode';
import { input } from './input';
import { analizator } from '../global/analizator/analizator';

export async function inputCommand() {
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

		const splitAnswer = await vscode.window.showInformationMessage(
            'Split variables to Input and Signal?', 
            { modal: true }, 
            'Yes',            
            'No'       
        );

		let isModelAnswer: boolean = false;
		
		if (splitAnswer === "No") {
			const modelAnswer = await vscode.window.showInformationMessage(
				'Set input as model? \n It will link signals.', 
				{ modal: true }, 
				'Yes',            
				'No'       
			);
    
			isModelAnswer = modelAnswer === 'Yes';
		} 

		input(selectedText, splitAnswer === 'Yes', isModelAnswer).then((val) => {
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