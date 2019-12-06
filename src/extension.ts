import {
  window,
  commands,
  ExtensionContext,
  Position,
  Range,
  SnippetString
} from "vscode";
import generateSnippet from "dynamic-snippets-generator";

export function activate(context: ExtensionContext): void {
  const commandsToRegister = {
    "extension.expandAbbreviation": (): void => {
      const { activeTextEditor } = window;
      if (activeTextEditor) {
        const { line, character } = activeTextEditor.selection.active;
        const { text } = activeTextEditor.document.lineAt(line);
        const snippet = new SnippetString(generateSnippet(text) as string);

        activeTextEditor.edit(() => {
          const startPosition = new Position(line, 0);
          const endPosition = new Position(line, character);
          const range = new Range(startPosition, endPosition);
          activeTextEditor.insertSnippet(snippet, range);
        });
      }
    }
  };

  Object.entries(commandsToRegister).forEach(([name, method]) =>
    context.subscriptions.push(commands.registerCommand(name, method))
  );
}

export function deactivate(): void {
  console.log("deactivate");
}
