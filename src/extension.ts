import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {

	console.log('Congratulations, your extension "dynamic-snippets" is now active!');

	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VSCode!');
	});

	context.subscriptions.push(disposable)
}

export function deactivate(): void {
	console.log('deactivate')
}
