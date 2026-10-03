// Units of work, and who covered them.
//
// A stage is complete when every unit of work it owes has a successful
// dispatch claiming it — never when N agents have returned.
//
// The count formulation is what this replaces, and it fails three ways. It
// encodes one run's shape, so a stage table written for a seven-batch run
// stalls forever on a six-batch one. It cannot tell three agents that covered
// two batches each from three agents that all covered the same batch and left
// two unreviewed — both read 3/3, and the second has a hole. And it silently
// counts a lane that died, because a result file exists.
//
// Coverage answers all three: the union of covered units either contains the
// owed set or it names what is missing.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** Every result record this run has produced, parsed and filtered to successes.
 *
 *  `ok:false` is a dead lane. A dead lane is a retry decision, not a completed
 *  unit of work — counting it is how a stage advances over a hole. */
export function results(dispatchDir: string, { includeFailed = false }: { includeFailed?: boolean } = {}): any[] {
  if (!existsSync(dispatchDir)) return [];
  const out: any[] = [];
  for (const f of readdirSync(dispatchDir)) {
    if (!f.endsWith('.result.json')) continue;
    let rec;
    try { rec = JSON.parse(readFileSync(join(dispatchDir, f), 'utf8')); }
    catch { continue; }            // an unreadable record covers nothing
    if (!includeFailed && rec.ok !== true) continue;
    out.push({ ...rec, file: f, stem: f.replace('.result.json', '') });
  }
  return out;
}

/** Units covered by successful dispatches matching `pattern`.
 *
 *  `coversMap` handles a mixed run: a dispatch fired before `covers` existed,
 *  or fired by hand outside the engine, can be annotated out of band rather
 *  than by rewriting its result file. Without it, migrating a live run to
 *  coverage strands the unannotated lanes forever — the fix for stalls becomes
 *  a stall. */
export function covered(dispatchDir: string, pattern: RegExp | string, coversMap: Record<string, string[]> = {}): Set<string> {
  const re = pattern instanceof RegExp ? pattern : new RegExp(pattern);
  const set = new Set<string>();
  for (const rec of results(dispatchDir)) {
    if (!re.test(rec.file)) continue;
    const declared = Array.isArray(rec.covers) && rec.covers.length ? rec.covers : (coversMap[rec.stem] ?? []);
    for (const u of declared) set.add(String(u));
  }
  return set;
}

/** Which owed units still have no successful dispatch. */
export function pending(owed: string[], coveredSet: Set<string>): string[] {
  return owed.map(String).filter((u: any) => !coveredSet.has(u));
}

/**
 * Is this stage finished?
 *
 * `fallbackCount` exists only for pipelines predating `covers`. It applies when
 * NO result declares coverage at all. A partially migrated run is read by
 * coverage on purpose: an unannotated lane's units stay missing and the stage
 * stalls, which is visible and fixable, rather than passing with a hole, which
 * is not.
 */
export function stageComplete(dispatchDir: string, pattern: RegExp | string, owed: string[], { coversMap = {}, fallbackCount = null }: { coversMap?: Record<string, string[]>; fallbackCount?: number | null } = {}): any {
  const re = pattern instanceof RegExp ? pattern : new RegExp(pattern);
  const matching = results(dispatchDir).filter((r: any) => re.test(r.file));
  const set = covered(dispatchDir, re, coversMap);

  if (set.size === 0) {
    const anyDeclared = matching.some((r: any) =>
      (Array.isArray(r.covers) && r.covers.length > 0) || Boolean(coversMap[r.stem]));
    if (!anyDeclared) {
      const need = fallbackCount ?? owed.length ?? 1;
      return {
        done: matching.length >= need && need > 0,
        why: `${matching.length}/${need} result(s) — no coverage declared, counting`,
        missing: [],
        mode: 'count',
      };
    }
  }

  const missing = pending(owed, set);
  return {
    done: owed.length > 0 && missing.length === 0,
    why: missing.length
      ? `${owed.length - missing.length}/${owed.length} covered; missing ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ` +${missing.length - 8}` : ''}`
      : `${owed.length}/${owed.length} covered by ${matching.length} dispatch(es)`,
    missing,
    mode: 'coverage',
  };
}

/** Lanes that ran and failed, for the retry policy. Keyed by result stem so a
 *  retry of the same unit is recognisable across attempts. */
export function failedLanes(dispatchDir: string, pattern: RegExp | string): any[] {
  const re = pattern instanceof RegExp ? pattern : new RegExp(pattern);
  return results(dispatchDir, { includeFailed: true })
    .filter((r: any) => re.test(r.file) && r.ok !== true);
}
