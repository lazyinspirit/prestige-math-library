# Supported recovery design for post-freeze consumer findings

Read-only design; no live state, item, page, published content, or runtime configuration changed. Normative sources: CLAUDE Step7, WORKFLOW Judgment/closure and Historical checkpoint migration; implementations tools/autopilot/bin/autopilot.mts, src/frontier.mts, tools/plan-manifests.mjs, bin/migrate-checkpoint.mjs, src/checkpoint-migration.mjs and stages/mathlib.merged.mts.

## Recommendation

Use a fresh **normal run over the same 22 existing pairs**, retaining the old run held as historical evidence. This is the only currently implemented end-to-end path found that preserves the requested complete frontier and performs legitimate new authoring/audit/review/judgment. It does not reuse stage completion or reset a spent terminal budget. It is more work than a purpose-built current-format repair importer, but that importer does not exist.

Read-only evaluation of unsatisfiableEdges on these22 A pages with allowInRunDependencies:true returned zero findings. No --allow-unbuildable or stage skip is necessary. A normal new plan writes only new namespaced empty scaffold manifests and generated task/coverage scaffolding; canonical item files are not deleted by the planner. Beta's canonical task explicitly says preserve completed work. Full normal stages still execute; do not promise a cheap15item-only rejudge.

## Why alternatives are not valid shortcuts

- Same-state retry: re-arms unfinished work, retains completed coverage and terminal lifetime limits. No rewind control exists. The terminalStep7 pass cannot be reset; 8receipt handles evidence,9contract handles contracts, not new mathematical repairs. The older changed-math stages have already completed and cannot authorize a silent second final cycle.
- Existing checkpoint migration: export executes `tools/step6-scope.mjs`, which is absent in this current checkout. It accepts only a verified historical merged post-review checkpoint carrying `research/OLD-merge-import.json` with original-source review receipt hashes. The present run has neither merge-import nor checkpoint-import. Its modern5a evidence is not the legacy6b envelope the migration translates. Do not create fake old receipts/merge records or rename current judgments to make this exporter pass. Extending it requires an explicitly designed/tested new feature, not an existing command.
- Narrow repair run: CLI selects A/B pages, not arbitrary item IDs. The six consumer-owning pairs fail the current buildability check because the LC page requires the draft forcing page; adding that existing pair yields sevenpairs and zero findings. Such a run would be an ordinary sevenpair build, not a special recovery. It would not close the held625item frontier; repairs to shared interfaces can stale the excluded consumers, and the common integral impact list already exceeds15items. Therefore it is inadequate as sole end-to-end fulfillment of the same22frontier instruction.

## Proposed commands (not executed)

First keep the oldrun paused and wait until all active worker receipts have landed. If its controller remains alive, stop it through the control channel; stopping does not kill workers. Verify inactivity before any new authoring:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts pause --run phase-2-next-20 --state-dir .autopilot/phase-2-next-20
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run phase-2-next-20 --state-dir .autopilot/phase-2-next-20
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts stop --run phase-2-next-20 --state-dir .autopilot/phase-2-next-20
```

Use a previously unused namespace, here `phase-2-frontier-22-repair`. Never --force the old plan. The exact current A-page selection is:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts plan --run phase-2-frontier-22-repair --state-dir .autopilot/phase-2-frontier-22-repair --allow-in-run-dependencies --pairs weak-mixing-and-the-chacon-transformation,locally-convex-spaces-and-continuous-separation,characteristic-functions-inversion-and-continuity,conditional-distributions-and-regular-conditional-probability,discrete-time-martingales,kolmogorov-block-construction-and-almost-everywhere-divergence,carleson-hunt-time-frequency-theorem,quantitative-hyperbolic-geometry-toolkit,double-complexes-exact-couples-and-convergence,singular-cohomology-and-coefficient-theorems,fibrations-fiber-bundles-and-homotopy-exact-sequences,singular-cochains-mayer-vietoris-and-smooth-singular-comparison,connections-levi-civita-and-parallel-transport,finite-weyl-invariants-bruhat-and-kostant-harmonics,integrable-highest-weight-kac-moody-modules,vertices-sources-and-the-green-correspondence,effective-numberings-reductions-resources-and-randomness,the-constructible-hierarchy-and-inner-models,forcing-orders-names-and-generic-extensions,large-cardinals-measures-and-elementary-embeddings,fourier-transform-convolution-and-approximate-identities,schwartz-space-and-the-plancherel-theorem
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --run phase-2-frontier-22-repair --state-dir .autopilot/phase-2-frontier-22-repair
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts start --run phase-2-frontier-22-repair --state-dir .autopilot/phase-2-frontier-22-repair --detach
```

Before starting authoring, ensure the new run's owner handoff records the exact15current findings from `research/phase-2-next-20-postfreeze-active-consumer-audit.json`, the broader40direct integral candidates, source/exhaustion history, and the requirement to preserve every625existing item ID and all22pairs. Use canonical run defect-ledger records with source-run provenance for obligations, not copied verdicts or dispatch success receipts. Reconcile regenerated scaffolds against the complete current plan inventory before any new item authoring. Existing completed proofs are evidence to read and preserve, not permission to skip required normal gates. Audit any genuinely new local foundational item before authoring it.

Generated new artifacts include NEW-batch-N.pages.json (batch packing may differ), NEW-covers.json, NEW-scope-ledger.json, NEW-drift-evidence.json, NEW-alpha-step1-drift.task.md and the canonical run-tasks output; later normal stages create their own author/5a/5b/judge/impact/closure evidence and .autopilot/NEW state. The old namespace and its open rows remain intact. Keep source fetch evidence available without resetting exhausted retries. Only the owner publishes/pushes after all intended content has current valid closure.

## Risks and obligations

The new run has real computational cost and may repack batches. Scope must be checked against all625current IDs, including previously integrated local suppliers; do not let empty planning manifests become accidental permission to omit content. The shared filesystem means new authoring invalidates old hashes; keep the oldrun inactive. New-run judgment must cover the exact final dependency contexts. Publication-state drift in unrelated suppliers and the40candidate impact list can reveal more than the15confirmed carriers. Preserve that uncertainty; no exhaustive proof-closure certification is claimed here.

If preserving all earlier paid reviews without rerunning the whole normal workflow is required, a new verified **current-format** checkpoint/repair importer must be implemented and tested first, with immutable source evidence, explicit new findings, preserved scope/baselines, no fabricated execution, and legitimate new certification ownership. That is a separate engineering task, not a supported recovery command today.
