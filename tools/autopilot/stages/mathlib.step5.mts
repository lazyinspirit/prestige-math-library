// Step 5: independent readers, read-only refuters, routed group adjudication,
// cross-group audit and closure.

import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { MAX_RUN_BATCHES, MAX_GROUPS } from '../src/capacity.mjs';
import { holdStep5 } from './step5-hold.mts';

// Step-5 lanes: readers Sol/high, refuters Sol/xhigh,
// group adjudicators Sol/high, and every 5b agent Sol/xhigh.
const SOL_HIGH = MODEL_PROFILE_NAMES.solHigh;
const SOL_XHIGH = MODEL_PROFILE_NAMES.solXHigh;

/** Build Step 5 with the canonical gate helpers from mathlib.mts. */
export function step5Stages(d: any) {
  const {
    gate, repoWide, contractGates, coverageGates, policyItemGate, urlGate,
    impactGate, batches, alphaGroups, alphaCohort, resultPattern, touchesPath,
  } = d;

  /** One batch per lane: a reader or refuter never shares a lane with a sibling. */
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
      modelProfile: (plan: any) => plan.role === 'reader' ? SOL_HIGH : undefined,
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
      modelProfile: (plan: any) => plan.role === 'refuter' ? SOL_XHIGH : undefined,
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
      label: 'group Alpha adjudication of reader repairs, refuter findings and pages',
      modelProfile: (plan: any) => plan.role === 'alpha' ? SOL_HIGH : undefined,
      units: batches,
      pattern: resultPattern('alpha', '5a-[a-z]+'),
      artifacts: (ctx: any, unit: string) => {
        const group = alphaGroups(ctx).find((entry: any) => entry.covers.map(String).includes(String(unit)));
        if (!group) return null;
        const report = `research/${ctx.run}-alpha-${group.label}-5a.md`;
        return [report, `research/${ctx.run}-alpha-${group.label}-5a-decisions.json`];
      },
      concurrency: MAX_GROUPS,
      cohort: alphaCohort,
      plan: (ctx: any, pending: string[]) => alphaGroups(ctx)
        .filter((group: any) => group.covers.some((unit: any) => pending.includes(String(unit))))
        .map((group: any) => ({
          role: 'alpha', label: `5a-${group.label}`, job: 'adjudication', covers: group.covers,
          brief: 'briefs/alpha-step5.md',
          task: 'briefs/tasks/alpha-5a-adjudicate.md',
          timeout: 14400,
        })),
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
      modelProfile: (plan: any) => plan.role === 'alpha' ? SOL_XHIGH : undefined,
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
        gate('validate-plan', ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json']),
        // A 5a material repair of a published dependency loses its obsolete
        // audit record, but may need to remain published for unchanged
        // published consumers. `routingGate(final)` above validates that exact
        // hash-bound Step-7 handoff before this bounded pending-audit window.
        ...repoWide(ctx, { pendingAuditOk: true }), ...coverageGates(ctx), urlGate(ctx), policyItemGate(ctx),
        ...contractGates(ctx, { reviewed: true }), impactGate(ctx),
        gate('impact-audit-5b', ['node', 'tools/impact-audit.mjs',
          '--touches', touchesPath(ctx), '--from', 'post-5a', '--current',
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
