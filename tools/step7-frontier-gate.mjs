// Step 7.8/7.10 alone judge item findings against the frozen original frontier.
// Raw detector output is retained separately; exclusion is never a math pass.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { validateFrontier } from './step7-rounds.mjs';

const ITEM = '(?:def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*';
const itemId = new RegExp(`^${ITEM}$`);
const itemFile = new RegExp(`^(?:.*?/)?items/(${ITEM})\\.md:`);
const native = new Set(['precheck', 'rendercheck', 'prosecheck']);
const fileCodes = {
  depcheck: 'yaml-escape id-filename kind-prefix authorship-invalid authorship-kind provenance-statement-invalid provenance-proof-invalid provenance-proof-applicability self-dep dep-unresolved justification-duplicated link-unresolved published-unchecked published-unaudited sources-checked-on-proved b-leaf-content justification-backward',
  fwdcheck: 'forward-unused forward-in-deps forward-on-spine forward-dangling forward-same-page forward-not-later link-unplanned forward-undeclared',
  extcheck: 'foundations-deferred-dependency unproved-kind unproved-has-proof unproved-precheck unproved-uncited unproved-judged external-dangling external-not-unproved external-in-deps external-unused',
};
const idCodes = {
  'proof-contract': 'item-missing scope-missing-contract contract-outside-scope citations-shape citation-shape citation-id citation-duplicate citation-fact-missing citation-source-not-in-fact citation-undeclared-dependency citation-source-missing citation-ai-generated-statement citation-section citation-quote-missing citation-quote-mismatch citation-uses citation-use-step-missing citation-use-not-supported citation-use-unmapped citation-fact-uncontracted step-unmapped step-entry-shape step-entry-id step-entry-duplicate step-entry-claim step-entry-legacy-steps step-entry-step step-entry-inputs step-entry-step-missing step-entry-overlap step-entry-input-omitted step-entry-input-invalid step-entry-input-fact-missing step-entry-input-step-missing boundary-shape boundary-entry-shape boundary-case boundary-duplicate boundary-status boundary-evidence boundary-evidence-unanchored boundary-evidence-step-missing boundary-na-reason boundary-missing',
  'finite-smoke': 'smoke-shape smoke-check smoke-assertion item-missing smoke-assertion-mismatch finite-countermodel',
  'risk-report': 'item-missing risk-review-missing',
  'judge-closure': 'scope-item-missing provenance-missing judge-adjudication-missing judge-verdict-confirmed-fatal judge-coverage-missing terminal-resolution-stale terminal-resolution-escalated',
};
const supported = new Set([...Object.keys(fileCodes), ...Object.keys(idCodes), 'boundary-audit', 'citation-fidelity', 'depsource']);
const knownCode = (table, check, row) => typeof row?.code === 'string' && table[check]?.split(' ').includes(row.code);

/** Strictly partition detector-owned subjects; cited suppliers are never owners. */
export function projectFrontierGate(check, result, frontier, allIds) {
  const rawOutput = `${result.stdout}${result.stderr}`;
  const scope = new Set(frontier.ids), known = new Set(allIds);
  const evidence = { frontierSha256: frontier.sha256, mode: 'json-projection', excluded: [], retained: [], global: [] };
  const base = { ...result, output: rawOutput, rawOutput, rawCode: result.code, frontierScope: evidence };
  const fail = why => {
    evidence.global.push({ scopeError: why });
    return { ...base, code: result.code || 1, scopeError: why };
  };
  if (![0, 1].includes(result.code) || result.stderr.trim()) return fail('runtime or stderr diagnostic remains blocking');
  let document;
  try { document = JSON.parse(result.stdout); } catch { return fail('unreadable gate JSON remains blocking'); }
  if (!document || typeof document !== 'object' || Array.isArray(document)) return fail('invalid gate JSON remains blocking');
  // Unexpected top-level error channels must not disappear behind an understood list.
  if (document.error || document.fatal || document.exception) return fail('unclassified gate diagnostic remains blocking');
  let seen = 0, remaining = 0, malformed = false;
  const partition = (rows, subjects) => {
    if (!Array.isArray(rows)) { malformed = true; return rows; }
    return rows.filter(row => {
      seen++;
      const ids = subjects(row);
      if (!ids?.length || ids.some(id => !known.has(id) || !itemId.test(id))) {
        evidence.global.push(row); remaining++; return true;
      }
      const included = ids.filter(id => scope.has(id));
      const excluded = ids.filter(id => !scope.has(id));
      if (excluded.length) evidence.excluded.push({ subjects: excluded, diagnostic: row });
      if (included.length) { evidence.retained.push({ subjects: included, diagnostic: row }); remaining++; return true; }
      return false;
    });
  };
  const projected = { ...document };
  if (Object.hasOwn(fileCodes, check) || Object.hasOwn(idCodes, check)) {
    projected.errors = partition(document.errors, row => {
      if (knownCode(fileCodes, check, row)) return [String(row.msg ?? '').match(itemFile)?.[1]];
      if (knownCode(idCodes, check, row)) return [row.id];
      // Cycles are global integrity findings even when every vertex is outside.
      return null;
    });
    projected.ok = remaining === 0;
  } else if (check === 'boundary-audit') {
    projected.contradicted = partition(document.contradicted, row => [row?.id]);
    projected.templates = partition(document.templates, row => row?.items);
  } else if (check === 'citation-fidelity') {
    projected.quote_not_found = partition(document.quote_not_found, row => [row?.id]);
    // Widening candidates are advisory in this detector and cannot cause exit 1.
    if (!Array.isArray(document.widening)) malformed = true;
  } else if (check === 'depsource') {
    if (!Array.isArray(document.rows)) malformed = true;
    else {
      const errors = document.rows.filter(row => row?.verdict === 'unresolved');
      projected.rows = partition(errors, row => [row?.item]);
      if (document.rows.some(row => !['published', 'planned-earlier', 'draft-page', 'homeless', 'planned-later', 'unresolved'].includes(row?.verdict))) malformed = true;
    }
  } else return fail('unsupported gate projection remains blocking');
  if (malformed || (result.code === 1 && seen === 0)) return fail('unclassified failure or malformed diagnostic list remains blocking');
  if (result.code === 0 && seen > 0) return fail('gate exit disagrees with blocking diagnostic evidence');
  // Judge liveness counts only current frontier verdict pairs, never outsiders.
  if (check === 'judge-closure') {
    if (!Array.isArray(document.judge_coverage)) return fail('missing judge coverage remains blocking');
    projected.frontier_judge_complete = document.judge_coverage.filter(row => scope.has(row?.id)).length;
  }
  return { ...base, code: remaining ? 1 : 0, output: JSON.stringify(projected),
    scopeWhy: `${remaining} retained finding(s); ${evidence.excluded.length} outside finding(s) excluded, not passed` };
}

/** Decorate this battery only; other stages keep their existing gate scopes. */
export function frontierGateBattery(ctx, gates) {
  const path = join(ctx.repo, 'research', `${ctx.run}-step7-v2`, 'frontier.json');
  const frontier = validateFrontier(JSON.parse(readFileSync(path, 'utf8')));
  if (frontier.run !== ctx.run || frontier.ids.some(id => !itemId.test(id))) throw Error('invalid current Step 7 frontier');
  const allIds = readdirSync(join(ctx.repo, 'items')).filter(name => name.endsWith('.md')).map(name => name.slice(0, -3));
  const preserveRaw = result => ({ ...result, output: `${result.stdout}${result.stderr}`,
    rawOutput: `${result.stdout}${result.stderr}`, rawCode: result.code });
  return gates.map(gate => {
    const argv = typeof gate.argv === 'function' ? gate.argv() : gate.argv;
    if (gate.id === 'defect-ledger') return { ...gate, argv: [...argv, '--frontier', path], projectResult: preserveRaw };
    if (native.has(gate.id)) {
      const files = frontier.ids.map(id => `items/${id}.md`);
      return { ...gate, argv: [...argv, ...files], needs: [...(typeof gate.needs === 'function' ? gate.needs() : gate.needs ?? []), ...files], projectResult: preserveRaw };
    }
    if (!supported.has(gate.id)) return gate; // Global/unsupported gates remain fail-closed.
    return { ...gate, argv: argv.includes('--json') ? argv : [...argv, '--json'],
      ...(gate.id === 'judge-closure' ? { liveness: { ...gate.liveness, pattern: '"frontier_judge_complete":(\\d+)' } } : {}),
      projectResult: result => projectFrontierGate(gate.id, result, frontier, allIds) };
  });
}
