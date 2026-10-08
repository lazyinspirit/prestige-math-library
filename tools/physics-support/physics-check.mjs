import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { REPO } from './paths.mjs';
import { loadPhysicsRepository, validatePhysicsContent } from './physics-content.mjs';
import { verifyMathematicsImports } from './physics-imports.mjs';
import { frontierGateScope } from './frontier-gate-scope.mjs';
import { readRunManifestPages } from './run-manifest-pages.mjs';
const args = process.argv.slice(2), value = name => args[args.indexOf(name) + 1];
const root = args.includes('--root') ? resolve(value('--root')) : REPO;
try {
  verifyMathematicsImports(root);
  const scope = args.includes('--run') ? frontierGateScope({ repo: root, run: value('--run') }, { requireItemFiles: !args.includes('--plan'), allowEmptyItems: args.includes('--plan') }) : null;
  let plan = args.includes('--plan') ? JSON.parse(readFileSync(resolve(root, value('--plan')), 'utf8')) : null;
  if (scope && plan) {
    const current = readRunManifestPages(root, value('--run'), { allowEmptyItems: true });
    for (const page of current) if (plan.pages.filter(p => p.id === page.id).length !== 1) throw Error(`current page ${page.id} must occur exactly once in plan`);
    const overlay = new Map(current.map(page => [page.id, page]));
    plan = { ...plan, pages: plan.pages.map(page => overlay.get(page.id) ?? page) };
  }
  const repo = loadPhysicsRepository(root, plan, scope?.pages ?? null);
  if (scope && !plan) for (const id of scope.pages)
    if (!repo.pages.some(page => (page.id ?? page.page) === id)) throw Error(`missing selected physics page ${id}`);
  const errors = validatePhysicsContent({ ...repo, requireBodies: !args.includes('--plan'), selectedItems: scope?.items ?? null, selectedPages: scope?.pages ?? null });
  if (args.includes('--json')) console.log(JSON.stringify({ errors, items: scope ? scope.items.size : repo.items.length }, null, 2));
  else {
    for (const error of errors) console.error(`ERROR ${error.code} [${error.id}]: ${error.message}`);
    console.log(`physics-content: ${errors.length} error(s), ${scope ? scope.items.size : repo.items.length} items checked`);
  }
  process.exitCode = errors.length ? 1 : 0;
} catch (error) { console.error(`physics-content: ${error.message}`); process.exitCode = 1; }
