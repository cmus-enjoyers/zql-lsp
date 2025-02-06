import { RequestMessage } from "vscode-languageserver";

type ServerCapabilities = Record<string, unknown>;

interface InitializeResult {
  capabilities: ServerCapabilities;

  serverInfo?: {
    name: string;
    version?: string;
  };
}

export const initialize = (message: RequestMessage): InitializeResult => {
  return {
    capabilities: { completionProvider: {}, textDoccumentSync: 1 },
    serverInfo: {
      name: "ytka lox",
      version: "0.0.1",
    },
  };
};
