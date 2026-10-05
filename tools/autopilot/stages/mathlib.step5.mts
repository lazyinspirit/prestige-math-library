// Step 5: independent readers, read-only refuters, routed batch adjudication,
// cross-group audit and closure.

import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { MAX_RUN_BATCHES } from '../src/capacity.mjs';
import { holdStep5 } from './step5-hold.mts';
import { prepareStep5AdjudicationOrder } from '../../step5-adjudication-order.mjs';
import { batchAdjudicator, step5Adjudicators } from '../../step5-adjudicators.mjs';

// Step-5 readers, refuters, adjudicators and cross-group agents use Sol 6.1/high.
// The live engine can reload this module while retaining an older models.mjs import.
const SOL61_HIGH = MODEL_PROFILE_NAMES.sol61High ?? 'gpt-6.1-sol-high';

/** Build Step 5 with the canonical gate helpers from mathlib.mts. */
export function step5Stages(d: any) {
  const {
    gate, repoWide, contractGates, coverageGates, policyItemGate, urlGate, backingGate,
    impactGate, batches, alphaGroups, resultPattern, touchesPath,
  } = d;

  /** One batch per lane: readers, refuters and adjudicators never share a lane. */
  const solo = (_ctx: any, unit: string) => [String(unit)];

  const routingGate = (ctx: any, phase: 'adjudicate' | 'final') =>
    gate(`step5-routing-${phase}`,
      ['node', 'tools/step5-scope.mjs', 'check', '--run', ctx.run, '--phase', phase], {
        liveness: { pattern: /(\d+) item\(s\) routed/.source, min: 1, unit: 'items routed' },
      });
  const decisionStampGate = (ctx: any) => gate('step5-decision-stamp',
    ['node', 'tools/step5-scope.mjs', 'stamp', '--run', ctx.run]);
  const auditorCreatedGate = (ctx: any) => gate('step5-auditor-created-certifications',
    ['node', 'tools/auditor-created-items.mjs', 'certify', '--run', ctx.run, '--step', '5']);

  return [
    {
      id: '5a-prepare',
      label: 'freeze authored content and the auditor baseline (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'prepare-5a'),
      artifacts: (ctx: any) => batches(ctx).map((batch: string) =>
        `research/${ctx.run}-step5-hash-${batch}-pre.json`),
      concurrency: 1,
      maxAttempts: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'prepare-5a', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step5-prepare.mjs', '--run', ctx.run], timeout: 3600,
      }],
      gatesWaived: 'The tool fails fast: a missing batch manifest, a failing per-batch author check, '
        + 'or an auditor baseline that would move exits nonzero before any reader starts.',
    },
    {
      id: '5a-read',
      label: 'independent readers over authored content',
      modelProfile: (plan: any) => plan.role === 'reader' ? SOL61_HIGH : undefined,
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
        task: 'briefs/tasks/alpha-5a-reader.md',
        outputSchema: 'briefs/schemas/reader-findings.json',
        resultArtifact: `research/${ctx.run}-reader-findings-${unit}.json`,
        timeout: 14400,
      })),
      gatesWaived: 'Readers may repair in-flight assigned items; the split, refuter coverage and the full '
        + '5a-adjudicate battery are what check their work before Step 5b opens.',
    },
    {
      id: '5a-split',
      label: 'compute reader changes and routing obligations (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: batches,
      pattern: resultPattern('tool', 'split-\\d+'),
      labelFor: (unit: string) => `split-${unit}`,
      artifacts: (ctx: any, unit: string) => `research/${ctx.run}-step5-scope-${unit}.json`,
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'tool', label: `split-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step5-scope.mjs', 'post-reader', '--run', ctx.run,
          '--batch', String(unit)],
        timeout: 600,
      })),
      gatesWaived: 'Split refuses a post-reader hash that does not match the current manifest, '
        + 'a removed item or page, and malformed reader findings; its successful result is the scope refuters read.',
    },
    {
      id: '5a-refute',
      label: 'read-only refuters over untouched, high-risk and page carriers',
      modelProfile: (plan: any) => plan.role === 'refuter' ? SOL61_HIGH : undefined,
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
        task: 'briefs/tasks/alpha-5a-refuter.md',
        outputSchema: 'briefs/schemas/refute-report.json',
        resultArtifact: `research/${ctx.run}-refute-${unit}.json`,
        timeout: 10800,
      })),
      gatesWaived: 'The read-only report is schema-constrained at dispatch; the following mechanical collect '
        + 'verifies that opened and not_opened exactly partition the computed refuter scope.',
    },
    {
      id: '5a-collect',
      label: 'validate refuter coverage and route obligations (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: batches,
      pattern: resultPattern('tool', 'collect-\\d+'),
      labelFor: (unit: string) => `collect-${unit}`,
      artifacts: (ctx: any, unit: string) => `research/${ctx.run}-step5-scope-${unit}.json`,
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'tool', label: `collect-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step5-scope.mjs', 'collect', '--run', ctx.run, '--batch', String(unit)],
        timeout: 600,
      })),
      gatesWaived: 'Collect exits nonzero unless not_opened is empty and opened exactly equals the computed '
        + 'refuter scope; its successful result routes every obligation this batch owes.',
    },
    {
      id: '5a-adjudicate',
      label: 'batch Alpha adjudication of reader repairs, refuter findings and pages',
      modelProfile: (plan: any) => plan.role === 'alpha' ? SOL61_HIGH : undefined,
      pipeline: 'read',
      role: 'alpha',
      units: batches,
      pattern: resultPattern('alpha', '5a-(?:[a-z]+|batch-[1-9]\\d*)'),
      labelFor: (unit: string) => `5a-batch-${unit}`,
      artifacts: (ctx: any, unit: string) => {
        const group = step5Adjudicators(ctx.repo, ctx.run, alphaGroups(ctx), ctx.dispatchDir)
          .find((entry: any) => entry.covers.map(String).includes(String(unit)));
        if (!group) return null;
        const report = `research/${ctx.run}-alpha-${group.label}-5a.md`;
        return [report, `research/${ctx.run}-alpha-${group.label}-5a-decisions.json`];
      },
      concurrency: MAX_RUN_BATCHES,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => {
        const assignment = alphaGroups(ctx).find((group: any) => group.covers.map(String).includes(String(unit)));
        if (!assignment) throw Error(`Step 5a batch ${unit} has no Alpha assignment`);
        const group = batchAdjudicator(assignment, unit);
        return {
          role: 'alpha', label: `5a-${group.label}`, job: 'adjudication', covers: group.covers,
          brief: 'briefs/alpha-step5.md',
          task: ctx.doctor ? 'briefs/tasks/alpha-5a-adjudicate.md' : [
            'briefs/tasks/alpha-5a-adjudicate.md',
            prepareStep5AdjudicationOrder(ctx.repo, ctx.run, group),
          ],
          timeout: 14400,
        };
      }),
      gates: (ctx: any) => [
        gate('step5-owner-escalations', ['node', 'tools/step5-scope.mjs', 'check-escalations', '--run', ctx.run]),
        auditorCreatedGate(ctx),
        ...repoWide(ctx).filter((candidate: any) => candidate.id !== 'splice-verify'),
        ...contractGates(ctx, { reviewed: true }), decisionStampGate(ctx), routingGate(ctx, 'adjudicate'),
      ],
      onHold: holdStep5,
    },
    {
      id: '5a-baseline',
      label: 'post-5a exact carrier and touch snapshots (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'snap-post-5a'),
      artifacts: (ctx: any) => [touchesPath(ctx), ...batches(ctx).map((batch: string) =>
          `research/${ctx.run}-step5-hash-${batch}-post-5a.json`)],
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'snap-post-5a', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step5-scope.mjs', 'post-5a', '--run', ctx.run],
      }],
      gatesWaived: 'One serialized tool reconciles plan-spec, freezes every composite item/page carrier, then records the post-5a impact endpoint. Missing output prevents successful coverage.',
    },
    {
      id: '5b-edges',
      label: 'compute cross-batch edges and post-5a changes (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'cross-group-edges'),
      artifacts: (ctx: any) => `research/${ctx.run}-cross-group-edges.json`,
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'cross-group-edges', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/cross-group-edges.mjs', 'list', '--run', ctx.run],
      }],
      gatesWaived: 'The computed lists may be empty; this stage creates the verdict artifact, and 5b-cross re-derives every cross-batch edge, forward reference, and post-5a structural change.',
    },
    {
      id: '5b-cross',
      label: 'lead Alpha cross-batch audit and final Step 5 closure',
      modelProfile: (plan: any) => plan.role === 'alpha' ? SOL61_HIGH : undefined,
      units: () => ['all'],
      pattern: resultPattern('alpha', '5b-[a-z-]+'),
      artifacts: (ctx: any) => [`research/${ctx.run}-alpha-5b.md`, `research/${ctx.run}-5b-verdicts.jsonl`],
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'alpha', label: '5b-lead', job: 'audit', covers: ['all'], brief: 'briefs/alpha-step5.md',
        task: 'briefs/tasks/alpha-5b-edges.md',
        timeout: 14400,
      }],
      gates: (ctx: any) => [
        auditorCreatedGate(ctx),
        gate('cross-group-edges', ['node', 'tools/cross-group-edges.mjs', 'check', '--run', ctx.run, '--reconcile-plan']),
        routingGate(ctx, 'final'),
        gate('step5-ledger-valid', ['node', 'tools/defect-ledger.mjs', 'validate', '--run', ctx.run]),
        gate('validate-plan', ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json', '--run', ctx.run]),
        // A 5a material repair of a published dependency loses its obsolete
        // audit record, but may need to remain published for unchanged
        // published consumers. `routingGate(final)` above validates that exact
        // hash-bound Step-7 handoff before this bounded pending-audit window.
        ...repoWide(ctx, { pendingAuditOk: true }), ...coverageGates(ctx),
        urlGate(ctx), backingGate(ctx), policyItemGate(ctx),
        ...contractGates(ctx, { reviewed: true }), impactGate(ctx),
        gate('impact-audit-5b', ['node', 'tools/impact-audit.mjs',
          '--touches', touchesPath(ctx), '--from', 'post-5a', '--current',
          '--direct-boundary',
          '--receipt', `research/${ctx.run}-impact-5b.json`]),
        gate('audit-manifest', ['node', 'tools/audit-manifest.mjs',
          ...batches(ctx).map((batch: string) => `research/${ctx.run}-batch-${batch}.pages.json`),
          '--output', `research/${ctx.run}-audit-manifest.json`], {
          liveness: { pattern: /over (\d+) item\(s\) in/.source, min: 1, unit: 'manifest items' },
        }),
      ],
      onHold: holdStep5,
    },
    {
      id: '5b-close',
      label: 'freeze exact Step 5 closure (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'step5-close'),
      artifacts: (ctx: any) => `research/${ctx.run}-step5-closure.json`,
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'step5-close', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step5-close.mjs', 'close', '--run', ctx.run],
        // The close tool re-runs the exact Step-5 routing check, which costs
        // about ten minutes on this corpus; the older 900 s budget equalled
        // the tool's internal cap and left no headroom for the other checks.
        timeout: 1800,
      }],
      gatesWaived: 'The close tool reruns exact Step-5 routing, cross-edge, plan, and ledger checks before writing the immutable closure receipt; any nonzero check produces no successful result.',
    },
  ];
}

export default { step5Stages };
