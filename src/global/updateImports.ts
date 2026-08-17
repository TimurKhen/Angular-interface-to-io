import * as vscode from 'vscode';

export async function updateImports(needInput: string[]) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    
    const position = editor.document.positionAt(0);

    await editor.edit(editBuilder => {
        editBuilder.insert(position, 
            `import { ${needInput.join(', ')} } from '@angular/core';\n`
        );
    });
}