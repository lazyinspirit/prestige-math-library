#!/usr/bin/env node
import { realpathSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { REPO } from './paths.mjs';
import { runRenderingQualityCLI } from '../rendering-quality.mjs';
// Native flags: --run RUN (--write | --verify) [--json].
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(resolve(process.argv[1]))).href) {
  try { await runRenderingQualityCLI({ root: REPO, physics: true }); }
  catch (error) { console.error(`rendering-quality: ${error.message}`); process.exitCode = 1; }
}
