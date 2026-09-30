// Owner-selected scheduling variant: approved pairs may author while siblings
// remain scope-held. All existing gates still run over the complete frontier.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
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

export const stages = ordinaryStages.map((original: any) => {
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
  }
  return stage;
});
