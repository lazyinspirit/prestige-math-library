// Owner-selected scheduling variant: approved pairs may author while siblings
// remain scope-held. All existing gates still run over the complete frontier.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { loadStep3, scopeDecision, scopeHash } from '../../step3-decisions.mjs';

// The controller watches every sibling stage module. Reimport the ordinary
// table when this wrapper reloads so later stage fixes are not cached away.
const ordinaryURL = new URL('./mathlib.mts', import.meta.url);
const { stages: ordinaryStages, workflowRevision } = await import(
  `${ordinaryURL.href}?wrapper=${encodeURIComponent(import.meta.url)}`
);

export { workflowRevision };

function authorization(ctx: any) {
  const path = join(ctx.repo, 'research', `${ctx.run}-ready-pair-authoring.json`);
  if (!existsSync(path)) throw Error(`Missing owner ready-pair authorization: ${path}`);
  const row = JSON.parse(readFileSync(path, 'utf8'));
  if (row.version !== 1 || row.run !== ctx.run || row.authorized_by !== 'owner'
    || !String(row.authorization ?? '').trim() || !Array.isArray(row.scopes)
    || new Set(row.scopes.map((s: any) => s.page)).size !== row.scopes.length)
    throw Error('Invalid owner ready-pair authorization');
  return row;
}

export function sealedInventory(ctx: any) {
  const row = authorization(ctx), snapshot = loadStep3(ctx.repo, ctx.run);
  if (row.scopes.length !== snapshot.pairs.size || row.scopes.some((s: any) =>
    !snapshot.pairs.has(s.page) || s.sha256 !== scopeHash(snapshot, s.page)))
    throw Error('Scaffold inventory changed before the pre-author snapshot; reseal stable inventories');
  return snapshot;
}

export function readyPairUnits(ctx: any, pending: string[]) {
  authorization(ctx);
  const snapshot = loadStep3(ctx.repo, ctx.run);
  // Group-sized legacy dispatches could own a held sibling. This opt-in table
  // deliberately supports only the current pair-sized dispatch protocol.
  if (pending.some(id => !snapshot.pairs.has(id)))
    throw Error('Ready-pair authoring requires pair-sized Step 3 units');
  return pending.filter(id => scopeDecision(snapshot, id).closed);
}

/** Explicit owner continuation of an artifact-incomplete successful author.
 * Preserve the original receipt; exclude only its exact coverage filename.
 * See ../AUTHOR-CONTINUATIONS.md for the writer-drain contract. */
export function authorContinuationPattern(ctx: any, original: RegExp): RegExp {
  const path = join(ctx.repo, 'research', `${ctx.run}-author-continuations.json`);
  if (!existsSync(path)) return original;
  const row = JSON.parse(readFileSync(path, 'utf8'));
  if (row.version !== 1 || row.run !== ctx.run || row.authorized_by !== 'owner'
    || !String(row.authorization ?? '').trim() || !Array.isArray(row.continuations))
    throw Error('Invalid owner author continuation authorization');
  const snapshot = loadStep3(ctx.repo, ctx.run), excluded: string[] = [];
  for (const entry of row.continuations) {
    if (!snapshot.pairs.has(entry.page) || !String(entry.reason ?? '').trim()
      || !Number.isFinite(Date.parse(entry.writers_drained_at))
      || typeof entry.previous_result !== 'string'
      || !/^[a-zA-Z0-9_-]+\.result\.json$/.test(entry.previous_result)
      || !original.test(entry.previous_result))
      throw Error('Invalid owner author continuation entry');
    const previous = JSON.parse(readFileSync(join(ctx.repo, 'research',
      `${ctx.run}-dispatch`, entry.previous_result), 'utf8'));
    if (previous.run !== ctx.run || previous.ok !== true
      || !Array.isArray(previous.covers) || previous.covers.length !== 1
      || previous.covers[0] !== entry.page)
      throw Error('Author continuation must name its successful single-pair receipt');
    excluded.push(entry.previous_result.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }
  if (new Set(excluded).size !== excluded.length)
    throw Error('Duplicate author continuation receipt');
  return excluded.length ? new RegExp(`^(?!(?:${excluded.join('|')})$)(?:${original.source})`, original.flags) : original;
}

/** One fresh native read for an owner-reviewed exact coverage-output defect.
 * The immutable archive binds old observations; current guards run only before
 * dispatch, because the new native report legitimately replaces the old one. */
export function refuterContinuations(ctx: any, original: any, beforeDispatch = false): any[] {
  const path = join(ctx.repo, 'research', `${ctx.run}-step5-refuter-continuations.json`);
  if (!existsSync(path)) return [];
  const row = JSON.parse(readFileSync(path, 'utf8'));
  const reject = () => { throw Error('Invalid owner Step-5 refuter coverage continuation'); };
  const digest = (value: any) => createHash('sha256').update(value).digest('hex');
  const bound = (ref: any) => {
    if (!ref || typeof ref.path !== 'string' || !ref.path.startsWith(`research/${ctx.run}-`)
      || ref.path.includes('..') || !/^[a-f0-9]{64}$/.test(ref.sha256 ?? '')) return reject();
    const bytes = readFileSync(join(ctx.repo, ref.path));
    if (digest(bytes) !== ref.sha256) return reject();
    return bytes;
  };
  if (row.version !== 1 || row.run !== ctx.run || row.authorized_by !== 'owner'
    || !String(row.authorization ?? '').trim() || !Array.isArray(row.continuations)
    || row.continuations.length !== 1) reject();
  const units = original.units(ctx).map(String);
  for (const entry of row.continuations) {
    const unit = String(entry.unit), label = `refute-${unit}-coverage-correction-1`;
    if (!units.includes(unit) || entry.label !== label || !String(entry.reason ?? '').trim()
      || !Number.isFinite(Date.parse(entry.writers_drained_at))
      || entry.previous_result?.path !== `research/${ctx.run}-dispatch/refuter-refute-${unit}.result.json`
      || entry.report_path !== `research/${ctx.run}-refute-${unit}.json`
      || !/^[a-f0-9]{64}$/.test(entry.report_sha256 ?? '')
      || !/^[a-f0-9]{64}$/.test(entry.scope_sha256 ?? '')
      || !Array.isArray(entry.subjects)) reject();
    const previous = JSON.parse(bound(entry.previous_result).toString());
    if (previous.run !== ctx.run || previous.role !== 'refuter' || previous.label !== `refute-${unit}`
      || previous.ok !== true || previous.exit_code !== 0 || previous.covers?.length !== 1
      || String(previous.covers[0]) !== unit
      || Date.parse(previous.ended_at) > Date.parse(entry.writers_drained_at)) reject();
    const archive = bound(entry.original_report);
    if (digest(archive) !== entry.report_sha256) reject();
    const old = JSON.parse(archive.toString());
    if (String(old.batch) !== unit || !Array.isArray(old.opened) || !Array.isArray(old.not_opened)
      || !Array.isArray(old.flagged) || JSON.stringify(JSON.parse(previous.tail)) !== JSON.stringify(old)) reject();
    bound(entry.task);
    if (beforeDispatch) {
      // Any completed fresh attempt, including failure, holds rather than loops.
      if (existsSync(join(ctx.repo, 'research', `${ctx.run}-dispatch`, `refuter-${label}.result.json`)))
        throw Error('Step-5 refuter correction already attempted; owner review required');
      if (digest(readFileSync(join(ctx.repo, entry.report_path))) !== entry.report_sha256) reject();
      const scopeBytes = readFileSync(join(ctx.repo, 'research', `${ctx.run}-step5-scope-${unit}.json`));
      if (digest(scopeBytes) !== entry.scope_sha256) reject();
      const scope = JSON.parse(scopeBytes.toString()), ids = entry.subjects.map((s: any) => s.id);
      if (!Array.isArray(scope.refuter_scope) || old.not_opened.length
        || new Set(old.opened).size !== old.opened.length
        || scope.refuter_scope.some((id: string) => !old.opened.includes(id))
        || old.opened.length <= scope.refuter_scope.length) reject();
      if (new Set(ids).size !== ids.length || ids.length !== scope.refuter_scope.length
        || scope.refuter_scope.some((id: string) => !ids.includes(id))) reject();
      const manifest = JSON.parse(readFileSync(join(ctx.repo, 'research', `${ctx.run}-batch-${unit}.pages.json`), 'utf8'));
      const pages = Array.isArray(manifest) ? manifest : manifest.pages;
      for (const subject of entry.subjects) {
        const page = pages.find((p: any) => p.id === subject.id);
        const expected = page ? `library/${page.category}/${page.id}.md` : `items/${subject.id}.md`;
        if (subject.path !== expected || !/^[a-f0-9]{64}$/.test(subject.sha256 ?? '')
          || digest(readFileSync(join(ctx.repo, expected))) !== subject.sha256) reject();
      }
    }
  }
  return row.continuations;
}

export function refuterContinuationPattern(ctx: any, original: any): RegExp {
  const pattern = typeof original.pattern === 'function' ? original.pattern(ctx) : original.pattern;
  const entries = refuterContinuations(ctx, original);
  if (!entries.length) return pattern;
  const unit = entries[0].unit;
  // Exact new stable filename only: attempts and other correction labels cannot
  // supply coverage. Ordinary sibling-unit results retain their original route.
  return new RegExp(`^(?!refuter-refute-${unit}\\.result\\.json$)(?:${pattern.source}|refuter-${entries[0].label}\\.result\\.json)$`, pattern.flags);
}

export const stages = ordinaryStages.map((original: any) => {
  if (original.id === '5a-refute') return { ...original,
    pattern: (ctx: any) => refuterContinuationPattern(ctx, original),
    plan: (ctx: any, pending: string[]) => {
      const entries = refuterContinuations(ctx, original);
      if (!pending.some(unit => entries.some(e => String(e.unit) === String(unit))))
        return original.plan(ctx, pending);
      refuterContinuations(ctx, original, true);
      return original.plan(ctx, pending).map((plan: any) => {
        const entry = entries.find(e => plan.covers.length === 1 && String(e.unit) === String(plan.covers[0]));
        return entry ? { ...plan, label: entry.label, task: entry.task.path } : plan;
      });
    },
  };
  if (!['3a-scope', '3-baseline', '3b-author'].includes(original.id)) return original;
  const stage = { ...original, pipeline: 'step3-ready-pairs' };
  if (stage.id === '3-baseline') {
    stage.role = 'tool';
    // Freeze only after every scope dispatch has drained. Owner repair writers
    // seal their item interfaces before this boundary; strategies may continue
    // on held pairs that the author planner excludes.
    stage.cohort = (ctx: any) => [...loadStep3(ctx.repo, ctx.run).pairs.keys()];
    stage.plan = (ctx: any, pending: string[]) => {
      // Doctor also examines completed stages after author-created additions.
      // The immutable baseline then owns the boundary; do not reseal it.
      if (existsSync(join(ctx.repo, 'research', `${ctx.run}-step3-auditor-baseline.json`)))
        authorization(ctx);
      else sealedInventory(ctx);
      return original.plan(ctx, pending);
    };
  }
  if (stage.id === '3b-author') {
    // Every author waits for the single baseline unit and its process to drain.
    stage.cohort = () => ['all'];
    stage.plan = (ctx: any, pending: string[]) =>
      original.plan(ctx, readyPairUnits(ctx, pending));
    stage.pattern = (ctx: any) => authorContinuationPattern(ctx,
      typeof original.pattern === 'function' ? original.pattern(ctx) : original.pattern);
  }
  return stage;
});
