#!/usr/bin/env node
import { resolve } from 'node:path';
import { migrateWorkflowPrefix } from '../src/workflow-prefix-migration.mts';
const args = process.argv.slice(2), values: Record<string, string> = {};
try {
  for (let i = 0; i < args.length; i += 2) {
    if (!['--run', '--state-dir', '--authorization', '--root'].includes(args[i]) || !args[i + 1] || args[i + 1].startsWith('--') || values[args[i]]) throw new Error('invalid or duplicate arguments');
    values[args[i]] = args[i + 1];
  }
  for (const key of ['--run', '--state-dir', '--authorization']) if (!values[key]) throw new Error(`required ${key}`);
  const result = migrateWorkflowPrefix({ repo: resolve(values['--root'] ?? '.'), run: values['--run'], stateDir: resolve(values['--state-dir']), authorizationPath: resolve(values['--authorization']) });
  console.log(JSON.stringify(result, null, 2));
} catch (error: any) { console.error(error.message); process.exitCode = 1; }
