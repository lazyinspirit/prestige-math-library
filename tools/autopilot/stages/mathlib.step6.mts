// The REBUILT step 6 (owner, 2026-08-25).
//
// STAGED, NOT LIVE. Nothing imports this file yet, and that is deliberate:
// `mathlib.mts` hot-reloads on mtime, so an edit there lands on the running
// engine's next 30-second tick. `frontier-18` is at step 7 with its step-6
// stages marked done; introducing new stage ids into the live table would make
// them read as 0/N covered and the engine would re-dispatch finished work.
// Cutover is one edit to `mathlib.mts` after the run closes — see
// `tools/autopilot/stages/STEP6-CUTOVER.md`.
//
// A FACTORY, not a second stage table. Every gate builder is passed in rather
// than re-declared: a hand-kept copy of `repoWide` is exactly the defect class
// this repo keeps finding — seven copies of the model table in one week — so
// there is one definition of each gate and this file has none of them.
//
// ---------------------------------------------------------------------------
// WHAT CHANGED, AND WHY
//
// The owner's brief: step 6 has one mission — catch and repair as many defects
// as possible before step 7 — and the old shape spent tokens re-reading text
// nothing had flagged. Every item was read by a reader, then effectively
// re-audited by its group Alpha, then covered by refuters the Alpha spawned at
// its own discretion; and 6c then re-read every backward citation the readers
// had already checked.
//
// The new routing sends each item down exactly ONE path:
//
//     reader changed it           -> group Alpha adjudicates -> gates
//     untouched, refuter flagged  -> group Alpha adjudicates -> gates
//     untouched, not flagged      -> straight to gates
//
// Four consequences, each a real change rather than a restatement:
//
//  1. THE REFUTERS BECOME A STAGE. They were subagents an Alpha spawned when
//     it chose to, over whatever it chose, so their coverage was unverifiable:
//     no artifact, no gate, no way to tell a level that was refuted from one
//     that was not. As `6a-refute` their scope is computed (the untouched set)
//     and their reports are gated. Still read-only, still never apply a fix.
//
//  2. THE ADJUDICATOR'S SCOPE IS COMPUTED, NOT CHOSEN — `touched u flagged`,
//     from a hash diff and the refuters' own structured reports.
//
//  3. 6c COLLAPSES TO CROSS-GROUP EDGES. Measured on frontier-18: of 6,060
//     dependency edges from in-scope items, 2,246 sit inside their own batch
//     and 3,814 point at published content, and ZERO cross a batch boundary at
//     all. The old 6c re-read those 3,814 backward edges with the whole level
//     in view; they now stay with the 6a reader, whose duty 2 already requires
//     reading every citation in its batch. That is a REASSIGNMENT, not a
//     saving, and it is the one place coverage genuinely thins: nobody
//     re-reads a published-dependency citation with the whole level in view.
//
//  4. NO BATCH WAITS ON A SIBLING between step 5 and 6b (owner, 2026-08-25).
//     Every stage from `6a-baseline` through `6b-adjudicate` carries
//     `pipeline: 'read'` and a single-batch cohort, so a batch whose authoring
//     is done takes its own baseline, is read, is split, is refuted and is
//     adjudicated while other batches are still being written. The first draft
//     of this file got that wrong: it took ONE whole-level snapshot before
//     6a-read, which is a barrier by construction and would have made the
//     slowest author the start time of every reader. The per-batch hash files
//     in `step6-scope.mjs` exist to remove exactly that barrier.
//
// PER-ITEM REPAIR BUDGETS. Both adjudicating stages set `perItemFixBudget: 3`
// — "each item must pass through the same gate within 3 tries, after which it
// becomes a blocker" (owner). The old stage-wide `maxFixRounds` was consumed
// one GATE per round, because the battery stops at its first failure: on
// frontier-18 a level with four red gates burned all three rounds before
// reaching the fourth, twice. Per (gate, item) counters mean one stubborn item
// blocks by name while its page-mates keep converging.

/**
 * Build the step-6 stages.
 *
 * @param d the shared gate builders and helpers from `mathlib.mts`. Passed in
 *          so this file declares no gate of its own.
 */
export function step6Stages(d: any) {
  const { gate, repoWide, contractGates, coverageGates, policyItemGate, urlGate,
    impactGate, batches, alphaGroups, alphaCohort, resultPattern, touchesPath,
    MECHANICAL_REPAIRS, mechanicalRepair, isEdgeDecision, dispatchEdgeAdjudication } = d;

  /** One batch, alone. Every stage from the baseline to the adjudication uses
   *  a cohort of exactly its own batch so nothing waits on a sibling — except
   *  `6b-adjudicate`, whose unit of work genuinely IS the Alpha's group. */
  const soloCohort = (_ctx: any, u: string) => [String(u)];

  /** The routing artifact's own gate, scoped to one batch while the pipeline
   *  is running. `split` checks every manifest item is routed somewhere;
   *  `adjudicate` additionally checks the refuters reported and that no flag
   *  names an item the reader had already repaired. */
  const routingGate = (ctx: any, phase: 'split' | 'adjudicate', batch: string | null = null) =>
    gate(`step6-routing-${phase}${batch ? `-${batch}` : ''}`,
      ['node', 'tools/step6-scope.mjs', 'check', '--run', ctx.run, '--phase', phase,
        ...(batch ? ['--batch', batch] : [])], {
        liveness: { pattern: /(\d+) item\(s\) routed/.source, min: 1, unit: 'items routed' },
      });

  return [
    // -----------------------------------------------------------------------
    // THE LEFT ENDPOINT OF THE READER DIFF, TAKEN PER BATCH.
    //
    // Its position is the whole of its value and its granularity is the whole
    // of the owner's first enforcement point. Taken after a reader runs it
    // marks every item untouched and routes the level past the adjudicator;
    // taken once for the whole level it is a barrier that costs the read
    // pipeline its overlap. Per batch, immediately after that batch's
    // authoring, it is neither.
    {
      id: '6a-baseline',
      label: 'per-batch pre-reading hash (mechanical)',
      pipeline: 'read',
      units: batches,
      pattern: resultPattern('tool', 'hash-pre-\\d+'),
      labelFor: (u: string) => `hash-pre-${u}`,
      artifacts: (ctx: any, u: string) => `research/${ctx.run}-step6-hash-${u}-pre.json`,
      concurrency: 12,
      cohort: soloCohort,
      plan: (ctx: any, pending: string[]) => pending.map((u) => ({
        role: 'tool',
        label: `hash-pre-${u}`,
        job: 'bookkeeping-mechanical',
        covers: [u],
        timeout: 600,
        argv: ['node', 'tools/step6-scope.mjs', 'hash', '--run', ctx.run, '--batch', String(u), '--label', 'pre'],
      })),
      gatesWaived: 'A hash file has nothing to check beyond its own existence and completeness, '
        + 'which `artifacts` requires and `step6-scope split` verifies when it consumes it — the '
        + 'split refuses to run at all if this file is missing, rather than defaulting every item '
        + 'to touched or untouched.',
    },

    // -----------------------------------------------------------------------
    {
      id: '6a-read',
      label: 'independent readers',
      pipeline: 'read',
      role: 'reader',
      units: batches,
      pattern: resultPattern('reader', 'reader-\\d+'),
      artifacts: (ctx: any, u: string) => `research/${ctx.run}-reader-${u}.md`,
      labelFor: (u: string) => `reader-${u}`,
      concurrency: 12,
      cohort: soloCohort,
      plan: (ctx: any, pending: string[]) => pending.map((u) => ({
        role: 'reader',
        label: `reader-${u}`,
        job: 'audit',
        covers: [u],
        brief: 'briefs/reader.md',
        task: [`research/${ctx.run}-reader-${u}.task.md`, `research/${ctx.run}-reader.task.md`],
        timeout: 14400,
      })),
      gatesWaived: 'Readers fix what they are licensed to fix, so items DO change here, and the '
        + 'full repo-wide and contract battery runs on that text at the read group\'s exit — over '
        + 'the whole level, with the adjudicating Alphas in the loop to route any failure. A '
        + 'battery per reader would be checking a level the other batches are still authoring. '
        + 'Each reader\'s report is required as `artifacts` above.',
    },

    // -----------------------------------------------------------------------
    {
      id: '6a-split',
      label: 'route each item: touched by its reader, or not (mechanical)',
      pipeline: 'read',
      units: batches,
      pattern: resultPattern('tool', 'split-\\d+'),
      labelFor: (u: string) => `split-${u}`,
      artifacts: (ctx: any) => `research/${ctx.run}-step6-scope.json`,
      concurrency: 12,
      cohort: soloCohort,
      plan: (ctx: any, pending: string[]) => pending.map((u) => ({
        role: 'tool',
        label: `split-${u}`,
        job: 'bookkeeping-mechanical',
        covers: [u],
        timeout: 600,
        // Hash-then-split in ONE lane, so the order is not a race between two
        // plan entries dispatched together up to the concurrency cap.
        argv: ['sh', '-c',
          `node tools/step6-scope.mjs hash --run ${ctx.run} --batch ${u} --label post `
          + `&& node tools/step6-scope.mjs split --run ${ctx.run} --batch ${u}`],
      })),
      gates: (ctx: any) => [routingGate(ctx, 'split')],
    },

    // -----------------------------------------------------------------------
    // THE REFUTERS, PROMOTED TO A STAGE.
    //
    // Scope is the UNTOUCHED set: an item the reader already repaired goes to
    // the adjudicator on that ground alone, and sending a refuter at it would
    // buy a second opinion on text somebody is about to adjudicate anyway.
    // Read-only by RUNNER — `--sandbox read-only` on codex is a kernel
    // guarantee, not a prompt instruction — and the brief is explicit that a
    // refuter returns evidence and never applies a fix.
    {
      id: '6a-refute',
      label: 'read-only refuters over the untouched items',
      pipeline: 'read',
      role: 'refuter',
      units: batches,
      pattern: resultPattern('refuter', 'refute-\\d+'),
      artifacts: (ctx: any, u: string) => `research/${ctx.run}-refute-${u}.json`,
      labelFor: (u: string) => `refute-${u}`,
      concurrency: 8,
      cohort: soloCohort,
      plan: (ctx: any, pending: string[]) => pending.map((u) => ({
        role: 'refuter',
        label: `refute-${u}`,
        job: 'refutation',
        covers: [u],
        brief: 'briefs/refuter.md',
        task: [`research/${ctx.run}-refuter-${u}.task.md`, 'briefs/tasks/refuter-untouched.md'],
        // A READ-ONLY ROLE CANNOT WRITE ITS OWN REPORT, and that is not a
        // contradiction to work around — it is why `--result-artifact` exists.
        // The refuter emits the JSON as its final message and the DISPATCHER
        // writes the file, so the kernel sandbox stays intact and the artifact
        // this stage gates on still appears. `--output-schema` makes the shape
        // enforceable at the endpoint rather than by hoping the prompt landed.
        outputSchema: 'briefs/schemas/refute-report.json',
        resultArtifact: `research/${ctx.run}-refute-${u}.json`,
        timeout: 10800,
      })),
      gates: (ctx: any) => [
        gate('step6-collect', ['node', 'tools/step6-scope.mjs', 'collect', '--run', ctx.run]),
        routingGate(ctx, 'adjudicate'),
      ],
    },

    // -----------------------------------------------------------------------
    {
      id: '6b-adjudicate',
      label: 'group Alpha adjudication of touched and flagged items',
      pipeline: 'read',
      role: 'alpha',
      units: batches,
      pattern: resultPattern('alpha', '6b-[a-z]+'),
      artifacts: (ctx: any, u: string) => {
        const g = alphaGroups(ctx).find((x: any) => x.covers.map(String).includes(String(u)));
        return g ? `research/${ctx.run}-alpha-${g.label}-6b.md` : null;
      },
      concurrency: 4,
      // The ONE place a cohort is a group rather than a batch, and it has to
      // be: one Alpha dispatch declares coverage of its whole group, so the
      // group may not start until every batch it will claim has been split and
      // refuted. It still does not wait on any OTHER group.
      cohort: alphaCohort,
      plan: (ctx: any, pendingUnits: string[]) => alphaGroups(ctx)
        .filter((g: any) => g.covers.some((c: any) => pendingUnits.includes(String(c))))
        .map((g: any) => ({
          role: 'alpha',
          label: `6b-${g.label}`,
          job: 'adjudication',
          covers: g.covers,
          brief: 'briefs/alpha.md',
          task: [`research/${ctx.run}-alpha-${g.label}-6b.task.md`, 'briefs/tasks/alpha-6b-routed.md'],
          timeout: 14400,
        })),
      gates: (ctx: any) => [...repoWide(ctx), ...contractGates(ctx, { reviewed: true }),
        routingGate(ctx, 'adjudicate')],
      // PER (GATE, ITEM), three tries each. `maxFixRounds` is deliberately
      // absent: leaving it set would cap the stage from the other direction
      // and reinstate the arithmetic this replaces.
      perItemFixBudget: 3,
      onGateFailure: async (args: any) => {
        // A mechanical repair takes precedence whatever the gate id.
        // `splice-verify` fails here as a matter of course — the adjudicator
        // adds and repairs items under its step-6 licence, so the manifests
        // move ahead of the plan. That is a transcription, not a reading.
        if (MECHANICAL_REPAIRS?.[args.failure.id]) {
          const r = await mechanicalRepair(args);
          if (r.outcome === 'outage') return { outage: { reason: r.reason } };
          return;
        }
        if (await isEdgeDecision(args)) { dispatchEdgeAdjudication(args); return; }
        // DEFAULT ROUTE, NOT AN ALLOW-LIST. The old 6b hook named four gate ids
        // and fell through for the other thirteen — the shape that produced
        // three separate blockers in one run at step 5. A gate failure is a
        // finding: the Alpha adjudicates it, repairs what is genuinely wrong,
        // and reports a false positive as a false positive.
        args.executor.start(args.stage, {
          role: 'alpha',
          label: `6b-gate-${args.failure.id}-${args.round}`,
          job: 'adjudication',
          covers: [],
          brief: 'briefs/alpha.md',
          task: [`research/${args.ctx.run}-alpha-gate-adjudication.task.md`],
          timeout: 3600,
        });
      },
    },

    // -----------------------------------------------------------------------
    {
      id: '6b-baseline',
      label: 'post-6b touch snapshot (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'snap-post-6b'),
      artifacts: (ctx: any) => touchesPath(ctx),
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'snap-post-6b', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'post-6b'],
      }],
      gatesWaived: 'A snapshot has nothing to check beyond its own existence; it is the right '
        + 'endpoint of the 6c impact window, capturing authoring plus every 6a and 6b repair. '
        + 'Stage order guarantees it is taken of text that has already passed the read group\'s gates.',
    },

    // -----------------------------------------------------------------------
    // 6c's WORK LIST IS CODE. "Identify dependencies across batches managed by
    // different alpha agents" is a join of the validated partition against the
    // items' own `deps`, so the engine computes it and the Alpha is left with
    // the only part no table can do: reading the citing use against the cited
    // Statement.
    {
      id: '6c-edges',
      label: 'compute the cross-group edge list (mechanical)',
      units: () => ['all'],
      pattern: resultPattern('tool', 'cross-group-edges'),
      artifacts: (ctx: any) => `research/${ctx.run}-cross-group-edges.json`,
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'tool', label: 'cross-group-edges', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ['node', 'tools/cross-group-edges.mjs', 'list', '--run', ctx.run],
      }],
      gatesWaived: 'The list is an OBLIGATION, not a verdict, and it is legitimately allowed to be '
        + 'empty — frontier-18 had zero cross-group edges — so there is nothing to check here that '
        + '`artifacts` does not already require. The next stage gates that every entry it does '
        + 'contain was answered, and re-derives the list from disk so an edge the Alpha\'s own '
        + 'repairs introduced cannot slip past.',
    },

    // -----------------------------------------------------------------------
    // THE LEAD ALPHA, WITH ONE JOB, AND THE FINAL BATTERY.
    //
    // Owner, 2026-08-25: 6c verifies the cross-group citations, decides every
    // forward reference that reached this point — build the intermediate
    // load-bearing lemmas, or drop the item because too many prerequisites are
    // unmet — and then "all items face a final set of run gates before
    // proceeding to step 7. If an item fails a final run gate, it must be
    // repaired by the lead alpha adjudicator."
    {
      id: '6c-cross',
      label: 'lead Alpha: cross-group citations, forward references, final gates',
      units: () => ['all'],
      artifacts: (ctx: any) => [`research/${ctx.run}-alpha-6c.md`, `research/${ctx.run}-6c-verdicts.jsonl`],
      pattern: resultPattern('alpha', '6c-[a-z-]+'),
      concurrency: 1,
      plan: (ctx: any) => [{
        role: 'alpha',
        label: '6c-lead',
        job: 'audit',
        covers: ['all'],
        brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-6c.task.md`, 'briefs/tasks/alpha-6c-edges.md'],
        timeout: 14400,
      }],
      gates: (ctx: any) => [
        // 6c's own work first: every listed edge answered, every forward
        // reference decided, and every decision APPLIED on disk.
        gate('cross-group-edges', ['node', 'tools/cross-group-edges.mjs', 'check', '--run', ctx.run]),
        // ...then the final battery over the whole level.
        ...repoWide(ctx), ...coverageGates(ctx), urlGate(ctx), policyItemGate(ctx),
        ...contractGates(ctx, { reviewed: true }),
        impactGate(ctx),
        gate('audit-manifest', ['node', 'tools/audit-manifest.mjs',
          ...batches(ctx).map((b: string) => `research/${ctx.run}-batch-${b}.pages.json`),
          '--output', `research/${ctx.run}-audit-manifest.json`], {
          liveness: { pattern: /over (\d+) item\(s\) in/.source, min: 1, unit: 'manifest items' },
        }),
      ],
      // This stage had NO failure hook at all: thirty-one gates, every one an
      // instant blocker with zero repair rounds. The owner's rule gives each
      // item three tries and names the lead Alpha as the repairer.
      perItemFixBudget: 3,
      onGateFailure: async (args: any) => {
        if (MECHANICAL_REPAIRS?.[args.failure.id]) {
          const r = await mechanicalRepair(args);
          if (r.outcome === 'outage') return { outage: { reason: r.reason } };
          return;
        }
        if (await isEdgeDecision(args)) { dispatchEdgeAdjudication(args); return; }
        args.executor.start(args.stage, {
          role: 'alpha',
          label: `6c-repair-${args.failure.id}-${args.round}`,
          job: 'adjudication',
          covers: [],
          brief: 'briefs/alpha.md',
          task: [`research/${args.ctx.run}-alpha-gate-adjudication.task.md`,
            'briefs/tasks/alpha-6c-edges.md'],
          timeout: 7200,
        });
      },
    },
  ];
}

export default { step6Stages };
