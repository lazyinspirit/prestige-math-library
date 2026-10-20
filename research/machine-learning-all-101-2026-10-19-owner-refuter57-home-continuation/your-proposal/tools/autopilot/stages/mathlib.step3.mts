// Step 3: independent readers, read-only refuters, routed batch adjudication,
// mechanical closure.

// Propagate the parent's reload version so live stage closures cannot retain
// a cached continuation policy after an explicit native stage reload.
const continuationURL = new URL('./refuter-continuations.mts', import.meta.url);
continuationURL.search = new URL(import.meta.url).search;
const { withRefuterContinuation } = await import(continuationURL.href);
const homeContinuationURL = new URL('./home-alpha-continuations.mts', import.meta.url);
homeContinuationURL.search = new URL(import.meta.url).search;
const { withHomeAlphaContinuation } = await import(homeContinuationURL.href);
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { MAX_RUN_BATCHES } from '../src/capacity.mjs';
import { holdStep3 } from './step3-hold.mts';
const adjudicationOrderURL = new URL('../../step3-adjudication-order.mjs', import.meta.url);
adjudicationOrderURL.search = new URL(import.meta.url).search;
const { prepareStep3AdjudicationOrder } = await import(adjudicationOrderURL.href);
import { batchAdjudicator, step3Adjudicators } from '../../step3-adjudicators.mjs';

// Step-3 readers and refuters use GPT-6 Luna max;
// batch adjudicators use Sol 6.1/medium.
// The live engine can reload this module while retaining an older models.mjs import.
const SOL61_MEDIUM = MODEL_PROFILE_NAMES.sol61Medium;
const LUNA_MAX = MODEL_PROFILE_NAMES.lunaMax;

/** Build Step 3 with the canonical gate helpers from mathlib.mts. */
export function step3Stages(d: any) {
  const {
    gate, repoWide, contractGates,
    batches, alphaGroups, resultPattern, touchesPath,
  } = d;

  /** One batch per lane: readers, refuters and adjudicators never share a lane. */
  const solo = (_ctx: any, unit: string) => [String(unit)];

  const routingGate = (ctx: any, phase: 'adjudicate' | 'final') =>
    gate(`step3-routing-${phase}`,
      ['node', 'tools/step3-scope.mjs', 'check', '--run', ctx.run, '--phase', phase], {
        liveness: { pattern: /(\d+) item\(s\) routed/.source, min: 1, unit: 'items routed' },
      });
  const decisionStampGate = (ctx: any) => gate('step3-decision-stamp',
    ['node', 'tools/step3-scope.mjs', 'stamp', '--run', ctx.run]);
  const auditorCreatedGate = (ctx: any) => gate('step3-auditor-created-certifications',
    ['node', 'tools/auditor-created-items.mjs', 'certify', '--run', ctx.run, '--step', '3']);

  return [
    {
      id: '3a-prepare',
      label: 'freeze authored content and the auditor baseline (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'prepare-3a'),
      artifacts: (ctx: any) => batches(ctx).map((batch: string) =>
        `research/${ctx.run}-step3-hash-${batch}-pre.json`),
      concurrency: 1,
      maxAttempts: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'prepare-3a', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step3-prepare.mjs', '--run', ctx.run], timeout: 3600,
      }],
      gatesWaived: 'The tool fails fast: a missing batch manifest, a failing per-batch author check, '
        + 'or an auditor baseline that would move exits nonzero before any reader starts.',
    },
    {
      id: '3a-read',
      label: 'independent readers over authored content',
      modelProfile: (plan: any) => plan.role === 'reader' ? LUNA_MAX : undefined,
      pipeline: 'read',
      role: 'reader',
      units: batches,
      pattern: resultPattern('reader', 'reader-\\d+'),
      labelFor: (unit: string) => `reader-${unit}`,
      artifacts: (ctx: any, unit: string) => [
        `research/${ctx.run}-reader-${unit}.md`,
        `research/${ctx.run}-reader-findings-${unit}.json`,
      ],
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'reader', label: `reader-${unit}`, job: 'audit', covers: [unit],
        brief: 'briefs/reader.md',
        task: 'briefs/tasks/alpha-3a-reader.md',
        outputSchema: 'briefs/schemas/reader-findings.json',
        resultArtifact: `research/${ctx.run}-reader-findings-${unit}.json`,
        timeout: 14400,
      })),
      gatesWaived: 'Readers may repair in-flight assigned items; the split, refuter coverage and the full '
        + '3a-adjudicate battery are what check their work before Step 3b opens.',
    },
    {
      id: '3a-split',
      label: 'compute reader changes and routing obligations (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: batches,
      pattern: resultPattern('tool', 'split-\\d+'),
      labelFor: (unit: string) => `split-${unit}`,
      artifacts: (ctx: any, unit: string) => `research/${ctx.run}-step3-scope-${unit}.json`,
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'tool', label: `split-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step3-scope.mjs', 'post-reader', '--run', ctx.run,
          '--batch', String(unit)],
        timeout: 600,
      })),
      gatesWaived: 'Split refuses a post-reader hash that does not match the current manifest, '
        + 'a removed item or page, and malformed reader findings; its successful result is the scope refuters read.',
    },
    {
      id: '3a-refute',
      label: 'read-only refuters over untouched, high-risk and page carriers',
      modelProfile: (plan: any) => plan.role === 'refuter' ? LUNA_MAX : undefined,
      pipeline: 'read',
      role: 'refuter',
      units: batches,
      pattern: resultPattern('refuter', 'refute-\\d+'),
      labelFor: (unit: string) => `refute-${unit}`,
      artifacts: (ctx: any, unit: string) => `research/${ctx.run}-refute-${unit}.json`,
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'refuter', label: `refute-${unit}`, job: 'refutation', covers: [unit],
        brief: 'briefs/refuter.md',
        task: 'briefs/tasks/alpha-3a-refuter.md',
        outputSchema: 'briefs/schemas/refute-report.json',
        resultArtifact: `research/${ctx.run}-refute-${unit}.json`,
        timeout: 10800,
      })),
      gatesWaived: 'The read-only report is schema-constrained at dispatch; the following mechanical collect '
        + 'verifies that opened and not_opened exactly partition the computed refuter scope.',
    },
    {
      id: '3a-collect',
      label: 'validate refuter coverage and route obligations (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: batches,
      pattern: resultPattern('tool', 'collect-\\d+'),
      labelFor: (unit: string) => `collect-${unit}`,
      artifacts: (ctx: any, unit: string) => `research/${ctx.run}-step3-scope-${unit}.json`,
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'tool', label: `collect-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step3-scope.mjs', 'collect', '--run', ctx.run, '--batch', String(unit)],
        timeout: 600,
      })),
      gatesWaived: 'Collect exits nonzero unless not_opened is empty and opened exactly equals the computed '
        + 'refuter scope; its successful result routes every obligation this batch owes.',
    },
    {
      id: '3a-adjudicate',
      label: 'batch Alpha adjudication of reader repairs, refuter findings and pages',
      modelProfile: (plan: any) => plan.role === 'alpha' ? SOL61_MEDIUM : undefined,
      pipeline: 'read',
      role: 'alpha',
      units: batches,
      pattern: resultPattern('alpha', '3a-(?:[a-z]+|batch-[1-9]\\d*)'),
      labelFor: (unit: string) => `3a-batch-${unit}`,
      artifacts: (ctx: any, unit: string) => {
        const group = step3Adjudicators(ctx.repo, ctx.run, alphaGroups(ctx), ctx.dispatchDir)
          .find((entry: any) => entry.covers.map(String).includes(String(unit)));
        if (!group) return null;
        const report = `research/${ctx.run}-alpha-${group.label}-3a.md`;
        return [report, `research/${ctx.run}-alpha-${group.label}-3a-decisions.json`];
      },
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => {
        const assignment = alphaGroups(ctx).find((group: any) => group.covers.map(String).includes(String(unit)));
        if (!assignment) throw Error(`Step 3a batch ${unit} has no Alpha assignment`);
        const group = batchAdjudicator(assignment, unit);
        return {
          role: 'alpha', label: `3a-${group.label}`, job: 'adjudication', covers: group.covers,
          brief: 'briefs/alpha-step3.md',
          task: ctx.doctor ? 'briefs/tasks/alpha-3a-adjudicate.md' : [
            'briefs/tasks/alpha-3a-adjudicate.md',
            prepareStep3AdjudicationOrder(ctx.repo, ctx.run, group),
          ],
          timeout: 14400,
        };
      }),
      gates: (ctx: any) => [
        gate('step3-owner-escalations', ['node', 'tools/step3-scope.mjs', 'check-escalations', '--run', ctx.run]),
        auditorCreatedGate(ctx),
        ...repoWide(ctx).filter((candidate: any) => candidate.id !== 'splice-verify'),
        ...contractGates(ctx, { reviewed: true }), decisionStampGate(ctx), routingGate(ctx, 'adjudicate'),
      ],
      onHold: holdStep3,
    },
    {
      id: '3a-baseline',
      label: 'post-3a exact carrier and touch snapshots (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'snap-post-3a'),
      artifacts: (ctx: any) => [touchesPath(ctx), ...batches(ctx).map((batch: string) =>
          `research/${ctx.run}-step3-hash-${batch}-post-3a.json`)],
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'snap-post-3a', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step3-scope.mjs', 'post-3a', '--run', ctx.run],
      }],
      gatesWaived: 'One serialized tool reconciles plan-spec, freezes every composite item/page carrier, then records the post-3a endpoint. Missing output prevents successful coverage.',
    },
    {
      id: '3a-close',
      label: 'freeze exact Step 3 closure (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'step3-close'),
      artifacts: (ctx: any) => `research/${ctx.run}-step3-closure.json`,
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'step3-close', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step3-close.mjs', 'close', '--run', ctx.run],
        timeout: 1800,
      }],
      gatesWaived: 'The close tool verifies current final routing and manifest-to-plan correspondence before freezing the exact closure receipt; the native Step 3a adjudication battery has already passed.',
    },
  ].map(stage => withHomeAlphaContinuation(withRefuterContinuation(stage)));
}

export default { step3Stages };
