# Batch 85 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: `sqp-active-set-and-augmented-lagrangian-methods`  
Batch dependency level: 5; declared prerequisite batches: 1, 6, 58, 71.

## Controlling instructions and design

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch assignment, the current plan and batch evidence, and the binding owner direction at `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md`. The owner direction supersedes stale task/design text. Of the assigned plan locations, `research/plan-numerical-optimization-track.md` L1036 is the controlling scope sentence; L1024 is the local-prerequisite pointer directing authors to the linked optimization-audit appendix, not a competing scope. The controlling proof contract is `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` §Contract OPT6, linked from the plan. The owner direction requires the current exact contract and actual supplier hypotheses, so the original assignment snapshot does not substitute for closure. These controls preserve the active-set, exact-penalty globalization, augmented-Lagrangian, local Newton/BFGS convergence, and three-example obligations.

The plan-spec interface keys map to the exact required pages in the manifest: OPT5 → `inequality-kkt-duality-and-optimality-certificates`; OPT1 → `nonconvex-line-search-and-inexact-newton-methods`; OPT2 → `bfgs-and-limited-memory-quasi-newton-methods`; NA02 → `finite-precision-direct-factorizations`. The manifest keeps all four page requirements. No substantive conflict with `research/plan-spec.json` was found. Owner-direction scope and plan prose control over stale task/design wording; no scope was weakened.

## Scope, placement, and conventions

The A page is [sqp-active-set-and-augmented-lagrangian-methods](../library/numerical-optimization-inverse-problems-and-uncertainty-quantification/sqp-active-set-and-augmented-lagrangian-methods.md), order 2454. The B page is [sqp-active-set-and-augmented-lagrangian-methods-examples](../library/numerical-optimization-inverse-problems-and-uncertainty-quantification/sqp-active-set-and-augmented-lagrangian-methods-examples.md), order 2455. There are 21 A items and 3 B examples; the A page remains under the 100-item limit.

Use the program convention $g_i(x)\le0$, inequality multipliers $\lambda_i\ge0$, and Lagrangian $L=f+\nu^Th+\lambda^Tg$. The proofs define the linearized QP, PHR augmented Lagrangian and projected update, reduced KKT matrices, exact-penalty merit, working-set blocking and finite-budget statuses locally before use. The active-set theorem separates exhaustive exact-QP correctness from feasible-working-set termination, whose nondegeneracy, positive-step and anti-cycling assumptions remain explicit. The globalization claims only finite status return, not accepted-step or convergence guarantees. Exact-Hessian SQP assumes the active set is identified and uses local Newton hypotheses; reduced BFGS states reduced Dennis–Moré, inverse-bound and residual-ratio hypotheses. The PHR theorem is local, uses a sufficiently large fixed penalty and summable inner residuals, and is not a global convergence result.

## Manifest inventory, direct dependencies, and levels

`research/numerical-optimization-dynamics-2026-10-16-batch-85.pages.json` and the item frontmatter agree on direct dependencies and `dependency_level`. Levels below are computed from in-run item edges; out-of-run suppliers do not increase an item level. Each parenthesized list is the exact direct `deps` array:

### Level 1

- `def-sqp-linearized-quadratic-subproblem` ← `def-inequality-constrained-program-and-kkt-geometry`
- `def-sqp-augmented-lagrangian-equality-and-inequality` ← `def-inequality-constrained-program-and-kkt-geometry`

### Level 2

- `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature` ← `def-sqp-linearized-quadratic-subproblem`
- `def-sqp-l1-exact-penalty-merit` ← `def-sqp-linearized-quadratic-subproblem`
- `alg-sqp-augmented-lagrangian-multiplier-method` ← `def-sqp-augmented-lagrangian-equality-and-inequality`, `def-kkt-residual-and-normal-cone`
- `alg-sqp-second-order-correction` ← `def-sqp-linearized-quadratic-subproblem`

### Level 3

- `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate` ← `def-sqp-linearized-quadratic-subproblem`, `thm-farkas-alternative-for-finite-linear-systems`, `thm-convex-kkt-sufficiency-and-normal-cone-certificate`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`
- `alg-sqp-exhaustive-active-set-qp-solve` ← `def-sqp-linearized-quadratic-subproblem`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`
- `alg-sqp-feasible-working-set-qp-solve` ← `def-sqp-linearized-quadratic-subproblem`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`
- `alg-sqp-exact-hessian-newton-step` ← `def-sqp-linearized-quadratic-subproblem`, `def-inequality-constrained-program-and-kkt-geometry`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`
- `thm-sqp-second-order-correction-residual-order` ← `alg-sqp-second-order-correction`, `def-sqp-linearized-quadratic-subproblem`, `cor-second-order-taylor-expansion-with-the-hessian`
- `thm-sqp-augmented-lagrangian-local-convergence` ← `def-sqp-augmented-lagrangian-equality-and-inequality`, `def-inequality-constrained-program-and-kkt-geometry`, `alg-sqp-augmented-lagrangian-multiplier-method`, `thm-euclidean-implicit-function-theorem`
- `ex-sqp-augmented-lagrangian-penalty-conditioning` ← `def-sqp-augmented-lagrangian-equality-and-inequality`, `alg-sqp-augmented-lagrangian-multiplier-method`

### Level 4

- `alg-sqp-reduced-bfgs-kkt-step` ← `def-sqp-linearized-quadratic-subproblem`, `def-inequality-constrained-program-and-kkt-geometry`, `alg-sqp-exact-hessian-newton-step`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`, `def-bfgs-curvature-pair-and-update-formulas`, `lem-bfgs-updates-preserve-secant-symmetry-and-spd`
- `alg-sqp-merit-globalization-with-finite-budgets` ← `alg-sqp-exhaustive-active-set-qp-solve`, `def-sqp-l1-exact-penalty-merit`, `alg-sqp-second-order-correction`
- `thm-sqp-exhaustive-active-set-qp-solve-correct-finite` ← `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate`, `alg-sqp-exhaustive-active-set-qp-solve`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`
- `thm-sqp-working-set-qp-terminates-under-nondegeneracy-anticycling` ← `lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate`, `alg-sqp-feasible-working-set-qp-solve`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`
- `thm-sqp-exact-hessian-local-quadratic-convergence` ← `alg-sqp-exact-hessian-newton-step`, `def-inequality-constrained-program-and-kkt-geometry`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`, `thm-inexact-newton-local-forcing-rates`

### Level 5

- `thm-sqp-reduced-bfgs-superlinear-under-dm` ← `alg-sqp-reduced-bfgs-kkt-step`, `def-inequality-constrained-program-and-kkt-geometry`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`, `thm-inexact-newton-local-forcing-rates`, `alg-sqp-exact-hessian-newton-step`
- `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check` ← `def-sqp-linearized-quadratic-subproblem`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`, `thm-computed-full-rank-least-squares-backward-stability`, `lem-rounded-linear-and-normal-residual-certificates`, `lem-scaled-householder-step-meets-local-backward-error-premise`
- `thm-sqp-merit-globalization-finite-budget-status` ← `alg-sqp-merit-globalization-with-finite-budgets`
- `ex-sqp-engineering-design-active-inequality` ← `def-sqp-linearized-quadratic-subproblem`, `alg-sqp-exhaustive-active-set-qp-solve`, `thm-sqp-exhaustive-active-set-qp-solve-correct-finite`, `thm-convex-kkt-sufficiency-and-normal-cone-certificate`
- `ex-sqp-maratos-effect-and-second-order-correction` ← `def-sqp-linearized-quadratic-subproblem`, `def-sqp-l1-exact-penalty-merit`, `alg-sqp-merit-globalization-with-finite-budgets`, `alg-sqp-second-order-correction`, `thm-sqp-second-order-correction-residual-order`

### Level 6

- `thm-sqp-finite-precision-kkt-residual-certificate-sound` ← `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check`, `lem-rounded-linear-and-normal-residual-certificates`, `thm-computed-full-rank-least-squares-backward-stability`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`

`manifest-deps` reported 24 items, 0 normalized, 0 errors. A transitive in-run closure audit covered 41 items on 7 pages: 0 errors and all 24 assigned labels matched their computed levels. No dependency cycle was found.

## Cross-batch interfaces

The cross-batch evidence contains exactly 4 required-page edges and 28 direct external item edges; a consistency audit matched both edge sets to the manifest and matched all 28 exact supplier excerpts to the current supplier bodies. Step citations in the item edges were refreshed after canonical proof-phase renumbering. The four page interfaces were inspected in their actual supplier bodies/proofs:

- Batch 1, `finite-precision-direct-factorizations`: QR/backward-stability, triangular solve, operationwise arithmetic, and rounded residual-bound hypotheses are stated where used; QR alone is not treated as a solution-accuracy guarantee.
- Batch 6, `inequality-kkt-duality-and-optimality-certificates`: the `g\le0`, `\lambda\ge0`, Lagrangian, KKT residual, Farkas, convex KKT sufficiency, LICQ, and second-order hypotheses are respected.
- Batch 58, `nonconvex-line-search-and-inexact-newton-methods`: the imported inexact-Newton theorem’s invertible, locally Lipschitz Jacobian and forcing-ratio hypotheses are stated by the local SQP results.
- Batch 71, `bfgs-and-limited-memory-quasi-newton-methods`: curvature-pair and SPD-preserving BFGS conditions are stated; the local reduced-BFGS theorem adds its own reduced Dennis–Moré and uniform inverse requirements.

These are interface checks only. They do not approve or accept supplier drafts.

## Full-text sources and coverage

Coverage is in [batch-85.coverage.json](numerical-optimization-dynamics-2026-10-16-batch-85.coverage.json). The three complete texts were inspected at the listed ranges; fetched byte counts, page counts and SHA-256 prefixes below are the actual `source-fetch-check --stamp` records:

- **Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition.** [https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf](https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf); Chapter 16 §16.4, printed pp. 455–465 / PDF pp. 474–484; Chapter 17 §17.4, printed pp. 513–521 / PDF pp. 531–539; Chapter 18 §§18.1–18.2, 18.4–18.6, 18.10–18.11, printed pp. 528–569 / PDF pp. 546–587. Fetch stamp: 3,261,932 bytes, 651 PDF pages, SHA-256 prefix `c1391aa6afb637eb`, stamped 2026-10-16T03:56:26.671Z.

- **Dimitri P. Bertsekas, Constrained Optimization and Lagrange Multiplier Methods (1982).** [https://www.mit.edu/~dimitrib/Constrained-Opt.pdf](https://www.mit.edu/~dimitrib/Constrained-Opt.pdf); Chapter 2 §2.2.2, printed pp. 107–112, and §§2.2.4–2.2.5, printed pp. 115–121; local augmented-Lagrangian minima, original multiplier convergence, inner-solution branch caveat, and penalty comparison. Fetch stamp: 26,537,483 bytes, 410 PDF pages, SHA-256 prefix `07d64e44f3b3c286`, stamped 2026-10-16T03:56:27.143Z.

- **Ralf Herzog, Algorithms and Preconditioning in PDE-Constrained Optimization, lecture notes (2010).** [https://citeseerx.ist.psu.edu/document?doi=f681cd3f5021097b647a085b869853e713894a51&repid=rep1&type=pdf](https://citeseerx.ist.psu.edu/document?doi=f681cd3f5021097b647a085b869853e713894a51&repid=rep1&type=pdf); Chapter 1 §§2.2.2–2.2.3 and §§3.1.1–3.1.2, printed and PDF pp. 14–21; SQP/Newton KKT structure, AL-SQP variant, primal-dual active-set methods, and inequality SQP-PDAS. Fetch stamp: 3,159,014 bytes, 55 PDF pages, SHA-256 prefix `930e85969b2ccaa6`, stamped 2026-10-16T03:56:32.029Z.

The one A-page coverage record contains 30 harvested results: 14 included, 6 inline, and 10 out of scope. Each result name, item mapping, disposition, and out-of-scope rationale is recorded in the coverage JSON. No source is marked dropped. The Nocedal–Wright textbook, Bertsekas monograph, and Herzog lecture notes provide independent book/lecture treatments.

### Retrieval history / source-resolution note

The inherited scouting handoff reports two unsuccessful candidates: a Cambridge Acta Numerica full-text candidate that was paywalled/failed (its exact title and URL were not retained in the current batch artifacts), and `https://www.scicomp.ucsd.edu/~peg/papers/sqpReview.pdf`, which failed TLS. No body from either candidate was read, and neither is cited, stamped, or counted among the coverage sources. Searching alternatives yielded the complete Herzog lecture notes, which were fetched and inspected; the three listed full texts and complete local proofs cover the assigned claims.

The failed candidates were not source entries in the coverage record. I therefore did not fabricate fetch stamps, retry timestamps, source excerpts, or a `dropped` entry for `tools/source-resolution.mjs`. The Cambridge candidate identity/URL and per-item mapping remain a source-history gap for owner reconciliation if these candidates must be entered as formal source records. This gap does not leave an assigned claim without the actual full-text coverage above or a local proof. No result was removed or waived.

## Checks and current run state

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 85`: passed; artifact `research/numerical-optimization-dynamics-2026-10-16-author-check-85.json`, fingerprint `55329863fa8ca52f51c07851d291de30b4ec9a91c4ac44429ea48f6b84b1d11f`. Precheck 24/24; rendercheck 26 files; item content policy 24/24 with 0 errors/warnings; strict proof contract 24/24 with 0 errors/warnings.
- `node tools/proof-layout.mjs` on the 24 explicitly assigned item files: 24 items, 67 steps, 0 defects.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-85.proof-contracts.json --strict`: 24/24 items, 0 errors/warnings; 71 exact supplier citations and 67 step entries.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-85.coverage.json --require-destination`: 1 page, 30 harvested results, 0 errors/warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-85.coverage.json`: 3/3 selected sources fetch-verified.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-85.pages.json`: 24 items, 0 normalized, 0 errors; independent closure audit as above. `step1-decisions.mjs record` wrote all 24 assigned items as `ready` without `--owner`; targeted current-hash verification found 24/24 closed with no unclosed assigned items. The records list each item’s direct dependency IDs and evidence for its placement, supplier inspection, contract, source coverage, and scoped checks.
- Whole-run `item-dependency-levels.mjs check` is blocked by unrelated scaffold state: two empty inventories (`simulation-gradient-estimation-and-simultaneous-perturbation` and its examples) and level mismatches in `ex-affine-random-diffusion-uniform-coercivity` (4 vs 5), `alg-fem-control-active-set-box-quadratic-solve` (1 vs 0), and `thm-fem-control-active-set-box-quadratic-solve-sound-finite` (4 vs 3). None is in batch 85 or its 41-item in-run closure.
- Whole-run `batch-dependency-levels.mjs check` could not parse the unrelated duplicate top-level `pipeline_run` at file line 26 of `items/alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination.md` (the parser reports line 25 within frontmatter); no foreign item was changed.
- The current shared dependency-level artifact still lists batch 85 at level 5 with prerequisites `[1,6,58,71]`, but its `input_sha256` is `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`, differing from the dispatch scheduling input `37c4a3ce7ac4d86a611161d55446fc484e8b1153d01c072b5a8fd371506eb7cf`. This requires owner reconciliation; the shared artifact and engine state were left unchanged.
- Current recomputed autopilot status at 2026-10-16T04:25:37Z is `1-scaffold`, 89/107 covered; batch 85 remains listed missing, nothing is in flight, and the run has an owner-held blocker at `research/numerical-optimization-dynamics-2026-10-16-step1-blockers.json`. This batch handoff does not claim a run-level transition.
- No tests were run.

## Handoff

All assigned carriers and evidence are complete. The source-interface and schedule-hash notes above are reconciliation items for the owner; no supplier acceptance or independent mathematical approval is claimed. All new content remains draft.
