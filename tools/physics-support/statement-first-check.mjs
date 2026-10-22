#!/usr/bin/env node
// Reuse the full editorial checker through a physics-owned executable boundary.
import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { checkStatementFrontier } from '../statement-first-check.mjs';
export { checkStatementFrontier };
if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2), get = flag => args[args.indexOf(flag) + 1];
  if (!args.includes('--run') || !args.includes('--domain') || get('--domain') !== 'physics')
    throw Error('Use --run RUN --domain physics');
  const result = await checkStatementFrontier(process.cwd(), get('--run'), 'physics');
  for (const error of result.errors) console.error(`ERROR statement-first: ${error}`);
  console.log(`statement-first: ${result.items} item(s) checked; ${result.errors.length} defect(s)`);
  process.exitCode = result.errors.length ? 1 : 0;
}
