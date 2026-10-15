#!/usr/bin/env node
// Explicit owner authorization only; the native drained gate join performs
// fresh actual recertification and retains its original v2 consumption checks.
import { resolve } from 'node:path';
import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { authorizeStep6Recertification } from '../physics-autopilot/src/owner-gate-recertification.mjs';
export { authorizeStep6Recertification };

if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(resolve(process.argv[1]))).href) {
  const args = process.argv.slice(2);
  const value = flag => { const index = args.indexOf(flag); return index >= 0 ? args[index + 1] : undefined; };
  try {
    const run = value('--run'), stateDir = value('--state-dir');
    if (!run || !stateDir || !args.includes('--authorize-step6') || !args.includes('--resolve-escalations'))
      throw Error('--run, --state-dir, --authorize-step6 and --resolve-escalations are required');
    const ctx = { run, repo: process.cwd(), config: { stateDir: resolve(stateDir) } };
    console.log(JSON.stringify(authorizeStep6Recertification(ctx, {
      reviewer: value('--reviewer') || 'owner', resolveEscalations: true,
    })));
  } catch (error) { console.error(`ERROR ${error.message}`); process.exitCode = 1; }
}
