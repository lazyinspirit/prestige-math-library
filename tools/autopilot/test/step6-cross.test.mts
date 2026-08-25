import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const REPO = join(import.meta.dirname, '..', '..', '..');
const TOOL = join(REPO, 'tools', 'cross-group-edges.mjs');
const sha = (text: string | Buffer) => createHash('sha256').update(text).digest('hex');
const canonical = (value: any): any => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]))
    : value;
const hashValue = (value: any) => sha(JSON.stringify(canonical(value)));

function item(id: string, deps: string[] = [], forward: string[] = []) {
  return `---\nid: ${id}\nstatus: draft\ndeps: [${deps.join(', ')}]\njustified_by: []\nforward_refs: [${forward.join(', ')}]\n---\n## Statement\n${id}.\n\n## Proof\n1.1 Done.\n`;
}

function fixture(edge = false) {
  const root = mkdtempSync(join(tmpdir(), 'step6-cross-'));
  for (const dir of ['research', 'items', 'library/test']) mkdirSync(join(root, dir), { recursive: true });
  const items = { 'lem-source': item('lem-source', edge ? ['lem-target'] : []), 'lem-target': item('lem-target') };
  for (const [id, text] of Object.entries(items)) writeFileSync(join(root, 'items', `${id}.md`), text);
  for (const id of ['page-one', 'page-two']) writeFileSync(join(root, 'library/test', `${id}.md`), `---\npage: ${id}\n---\n`);
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
    { id: 'page-one', category: 'test', items: ['lem-source'] },
  ]));
  writeFileSync(join(root, 'research', 'r-batch-2.pages.json'), JSON.stringify([
    { id: 'page-two', category: 'test', items: ['lem-target'] },
  ]));
  writeFileSync(join(root, 'research', 'r-alpha-groups.json'), JSON.stringify([
    { label: 'a', covers: ['1', '2'] },
  ]));
  for (const [batch, id, page] of [['1', 'lem-source', 'page-one'], ['2', 'lem-target', 'page-two']]) {
    const pageMetadata = { id: page, category: 'test' };
    const contract = {};
    writeFileSync(join(root, 'research', `r-batch-${batch}.proof-contracts.json`), JSON.stringify({ contracts: { [id]: contract } }));
    writeFileSync(join(root, 'research', `r-step6-hash-${batch}-post-6b.json`), JSON.stringify({
      version: 2, run: 'r', batch, label: 'post-6b', manifest: [id],
      hashes: { [id]: {
        item_sha256: sha(readFileSync(join(root, 'items', `${id}.md`)),),
        contract_sha256: hashValue(contract),
        manifest_sha256: hashValue({ id, __step6_page_id: page }),
      } },
      page_manifest: [page], page_hashes: { [page]: {
        file_sha256: sha(readFileSync(join(root, 'library/test', `${page}.md`)),),
        manifest_sha256: hashValue(pageMetadata), item_order: [id],
      } },
    }));
  }
  const run = (command: string) => spawnSync(process.execPath,
    [TOOL, command, '--run', 'r', '--root', root], { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  const carrier = (id: string) => spawnSync(process.execPath,
    [TOOL, 'carrier', '--run', 'r', '--id', id, '--root', root],
    { cwd: REPO, encoding: 'utf8', timeout: 60_000 }).stdout.trim();
  return { root, run, carrier };
}

test('6c lists same-group cross-batch edges and closes an exact current verdict', () => {
  const fx = fixture(true);
  try {
    assert.equal(fx.run('list').status, 0);
    const list = JSON.parse(readFileSync(join(fx.root, 'research', 'r-cross-group-edges.json'), 'utf8'));
    assert.equal(list.edges.length, 1);
    assert.equal(list.edges[0].from_group, 'a');
    assert.equal(list.edges[0].to_group, 'a');
    writeFileSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl'), JSON.stringify({
      kind: 'edge', from: 'lem-source', to: 'lem-target', verdict: 'accurate',
      from_sha256: list.edges[0].from_sha256, to_sha256: list.edges[0].to_sha256,
      defect_ids: [], note: 'Statement exactly licenses the use.',
    }) + '\n');
    const result = fx.run('check');
    assert.equal(result.status, 0, result.stderr);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('6c requires verdicts for edges and forwards introduced after listing', () => {
  const fx = fixture(false);
  try {
    assert.equal(fx.run('list').status, 0);
    writeFileSync(join(fx.root, 'items', 'lem-source.md'), item('lem-source', ['lem-target'], ['later-result']));
    let result = fx.run('check');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /edge-introduced-unverdicted/);
    assert.match(result.stderr, /forward-introduced-undecided/);

    const current = sha(readFileSync(join(fx.root, 'items', 'lem-source.md')));
    const target = sha(readFileSync(join(fx.root, 'items', 'lem-target.md')));
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-S6-forward', run: 'r', subject: 'lem-source', caught_at_stage: '6c-cross', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl'), [
      { kind: 'edge', from: 'lem-source', to: 'lem-target', verdict: 'accurate', from_sha256: current, to_sha256: target, defect_ids: [], note: 'valid' },
      { kind: 'forward', item: 'lem-source', target: 'later-result', decision: 'lemmas-added', item_sha256: current, defect_ids: ['r-S6-forward'], note: 'intermediate result added' },
      { kind: 'item', batch: '1', id: 'lem-source', verdict: 'accepted', subject_sha256: fx.carrier('lem-source'), defect_ids: [], note: 'Current carrier verified with the edge and forward dispositions.' },
    ].map((row) => JSON.stringify(row)).join('\n') + '\n');
    // The decision is not applied until forward_refs is removed.
    result = fx.run('check');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /forward-still-declared/);
    writeFileSync(join(fx.root, 'items', 'lem-source.md'), item('lem-source', ['lem-target']));
    const applied = sha(readFileSync(join(fx.root, 'items', 'lem-source.md')));
    const verdicts = readFileSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl'), 'utf8')
      .trim().split('\n').map((line) => JSON.parse(line));
    verdicts[0].from_sha256 = applied;
    verdicts[1].item_sha256 = applied;
    verdicts[2].subject_sha256 = fx.carrier('lem-source');
    writeFileSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl'), verdicts.map((row) => JSON.stringify(row)).join('\n') + '\n');
    result = fx.run('check');
    assert.equal(result.status, 0, result.stderr);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('6c rejects duplicate, unapplied, and stale edge verdicts', () => {
  const fx = fixture(true);
  try {
    fx.run('list');
    const list = JSON.parse(readFileSync(join(fx.root, 'research', 'r-cross-group-edges.json'), 'utf8'));
    const row = { kind: 'edge', from: 'lem-source', to: 'lem-target', verdict: 'struck',
      from_sha256: list.edges[0].from_sha256, to_sha256: list.edges[0].to_sha256,
      defect_ids: ['r-S6-edge'], note: 'bad citation' };
    writeFileSync(join(fx.root, 'research', 'defect-ledger.jsonl'), JSON.stringify({
      defect_id: 'r-S6-edge', run: 'r', subject: 'lem-source', caught_at_stage: '6c-cross', disposition: 'fixed',
    }) + '\n');
    writeFileSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl'), `${JSON.stringify(row)}\n${JSON.stringify(row)}\n`);
    const result = fx.run('check');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /verdict-duplicate/);
    assert.match(result.stderr, /edge-strike-not-applied/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('6c cannot silently carry a proof-only edit past the post-6b boundary', () => {
  const fx = fixture(false);
  try {
    assert.equal(fx.run('list').status, 0);
    const itemPath = join(fx.root, 'items', 'lem-source.md');
    writeFileSync(itemPath, readFileSync(itemPath, 'utf8') + '\nA clarified proof step.\n');
    let result = fx.run('check');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /change-introduced-undecided: item \[lem-source\]/);

    writeFileSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl'), `${JSON.stringify({
      kind: 'item', batch: '1', id: 'lem-source', verdict: 'accepted',
      subject_sha256: fx.carrier('lem-source'), defect_ids: [],
      note: 'The complete current proof and composite carrier were critically checked.',
    })}\n`);
    result = fx.run('check');
    assert.equal(result.status, 0, result.stderr);

    writeFileSync(itemPath, readFileSync(itemPath, 'utf8') + '\nA later unreviewed byte.\n');
    result = fx.run('check');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /change-verdict-stale/);
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});

test('6c distinguishes page additions and removals and creates an empty verdict artifact', () => {
  const fx = fixture(false);
  try {
    writeFileSync(join(fx.root, 'library/test', 'page-new.md'), '---\npage: page-new\n---\n');
    writeFileSync(join(fx.root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
      { id: 'page-one', category: 'test', items: ['lem-source'] },
      { id: 'page-new', category: 'test', items: [] },
    ]));
    writeFileSync(join(fx.root, 'research', 'r-batch-2.pages.json'), '[]');
    assert.equal(fx.run('list').status, 0);
    assert.equal(existsSync(join(fx.root, 'research', 'r-6c-verdicts.jsonl')), true);
    const list = JSON.parse(readFileSync(join(fx.root, 'research', 'r-cross-group-edges.json'), 'utf8'));
    assert.ok(list.changes.some((change: any) => change.kind === 'page-addition' && change.id === 'page-new'));
    assert.ok(list.changes.some((change: any) => change.kind === 'page-removal' && change.id === 'page-two'));
  } finally { rmSync(fx.root, { recursive: true, force: true }); }
});
