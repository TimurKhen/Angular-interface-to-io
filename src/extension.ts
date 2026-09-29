import * as vscode from 'vscode';
import { inputCommand } from './input/inputCommand';
import { outputCommand } from './output/outputCommand';
import { signalCommand } from './signal/signalCommand';

export function activate(context: vscode.ExtensionContext) {
    const inputContext = vscode.commands.registerCommand('angular-interface-to-io.generateInput', inputCommand);
	const outputContext = vscode.commands.registerCommand('angular-interface-to-io.generateOutput', outputCommand);
	const signalContext = vscode.commands.registerCommand('angular-interface-to-io.generateSignal', signalCommand);

	context.subscriptions.push(inputContext);
	context.subscriptions.push(outputContext);
	context.subscriptions.push(signalContext);
}

export function deactivate() {}
