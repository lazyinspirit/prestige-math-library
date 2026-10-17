# Batch 41 authoring and reconciliation notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: beta  
Assigned pair: `coordinate-and-block-descent-methods`  
Scheduling input recorded by dispatch: `f48ac8861adc42cbfacb089c08f9a8fd52e28baeaba8267dbc902bb8dd3b31e0`

## Plan and design control

The controlling design is OPT15 in `research/plan-numerical-optimization-track.md`, full section lines 569–602, especially scope at line 577, preserved contract at line 581, and proof route at lines 587–589. The owner direction file, `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md`, was read before authoring and controls over stale task/design text. The primary plan and the `plan-spec.json` row for page order 2366 agree on the two-page pair, topic, and prerequisites; no plan-spec conflict was found.

The appendix route conflicts with the primary plan in four mathematical conventions. The draft follows the primary plan and supplies local evidence for each disagreement:

1. The appendix reads the composite proximal coordinate rate as `2 n Lmax R^2/(k+4)`. This fails without a penalty-error term. In `cex-composite-coordinate-proximal-rate-needs-penalty-error`, take `n=2`, `f=0`, `g_i(u)=4|u|`, `L_i=M_i=1`, `x_0=(1,1)`, and the full initial-sublevel radius `R=2`. After one exact uniform proximal update the expected gap is `4`, while the proposed bound is `16/5`.
2. The appendix uses `R=||x_0-x_*||`; the smooth gradient-rate theorem uses the radius of the entire initial sublevel set about `x_*`. These are not interchangeable in its level-set proof.
3. Composite `F`-strong convexity alone does not imply the coordinate contraction factor. `cex-composite-strong-convexity-alone-does-not-give-coordinate-factor` takes `f=0`, `g_i(u)=u^2/2`, `n=2`, `L_i=M_i=mu=1`, and `x_0=(1,1)`: after one update the gap is `5/8`, exceeding the claimed `1/2` factor. The positive proximal contraction theorem assumes the smooth part `f` itself is `mu`-strongly convex.
4. The uniform smooth-gradient result uses `M_i=L_max` and `rho=1/(n L_max)`. The nonuniform proof instead carries `rho=min_i p_i/M_i` and maximizes it at `p_i=M_i/sum_j M_j`; with `M_i=L_i` this gives `1/sum_i L_i`. Uniform constants are not transferred to nonuniform sampling.

For cyclic descent the draft instantiates the primary plan's continuous block-minimizer-map branch, with compact initial sublevels, finite initial objective, convex differentiable smooth part, and proper closed convex separable penalties. It does not substitute the appendix's alternative strongly convex surrogate. The tie-cycle counterexample states and verifies the nonconvex/nonseparable limitation.

## Inventory and dependency levels

The scaffold manifest contains 21 items: 16 on A and 5 on B. Its `deps` and `dependency_level` values were checked against the current run graph. Batch 41 is at run dependency level 2 with prerequisite batch 27. Item levels are:

| Page | Level 0 | Level 1 | Level 2 | Level 3 | Level 4 |
|---|---:|---:|---:|---:|---:|
| A | 4 | 5 | 2 | 4 | 1 |
| B | 0 | 3 | 2 | 0 | 0 |

The exact item IDs and declared dependencies are in `research/numerical-optimization-dynamics-2026-10-16-batch-41.pages.json`. Suppliers precede consumers in the manifest. The new local item `lem-coordinate-separable-penalty-is-proper-closed-convex` supplies the finite separable penalty fact needed by the strong proximal theorem; it is a finite induction/epigraph proof and does not infer topological closure from sequential closure.

## Supplier interfaces and choice audit

Batch 27 / OPT8 suppliers were inspected at item level, including their complete relevant proofs and current Step 1 records. The exact excerpts, item IDs, dependency levels, readiness record paths, and affected claims are frozen in `research/numerical-optimization-dynamics-2026-10-16-batch-41.cross-batch-dependencies.json`. The inspected direct items are:

- `def-extended-real-epsilon-subdifferential`
- `def-proper-closed-convex-function-on-rn`
- `def-proximal-mapping`
- `lem-proper-closed-convex-function-affine-minorant`
- `lem-smooth-composite-sum-preserves-proper-closed-convexity`
- `thm-proximal-operator-existence-resolvent-firm-nonexpansive`

Their actual interfaces support the block penalty domain/epigraph conventions, the proximal step with `t=1/M_i`, the all-points subgradient inequality, the lower semicontinuity of `f+g`, and the affine lower bound. Each supplier had a current Step 1 authoring record marked `ready`; those records are authoring evidence, not independent proof approval. The published sparse-estimation suppliers `def-lasso-estimator`, `lem-lasso-objective-has-minimizer`, and `def-soft-thresholding-function` were also inspected. The published orthogonal-design example was inspected for canonical placement only and is not used as a logical proof source. No required supplier body remains unavailable.

The proofs use only finite constructions and finite probability histories. The local separable-penalty lemma needs no choice axiom. The affine-minorant supplier's actual proof uses finite-dimensional nearest-point geometry and the choice-free Bolzano–Weierstrass proof; its metadata nevertheless lists dependent choice. This is a metadata reconciliation issue for the owner, not an axiom imported by this batch.

An orphan draft, `items/lem-finite-separable-convex-sum-is-closed.md`, is absent from all 107 current-run page manifests and has no Step 1 record. Its proof says “sequentially closed, hence closed in Euclidean space”; the published `thm-metric-sequential-closure` explicitly uses Countable Choice for that implication. Batch 41 does not depend on the orphan and does not edit it. The owner should decide whether to repair/archive that draft and reconcile its axiom metadata.

## Sources and harvested-result dispositions

Full texts were retrieved and read; locators and supported page mappings are in the coverage file. The A page has three independent treatments and the B page has two:

- Wright, *Coordinate Descent Algorithms*, complete article at <https://arxiv.org/html/1502.04759v1>. Read §2, §3.1 (including Powell's cycling caveat), §3.2 including Algorithm 3 and the complete proof of Theorem 3.1, §3.3, and §3.7 including Theorem 3.4 and its proof.
- Tseng, *Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization*, complete author PDF at <https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf>. Read §1 caveats, §2 method and hypotheses, §4 convergence theorem and complete proof, and §5 Proposition 5.1 and Theorem 5.1 with their proof arguments.
- Royer, full 32-page lecture notes at <https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf>. Read Lecture 3 §§3.1–3.3, including §3.2 hypotheses and the complete proof of Theorem 3.2.1, and §2.2.3 on scalar thresholding.

The 5 page-source entries were fetch-stamped and resolved by `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-41.coverage.json --stamp --timeout-sec 90` (exit 0; 5/5 fetch-verified, 5/5 resolved, zero documented drops; stamp time `2026-10-16T00:43:32.667Z`). The coverage records 20 harvested named results; every harvested result is retained as `included` in the assigned arguments, with no retrieval failure and no dropped source. No `source_resolution` entry is needed. Full per-item arguments and dependencies are in the coverage file.

## Reconciliation items and scoped checks

The task-bound scheduling digest is `f48ac8861adc42cbfacb089c08f9a8fd52e28baeaba8267dbc902bb8dd3b31e0`; the shared `research/numerical-optimization-dynamics-2026-10-16-batch-dependency-levels.json` instead records input digest `d106e23ca34fd26cb882ad0fc8420ded3ebe5d5a6ae824bfebc5c084932146c6`. The shared dependency artifact was not edited. Reconciliation should confirm which scheduling input governs its refreshed level computation.

Final post-edit scoped checks on the assigned artifacts:

- `proof-layout`: 21 items, 58 numbered steps, 0 defects.
- `precheck`: 18 proof-bearing items checked, 0 failures; the 3 algorithm definitions are not applicable.
- strict proof contracts: 21/21 items checked, 0 errors, 0 warnings.
- finite smoke: 4/4 checks passed (scalar threshold, proximal-rate counterexample, collinear Lasso witness, correlated-design coordinate update).
- rendercheck: all 21 items and 2 pages checked, 0 errors, 0 warnings.
- coverage checklist: 2 pages, 20 harvested results, 0 errors, 0 warnings.
- Final `content-policy`: 21 scoped items, 0 errors, 0 warnings. Final `source-fetch-check`: 5/5 sources fetch-verified and resolved (this verification did not create new stamps; the stamped run above remains the recorded one).
- Scoped `dependencyLevels` recomputation over batches 6/27/41: 71 items, 0 errors, maximum level 8 across the scope; batch 41 counts are levels 0–4: 4, 8, 4, 4, 1 (maximum 4). The prior focused `manifest-deps`, dependency, forward-reference, and external-reference checks each reported 0 errors; no dependency metadata changed after those runs.
- A full-run `item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` was also attempted and exited 1 on unfinished or inconsistent *other* manifests: numerous empty scaffold inventories outside batch 41, plus level mismatches including `alg-implicit-stiff-time-stepper-with-consistent-starts` (declared 3, computed 5), `ex-robertson-reaction-system-newton-work` (declared 4, computed 6), and `def-matrix-sign-for-spectrum-off-imaginary-axis` (declared 0, computed 1). The assigned 6/27/41 scope has no dependency-level errors. Those unrelated manifests were not edited.

All 21 batch items have Step 1 authoring records marked `ready`, with no `--owner` flag and no escalation overwritten. These records are not independent review or publication decisions. Only the assigned A/B draft pages, their 21 draft items, and batch 41 evidence/readiness records were authored; no published content, shared plan, engine state, verdict, or other pair was edited.

## Run status

The required read-only on-disk status recomputation completed at `2026-10-16T01:56:33.307Z`: the run remains `running`, stage `1-scaffold`, with 50/107 covered and nothing in flight. Its missing list includes unit 41 (as well as 42, 43, 45, 48, 49, 51, 55, and 56); the artifact-missing list includes 1–40, 42–44, 46–47, 49–50, 52–54, and 57–58. The current blocker is the owner repair/recertification hold in `research/numerical-optimization-dynamics-2026-10-16-step1-blockers.json`: repair rejected items, refresh certifications invalidated by repair, then retry the gate. The local 21-item readiness records had passed direct hash verification after authoring, but this run-level status still does not count unit 41; owner reconciliation is required. No engine state or blocker/verdict file was changed.

A fresh full-run `step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16` could not evaluate records because the unassigned item `alg-certified-adaptive-simpson` has an unquoted colon in its source title at `items/alg-certified-adaptive-simpson.md:25`, producing “Nested mappings are not allowed in compact mappings at line 24, column 14”. This global parse failure prevents a new whole-run record audit; it does not name a batch 41 item. That item is outside this assignment and was not edited; the assigned artifacts and records were not altered in response.
