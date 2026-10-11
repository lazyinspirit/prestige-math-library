// Historical review evidence remains inspectable; current stages do not dispatch it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { step3bReviewCoverage } from '../../step3b-review-coverage.mjs';
import { itemHashGuard, itemSurfaceHash } from '../../item-hash.mjs';
const engines = [{ name: 'math', physics: false }, { name: 'physics', physics: true }];
const sha = (x: string) => createHash('sha256').update(x).digest('hex');
const canonical = (x: any): any => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const hashValue = (x: any) => sha(JSON.stringify(canonical(x)));
const TOOLS = join(import.meta.dirname, '../..');
for (const engine of engines) {
  test(`${engine.name}: canonical coverage preserves current reviews, detects pending impact and stale hashes`, () => {
    const repo = mkdtempSync(join(tmpdir(), 'step3b-real-')), run = 'run';
    mkdirSync(join(repo, 'items')); mkdirSync(join(repo, 'research')); mkdirSync(join(repo, 'library'));
    const put = (p: string, d: any) => writeFileSync(join(repo, p), typeof d === 'string' ? d : JSON.stringify(d));
    const itemData: any[] = [{ id: 'lem-a', kind: 'lemma', title: 'A', deps: [], forward_refs: ['thm-b'] }, { id: 'thm-b', kind: 'theorem', title: 'B', deps: ['lem-a'] }];
    const texts = ['---\nid: lem-a\nstatus: draft\ndeps: []\nforward_refs: [thm-b]\n---\n## Statement\nA.\n## Remarks\nNonessential later orientation: [[thm-b]].\n', '---\nid: thm-b\nstatus: draft\ndeps: [lem-a]\n---\n## Statement\nB uses [[lem-a]].\n'];
    const surfaces = Object.fromEntries(itemData.map((r, i) => [r.id, itemSurfaceHash(texts[i]).slice(0, 16)]));
    const plannedPages: any[] = [];
    for (let i = 0; i < 2; i++) {
      put(`items/${itemData[i].id}.md`, texts[i]);
      const page = { id: `page-${i}`, category: 'test', kind: 'A', order: i + 1, requires: [], items: [itemData[i]] };
      plannedPages.push(page);
      put(`research/${run}-batch-${i + 1}.pages.json`, [page]);
      const { items, ...metadata } = page;
      put(`research/${run}-step3-hash-${i + 1}-post-3a.json`, { version: 2, run, batch: String(i + 1), label: 'post-3a', manifest: [itemData[i].id], hashes: { [itemData[i].id]: { item_sha256: sha(texts[i]), contract_sha256: hashValue(null), manifest_sha256: hashValue({ ...itemData[i], __step4_page_id: page.id }) } }, page_manifest: [page.id], page_hashes: { [page.id]: { file_sha256: null, manifest_sha256: hashValue(metadata), item_order: [itemData[i].id] } } });
    }
    put('research/plan-spec.json', { pages: plannedPages });
    const forwardEvidence = 'This exact nonessential Remarks link points to the already authored later page.';
    mkdirSync(join(repo, 'research/nested'));
    put('research/nested/forward-review.md', forwardEvidence);
    put(`research/${run}-alpha-groups.json`, [{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }]);
    const tools = join(TOOLS, engine.physics ? 'physics-support' : '');
    const listed = spawnSync('node', [join(tools, 'cross-group-edges.mjs'), 'list', '--root', repo, '--run', run], { encoding: 'utf8' }); assert.equal(listed.status, 0, listed.stderr);
    const work = JSON.parse(readFileSync(join(repo, `research/${run}-cross-group-edges.json`), 'utf8'));
    const edge = work.edges[0];
    const verdict = { kind: 'edge', ...edge, verdict: 'accurate', note: 'Read the actual precise premise and citing use.', defect_ids: [] };
    const forward = { kind: 'forward', ...work.forwards[0], decision: 'orientation-reviewed', note: 'Exact Remarks-only nonessential link to an authored later page.', defect_ids: [], target_sha256: sha(texts[1]), evidence: 'research/nested/forward-review.md', evidence_sha256: sha(forwardEvidence) };
    put(`research/${run}-3b-verdicts.jsonl`, JSON.stringify(verdict) + '\n' + JSON.stringify(forward) + '\n');
    const beforeSurfaces = { ...surfaces, 'lem-a': 'old' };
    put(`research/${run}-touches.json`, { snapshots: [{ label: 'pre-author', hashes: {}, surfaces: beforeSurfaces }, { label: 'post-3a', hashes: Object.fromEntries(itemData.map((r, i) => [r.id, itemHashGuard(texts[i]).slice(0, 16)])), surfaces }] });
    const impact: any = { version: 1, reviewer: 'actual reviewer', scope: 'direct-boundary', changed_interfaces: ['lem-a'], required_review: ['thm-b'], dispositions: [{ id: 'thm-b', status: 'pending', notes: '' }] };
    put(`research/${run}-impact.json`, impact);
    put(`research/${run}-impact-3b.json`, { version: 1, reviewer: 'actual reviewer', scope: 'direct-boundary', changed_interfaces: [], required_review: [], dispositions: [] });
    try {
      const originalVerdicts = readFileSync(join(repo, `research/${run}-3b-verdicts.jsonl`), 'utf8');
      const partial = step3bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(partial.complete, false); assert.equal(partial.errors.length, 0); assert.equal(partial.pending.length, 1); assert.equal(partial.pending[0].kind, 'impact');
      impact.dispositions = [{id:'thm-b',status:'still-licensed',notes:'A generic note with no current hashes is not a review.'}];
      put(`research/${run}-impact.json`, impact);
      const omitted = step3bReviewCoverage({repo,run,physics:engine.physics});
      assert.equal(omitted.complete,false); assert.ok(omitted.errors.some((e:any)=>e.code==='impact-review-evidence-incomplete'));
      impact.dispositions = [{ id: 'thm-b', status: 'still-licensed', notes: 'Current supplier A licenses precisely the declared B premise.', carrier_raw_sha256: sha(texts[1]), supplier_uses: [{ supplier: 'lem-a', supplier_raw_sha256: sha(texts[0]), consumed_clause: 'A.', use_locations: [{section:'Statement',line:7}] }] }];
      put(`research/${run}-impact.json`, impact);
      assert.equal(step3bReviewCoverage({ repo, run, physics: engine.physics }).complete, true);
      assert.equal(readFileSync(join(repo, `research/${run}-3b-verdicts.jsonl`), 'utf8'), originalVerdicts);
      const cleanCount = step3bReviewCoverage({ repo, run, physics: engine.physics }).counts.completed;
      // Successful-looking status and all current use hashes cannot resolve an
      // explicitly retained source-domain defect or its required owner action.
      impact.dispositions[0].review_outcome = 'confirmed_nonfatal';
      impact.dispositions[0].owner_resolution_required = true;
      put(`research/${run}-impact.json`, impact);
      const heldBytes = readFileSync(join(repo, `research/${run}-impact.json`), 'utf8');
      const ownerHeld = step3bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(ownerHeld.complete, false);
      assert.equal(ownerHeld.counts.completed, cleanCount - 1);
      assert.equal(ownerHeld.pending[0].owner_resolution_required, true);
      assert.equal(ownerHeld.pending[0].owner_hold, true);
      assert.equal(ownerHeld.pending[0].review_outcome, 'confirmed_nonfatal');
      assert.ok(ownerHeld.errors.some((e: any) => e.code === 'owner-resolution-required'), 'only-owner work must not launch repeat readers');
      assert.equal(readFileSync(join(repo, `research/${run}-impact.json`), 'utf8'), heldBytes, 'inspection preserves all evidence/flags');
      // A separate unresolved edge remains independently reviewable.
      put(`research/${run}-3b-verdicts.jsonl`, JSON.stringify(forward) + '\n');
      const independent = step3bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(independent.complete, false); assert.equal(independent.errors.length, 0);
      assert.ok(independent.pending.some((r: any) => r.kind === 'edge'));
      assert.ok(independent.pending.some((r: any) => r.owner_hold === true));
      put(`research/${run}-3b-verdicts.jsonl`, originalVerdicts);
      // Only an actual owner disposition clears the retained flag; the helper
      // itself neither creates the resolution nor changes the receipt.
      impact.dispositions[0].owner_resolution = 'Owner reviewed and resolved the recorded source-domain obligation.';
      impact.dispositions[0].owner_resolution_required = false;
      put(`research/${run}-impact.json`, impact);
      assert.equal(step3bReviewCoverage({ repo, run, physics: engine.physics }).complete, true);

      put('research/nested/forward-review.md', forwardEvidence + '\nAn appended checkpoint changes evidence bytes.');
      const evidenceChanged = step3bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(evidenceChanged.complete, false);
      assert.ok(evidenceChanged.errors.some((e: any) => e.code === 'forward-orientation-evidence-stale'));
      put('research/nested/forward-review.md', forwardEvidence);
      put('items/lem-a.md', texts[0] + '\nChanged source claim.\n');
      const stale = step3bReviewCoverage({ repo, run, physics: engine.physics });
      assert.equal(stale.complete, false); assert.ok(stale.errors.some((e: any) => e.code === 'edge-verdict-stale'));
      assert.ok(stale.errors.some((e: any) => e.code === 'impact-supplier-stale'));
    } finally { rmSync(repo, { recursive: true, force: true }); }
  });
}

for (const engine of engines) test(`${engine.name}: current stage factory has no Step3b review registration`, async () => {
  const module = engine.physics ? await import('../../physics-autopilot/stages/mathlib.step3.mts') : await import('../stages/mathlib.step3.mts');
  const stages = module.step3Stages({ resultPattern: (role: string, label: string) => new RegExp('^'+role+'-'+label+'\\.result\\.json$') });
  assert.equal(stages.some((s: any) => /^3b-/.test(s.id)), false);
  assert.ok(stages.every((s: any) => !s.reviewCoverage));
});
