#!/usr/bin/env node
import { realpathSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { runStep6CLI, prepareFinalIfChanged as nativePreparation } from '../step6-finalize.mjs';
import { REPO } from './paths.mjs';
export const prepareFinalIfChanged = args => nativePreparation({ ...args, physics: true });
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(resolve(process.argv[1]))).href) {
  try { await runStep6CLI({ physics: true, root: REPO }); }
  catch (error) { console.error(`physics-step6-finalize: ${error.message}`); process.exitCode = 1; }
}
