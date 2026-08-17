import * as vscode from 'vscode';

export async function updateImports(needInput: string[]) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const text = document.getText();

    const angularImportRegex = /import\s+\{([\s\S]*?)\}\s+from\s+['"]@angular\/core['"];?/;
    const match = angularImportRegex.exec(text);

    await editor.edit(editBuilder => {
        if (match) {
            const existingImports = match[1]
                .split(',')
                .map(item => item.trim())
                .filter(item => item.length > 0);
            
            const importsToAdd = needInput.filter(item => !existingImports.includes(item));

            if (importsToAdd.length > 0) {
                const newImports = [...existingImports, ...importsToAdd];
                const newImportStatement = `import { ${newImports.join(', ')} } from '@angular/core';`;
                
                const startPos = document.positionAt(match.index);
                const endPos = document.positionAt(match.index + match[0].length);
                const range = new vscode.Range(startPos, endPos);
                
                editBuilder.replace(range, newImportStatement);
            }
        } else {
            const position = new vscode.Position(0, 0);
            editBuilder.insert(position, `import { ${needInput.join(', ')} } from '@angular/core';\n`);
        }
    });
}