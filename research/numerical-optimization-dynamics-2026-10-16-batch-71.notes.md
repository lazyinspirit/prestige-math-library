# Batch 71 — Step 1 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16` · role: beta · batch: 71  
Pair: `bfgs-and-limited-memory-quasi-newton-methods` and its examples page.

## Controlling design and reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner authoring direction, the assigned task, the complete OPT2 plan section and its incorporated contract, the plan specification, and the current run/dependency evidence. The owner direction and the exact `contract-OPT2` in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` control over stale copied design prose.

Plan `research/plan-numerical-optimization-track.md` L846 is the controlling scope. L852 (the preserved design at the task's second design location, L848) repeats that scope and adds the named sources, the exact example set, the `OPT1`/`NA-02` routing, and the obligation to supply trace/determinant and Dennis–Moré lemmas locally. I authored both local results. No mathematical scope conflict remains with `research/plan-spec.json`: the exact OPT2 specification asks for the same direct/inverse updates, curvature safeguards, two-loop identity and cost, full-memory global and local results, and a separate fixed-memory L-BFGS result. Its required pages match the manifest: `finite-precision-direct-factorizations` (batch 1, NA-02) and `nonconvex-line-search-and-inexact-newton-methods` (batch 58, OPT1). The design's pair-key shorthand and the manifest's page IDs resolve to those same suppliers.

The task-bound scheduling input is `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`; the attempt-2 dispatch prompt instead records `d106e23ca34fd26cb882ad0fc8420ded3ebe5d5a6ae824bfebc5c084932146c6`. These differ and are preserved separately in `batch-71.dependencies.json` for owner reconciliation. At the final evidence capture (2026-10-16 04:08 UTC), the shared batch-dependency artifact's internal `input_sha256` was `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`, its file SHA-256 was `2a0f995df70f741205c9b460eae21cf51eceb2a02408210e329dd6ad95fa74b7`, and its batch-71 row remained level 4 with prerequisites 1 and 58. Its raw file digest had also been observed as `2c7a59e65a2e568e0d605d100aec2c0107127d0e2cdb1507a3f6b368192143db`, `07ca9acd751fb214d9601d6d0b44e445c7ab3a66b009a961b457a20d226aab00`, and `006e151a67894d6ae1ed46231cd6a4d7aeb255e8b633f7434a544967ebb50305` while authoring. The shared artifact was not edited.

## Inventory, dependencies, and levels

The manifest and library carriers contain 15 A-page items and 3 B-page examples (18 total), with explicit `deps` on every item. Computed item levels match every manifest label, from 0 through 6. The page-level batch level is 4.

- Level 0: `def-bfgs-curvature-pair-and-update-formulas`; `lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder`.
- Level 1: `lem-bfgs-updates-preserve-secant-symmetry-and-spd`; `lem-wolfe-steps-give-positive-bfgs-curvature`; `lem-powell-damping-gives-positive-curvature`.
- Level 2: `alg-bfgs-hessian-direction-with-rounded-cholesky`; `alg-lbfgs-two-loop-with-curvature-filter`; `lem-bfgs-trace-determinant-potential-identities`.
- Level 3: `alg-full-memory-bfgs-with-curvature-safeguards`; `lem-lbfgs-two-loop-equals-stored-updates-and-cost`.
- Level 4: `thm-full-memory-bfgs-global-linear-convergence`; `lem-lbfgs-curvature-bounds-imply-uniform-spectrum`; `ex-bfgs-secant-on-a-strongly-convex-quadratic`; `ex-bfgs-powell-damping-after-negative-curvature`; `ex-lbfgs-memory-dependent-cost`.
- Level 5: `lem-full-memory-bfgs-dennis-more-condition`; `thm-lbfgs-fixed-memory-linear-convergence`.
- Level 6: `thm-full-memory-bfgs-local-superlinear-convergence`.

The dependency evidence records 43 within-batch item edges and 59 external edges (14 to draft suppliers: 2 batch-1 edges and 12 batch-58 edges; 45 edges to 21 published supplier items). I inspected the actual batch-1 item bodies/proofs for `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` and `alg-rounded-cholesky-with-failure-status`, and the actual batch-58 bodies/proofs for `def-wolfe-and-strong-wolfe-conditions`, `alg-bracketing-zoom-strong-wolfe-search`, `thm-zoutendijk-summability-for-wolfe-steps`, `lem-wolfe-step-lower-bound-from-the-descent-angle`, and `cor-uniform-descent-angle-implies-gradient-vanishing`. Their dispatch status is not independent acceptance. All 21 published item suppliers and the relevant statements/proofs were also inspected. The required assumptions, conventions, directions, and affected claims are recorded per edge in `batch-71.dependencies.json`; no unresolved target supplier remains.

## Authored mathematics

The A page defines the curvature pair and direct/inverse BFGS updates, proves secant equations, reciprocal consistency, symmetry and SPD preservation, proves positive curvature from Wolfe steps and Powell damping, and supplies a local Hessian-bounds/Taylor lemma. It includes failure-aware rounded Cholesky and L-BFGS two-loop algorithms, an exact two-loop/stored-update identity and cost proof, trace/determinant potential identities, and a finite-memory spectrum bound.

The full-memory global theorem proves an R-linear objective-gap and iterate bound under the stated uniformly strongly convex sublevel, bounded-Hessian, exact-undamped, and successful-Wolfe hypotheses. The local result separately proves the Dennis–Moré condition under the local Hessian-Lipschitz hypothesis and proves eventual acceptance of the unit trial before deducing superlinear error. Fixed-memory L-BFGS has its own linear theorem under explicit pair-curvature and scale bounds; it does not inherit the full-memory superlinear result. Rounded direction computation carries no backward-error claim; finite line-search budgets report failure when they do not find a step. The three examples cover the quadratic secant update, a rejected negative-curvature pair repaired algebraically by Powell damping, and the memory/storage cost comparison.

Every assigned item now declares its axiom use. The proofs are choice-free; no `def-axiom-of-choice` dependency is needed. The spectral-decomposition use is an explicit dependency of the arguments that require it. The proof contracts include three concrete finite checks, one for each example. A mathematical audit caught and corrected the misuse of the first-part FTC item as a Newton–Leibniz increment formula: the consumers now use the vector-valued Lipschitz corollary, scalar mean-value theorem, and the local Hessian lemma with their actual hypotheses. The second estimate of that lemma now explicitly requires `u,v ∈ W`. Proof steps were normalized to the normative dependency-layer numbering, and the proof contracts and supplier statement excerpts were updated. A missing closing math delimiter in the Dennis–Moré statement was repaired.

## Sources and retrieval record

The A page has independent textbook and lecture-note treatments, plus the original limited-memory paper and a numerical linear-algebra treatment:

- [Nocedal and Wright, *Numerical Optimization*, 2nd ed.](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf): complete 683-page PDF inspected; Chapter 6 §§6.1 and 6.4 including full convergence proofs, Chapter 7 §7.2, and Chapter 18 §18.3.
- [Liu and Nocedal, “On the limited memory BFGS method for large scale optimization”](https://people.sc.fsu.edu/~inavon/5420a/liu89limited.pdf): complete 27-page paper inspected, including Algorithm 6.1 and the full Theorem 6.1 trace/determinant proof.
- [Carreira-Perpiñán, *Lecture Notes on Numerical Optimization*](https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf): complete 98-page notes inspected, §§6–7.
- [Driscoll and Braun, *Fundamentals of Numerical Computation*, §2.9](https://fncbook.com/structure/): full online section on Cholesky and triangular solves inspected.

`source-fetch-check --stamp` verified all 4/4 selected sources (zero newly stamped); `coverage-checklist` reports 31 harvested headings with no errors or warnings. The coverage file preserves the unsuccessful candidate histories: the alternate Nocedal mirror failed to open and was replaced by the complete Kent copy; Springer exposed metadata only and an OpenReview copy reached a verification challenge, both replaced by the complete FSU paper. No selected source remains unresolved or dropped, so no source-resolution escalation was created.

## Scoped checks and remaining run-wide blockers

Scoped final checks pass: precheck (14 proof-bearing items, 0 failures; 4 definitions/algorithms not applicable), proof layout (18 items, 67 steps, 0 defects), rendercheck (18 items, 0 errors/warnings), strict proof contracts (14/14, 0 errors/warnings), focused dependency closure (947 items/92 pages, 0 errors/warnings), forward references, external-record checks, citations, content policy (18 items), manifest dependencies (18 items), coverage checklist, and source fetch. The target-specific item-level graph has 18/18 matching levels, maximum 6. All 18 current Step 1 records are `ready`, `owner:false`, and hash-current under the scoped `step1Decision` check. These records indicate authoring readiness only, not independent approval.

Run-wide gates remain blocked outside batch 71 and were not repaired here:

- `item-dependency-levels check --run ...` currently reports 14 empty page inventories (both pages for `spectral-collocation-and-galerkin-methods`, `numerical-identifiability-and-optimal-experiment-design`, `simulation-gradient-estimation-and-simultaneous-perturbation`, `multirate-and-partitioned-time-integration`, `event-location-and-hybrid-trajectory-error`, `langevin-splittings-and-invariant-measure-error`, and `global-sensitivity-anova-and-sobol-estimation`) and six level mismatches: `alg-certified-exponential-euler-etd2-step` (5 vs 4), `lem-certified-exponential-step-action-error` (6 vs 5), `thm-exponential-euler-etd2-global-error-and-action` (7 vs 6), `ex-diagonal-stiff-diffusion-with-reaction-etd` (6 vs 5), `ex-skew-hermitian-imaginary-time-unitary-step` (8 vs 7), and `ex-additive-eigensolve-tolerance-residual-certificate` (3 vs 4). None is a batch-71 item.
- `batch-dependency-levels check` stops on malformed frontmatter in `items/alg-finite-sectional-forward-euler-positivity-cfl.md`: the unquoted source title containing a colon is at file line 21 (frontmatter parser reports line 20).
- Run-wide proof-contract coverage stops because the frontier names missing item `def-ctrl1-linear-lqr-control-problem`.
- The run-wide Step 1 scan encounters duplicate `pipeline_run` keys in `items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md` (file lines 7 and 26; the YAML parser reports the second key at frontmatter line 25). The batch-71 records were written through `tools/step1-decisions.mjs record` without `--owner`; the scoped hash/currentness check passes all 18.
- Recomputed `.autopilot/numerical-optimization-dynamics-2026-10-16` status remains `running`, with no worker in flight and 78/107 scaffold pairs covered; batch 71 is still listed as missing because the dispatched attempt exited nonzero before its native completion stamp. The recorded stage-stalemate blocker names batches 44 and 54 as covered but artifact-incomplete and no longer running. Run state and shared plans were left untouched.

No tests were run.
