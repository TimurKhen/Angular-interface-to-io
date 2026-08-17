import * as vscode from 'vscode';

export function analizator(document: vscode.TextDocument): vscode.Position | undefined {
    const fullText = document.getText();

    const classRegex = /class\s+\w+(?:<[^>]+>)?\s*(?:extends\s+\w+)?\s*(?:implements\s+[\w\s,]+)?\s*\{/;
    const match = classRegex.exec(fullText);

    if (!match) {
        vscode.window.showErrorMessage('No class found');
        return undefined;
    } 

    const endIndex = match.index + match[0].length;

    return document.positionAt(endIndex);
}
