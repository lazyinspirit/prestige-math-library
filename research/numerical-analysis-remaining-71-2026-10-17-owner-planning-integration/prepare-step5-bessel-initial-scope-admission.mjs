#!/usr/bin/env node
// Root only. Original report/output/log remain untouched; no transcript copied.
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { builder, RUN, ROOT, DIR, need, sha } from './step5-admission-builder-lib.mjs';
import { recordInitialScopeFindings } from '../../tools/step5-initial-scope-findings.mjs';
const b = builder(), id = 'alg-certified-integer-order-bessel-evaluation', unit = '25';
need(!existsSync(join(ROOT, `research/${RUN}-step5-initial-scope-findings.json`)), 'initial-scope registry already exists');
const { source, review } = b.rootReview(id, unit), origin = b.origins.get(unit);
const indices = origin.report.ledger_updates.map((f, i) => f.id === id && f.action === 'record-open-finding' ? i : -1).filter(i => i >= 0);
need(indices.length === 1, 'missing/ambiguous original Bessel finding');
const index = indices[0], finding = origin.report.ledger_updates[index];
const stem = origin.resultPath.replace(/\.result\.json$/, `.attempt-${origin.result.attempt}`);
b.bind(`${stem}.prompt.md`); const logBytes = b.bind(`${stem}.log`), log = logBytes.toString('utf8');
const end = log.lastIndexOf('\ntokens used\n'), start = log.lastIndexOf('\ncodex\n', end);
need(start >= 0 && end > start, 'missing authentic native final JSON output');
const output = JSON.parse(log.slice(start + 7, end).trim());
const outputIndices = output.ledger_updates.map((f, i) => f.id === id && f.action === 'record-open-finding' ? i : -1).filter(i => i >= 0);
need(outputIndices.length === 1, 'missing/ambiguous native final-output Bessel summary');
const outputIndex = outputIndices[0], outputFinding = output.ledger_updates[outputIndex];
need(review.summary_correspondence?.confirmed_same_finding === true, 'actual separate root summary-correspondence confirmation is required');
// Select an actual old literal from root-approved source-only instructions.
const excerpt = review.proposed_edits.at(-1).source_excerpt.split('\n').find(line => line.length >= 20);
need(excerpt && source.includes(excerpt), 'missing literal current/native source excerpt');
const starts = [...log.matchAll(/^exec\r?\n/gm)].map(m => m.index), candidates = [];
for (let i = 0; i < starts.length; i++) {
  const at = starts[i], limit = starts[i + 1] ?? log.length, record = log.slice(at, limit);
  const success = /\n succeeded in \d+ms:\n/.exec(record);
  if (!success || !record.slice(0, success.index).includes(`items/${id}.md`)) continue;
  const outputAt = success.index + success[0].length;
  const boundaries = ['\nthinking\n', '\ncodex\n', '\ntokens used\n'].map(token => record.indexOf(token, outputAt)).filter(n => n >= 0);
  const outputEnd = boundaries.length ? Math.min(...boundaries) : record.length;
  const excerptAt = record.indexOf(excerpt, outputAt);
  if (excerptAt < outputAt || excerptAt + excerpt.length > outputEnd) continue;
  const startByte = Buffer.byteLength(log.slice(0, at)), endByte = Buffer.byteLength(log.slice(0, at + excerptAt + excerpt.length));
  candidates.push({ start_byte: startByte, end_byte: endByte, sha256: sha(logBytes.subarray(startByte, endByte)) });
}
need(candidates.length === 1, 'actual successful native source-read span is missing or ambiguous');
const sourceArchive = `${DIR}/initial-scope-findings/bessel-current-source-before.md`;
b.frozen(sourceArchive, Buffer.from(source));
const entry = { id, batch: unit, unit, open_finding_index: index, finding, route: 'frontier-owner',
  output_finding_index: outputIndex, output_finding: outputFinding, current_guard_sha256: b.baseline[id],
  source_read: { native_log_span: candidates[0], source_excerpt: excerpt, source_file: sourceArchive }, owner_review: review };
const request = { version: 1, kind: 'owner-confirmed-native-initial-scope-findings', run: RUN,
  authorized_by: 'owner', owner_identity: '/root', native_coverage_adopted: false,
  recorded_at: new Date().toISOString(), original_count: b.frontier.ids.length, bindings: b.bindings, entries: [entry] };
const requestPath = `${DIR}/initial-scope-findings/bessel-owner-admission-request.json`;
b.frozen(requestPath, Buffer.from(JSON.stringify(request, null, 2) + '\n'), { evidence: false }); b.currency();
const result = recordInitialScopeFindings(ROOT, RUN, requestPath); b.currency();
console.log(JSON.stringify({ ...result, transcripts_copied: false,
  next: 'Root retains native collection permission. The15 pre-existing downstream targets remain exclusively native.' }, null, 2));
