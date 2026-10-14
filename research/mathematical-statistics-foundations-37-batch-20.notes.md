# Batch 20 authoring notes — M- and Z-Estimators

Run: `mathematical-statistics-foundations-37`  
Role: beta  
Pair: `m-and-z-estimation-and-uniform-laws`  
Dispatch scheduling input: `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`

## Design control and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, `briefs/beta-scaffold.md`, the owner authoring direction, the assigned designs, `research/plan-spec.json`, the foundations-03 dossier, and the current batch evidence. The owner direction makes `research/plan-mathematical-statistics-track.md` the controlling design. Its MSF-13 row at line 101 specifies the two distinct estimator definitions, the separated-maximizer/root consistency claims, the uniform criterion-gap proof route, the separate finite-parameter SLLN illustration, and the mean/median/nonunique-optimum examples. The same row warns not to infer a uniform law from pointwise convergence and requires compactness/continuity or explicit tightness where needed. Here the theorem assumes global uniform convergence and positive separation outside every metric neighborhood, so no compactness or continuity assumption is needed for the criterion-gap argument.

`research/plan-statistical-models-experiments-track.md` at line 57 repeats the four reusable MSF-13 item IDs as a downstream interface; it does not replace the controlling design's B-page examples or alter the A-page hypotheses. The foundations-03 dossier says the ULLN/Glivenko–Cantelli theorem belongs to MSF-20 and explicitly permits conditional M/Z consistency statements; entropy/GC proofs must remain separate and fully hypothesized. This batch follows that boundary. The finite Bernoulli class is the separate finite-parameter SLLN illustration, while the added B-page counterexample instantiates the planned nonunique optimum.

The two plan-spec rows agree on page IDs, A/B relationship, category, titles, orders 1882–1883, and page prerequisites. Their empty item arrays are the pre-authoring projection, not an alternate inventory. The A-page prerequisites remain MSF-12 `asymptotic-convergence-consistency-and-identification`, MSF-03 `losses-risk-and-decision-rules`, and MSF-20 `chaining-uniform-laws-and-empirical-process-limits`. No design conflict changes the authorized scope.

## Inventory, direct dependencies, and levels

The batch manifest contains four A-page items and four B-page items. The direct dependencies and computed levels are:

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-m-estimator` | 4 | `def-borel-sigma-algebra`, `def-estimator-sequence-in-iid-experiments`, `def-identically-distributed-and-iid-random-variables`, `def-metric-space`, `def-op-and-little-op-stochastic-bounds`, `def-probability-measure` |
| `def-z-estimator` | 4 | `def-borel-sigma-algebra`, `def-estimator-sequence-in-iid-experiments`, `def-identically-distributed-and-iid-random-variables`, `def-metric-space`, `def-op-and-little-op-stochastic-bounds`, `def-probability-measure` |
| `thm-m-estimator-consistency` | 5 | `def-consistency-in-probability`, `def-m-estimator`, `def-op-and-little-op-stochastic-bounds` |
| `thm-z-estimator-consistency` | 6 | `def-consistency-in-probability`, `def-op-and-little-op-stochastic-bounds`, `def-z-estimator`, `thm-m-estimator-consistency` |
| `ex-quadratic-criterion-sample-mean` | 5 | `def-estimator-sequence-in-iid-experiments`, `def-identically-distributed-and-iid-random-variables`, `def-m-estimator`, `def-metric-space` |
| `ex-absolute-criterion-sample-median` | 5 | `def-estimator-sequence-in-iid-experiments`, `def-identically-distributed-and-iid-random-variables`, `def-m-estimator`, `def-metric-space` |
| `ex-finite-class-m-estimator-consistency` | 5 | `def-consistency-in-probability`, `def-estimator-sequence-in-iid-experiments`, `def-identically-distributed-and-iid-random-variables`, `def-m-estimator`, `def-metric-space` |
| `cex-unseparated-m-estimator-is-inconsistent` | 5 | `def-consistency-in-probability`, `def-identically-distributed-and-iid-random-variables`, `def-m-estimator`, `def-metric-space` |

For the scoped item DAG over batches 1, 13, and 20, 29 items were checked with no cycles or level errors. Batch-13 suppliers have levels 0 (`def-op-and-little-op-stochastic-bounds`), 3 (`def-estimator-sequence-in-iid-experiments`), and 4 (`def-consistency-in-probability`); the batch-20 carriers are one above their maximum in-run supplier level. The four B items follow their level-4 M-definition supplier at level 5, and the Z theorem follows the M theorem at level 6. The batch-level graph still gives batch 20 level 4 with prerequisite batches 3, 13, and 16. Both pages are below the 100-item cap.

## Supplier checks and unresolved page prerequisites

The actual MSF-12 bodies for `def-estimator-sequence-in-iid-experiments`, `def-op-and-little-op-stochastic-bounds`, and `def-consistency-in-probability` were read, together with relevant transitive context. They define IID product sample spaces and measurable estimator sequences, real/vector $o_P(1)$ using probability tails and a fixed finite-dimensional norm, and pointwise consistency at a fixed metric target. Those conventions match the statements and proofs here. The listed direct item suppliers and their relevant transitive definitions were inspected; the cross-batch file records the verified item edges.

The required page suppliers were rechecked against current files before handoff and are recorded in `research/mathematical-statistics-foundations-37-batch-20.cross-batch-dependencies.json`:

- MSF-03, `losses-risk-and-decision-rules`, is now present; its actual page and `def-loss-function-and-risk` body were read, and all seven A-page items have hash-current Step 1 `ready` records. Its risk definition is not a logical premise of the generic criterion/root claims here. The cross-batch page edge is now recorded as verified.
- MSF-20, `chaining-uniform-laws-and-empirical-process-limits`, and the actual bodies of `def-glivenko-cantelli-class` and `thm-gc-by-bracketing-entropy` are now present and were read. The bracketing theorem's in-probability branch has pointwise measurability, an integrable envelope, and finite $L^1(P)$ bracketing number at every positive scale; its separate almost-sure branch declares Countable Choice, which the batch-20 conclusions do not use. However, no Step 1 readiness records exist for the eight MSF-20 A items, `thm-gc-by-bracketing-entropy` still has `verification.precheck: pending`, and its batch-15 suppliers `def-empirical-process-and-rademacher-process` and `def-covering-packing-bracketing-number-and-metric-entropy` have no Step 1 readiness records. The current batch-15 manifest matches the six direct dependencies in the `def-covering` carrier; this corrects an earlier omission note in batch-16 cross-batch evidence, while the upstream readiness reconciliation remains open. The batch-20 theorems remain conditional on uniform convergence, and their bracketing application route is not certified. The finite Bernoulli example proves only its own finite-class uniform law and does not replace a general ULLN.

The Step 1 decisions for the two consistency theorems were written at `2026-10-14T04:07:26.218Z` and `04:07:26.728Z`. The current `def-glivenko-cantelli-class` file predates those records, and `thm-gc-by-bracketing-entropy` has mtime `04:07:20.145Z`, six seconds before the first record; the MSF-20 page file also predates them. Thus the earlier batch-16 cross-batch evidence was stale, and these supplier bodies were on disk but had not been inspected when the escalations were recorded. I subsequently read the actual bodies and found the stated in-probability route matches the conditional uniform-convergence premise, but its Step 1/precheck and transitive readiness remain unresolved. The escalations were left unchanged as required; the owner must reconcile them. The six ready records likewise mention the MSF-03 page as open in their original reasons; that page was already authored, but I verified it only afterward and updated the batch-20 cross-batch evidence to reflect its current state.

## Proof and axiom notes

The M-estimator definition distinguishes exact from finite measurable $o_P(1)$ approximate criterion gaps, maximization from minimization by sign reversal, and does not assert existence or population uniqueness. The M-consistency proof uses the gap inequality $\gamma_\varepsilon\le 2U_n+\rho_n$ on the event outside an $\varepsilon$-ball, then converts its probability bound to the required strict-error probability. The minimizing branch follows by negating the criterion; the final step verifies the global M-estimator specialization from the relative gap.

The Z-estimator definition is an exact or approximate root of a finite-dimensional integrable estimating equation. The Z-consistency proof maximizes $-\|\Psi_n(\theta)\|$, bounds its uniform error by the reverse triangle inequality, and uses the separated root and the approximate-root residual to verify the M theorem's relative criterion-gap condition. It does not infer a score equation by differentiating a possibly nonsmooth M criterion.

The quadratic example verifies both empirical and population unique maxima at the sample and population means under the stated moment conditions, and explicitly does not claim a global ULLN over noncompact $\mathbb R$. The absolute-error example proves the complete odd/even order-statistic argmin sets and measurability of the midpoint selection. The finite Bernoulli example proves a fourth-moment deviation bound, summability, and the strong law before establishing its exact selector's consistency and finite-class uniform law. The counterexample has a constant criterion on $\{0,1\}$: the alternating exact maximizer has zero uniform criterion error and fails consistency for the fixed target 0. All arguments are choice-free; no AXC or other axiom dependency is used.

## Full-text sources and retrieval record

The coverage file records exact URLs, locators, supported items, all 15 harvested results and their dispositions across both pages. The independent full lecture-note treatments are Peter Bartlett, *Theoretical Statistics*, Stat 210B Lecture 15, [full 20-page PDF](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf), pp. 2–10 for definitions, examples, and both complete conditional consistency proofs; and Aad W. van der Vaart, *Semiparametric Statistics*, Lecture 5 §5.3, [full 120-page PDF](https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf), printed pp. 54–56 for Definitions and Theorems 5.8/5.10 with proofs. The complete relevant Yen-Chi Chen, UW STAT 581 Chapter 3 [HTML note](https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html) was also read: lines 100–118 for the consistency statements and lines 132–150 for median and least-squares criteria. Chen is statement-level corroboration for the consistency claims; the local item proofs supply the complete arguments.

The browser's text extraction for the van der Vaart PDF timed out; the full original PDF was then fetched directly and inspected, and PyMuPDF confirmed all 120 pages. This retrieval succeeded, so no source was dropped and no unresolved `source_resolution` record is needed. `source-fetch-check --stamp` verified all six coverage source entries; no retries or drops remain outstanding.

## Scoped checks and Step 1 readiness

- Scoped item-level DAG over batches 1, 13, and 20: 29 items, no errors; batch-20 levels match the table above.
- `precheck.mts`: six proof-bearing items passed; the two definitions are not applicable.
- `proof-layout.mjs` on all eight assigned items: 21 steps, 0 defects.
- Strict proof contract: 8/8 items, 0 errors or warnings; cited supplier excerpts and uses map to the final proofs.
- Focused `depcheck`: selected items and prerequisite cycle closure passed.
- `rendercheck`: all eight items and both pages (10 files) passed.
- `content-policy`: 8 scoped items, 0 errors or warnings. `manifest-deps`: 8 items, 0 missing dependencies. Coverage checklist: 2 pages, 15 harvested results, 0 errors or warnings.
- `source-fetch-check --stamp`: 6/6 sources verified, 0 newly stamped, 0 documented drops.

Step 1 records mark the two definitions and four self-contained B examples `ready` with their direct dependencies examined; the six ready hashes are current. The two consistency items were recorded `escalated` before the existing MSF-20 GC bodies were inspected. The GC theorem is still `precheck: pending`, its MSF-15 dependency/readiness chain remains open, and the run has no Step 1 readiness records for MSF-20. The escalations were not overwritten; owner reconciliation remains required. The MSF-03 page and all seven of its items have current, hash-closed `ready` records; its cross-batch edge was updated to verified. The batch-20 Step 1 reasons are immutable records of the checks made at their timestamps; this note records the later reinspection and current evidence.

## Run-level scheduling reconciliation

The dispatch input hash is `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`. The shared `research/mathematical-statistics-foundations-37-batch-dependency-levels.json` currently records `6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80`, while a read-only recomputation from current manifests gives `1c519cee536cec7c7853887f2e9f6025c46279e4526926073fec20827a55ddff`. Accordingly, `batch-dependency-levels.mjs check` reports the shared schedule as stale. The recomputed batch-20 row remains level 4 with prerequisites 3, 13, and 16; the shared plan and schedule were not edited.

The live run was also recomputed with `tools/autopilot/` status at `2026-10-14T04:08:27.733Z`: the run remains `running`, stage `1-scaffold` is held, and 12/37 units are covered. The status lists batch 20 among missing artifacts even though its assigned page manifest and evidence files are present locally; the run-level registration/reconciliation is owner controlled. `research/mathematical-statistics-foundations-37-step1-blockers.json` records the `stage-stalemate` for unit 37 and directs the owner/authorized operator to resolve findings, reconcile shared files, and rerun gates. The blocker, `.autopilot` state, and verdicts were left unchanged.

## Owner E9 round1 resolution

The original Step 1 records and author observations above remain historical. The owner escalation reviewer re-read the actual GC/bracketing bodies, their empirical-process/bracketing definitions, and the published iid integrable SLLN. Their in-probability route supplies the M ULLN under pointwise measurability, integrable envelope and finite L1 bracketing at every positive scale. The A page now records those sufficient hypotheses, the countable-supremum measurability convention, and the finite-coordinate fixed-norm bound that supplies the Z ULLN while retaining its separate measurability assumptions. No supplier item was duplicated or changed; no choice axiom is added to the conditional consistency claims.

Focused proof inspection confirmed one local interface defect: the old Z proof applied the empirical-average M theorem to the nonlinear criterion -||Pn psi||, which need not be an empirical average of a fixed function. The Z proof now directly bounds the separated population equation norm by the uniform equation error plus the empirical root residual, then applies a union bound. The M and Z proofs explicitly handle an empty outside-neighborhood set before using a finite positive gap. Both theorem Statements are unchanged. The obsolete M-to-Z logical dependency is removed in the Z carrier and manifest; the corresponding proof contract is updated. Root owns numeric-level reconciliation, hashes and readiness; the original level table and readiness observations above are not current recertification.

The focused consumer search found only the Z theorem as a logical consumer of the M theorem. Its replacement proof closes that use. The only other theorem-name occurrence in an item is the Remarks of thm-z-estimator-asymptotic-linearity-and-normality, which explicitly assumes its own consistency and does not invoke the Z consistency theorem; its statement and proof require no repair. No Statement/Definition changed, and no other direct/transitive theorem consumers were found. Batch16/batch15 author completion and native readiness remain separate engine/owner obligations; this resolution does not certify their entire pages or overwrite native records.
