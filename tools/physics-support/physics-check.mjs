import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { REPO } from './paths.mjs';
import { loadPhysicsRepository, validatePhysicsContent } from './physics-content.mjs';
import { verifyMathematicsImports } from './physics-imports.mjs';
const args = process.argv.slice(2), value = name => args[args.indexOf(name) + 1];
const root = args.includes('--root') ? resolve(value('--root')) : REPO;
try {
  verifyMathematicsImports(root);
  const plan = args.includes('--plan') ? JSON.parse(readFileSync(resolve(root, value('--plan')), 'utf8')) : null;
  const repo = loadPhysicsRepository(root, plan);
  const errors = validatePhysicsContent({ ...repo, requireBodies: !args.includes('--plan') });
  if (args.includes('--json')) console.log(JSON.stringify({ errors, items: repo.items.length }, null, 2));
  else {
    for (const error of errors) console.error(`ERROR ${error.code} [${error.id}]: ${error.message}`);
    console.log(`physics-content: ${errors.length} error(s), ${repo.items.length} items checked`);
  }
  process.exitCode = errors.length ? 1 : 0;
} catch (error) { console.error(`physics-content: ${error.message}`); process.exitCode = 1; }
