# Batch 84 — Gauss–Newton and Levenberg–Marquardt methods

Run: numerical-optimization-dynamics-2026-10-16. Role: beta. Batch level: 5; prerequisite batches: 1, 3, and 72. Scheduling input SHA-256: `9085e23333a2ad47283adf7e2d76085f7382cb49455d5e9a0a702b6c3b798ba0`. This is draft authoring, not independent approval.

## Controlling plan and conflicts

The owner authoring direction at `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` is binding and overrides stale task/design wording. The controlling design is the complete OPT4 section of `research/plan-numerical-optimization-track.md` beginning at line 987, including its exact contract at line 999. The plan section controls mathematical scope and proof route; the owner direction controls the E2 boundary and requires reuse of the canonical objective Newton method. `research/plan-spec.json` agrees with the assigned pair and prerequisite pages; no conflict with the controlling OPT4 scope was found. The canonical objective Newton method is reused from the published statistics page and is not duplicated.

OPT4’s scoped claims are the nonlinear least-squares gradient/Hessian formulas; QR/SVD Gauss–Newton solves with explicit rank and finite-status safeguards; the damped system $(J^TJ+\lambda D^TD)p=-J^Tr$; a scaled trust-region interpretation and defined ratio branches; local linear GN contraction under full rank and bounded residual curvature; quadratic GN convergence at zero residual; and finite-budget safeguarded LM stationarity under compact-sublevel, bounded-Jacobian, sufficient-decrease, exact-solve, and finite-rejection assumptions. Residual convergence is not automatic.

## Inventory, dependencies, and levels

The A page contains nine items and the B page contains three worked examples. Exact dependencies and item levels are in `numerical-optimization-dynamics-2026-10-16-batch-84.pages.json`; the frontmatter and manifest arrays agree. The recomputed levels are 0 for the two local least-squares facts, 2 for the scaled LM model lemma, 5 for the QR/SVD GN algorithm, 6 for the LM algorithm and local GN results plus the exponential example, 7 for the large-damping lemma and two other examples, and 8 for the global LM stationarity theorem. These item levels use only in-batch supplier edges; the batch’s level 5 comes from prerequisite batches 1, 3, and 72.

The B-page exponential example is a two-observation exact-fit model, the rank-deficient example distinguishes nonidentifiability from a unique damped step, and the nonzero-residual scalar example computes a linear limiting factor and verifies the local-contraction hypotheses.

## Supplier inspection and cross-batch inputs

The seven detailed edge records and exact interfaces are in `numerical-optimization-dynamics-2026-10-16-batch-84.cross-batch-dependencies.json`. Batch 1’s `alg-scaled-householder-reflector-formation-and-application` and `thm-computed-full-rank-least-squares-backward-stability` bodies and relevant proofs were inspected, along with current Step 1 records that are ready and owner-authored. The computed QR conclusion remains conditional on successful QR/RHS/solve, the arithmetic bounds, and nonsingularity of the perturbed triangular factor.

Batch 3’s page context and `lem-vector-newton-correction-error-under-lipschitz-jacobian` were inspected; the latter is for square maps $\mathbb R^n\to\mathbb R^n$ and is not used for rectangular residuals. The new local rectangular remainder proof uses vector FTC, a Lipschitz Jacobian, and the induced Euclidean norm.

Batch 72’s actual `def-trust-region-quadratic-model-and-ratio` definition and `lem-positive-definite-model-has-unique-newton-step` statement/proof were read. Their interfaces match the drafted use, but both current Step 1 readiness records are missing. Consequently the scaled LM trust lemma, safeguarded LM algorithm, large-damping lemma, global stationarity theorem, and rank-deficient LM example are escalated. The required hypotheses and affected claims are recorded per edge. `alg-trust-region-method` is absent from the current supplier inventory and is not cited or used; the scaled trust interpretation is proved locally.

## Source reading and dispositions

The coverage artifact records two independent complete treatments on both pair pages, with URLs, locators, section-level harvests, item arguments, and explicit dispositions. The complete 683-page Nocedal–Wright second-edition PDF was retrieved; Chapter 10 §§10.1–10.3 (printed pp. 247–263 / PDF pp. 266–282) were inspected, including equations and the complete proof passages for Theorem 10.1, Theorem 10.3, and Lemma 10.2. The complete Cornell CS 4220 April 10, 2026 lecture page was read, including the GN local-bound derivation, LM code, examples, variable projection, IRLS, robust regression, and question sections.

Two alternative Kelley URLs failed with HTTP 404 in the earlier retrieval pass; their exact timestamps were not retained. They are preserved as unused candidates in `source_retrieval_summary`, not treated as read or dropped sources. The active textbook and lecture-note sources were each fetch-verified on both pages: 4/4 source entries stamped, 0 documented drops.

## Mathematical completion and escalation

The nonlinear least-squares derivative identities and the rectangular residual Taylor bound are proved locally, with definitions and norm/FTC hypotheses explicit. The QR/SVD algorithm distinguishes exact factorizations from computed reports, specifies certified interval and rank-status branches, and makes no computed SVD accuracy claim. The LM procedure checks positive predicted reduction before forming a ratio, handles computed stationarity only with an exact-zero certificate, and has a finite trial cap. The local GN results state explicit contraction constants and keep the zero-residual quadratic branch separate from nonzero-residual behavior. The LM large-damping proof defines explicit constants and a finite rejection count; its downstream global theorem telescopes a gradient-norm decrease and concludes stationarity only.

Unresolved at handoff: current Step 1 readiness records are missing for `def-trust-region-quadratic-model-and-ratio` and `lem-positive-definite-model-has-unique-newton-step` in batch 72. Their bodies were inspected, but no readiness or acceptance is inferred from that inspection. All five dependent LM items above remain escalated pending reconciliation. No supplier item was edited.

## Final scoped checks and readiness

The final assigned-scope checks pass: 12/12 strict proof contracts with 0 errors/warnings; proof layout 12 items, 40 steps, 0 defects; precheck 12/12; render check 14 files, 0 errors/warnings; coverage 2 pages and 31 harvested results, 0 errors/warnings; source-fetch 4/4; manifest dependencies 12 items, 0 normalization/errors; content policy 12 items, 0 errors/warnings; focused dependency and cycle check 12 selected items, 991-item transitive closure, 0 errors/warnings; extcheck 12 items, 0 errors; fwdcheck 0 open/closed refs and 0 errors; citation fidelity 80 citations, 0 missing quotes and 0 widening candidates. Scoped dependency-level recomputation over batches 1, 3, 72, and 84 found no errors; all 12 assigned levels match, and page carriers match the manifest inventory.

Step 1 records were written for all 12 items and their hashes were independently recomputed against the current item/dependency closure: 7 ready and 5 escalated, with 0 stale hashes. The ready records are authoring readiness only and do not constitute independent proof approval or publication.

Two run-wide checks remain blocked by unrelated current carriers. The run-wide item-level dependency check reports 22 empty inventories and one stale level (`ex-additive-eigensolve-tolerance-residual-certificate`, recorded level 3 versus computed 4); no diagnostic names batch 84. The run-wide `step1-decisions check` cannot parse `items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md` because its YAML has duplicate `pipeline_run` keys; all 12 batch-84 readiness hashes were separately checked. The batch-level dependency check also stops on malformed YAML in foreign item `alg-finite-sectional-forward-euler-positivity-cfl` (unquoted colon in its source title). These foreign files were not edited.

No published content, shared plan, engine state, owner verdict, or another pair’s carrier was edited. No independent approval or publication is claimed.
