#!/usr/bin/env node
// Run an item validator on the owning frontier, with the full corpus available
// only for supplier resolution. Never fall back to a repository-wide check.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const argv = process.argv.slice(2);
const delimiter = argv.indexOf('--');
const options = delimiter < 0 ? argv : argv.slice(0, delimiter);
const toolArgs = delimiter < 0 ? [] : argv.slice(delimiter + 1);
const value = flag => options[options.indexOf(flag) + 1];
const run = options.includes('--run') ? value('--run') : null;
const tool = options.includes('--tool') ? value('--tool') : null;
const positional = new Set(['precheck', 'rendercheck', 'prosecheck']);
const selectors = new Set(['depcheck', 'fwdcheck', 'extcheck', 'depsource']);
if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '') || ![...positional, ...selectors, 'pathcheck', 'validate-plan'].includes(tool))
  throw Error('Usage: frontier-item-gate.mjs --run RUN --tool TOOL [-- TOOL_ARGS]');
if (toolArgs.includes('--items-file') || toolArgs.includes('--pages-file'))
  throw Error('The frontier supplies its own selectors');
const allowedFlags = { precheck: ['--json'], rendercheck: ['--json', '--quiet'], prosecheck: ['--warnings', '--strict'], depcheck: ['--json', '--quiet', '--pending-audit-ok'], fwdcheck: ['--json', '--quiet'], extcheck: ['--json', '--quiet'], depsource: ['--json'], pathcheck: ['--json', '--quiet'], 'validate-plan': [] };
if (toolArgs.some(arg => !allowedFlags[tool].includes(arg))) throw Error('Unsupported frontier validator flag');
const root = process.cwd();
const manifests = readdirSync(join(root, 'research')).filter(name =>
  name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length))).sort();
if (!manifests.length) throw Error(`No manifests for frontier ${run}`);
const pages = manifests.flatMap(name => {
  const rows = JSON.parse(readFileSync(join(root, 'research', name), 'utf8'));
  if (!Array.isArray(rows)) throw Error(`Invalid frontier manifest ${name}`);
  return rows;
});
const ids = [...new Set(pages.flatMap(page => (page.items ?? []).map(item => typeof item === 'string' ? item : item.id)))].sort();
if ((!ids.length && tool !== 'validate-plan') || ids.some(id => !/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id ?? '')))
  throw Error(`Frontier ${run} has no valid populated item scope`);
const selector = `research/${run}-frontier-gate-items.json`;
const pageSelector = `research/${run}-frontier-gate-pages.json`;
function writeStable(path, data) {
  const text = JSON.stringify(data, null, 2) + '\n';
  if (!existsSync(path) || readFileSync(path, 'utf8') !== text) writeFileSync(path, text);
}
writeStable(selector, ids);
writeStable(pageSelector, [...new Set(pages.map(page => page.id))].sort());
const itemFiles = ids.map(id => `items/${id}.md`);
const pageFiles = [...new Set(pages.map(page => `library/${page.category}/${page.id}.md`))].filter(path => existsSync(path));
const pathwayFiles = [...new Set(pages.map(page => `library/${page.category}/_pathway.md`))].filter(path => existsSync(path));
const script = `tools/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`;
const command = tool === 'precheck' ? ['tools/tsx-run.mjs', script] : [script];
if (positional.has(tool)) command.push(...itemFiles, ...(tool === 'precheck' ? [] : pageFiles), ...(tool === 'prosecheck' ? pathwayFiles : []), ...toolArgs);
else if (tool === 'validate-plan') command.push('research/plan-spec.json', '--pages-file', pageSelector, ...toolArgs);
else if (tool === 'pathcheck') command.push('--pages-file', pageSelector, ...toolArgs);
else command.push('--items-file', selector, ...(tool === 'depsource' ? ['--run', run] : []), ...toolArgs);
console.log(`frontier-item-gate: ${tool}; ${ids.length} item(s), ${pages.length} frontier page(s); run ${run}`);
const result = spawnSync(process.execPath, command, { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
