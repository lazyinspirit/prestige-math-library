#!/usr/bin/env node
// Root only. No source/report/control edits or mathematical/gate coverage.
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { builder, RUN, ROOT, DIR, need } from './step5-admission-builder-lib.mjs';
import { loadReaderConcerns } from '../../tools/step5-reader-concerns.mjs';
const b = builder(), target = `research/${RUN}-step5-reader-concern-admissions.json`;
need(!existsSync(join(ROOT, target)), 'reader-concern registry already exists');
const selected = [
  ['thm-na-weighted-rational-alternation-characterization', '4', 0],
  ['lem-na-d4-multilevel-detail-support-and-moments', '6', 0],
  ['thm-na-infsup-bounded-right-inverse-hilbert', '31', 0],
  ['def-indexed-geometric-site-set', '15', 0],
  ['lem-periodic-cell-poincare', '65', 0],
  ['thm-periodic-effective-tensor-symmetric-elliptic', '65', 1],
];
const entries = selected.map(([id, batch, index]) => {
  const { review } = b.rootReview(id, batch);
  const digest = b.boundJson(`research/${RUN}-batch-${batch}-step5-context.json`);
  const readerPath = `research/${RUN}-dispatch/alpha-batch-read-${batch}.result.json`, reader = b.boundJson(readerPath);
  const stem = readerPath.replace(/\.result\.json$/, `.attempt-${reader.attempt}`);
  b.boundJson(`${stem}.result.json`); b.boundJson(`${stem}.last-message.json`);
  need(digest.concerns?.[index]?.id === id && digest.items_read?.includes(id), `missing genuine own-batch concern ${id}`);
  return { id, batch, source_kind: 'concern', reader_batch: batch, concern_index: index,
    concern: digest.concerns[index], before_guard_sha256: b.baseline[id], owner_review: review };
});
const archive = `${DIR}/reader-concern-admissions`, capturedAt = new Date().toISOString();
b.frozen(`${archive}/creation-state.json`, b.stateBytes); b.frozen(`${archive}/owner-request.json`, b.requestBytes);
const row = { version: 2, kind: 'owner-confirmed-step4-reader-concerns', run: RUN, authorized_by: 'owner',
  owner_identity: '/root', native_coverage_adopted: false, recorded_at: new Date().toISOString(),
  original_count: b.frontier.ids.length, creation_state: { file: `${archive}/creation-state.json`, captured_at: capturedAt },
  owner_gate_request: { file: `${archive}/owner-request.json`, id: b.request.id }, bindings: b.bindings, entries };
b.frozen(target, Buffer.from(JSON.stringify(row, null, 2) + '\n'), { evidence: false });
// Read-only admission validation, not collection, a mathematical gate or a pass.
// Any failure leaves visible immutable evidence; root must not grant permission.
const admission = loadReaderConcerns(ROOT, RUN, { requireCollection: false }); b.currency();
console.log(JSON.stringify({ path: target, ids: admission.entries.map(e => e.id), mathematical_review: false,
  native_coverage_adopted: false, next: 'Root retains native collection permission; never rewrite original reports or frozen impact packs.' }, null, 2));
