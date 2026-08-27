// Active Step 6: independent readers, exact refuter coverage, routed Alpha
// adjudication, cross-group edges, and final pre-judge closure.

import { inspectLegacyStep6Cutover } from '../../step6-cutover-lib.mjs';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** A completed legacy run skips only stage ids introduced by this cutover.
 * The receipt is write-once and bound to its gate timestamps and artifacts;
 * existing stage ids continue to use their durable engine evidence. */
export function hasLegacyStep6Cutover(ctx: any): boolean {
  const result = inspectLegacyStep6Cutover({
    root: ctx.repo,
    run: ctx.run,
    stateDir: ctx.config?.stateDir ?? '.autopilot',
    dispatchDir: ctx.dispatchDir,
  });
  return result.ok;
}

/** Build Step 6 with the canonical gate helpers from mathlib.mts. */
export function step6Stages(d: any) {
  const {
    gate, repoWide, contractGates, coverageGates, policyItemGate, urlGate,
    impactGate, batches, alphaGroups, alphaCohort, resultPattern, touchesPath,
    MECHANICAL_REPAIRS, mechanicalRepair, isEdgeDecision,
    dispatchSourceScouts,
  } = d;

  const legacyResult = resultPattern('alpha', '6c-[a-z-]+');
  // Compatibility is conditional on THIS run's hash-bound cutover receipt.
  // A static union is unsafe: on an ordinary run the current 6c Alpha result
  // then matches every later introduced stage. Frontier 19 reached 6d with its
  // unit falsely covered by alpha-6c-lead, so the real close tool could not be
  // dispatched and the closure artifact could never appear.
  const introducedPattern = (normal: RegExp) => (ctx: any) =>
    hasLegacyStep6Cutover(ctx) ? legacyResult : normal;
  const introducedBatches = (ctx: any) => hasLegacyStep6Cutover(ctx) ? ['all'] : batches(ctx);
  const introducedArtifact = (ctx: any, normal: string) => hasLegacyStep6Cutover(ctx)
    ? `research/${ctx.run}-step6-cutover.json`
    : normal;
  const introducedPlan = (ctx: any, build: () => any[]) => hasLegacyStep6Cutover(ctx) ? [] : build();
  const solo = (_ctx: any, unit: string) => [String(unit)];
  const routingGate = (ctx: any, phase: 'adjudicate' | 'final') =>
    gate(`step6-routing-${phase}`,
      ['node', 'tools/step6-scope.mjs', 'check', '--run', ctx.run, '--phase', phase], {
        liveness: { pattern: /(\d+) item\(s\) routed/.source, min: 1, unit: 'items routed' },
      });
  const decisionStampGate = (ctx: any) => gate('step6-decision-stamp',
    ['node', 'tools/step6-scope.mjs', 'stamp', '--run', ctx.run]);

  /** Give each repair lane the exact current failure. Event order is not a
   * task contract: advisory events may be newer, and exhausted item ids remain
   * in the raw gate output. This generated file is the lane's authority. */
  const writeGateTask = (args: any, phase: '6b' | '6c', edge: boolean, lane = '') => {
    const safeGate = String(args.failure.id).replace(/[^a-z0-9-]+/gi, '-');
    const safeLane = String(lane).replace(/[^a-z0-9-]+/gi, '-');
    const relative = `research/${args.ctx.run}-${args.stage.id}-${safeGate}-repair-${args.round}${safeLane ? `-${safeLane}` : ''}.task.md`;
    const live = (args.failure.liveItems ?? []).map(String);
    const exhausted = (args.failure.exhaustedItems ?? []).map(String);
    const advisory = (args.failure.advisory ?? []).map((failure: any) => ({
      stage: failure.stage, gate: failure.id, why: failure.why,
    }));
    const canonical = [
      readFileSync(join(args.ctx.repo, 'briefs/tasks/alpha-step6-gate.md'), 'utf8').trim(),
      edge ? readFileSync(join(args.ctx.repo, 'briefs/tasks/alpha-step6-edge.md'), 'utf8').trim() : '',
      phase === '6c' ? readFileSync(join(args.ctx.repo, 'briefs/tasks/alpha-6c-edges.md'), 'utf8').trim() : '',
    ].filter(Boolean).join('\n\n');
    const lines = [
      `# Step 6${phase.slice(1)} repair — ${args.failure.id}`,
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
      edge ? 'This is an undeclared-prerequisite edge decision; follow the Step 6 edge task.' : '',
      '',
      '## Primary gate output',
      '',
      '```text',
      String(args.failure.output ?? ''),
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

  const dispatchGateRepair = async (args: any, phase: '6b' | '6c', residue = '') => {
    if (residue) args.failure = { ...args.failure,
      output: `${args.failure.output ?? ''}\n\nMECHANICAL RESIDUE:\n${residue}` };

    // `risk-report --require-reviewed` is level-scoped but its remediation is
    // group-owned. One global repair lane serialises four disjoint Alpha scopes
    // and creates a competing writer for every group's report and decisions.
    // Partition the complete live set through the per-batch contracts and the
    // existing Alpha assignment, then launch one lane per owning group. The
    // stage/role cap already bounds this fan-out at four.
    const live = (args.failure.liveItems ?? []).map(String);
    if (phase === '6b' && args.failure.id === 'risk-report' && live.length) {
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
          job: 'adjudication', covers: [], brief: 'briefs/alpha-step6.md', task: dynamicTask,
          timeout: 3600,
        });
      }
      return;
    }

    const edge = await isEdgeDecision(args);
    const dynamicTask = writeGateTask(args, phase, edge);
    args.executor.start(args.stage, {
      role: 'alpha', label: `${phase}-${edge ? 'edge' : 'gate'}-${String(args.failure.id).replace(/[^a-z0-9-]+/gi, '-')}-${args.round}`,
      job: 'adjudication', covers: [], brief: 'briefs/alpha-step6.md', task: dynamicTask,
      timeout: phase === '6c' ? 7200 : 3600,
    });
  };

  const handleGateFailure = async (args: any, phase: '6b' | '6c') => {
    // `stage-stalemate` is missing Step 6 output, not the similarly named
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
      id: '6a-baseline',
      label: 'per-batch pre-reader hash (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: introducedBatches,
      pattern: introducedPattern(resultPattern('tool', 'hash-pre-\\d+')),
      labelFor: (unit: string) => `hash-pre-${unit}`,
      artifacts: (ctx: any, unit: string) => introducedArtifact(ctx,
        `research/${ctx.run}-step6-hash-${unit}-pre.json`),
      concurrency: 12,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => introducedPlan(ctx, () => pending.map((unit) => ({
        role: 'tool', label: `hash-pre-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step6-scope.mjs', 'hash', '--run', ctx.run,
          '--batch', String(unit), '--label', 'pre'],
        timeout: 600,
      }))),
      gatesWaived: 'The hash artifact is validated when split consumes it; a missing or malformed baseline makes split fail rather than guessing a route.',
    },
    {
      id: '6a-read',
      label: 'independent readers',
      pipeline: 'read',
      role: 'reader',
      units: batches,
      pattern: resultPattern('reader', 'reader-\\d+'),
      labelFor: (unit: string) => `reader-${unit}`,
      artifacts: (ctx: any, unit: string) => {
        const report = `research/${ctx.run}-reader-${unit}.md`;
        return hasLegacyStep6Cutover(ctx)
          ? report
          : [report, `research/${ctx.run}-reader-findings-${unit}.json`];
      },
      concurrency: 12,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => introducedPlan(ctx, () => pending.map((unit) => ({
        role: 'reader', label: `reader-${unit}`, job: 'audit', covers: [unit],
        brief: 'briefs/reader.md',
        task: 'briefs/tasks/reader.md',
        outputSchema: 'briefs/schemas/reader-findings.json',
        resultArtifact: `research/${ctx.run}-reader-findings-${unit}.json`,
        timeout: 14400,
      }))),
      gatesWaived: 'Readers may repair items; the full repository, contract, routing, and ledger battery runs once at the read-pipeline join after every group Alpha has adjudicated.',
    },
    {
      id: '6a-split',
      label: 'compute touched and untouched items (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: introducedBatches,
      pattern: introducedPattern(resultPattern('tool', 'split-\\d+')),
      labelFor: (unit: string) => `split-${unit}`,
      artifacts: (ctx: any, unit: string) => introducedArtifact(ctx,
        `research/${ctx.run}-step6-scope-${unit}.json`),
      concurrency: 12,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => introducedPlan(ctx, () => pending.map((unit) => ({
        role: 'tool', label: `split-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step6-scope.mjs', 'post-reader', '--run', ctx.run,
          '--batch', String(unit)],
        timeout: 600,
      }))),
      gatesWaived: 'Each batch owns a separate scope artifact; exact manifest partition and refuter closure are checked at the pipeline join.',
    },
    {
      id: '6a-refute',
      label: 'read-only refuters over untouched and high-risk items',
      pipeline: 'read',
      role: 'refuter',
      units: introducedBatches,
      pattern: introducedPattern(resultPattern('refuter', 'refute-\\d+')),
      labelFor: (unit: string) => `refute-${unit}`,
      artifacts: (ctx: any, unit: string) => introducedArtifact(ctx,
        `research/${ctx.run}-refute-${unit}.json`),
      concurrency: 8,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => introducedPlan(ctx, () => pending.map((unit) => ({
        role: 'refuter', label: `refute-${unit}`, job: 'refutation', covers: [unit],
        brief: 'briefs/refuter.md',
        task: 'briefs/tasks/refuter-untouched.md',
        outputSchema: 'briefs/schemas/refute-report.json',
        resultArtifact: `research/${ctx.run}-refute-${unit}.json`,
        timeout: 10800,
      }))),
      gatesWaived: 'The read-only result is schema-constrained at dispatch; the following mechanical collect stage verifies exact scope coverage before Alpha can start.',
    },
    {
      id: '6a-collect',
      label: 'validate refuter coverage and materialize obligations (mechanical)',
      pipeline: 'read',
      role: 'tool',
      units: introducedBatches,
      pattern: introducedPattern(resultPattern('tool', 'collect-\\d+')),
      labelFor: (unit: string) => `collect-${unit}`,
      artifacts: (ctx: any, unit: string) => introducedArtifact(ctx,
        `research/${ctx.run}-step6-scope-${unit}.json`),
      concurrency: 12,
      cohort: solo,
      plan: (ctx: any, pending: string[]) => pending.map((unit) => ({
        role: 'tool', label: `collect-${unit}`, job: 'bookkeeping-mechanical', covers: [unit],
        argv: ['node', 'tools/step6-scope.mjs', 'collect', '--run', ctx.run, '--batch', String(unit)],
        timeout: 600,
      })),
      gatesWaived: 'Collect exits nonzero unless opened and not_opened exactly partition the computed refuter scope and not_opened is empty; its successful result is the gate for this mechanical stage.',
    },
    {
      id: '6b-adjudicate',
      label: 'group Alpha adjudication of touched items and refuter findings',
      pipeline: 'read',
      role: 'alpha',
      units: batches,
      pattern: resultPattern('alpha', '6b-[a-z]+'),
      artifacts: (ctx: any, unit: string) => {
        const group = alphaGroups(ctx).find((entry: any) => entry.covers.map(String).includes(String(unit)));
        if (!group) return null;
        const report = `research/${ctx.run}-alpha-${group.label}-6b.md`;
        return hasLegacyStep6Cutover(ctx)
          ? report
          : [report, `research/${ctx.run}-alpha-${group.label}-6b-decisions.json`];
      },
      concurrency: 4,
      cohort: alphaCohort,
      plan: (ctx: any, pending: string[]) => alphaGroups(ctx)
        .filter((group: any) => group.covers.some((unit: any) => pending.includes(String(unit))))
        .map((group: any) => ({
          role: 'alpha', label: `6b-${group.label}`, job: 'adjudication', covers: group.covers,
          brief: 'briefs/alpha-step6.md',
          task: 'briefs/tasks/alpha-6b-routed.md',
          timeout: 14400,
        })),
      gates: (ctx: any) => [
        ...repoWide(ctx).filter((candidate: any) => candidate.id !== 'splice-verify'),
        ...contractGates(ctx, { reviewed: true }), decisionStampGate(ctx), routingGate(ctx, 'adjudicate'),
      ],
      perItemFixBudget: 3,
      onGateFailure: (args: any) => handleGateFailure(args, '6b'),
    },
    {
      id: '6b-baseline',
      label: 'post-6b exact carrier and touch snapshots (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'snap-post-6b'),
      artifacts: (ctx: any) => hasLegacyStep6Cutover(ctx)
        ? touchesPath(ctx)
        : [touchesPath(ctx), ...batches(ctx).map((batch: string) =>
          `research/${ctx.run}-step6-hash-${batch}-post-6b.json`)],
      concurrency: 1,
      plan: (ctx: any) => introducedPlan(ctx, () => [{
        role: 'tool', label: 'snap-post-6b', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step6-scope.mjs', 'post-6b', '--run', ctx.run],
      }]),
      gatesWaived: 'One serialized tool reconciles plan-spec, freezes every composite item/page carrier, then records the post-6b impact endpoint. Missing output prevents successful coverage.',
    },
    {
      id: '6c-edges',
      label: 'compute cross-batch edges and post-6b changes (mechanical)',
      units: () => ['all'],
      pattern: introducedPattern(resultPattern('tool', 'cross-group-edges')),
      artifacts: (ctx: any) => introducedArtifact(ctx,
        `research/${ctx.run}-cross-group-edges.json`),
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'cross-group-edges', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/cross-group-edges.mjs', 'list', '--run', ctx.run],
      }],
      gatesWaived: 'The computed lists may be empty; this stage creates the verdict artifact, and 6c-cross re-derives every cross-batch edge, forward reference, and post-6b structural change.',
    },
    {
      id: '6c-cross',
      label: 'lead Alpha cross-batch audit and final Step 6 closure',
      units: () => ['all'],
      pattern: resultPattern('alpha', '6c-[a-z-]+'),
      artifacts: (ctx: any) => hasLegacyStep6Cutover(ctx)
        ? `research/${ctx.run}-alpha-6c.md`
        : [`research/${ctx.run}-alpha-6c.md`, `research/${ctx.run}-6c-verdicts.jsonl`],
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'alpha', label: '6c-lead', job: 'audit', covers: ['all'], brief: 'briefs/alpha-step6.md',
        task: 'briefs/tasks/alpha-6c-edges.md',
        timeout: 14400,
      }],
      gates: (ctx: any) => [
        gate('cross-group-edges', ['node', 'tools/cross-group-edges.mjs', 'check', '--run', ctx.run, '--reconcile-plan']),
        routingGate(ctx, 'final'),
        gate('step6-ledger-valid', ['node', 'tools/defect-ledger.mjs', 'validate', '--run', ctx.run]),
        gate('validate-plan', ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json']),
        ...repoWide(ctx), ...coverageGates(ctx), urlGate(ctx), policyItemGate(ctx),
        ...contractGates(ctx, { reviewed: true }), impactGate(ctx),
        gate('impact-audit-6c', ['node', 'tools/impact-audit.mjs',
          '--touches', touchesPath(ctx), '--from', 'post-6b', '--current',
          '--receipt', `research/${ctx.run}-impact-6c.json`]),
        gate('audit-manifest', ['node', 'tools/audit-manifest.mjs',
          ...batches(ctx).map((batch: string) => `research/${ctx.run}-batch-${batch}.pages.json`),
          '--output', `research/${ctx.run}-audit-manifest.json`], {
          liveness: { pattern: /over (\d+) item\(s\) in/.source, min: 1, unit: 'manifest items' },
        }),
      ],
      perItemFixBudget: 3,
      onGateFailure: (args: any) => handleGateFailure(args, '6c'),
    },
    {
      id: '6d-close',
      label: 'freeze exact Step 6 closure (mechanical)',
      units: () => ['all'],
      pattern: introducedPattern(resultPattern('tool', 'step6-close')),
      artifacts: (ctx: any) => introducedArtifact(ctx, `research/${ctx.run}-step6-closure.json`),
      concurrency: 1,
      plan: (ctx: any) => introducedPlan(ctx, () => [{
        role: 'tool', label: 'step6-close', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/step6-close.mjs', 'close', '--run', ctx.run],
        timeout: 900,
      }]),
      gatesWaived: 'The close tool reruns exact Step-6 routing, cross-edge, plan, and ledger checks before writing the immutable closure receipt; any nonzero check produces no successful result.',
    },
  ];
}

export default { step6Stages };
