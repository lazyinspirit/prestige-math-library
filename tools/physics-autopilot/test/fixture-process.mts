import { spawnSync as originalSync, spawn as originalSpawn } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { APP_DIR } from '../../physics-support/paths.mjs';
function optionsFor(args: any[], options: any = {}) {
  let root = String(options.cwd ?? process.cwd());
  if (!options.cwd) {
    const helper = args?.find(arg => typeof arg === 'string' && arg.includes('/tools/physics-support/'));
    if (helper) root = resolve(helper).split('/tools/physics-support/')[0];
  }
  const cli = args?.some(arg => /physics-autopilot\/bin\/autopilot\.mts$/.test(String(arg)));
  if (cli) {
    const index = args.indexOf('--repo');
    root = index >= 0 ? resolve(args[index + 1]) : fileURLToPath(new URL('../../../physics/', import.meta.url));
  }
  return { ...options, env: { ...(options.env ?? process.env), PHYSICS_REPO: root, ...(APP_DIR && !options.env?.PRESTIGE_APP_DIR ? { PRESTIGE_APP_DIR: APP_DIR } : {}) } };
}
export const spawnSync: typeof originalSync = ((command, args, options) => originalSync(command, args, optionsFor(args, options))) as any;
export const spawn: typeof originalSpawn = ((command, args, options) => originalSpawn(command, args, optionsFor(args, options))) as any;
