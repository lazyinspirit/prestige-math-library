// Step 5: direct group review of authored content, cross-group audit, closure.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { repairGateBatch, repairFingerprint, foreignGateSubjects } from './authored-repairs.mts';
import { step5Escalations } from '../../step5-escalations.mjs';

const DEEPSEEK_FLASH_MAX = MODEL_PROFILE_NAMES.deepseekFlashMax;

/** Build Step 5 with the canonical gate helpers from mathlib.mts. */
export function step5Stages(d: any) {
  const {
    gate, repoWide, contractGates, coverageGates, policyItemGate, urlGate,
    impactGate, batches, alphaGroups, alphaCohort, resultPattern, touchesPath,
    MECHANICAL_REPAIRS, mechanicalRepair, isEdgeDecision,
    dispatchSourceScouts,
  } = d;

  const routingGate = (ctx: any, phase: 'adjudicate' | 'final') =>
    gate(`step5-routing-${phase}`,
      ['node', 'tools/step5-scope.mjs', 'check', '--run', ctx.run, '--phase', phase], {
        liveness: { pattern: /(\d+) item\(s\) routed/.source, min: 1, unit: 'items routed' },
      });
  const decisionStampGate = (ctx: any) => gate('step5-decision-stamp',
    ['node', 'tools/step5-scope.mjs', 'stamp', '--run', ctx.run]);
  const auditorCreatedGate = (ctx: any) => gate('step5-auditor-created-certifications',
    ['node', 'tools/auditor-created-items.mjs', 'certify', '--run', ctx.run, '--step', '5']);

  /** Give each repair lane the exact current failure. Event order is not a
   * task contract: advisory events may be newer, and exhausted item ids remain
   * in the raw gate output. This generated file is the lane's authority. */
  const writeGateTask = (args: any, phase: '5a' | '5b', edge: boolean, lane = '') => {
    const safeGate = String(args.failure.id).replace(/[^a-z0-9-]+/gi, '-');
    const safeLane = String(lane).replace(/[^a-z0-9-]+/gi, '-');
    const relative = `research/${args.ctx.run}-${args.stage.id}-${safeGate}-repair-${args.round}${safeLane ? `-${safeLane}` : ''}.task.md`;
    const live = (args.failure.liveItems ?? []).map(String);
    const exhausted = (args.failure.exhaustedItems ?? []).map(String);
    const advisory = (args.failure.advisory ?? []).map((failure: any) => ({
      stage: failure.stage, gate: failure.id, why: failure.why,
    }));
    const rawGateOutput = String(args.failure.output ?? '');
    const gateOutputLimit = 120_000;
    const gateOutput = rawGateOutput.length <= gateOutputLimit
      ? rawGateOutput
      : [
          rawGateOutput.slice(0, gateOutputLimit / 2),
          '',
          `[autopilot truncated ${rawGateOutput.length - gateOutputLimit} characters from the middle of this gate output; reproduce the primary gate on the current tree for the complete diagnostics]`,
          '',
          rawGateOutput.slice(-gateOutputLimit / 2),
        ].join('\n');
    const canonical = [
      readFileSync(join(args.ctx.repo, 'briefs/tasks/alpha-step5-gate.md'), 'utf8').trim(),
      edge ? readFileSync(join(args.ctx.repo, 'briefs/tasks/alpha-step5-edge.md'), 'utf8').trim() : '',
      phase === '5b' ? readFileSync(join(args.ctx.repo, 'briefs/tasks/alpha-5b-edges.md'), 'utf8').trim() : '',
    ].filter(Boolean).join('\n\n');
    const lines = [
      `# Step 5${phase.slice(1)} repair — ${args.failure.id}`,
      '',
      `This file is the authority for repair cycle ${args.round}.`,
      `Primary gate: \`${args.failure.id}\``,
      `Reason: ${String(args.failure.why ?? 'See gate output below.')}`,
      `Owning Alpha group: ${args.repairGroup ? `\`${args.repairGroup}\`` : '(repository-scoped or mixed)'}`,
      `Live item ids: ${live.length ? live.map((id: string) => `\`${id}\``).join(', ') : '(none named; repository-scoped)'}`,
      `Exhausted item ids — do not repair or re-review: ${exhausted.length ? exhausted.map((id: string) => `\`${id}\``).join(', ') : '(none)'}`,
      '',
      'Repair only the live ids. Reproduce the primary gate from the current tree.',
      'Advisory failures are context only; they receive their own gate budget if they become primary.',
      edge ? 'This is an undeclared-prerequisite edge decision; follow the Step 5 edge task.' : '',
      '',
      '## Primary gate output',
      '',
      '```text',
      gateOutput,
      '```',
      '',
      '## Advisory failures',
      '',
      '```json',
      JSON.stringify(advisory, null, 2),
      '```',
      '',
      '## Canonical repair protocol',
      '',
      canonical,
      '',
    ];
    writeFileSync(join(args.ctx.repo, relative), `${lines.join('\n')}\n`);
    return relative;
  };

  const dispatchGateRepair = async (args: any, phase: '5a' | '5b', residue = '') => {
    if (residue) args.failure = { ...args.failure,
      output: `${args.failure.output ?? ''}\n\nMECHANICAL RESIDUE:\n${residue}` };

    // `risk-report --require-reviewed` is level-scoped but its remediation is
    // group-owned. One global repair lane serialises four disjoint Alpha scopes
    // and creates a competing writer for every group's report and decisions.
    // Partition the complete live set through the per-batch contracts and the
    // existing Alpha assignment, then launch one lane per owning group. The
    // stage/role cap already bounds this fan-out at eight.
    const live = (args.failure.liveItems ?? []).map(String);
    if (phase === '5a' && args.failure.id === 'risk-report' && live.length) {
      const batchOf = new Map<string, string>();
      for (const batch of batches(args.ctx)) {
        const path = join(args.ctx.repo, 'research', `${args.ctx.run}-batch-${batch}.proof-contracts.json`);
        let document: any = {};
        try { document = JSON.parse(readFileSync(path, 'utf8')); } catch { /* gate output remains authoritative */ }
        for (const id of Object.keys(document?.contracts ?? {})) batchOf.set(id, String(batch));
      }
      const groupOf = new Map<string, string>();
      for (const group of alphaGroups(args.ctx)) {
        for (const batch of group.covers.map(String)) groupOf.set(batch, String(group.label));
      }
      const byGroup = new Map<string, string[]>();
      for (const id of live) {
        const group = groupOf.get(batchOf.get(id) ?? '') ?? 'unowned';
        if (!byGroup.has(group)) byGroup.set(group, []);
        byGroup.get(group)!.push(id);
      }
      for (const [group, ids] of byGroup) {
        const idSet = new Set(ids);
        const scopedOutput = String(args.failure.output ?? '').split(/\r?\n/)
          .filter((line) => line.startsWith('risk-report:')
            || [...idSet].some((id) => line.includes(`[${id}]`)))
          .join('\n');
        const scopedArgs = {
          ...args,
          repairGroup: group === 'unowned' ? null : group,
          failure: {
            ...args.failure,
            why: `${ids.length} high/critical item(s) in Alpha group ${group} lack complete risk_review records`,
            output: scopedOutput,
            liveItems: ids,
            exhaustedItems: (args.failure.exhaustedItems ?? []).map(String)
              .filter((id: string) => idSet.has(id)),
          },
        };
        const dynamicTask = writeGateTask(scopedArgs, phase, false, group);
        args.executor.start(args.stage, {
          role: 'alpha', label: `${phase}-gate-risk-report-${args.round}-${group}`,
          job: 'adjudication', covers: [], brief: 'briefs/alpha-step5.md', task: dynamicTask,
          timeout: 3600,
        });
      }
      return;
    }

    const edge = await isEdgeDecision(args);
    const dynamicTask = writeGateTask(args, phase, edge);
    // A stalemate repair owns the artifact-incomplete units while it runs.
    // Without this claim, the next executor tick sees the same units as
    // abandoned, launches another Alpha, and spends the entire retry budget
    // concurrently before the first repair can land its artifact.
    const covers = args.failure.id === 'stage-stalemate'
      ? (args.failure.units ?? []).map(String)
      : [];
    args.executor.start(args.stage, {
      role: 'alpha', label: `${phase}-${edge ? 'edge' : 'gate'}-${String(args.failure.id).replace(/[^a-z0-9-]+/gi, '-')}-${args.round}`,
      job: 'adjudication', covers, brief: 'briefs/alpha-step5.md', task: dynamicTask,
      timeout: phase === '5b' ? 7200 : 3600,
    });
  };

  const handleGateFailure = async (args: any, phase: '5a' | '5b') => {
    // `stage-stalemate` is missing Step 5 output, not the similarly named
    // Step 4 splice refusal. Resume Alpha instead of running the Step 4 tool.
    const failures = [args.failure, ...(args.failure.advisory ?? [])];
    const primaryMechanical = args.failure.id !== 'stage-stalemate'
      && Boolean(MECHANICAL_REPAIRS?.[args.failure.id]);
    const hasMechanical = failures.some((failure: any) => failure.id !== 'stage-stalemate'
      && MECHANICAL_REPAIRS?.[failure.id]);
    if (hasMechanical) {
      const result = await mechanicalRepair({ ...args, excludeGateIds: ['stage-stalemate'] });
      if (result.outcome === 'outage') return { outage: { reason: result.reason } };
      const scouted = result.outcome === 'residual'
        && dispatchSourceScouts?.({ ...args, stderr: result.stderr });
      if (primaryMechanical && (result.outcome === 'clean' || scouted)) return;
      if (primaryMechanical) {
        await dispatchGateRepair(args, phase, result.stderr ?? '');
        return;
      }
    }
    await dispatchGateRepair(args, phase);
  };

  return [
    {
      id: '5a-prepare',
      label: 'freeze authored content for direct group review',
      units: () => ['all'],
      pattern: resultPattern('tool', 'prepare-5a'),
      artifacts: (ctx: any) => batches(ctx).flatMap((batch: string) => [
          `research/${ctx.run}-step5-hash-${batch}-pre-5a.json`,
          `research/${ctx.run}-step5-scope-${batch}.json`])
        .concat(`research/${ctx.run}-step5-auditor-baseline.json`),
      concurrency: 1,
      plan: (ctx: any) => [{ role: 'tool', label: 'prepare-5a', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step5-prepare.mjs', '--run', ctx.run], timeout: 600 }],
      gatesWaived: 'Runs after Step 3 gates pass; freezes the complete authored inventory without reader or refuter artifacts.',
    },
    {
      id: '5a-adjudicate',
      label: 'group Alpha review of authored items and pages',
      role: 'alpha',
      modelProfile: (plan: any) => plan.role === 'alpha' ? DEEPSEEK_FLASH_MAX : undefined,
      units: batches,
      pattern: resultPattern('alpha', '5a-[a-z]+'),
      artifacts: (ctx: any, unit: string) => {
        const group = alphaGroups(ctx).find((entry: any) => entry.covers.map(String).includes(String(unit)));
        if (!group) return null;
        const report = `research/${ctx.run}-alpha-${group.label}-5a.md`;
        return [report, `research/${ctx.run}-alpha-${group.label}-5a-decisions.json`];
      },
      concurrency: 9,
      cohort: alphaCohort,
      plan: (ctx: any, pending: string[]) => alphaGroups(ctx)
        .filter((group: any) => group.covers.some((unit: any) => pending.includes(String(unit))))
        .map((group: any) => ({
          role: 'alpha', label: `5a-${group.label}`, job: 'adjudication', covers: group.covers,
          brief: 'briefs/alpha-step5.md',
          task: 'briefs/tasks/alpha-5a-direct.md',
          timeout: 14400,
        })),
      gates: (ctx: any) => [
        gate('step5-owner-escalations', ['node', 'tools/step5-scope.mjs', 'check-escalations', '--run', ctx.run]),
        auditorCreatedGate(ctx),
        ...repoWide(ctx).filter((candidate: any) => candidate.id !== 'splice-verify'),
        ...contractGates(ctx, { reviewed: true }), decisionStampGate(ctx), routingGate(ctx, 'adjudicate'),
      ],
      perItemFixBudget: 3,
      batchRepairs: true,
      repairFingerprint,
      onGateFailure: (args: any) => {
        const holds = step5Escalations(args.ctx.repo, args.ctx.run);
        if (holds.length) return { owner: { reason: holds.join('\n') } };
        return args.failure.id === 'stage-stalemate'
          ? handleGateFailure(args, '5a')
          : repairGateBatch(args, { alphaGroups, MECHANICAL_REPAIRS, mechanicalRepair });
      },
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
      modelProfile: (plan: any) => plan.role === 'alpha' ? DEEPSEEK_FLASH_MAX : undefined,
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
      perItemFixBudget: 3,
      onGateFailure: (args: any) => {
        // Content diagnostics on peer drafts belong to their active authors.
        // Impact receipts remain lead-Alpha work even for foreign consumers.
        if (['precheck', 'depcheck', 'rendercheck'].includes(args.failure.id)) {
          const foreign = foreignGateSubjects(args.ctx, [args.failure], alphaGroups(args.ctx));
          if (foreign) return { owner: { reason: `Gate failures name only carriers outside this run: ${foreign.join(', ')}. Route repairs to their actual owners before retrying.` } };
        }
        return handleGateFailure(args, '5b');
      },
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
        timeout: 900,
      }],
      gatesWaived: 'The close tool reruns exact Step-5 routing, cross-edge, plan, and ledger checks before writing the immutable closure receipt; any nonzero check produces no successful result.',
    },
  ];
}

export default { step5Stages };
