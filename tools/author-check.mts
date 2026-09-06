import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runGate } from './autopilot/src/gates.mts';
import { split, yaml } from './pathway-lib.mjs';

export function authorInputs(repo: string, run: string, batch: string) {
  const manifest = `research/${run}-batch-${batch}.pages.json`;
  const contract = `research/${run}-batch-${batch}.proof-contracts.json`;
  const pages = JSON.parse(readFileSync(join(repo, manifest), 'utf8'));
  const items = pages.flatMap((page: any) => page.items.map((item: any) => `items/${item.id ?? item}.md`));
  const files = [...items, ...pages.map((page: any) => `library/${page.category}/${page.id}.md`)];
  const dependencies = new Set<string>(pages.flatMap((page: any) => page.items.flatMap((item: any) => item.deps ?? [])));
  for (const file of items) if (existsSync(join(repo, file))) {
    try {
      const doc = yaml().parse(split(readFileSync(join(repo, file), 'utf8')).fm) ?? {};
      for (const id of [...(doc.deps ?? []), ...(doc.justified_by ?? [])]) dependencies.add(id);
    } catch { /* rendercheck reports malformed frontmatter in the full diagnostic set */ }
  }
  const hash = createHash('sha256');
  const checkers = ['author-check.mts', 'precheck.mts', 'rendercheck.mjs', 'content-policy.mjs',
    'content-policy-lib.mjs', 'proof-contract.mjs', 'tsx-run.mjs', 'paths.mjs', 'pathway-lib.mjs',
    'autopilot/src/gates.mts'].map((file) => `tools/${file}`);
  for (const path of [manifest, contract, ...files, ...checkers, ...[...dependencies].sort().map((id) => `items/${id}.md`)]) {
    hash.update(path).update(existsSync(join(repo, path)) ? readFileSync(join(repo, path)) : '<missing>');
  }
  return { manifest, contract, items, files, fingerprint: hash.digest('hex') };
}

export async function checkAuthor(repo: string, run: string, batch: string) {
  const input = authorInputs(repo, run, batch);
  const commands = [
    ['precheck', ['node', 'tools/tsx-run.mjs', 'tools/precheck.mts', ...input.items]],
    ['rendercheck', ['node', 'tools/rendercheck.mjs', ...input.files]],
    ['content-policy-items', ['node', 'tools/content-policy.mjs', input.manifest]],
    ['proof-contract', ['node', 'tools/proof-contract.mjs', input.contract, '--strict']],
  ] as const;
  const results = [];
  for (const [id, argv] of commands) results.push(await runGate({ id, argv: [...argv] }, { cwd: repo }));
  const ok = input.items.length > 0 && results.every((result) => result.ok);
  writeFileSync(join(repo, `research/${run}-author-check-${batch}.json`),
    JSON.stringify({ batch, fingerprint: input.fingerprint, ok, results }, null, 2) + '\n');
  return ok;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [run, batch] = process.argv.slice(2);
  if (!run || !/^\d+$/.test(batch ?? '')) throw new Error('usage: author-check.mts RUN BATCH');
  process.exitCode = await checkAuthor(process.cwd(), run, batch) ? 0 : 1;
}
