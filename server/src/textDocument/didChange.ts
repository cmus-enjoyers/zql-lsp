import { TextDocumentContentChangeEvent } from "vscode-languageserver";
import { documents, VersionTextDocumentIdentifier } from "../documents";
import { NotificationMessage } from "../server";

interface DidChangeTextDocumentParams {
  textDocument: VersionTextDocumentIdentifier;
  contentChange: TextDocumentContentChangeEvent[];
}

export const didChange = (message: NotificationMessage): void => {
  const params = message.params as DidChangeTextDocumentParams;

  documents.set(params.textDocument.uri, params.contentChange[0].text);
};
