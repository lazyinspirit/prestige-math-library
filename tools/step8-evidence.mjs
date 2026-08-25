// Shared, strict evidence primitives for Step 8.
//
// Step 8 used to parse the same append-only ledgers three different ways. Two
// of those readers silently discarded malformed JSON, and one treated any
// same-shaped adjudication row as evidence even when no judge had produced the
// rejection it claimed to answer. This module makes the exact join a single
// operation: a decision exists only when `(id, model, context_sha256)` names a
// real `keep:false` verdict.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';

export const ADJUDICATION_OUTCOMES = new Set([
  'confirmed_fatal',
  'confirmed_nonfatal',
  'false_positive',
]);

export const rejectionKey = (row) =>
  `${String(row?.id ?? '')}\u0000${String(row?.model ?? '')}\u0000${String(row?.context_sha256 ?? '')}`;

export function readJsonlStrict(path, { allowMissing = true } = {}) {
  const rows = [];
  const errors = [];
  if (!path || !existsSync(path)) {
    if (!allowMissing) errors.push(`${path}: file does not exist`);
    return { rows, errors };
  }
  for (const [index, line] of readFileSync(path, 'utf8').split(/\r?\n/).entries()) {
    if (!line.trim()) continue;
    try { rows.push({ row: JSON.parse(line), line: index + 1, path }); }
    catch (cause) { errors.push(`${path}:${index + 1}: invalid JSON (${cause.message})`); }
  }
  return { rows, errors };
}

export function loadStep8JudgeEvidence(judgePath, adjudicationsPath, { allowMissingAdjudications = true } = {}) {
  const judge = readJsonlStrict(judgePath, { allowMissing: false });
  const adjudications = readJsonlStrict(adjudicationsPath, { allowMissing: allowMissingAdjudications });
  const errors = [...judge.errors, ...adjudications.errors];
  const rejections = new Map();
  const answers = new Map();
  const surplusAnswers = [];

  for (const entry of judge.rows) {
    const row = entry.row;
    if (typeof row?.id !== 'string' || !row.id
      || typeof row?.model !== 'string' || !row.model
      || typeof row?.context_sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(row.context_sha256)
      || ![true, false, null].includes(row?.keep)) {
      errors.push(`${entry.path}:${entry.line}: malformed judge row`);
      continue;
    }
    if (row.keep !== false) continue;
    const key = rejectionKey(row);
    const prior = rejections.get(key);
    if (!prior || String(row.at ?? '') >= String(prior.row.at ?? '')) rejections.set(key, entry);
  }

  for (const entry of adjudications.rows) {
    const row = entry.row;
    if (typeof row?.id !== 'string' || !row.id
      || typeof row?.model !== 'string' || !row.model
      || typeof row?.context_sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(row.context_sha256)
      || !ADJUDICATION_OUTCOMES.has(row?.outcome)) {
      errors.push(`${entry.path}:${entry.line}: malformed Step-8 adjudication row`);
      continue;
    }
    const key = rejectionKey(row);
    if (!rejections.has(key)) {
      surplusAnswers.push(entry);
      continue;
    }
    const prior = answers.get(key);
    if (!prior || String(row.at ?? '') >= String(prior.row.at ?? '')) answers.set(key, entry);
  }
  return { rejections, answers, surplusAnswers, errors };
}

const canonical = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort()
      .map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
};

export function step8AlertId(alert) {
  const source = alert.source === 'step8-rejection' ? 'step8-rejection' : 'step7-read';
  const sourceRejection = source === 'step8-rejection'
    ? {
        id: String(alert.source_rejection?.id ?? ''),
        model: String(alert.source_rejection?.model ?? ''),
        context_sha256: String(alert.source_rejection?.context_sha256 ?? ''),
      }
    : null;
  const payload = {
    source,
    from_group: String(alert.from_group ?? ''),
    owning_group: String(alert.owning_group ?? ''),
    item: String(alert.item ?? ''),
    finding: String(alert.finding ?? ''),
    severity: String(alert.severity ?? ''),
    source_rejection: sourceRejection,
  };
  return `s8a-${createHash('sha256').update(canonical(payload)).digest('hex').slice(0, 24)}`;
}

export function exactSetProblems(actual, expected, label) {
  const problems = [];
  const seen = new Set();
  for (const value of actual) {
    if (seen.has(value)) problems.push(`${label}: duplicate \`${value}\``);
    seen.add(value);
  }
  const wanted = new Set(expected);
  for (const value of seen) if (!wanted.has(value)) problems.push(`${label}: unexpected \`${value}\``);
  for (const value of wanted) if (!seen.has(value)) problems.push(`${label}: missing \`${value}\``);
  return problems;
}
