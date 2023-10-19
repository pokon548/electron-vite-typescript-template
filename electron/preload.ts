import { contextBridge, ipcRenderer } from "electron";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const rustLib = require("native");

contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);
contextBridge.exposeInMainWorld("native", rustLib);
