import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

/** One fresh native read for an owner-reviewed exact coverage-output defect.
 * The immutable archive binds old observations; current guards run only before
 * dispatch, because the new native report legitimately replaces the old one. */
export function refuterContinuations(ctx: any, original: any, beforeDispatch = false): any[] {
  const path = join(ctx.repo, 'research', `${ctx.run}-step3-refuter-continuations.json`);
  if (!existsSync(path)) return [];
  const row = JSON.parse(readFileSync(path, 'utf8'));
  const reject = () => { throw Error('Invalid owner Step-3 refuter coverage continuation'); };
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
      || !Array.isArray(old.flagged) || typeof previous.tail !== 'string') reject();
    // Optional exact-attempt message binds a complete native report when the
    // last 40 stdout lines no longer include the report's coverage headers.
    let originalLastMessageBound = false;
    if (entry.original_last_message !== undefined) {
      if (!Number.isSafeInteger(previous.attempt) || previous.attempt < 1
        || previous.evidence_tag !== `.attempt-${previous.attempt}`
        || entry.original_last_message?.path !== `research/${ctx.run}-dispatch/refuter-refute-${unit}.attempt-${previous.attempt}.last-message.json`) reject();
      const message = JSON.parse(bound(entry.original_last_message).toString());
      if (JSON.stringify(message) !== JSON.stringify(old)) reject();
      originalLastMessageBound = true;
    }
    let parsedTail: any, tailParsed = false;
    try { parsedTail = JSON.parse(previous.tail); tailParsed = true; } catch {}
    if (tailParsed) {
      if (JSON.stringify(parsedTail) !== JSON.stringify(old)) reject();
    } else {
      // Native receipts retain only the last 40 stdout lines. Authenticate a
      // clipped diagnostic against the immutable raw report, never its claims.
      const tail = previous.tail.trimEnd();
      if (tail.length < 256 || !archive.toString().trimEnd().endsWith(tail)
        || (!originalLastMessageBound
          && (!/"not_opened"\s*:/.test(tail) || !/"flagged"\s*:/.test(tail)))) reject();
    }
    bound(entry.task);
    if (beforeDispatch) {
      // Any completed fresh attempt, including failure, holds rather than loops.
      if (existsSync(join(ctx.repo, 'research', `${ctx.run}-dispatch`, `refuter-${label}.result.json`)))
        throw Error('Step-3 refuter correction already attempted; owner review required');
      if (digest(readFileSync(join(ctx.repo, entry.report_path))) !== entry.report_sha256) reject();
      const scopeBytes = readFileSync(join(ctx.repo, 'research', `${ctx.run}-step3-scope-${unit}.json`));
      if (digest(scopeBytes) !== entry.scope_sha256) reject();
      const scope = JSON.parse(scopeBytes.toString()), ids = entry.subjects.map((s: any) => s.id);
      if (!Array.isArray(scope.refuter_scope) || old.not_opened.length
        || !old.opened.length || new Set(old.opened).size !== old.opened.length) reject();
      const missing = scope.refuter_scope.filter((id: string) => !old.opened.includes(id));
      const extra = old.opened.filter((id: string) => !scope.refuter_scope.includes(id));
      // A strict subset needs genuine additional reading; a strict superset
      // needs corrected coverage attribution. Neither is completed coverage.
      // Keep one bounded fresh native read for either exact output defect.
      if ((!missing.length && !extra.length) || (missing.length && extra.length)) reject();
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

/** Applied once by the ordinary Step-3 table; alternate wrappers inherit it. */
export function withRefuterContinuation(original: any): any {
  if (original.id !== '3a-refute') return original;
  return { ...original,
    pattern: (ctx: any) => refuterContinuationPattern(ctx, original),
    plan: (ctx: any, pending: string[]) => {
      const entries = refuterContinuations(ctx, original);
      if (!pending.some(unit => entries.some(e => String(e.unit) === String(unit))))
        return original.plan(ctx, pending);
      // Doctor inspects command descriptors; only a real launch checks the
      // one-attempt budget and the pre-repair current-source guards.
      if (!ctx.doctor) refuterContinuations(ctx, original, true);
      return original.plan(ctx, pending).map((plan: any) => {
        const entry = entries.find(e => plan.covers.length === 1 && String(e.unit) === String(plan.covers[0]));
        return entry ? { ...plan, label: entry.label, task: entry.task.path } : plan;
      });
    },
  };
}
