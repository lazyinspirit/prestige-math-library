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
  if (args.includes('--step6-scope') && (!args.includes('--run') || args.includes('--plan')))
    throw Error('--step6-scope requires an authored --run frontier');
  let plan = args.includes('--plan') ? JSON.parse(readFileSync(resolve(root, value('--plan')), 'utf8')) : null;
  let proposedPages = null;
  const maintenanceRun = args.includes('--maintenance-run') ? value('--maintenance-run') : null;
  if (args.filter(arg => arg === '--maintenance-run').length > 1 || maintenanceRun !== null
      && (!/^[a-zA-Z0-9_-]+$/.test(maintenanceRun ?? '') || !args.includes('--pages-file') || !plan))
    throw Error('--maintenance-run requires one explicit run with --plan and --pages-file');
  if (args.includes('--pages-file')) {
    if (!plan || args.includes('--run')) throw Error('--pages-file requires --plan without --run');
    const ids = JSON.parse(readFileSync(resolve(root, value('--pages-file')), 'utf8'));
    if (!Array.isArray(ids) || !ids.length || ids.some(id => typeof id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) || new Set(ids).size !== ids.length)
      throw Error('proposed page selection must contain nonempty unique page ids');
    proposedPages = ids.map(id => {
      const matches = plan.pages.filter(page => page.id === id);
      if (matches.length !== 1) throw Error(`proposed page ${id} must occur exactly once in plan`);
      const page = matches[0];
      if (!['A', 'B'].includes(page.kind) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(page.category ?? '') || !Number.isFinite(page.order) || !Array.isArray(page.items))
        throw Error(`invalid proposed page ${id}`);
      return page;
    });
  }
  verifyMathematicsImports(root, proposedPages ? { planning: true, proposedPages, maintenanceRun, maintenanceSelector: maintenanceRun ? value('--pages-file') : null } : args.includes('--run') ? { run: value('--run'), planning: args.includes('--plan'), frontierOnly: args.includes('--step6-scope') } : {});
  const scope = proposedPages ? { pages: new Set(proposedPages.map(page => page.id)), items: new Set(proposedPages.flatMap(page => page.items.map(item => item.id))) }
    : args.includes('--run') ? frontierGateScope({ repo: root, run: value('--run') }, { requireItemFiles: !args.includes('--plan'), allowEmptyItems: args.includes('--plan') }) : null;
  if (scope && plan && !proposedPages) {
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
