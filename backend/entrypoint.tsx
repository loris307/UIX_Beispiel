/**
 * Backend entrypoint:
 * This module provides a default export that defines the UI that is returned from the backend
 * when a page is visited
 */
import { provideRedirect } from "uix/providers/common.tsx";
import { type Entrypoint } from "uix/providers/entrypoints.ts";

export default {
    '/': "Hello world!",
    '/pages/*': {
        '/69': 69,
        '/420': <div>Hello <b>world</b></div>,
        '*': () => {
            throw new Error("Nope");
        }
    }
} satisfies Entrypoint;
