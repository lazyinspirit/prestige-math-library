// Register the repository's minimal TypeScript ESM hook. This file is a
// `node --import` entrypoint so callers can use it anywhere they use tsx's
// loader without changing their spawn protocol.

import { register } from 'node:module';

register(new URL('./typescript-loader-hooks.mjs', import.meta.url), import.meta.url);
