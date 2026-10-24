#!/usr/bin/env node
// Build a proposed Root receipt on stdout, or verify an installed receipt.
// No files, run state, frozen native evidence, or repository refs are written.
import { readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { verifyRunRepositoryRelocation } from '../../physics-support/run-repository-relocation.mjs';
const args = process.argv.slice(2), mode = args[0], opt = name => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args[i + 1]; };
try {
  const root = resolve(opt('repo') ?? '.'), run = opt('run');
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '') || !['prepare', 'verify'].includes(mode)) throw Error('usage: relocate-repository.mjs prepare|verify --repo PHYSICS --run RUN [--old-root OLD --files-file JSON --reason TEXT]');
  if (mode === 'verify') console.log(JSON.stringify(verifyRunRepositoryRelocation(root, run), null, 2));
  else {
    const old = opt('old-root'), reason = opt('reason'), fileList = opt('files-file');
    if (!old || resolve(old) !== old || old === root || !reason || reason.trim().length < 40 || !fileList) throw Error('prepare requires distinct canonical --old-root, substantive --reason, and explicit --files-file');
    const files = JSON.parse(readFileSync(resolve(fileList), 'utf8'));
    if (!Array.isArray(files) || !files.length || new Set(files).size !== files.length) throw Error('explicit nonempty unique artifact array required');
    const artifacts = {};
    for (const file of files) {
      if (typeof file !== 'string' || file.startsWith('/') || file.includes('\\') || file.split('/').some(p => !p || p === '.' || p === '..')
          || !(file.startsWith(`research/${run}-`) || file.startsWith(`.physics-autopilot/${run}/`)) || file === `research/${run}-repository-relocation.json`) throw Error(`unsafe artifact: ${file}`);
      const full = resolve(root, file);
      if (!lstatSync(full).isFile() || realpathSync(full) !== full) throw Error(`nonregular artifact: ${file}`);
      artifacts[file] = createHash('sha256').update(readFileSync(full)).digest('hex');
    }
    console.log(JSON.stringify({ version: 1, kind: 'root-authorized-run-repository-relocation', run, reviewer: '/root', old_root: old, new_root: root, reason, artifacts }, null, 2));
  }
} catch (error) { console.error(error.message); process.exitCode = 1; }
