# Batch 91 authoring notes

Run: `machine-learning-all-101-2026-10-19` · pair: `anytime-valid-scalar-confidence-sequences` · role: beta.

## Controlling plan and scope

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold, the batch task, the batch dependency-order task, the current owner-authoring direction, the complete ML-83 design, the matching plan-spec rows, and the batch-91 page manifest/dependency input. The plan and `plan-spec.json` agree on both page identities, title, order, category, all four A-page requirements, the proposed algorithm/theorem IDs, claim strength, conventions, warnings, source, and proof route. No plan-spec conflict was found; shared plan files were left unchanged. The active run was checked with the native autopilot `status` command and `git log`; it is still running at Step 1 with no workers in flight and an owner-held scaffold blocker. No engine state was changed.

## Inventory and item dependency levels

The dispatch input hash is `e3c47ab0ebfea34f3f4fcfb64aca9a58889d192dadc16b7c961afc9a68cec661`. Batch 91 is dependency level 0 with no prerequisite batches. The following inventory, logical dependencies, and item levels were written to `research/machine-learning-all-101-2026-10-19-batch-91.pages.json` before any item carrier was authored. Levels count only in-run item edges; every external supplier remains at a published external page.

| Item | Claim/interface | Direct in-run dependencies | Level |
|---|---|---|---:|
| `def-subexponential-uniform-boundary` | Defines the scalar one-sided sub-exponential process class and a uniform boundary | — | 0 |
| `def-time-varying-target-confidence-sequence` | Defines all-times coverage for an adapted target sequence, including a random target | — | 0 |
| `alg-empirical-bernstein-confidence-sequence` | Updates the sample mean and observed forecast-error sum and emits intervals from a supplied boundary | Both local definitions above | 1 |
| `thm-empirical-bernstein-confidence-sequence` | Proves Theorem 4's two-sided all-times bound, its version invariance and its finite-mixture boundary construction | Both local definitions and the algorithm | 2 |
| `ex-repeated-fixed-level-tests-not-anytime-valid` | Exact finite familywise-error calculation for repeated marginal-level tests | — | 0 |
| `ex-predictable-linear-forecast-empirical-bernstein` | Computes a lagged linear forecast's observed squared errors and the resulting interval | Algorithm and theorem | 3 |
| `ex-diagonal-scalar-bounds-miss-offdiagonal-matrix` | Shows that scalar bounds on diagonal entries do not bound a matrix operator norm | Theorem (for its scalar scope) | 3 |

No in-run cycle is present. B-page examples are leaves. Page prerequisites remain the four dispatched published pages; the B page retains its dependency on the A page.

## Supplier inspection and interface decisions

Inspected the complete current statements and relevant proof arguments for the published filtration, adaptedness, predictability, conditional-expectation, martingale, nonnegative-test-supermartingale, mixture, and Ville items. The direct calculus/probability prerequisites match their statements. The supermartingale and conditional-expectation suppliers explicitly carry AC; the theorem statement and dependency list carry AC and name its uses. The scalar result is proved from the observed residual `X_t - Xhat_t`; no independence, identical distribution, shared conditional mean, predictable-variance substitution, matrix result, or adaptive-regret claim is imported.

The planned `thm-confidence-sequence-by-test-inversion` supplier assumes a fixed parameter family with one test supermartingale per fixed parameter. It does not cover the design's potentially random, time-varying target `mu_t`. The existing `def-confidence-sequence` has the same fixed-family scope. The A page therefore adds the narrower necessary definition `def-time-varying-target-confidence-sequence`; the theorem proves its all-times coverage directly. This preserves the design's no-common-mean claim and does not alter the upstream suppliers.

The conditional sub-Gaussian Gaussian-mixture theorem on SME-60 assumes increments around one fixed scalar parameter with a common known conditional proxy. It does not supply the empirical-residual boundary for the running conditional-mean target. Its page remains a dispatched prerequisite, but that theorem is not a logical supplier. The finite-mixture boundary authored here uses the existing product-measurable mixture-closure and Ville suppliers only after the local exponential processes are proved supermartingales; the mixing support is finite, so product measurability is immediate. SME-58's published discrete Ville statement was checked as a parallel interface; the proof uses the explicitly planned `thm-villes-inequality` interface from MSF-34, whose crossing event matches the boundary proof. These are resolved interface selections, not missing suppliers.

## Source reading and retrieval history

- Howard et al., *Time-uniform, nonparametric, nonasymptotic confidence sequences*, arXiv v9, direct full PDF `https://arxiv.org/pdf/1810.08240v9`: inspected the full-text Theorem 4 statement, the sub-psi and uniform-boundary definitions, and the complete Appendix A.8 argument. The local proof rederives the Fan inequality from the integral representation and monotonicity rather than treating the cited inequality as a proof. Relevant locators: §2 Definitions 1–2 and the sub-exponential `psi` function; Theorem 4, §4.1, PDF p. 14; Appendix A.8, PDF p. 35. This is the exact source for the forecast-residual theorem and its no-common-mean scope.
- Joel A. Tropp, *Probability Theory & Stochastic Processes*, Caltech CMS 117 full lecture notes, `https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf`: inspected Lecture 26 §§26.4.3–26.4.4, including Theorem 26.21 and the associated cgf/supermartingale exercises and Ville-based argument (PDF pp. 397–399; printed lecture pages 382–385). This is an independent full lecture-notes treatment of an empirical-quadratic-variation martingale bound. Its process and constants differ; it is context only, and none of its conclusion is imported. The local proof supplies every step for the forecast-residual process.
- Search/retrieval: searched for the Howard full text and independent empirical-Bernstein lecture-note treatments. A combined browser-open request returned a transient internal tool error; separate opens of the full Howard PDF/HTML and Tropp full PDF succeeded. No URL retrieval failure remains, no source was dropped, and no `source_resolution` alternative-proof record is warranted. `source-fetch-check --stamp` passed: both full sources fetched and were stamped.

## Operational checks and readiness

- The manifest inventory was recorded before authoring. All seven assigned item carriers, both empty-body page carriers, source evidence, dependency inputs, cross-batch inputs, and proof contracts are complete.
- Native run status at handoff: running at Step 1, 19/101 pages covered, no workers in flight. The owner-held scaffold blocker remains at `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. Batch 91 has no prerequisite batch and its seven item levels validate locally.
- Plan/plan-spec conflict: none.
- `source-fetch-check --stamp`: pass, 2/2 sources fetch-verified and stamped, 2/2 resolved, zero drops. Howard et al.: 2026-10-18T19:42:01.801Z, 1,494,142 bytes, SHA16 `eb3efd547349adfb`, 48 pages. Tropp: 2026-10-18T19:42:03.566Z, 4,061,344 bytes, SHA16 `96f4ae4455005bad`, 447 pages.
- Scoped checks: precheck 4/4 pass; proof-layout 7 items, 14 steps, 0 defects; strict proof-contract 7/7, 0 errors and 0 warnings; rendercheck 9/9; content-policy 7 items, 0 errors and 0 warnings; statement-first 7 items, 0 defects; depcheck focused checks pass over 7 items and prerequisite cycles over 620 items/274 pages; source-fetch verification 2/2 pass; local dependency levels 7 items, maximum 3, no cycle. Both page files parse as frontmatter-only with empty bodies and no engine-owned layout flag.
- `step1-decisions record` wrote `ready` records for all seven assigned items with their direct dependency lists and current item hashes. `step1-decisions check` confirms all seven are closed. The run-wide check remains open: 393 items, 260 ready, 272 work entries across all run pages, including earlier owner escalations and empty scaffolds outside batch 91.
- Run-wide `item-dependency-levels.mjs check` remains blocked by other scaffold state: 140 errors (139 empty scaffold inventories and one existing label mismatch, `lem-finite-metric-plan-lifts-to-a-borel-coupling`, labeled 0 but computed 1). No other batch or shared run state was changed.

### `def-subexponential-uniform-boundary` — completed draft

Defines the standard scalar `l0=1` sub-psi exponential domination class with $\psi_{E,c}(\lambda)=c^{-2}[-\log(1-c\lambda)-c\lambda]$ and Borel one-sided uniform boundaries at error $\alpha$. This is the missing local interface used by the planned generic boundary statement and finite-mixture construction. It depends on `def-filtration-and-filtered-probability-space`, `def-adapted-and-integrable-stochastic-process`, `def-nonnegative-test-supermartingale`, and `def-axiom-of-choice`; it has no in-run suppliers and level 0. Source: Howard et al., §2 Definitions 1–2 and $\psi_{E,c}$, full arXiv v9 PDF; Tropp, Lecture 26 §§26.4.3–26.4.4, full lecture notes. Tropp's empirical martingale theorem has a different observed quadratic variation and leaves two intermediate claims as exercises; its result is not imported. Carrier authored at `items/def-subexponential-uniform-boundary.md`; scoped render, content-policy, source-fetch and dependency checks pass; readiness record is ready.

### `def-time-varying-target-confidence-sequence` — completed draft

Defines simultaneous coverage for an adapted target process under one probability law, the exact target type needed when $\mu_t=t^{-1}\sum_{i\le t}E[X_i\mid\mathcal F_{i-1}]$ varies or is random. The existing fixed-parameter confidence-sequence interface was inspected but is neither linked nor used as a supplier because it does not express this target type. Dependencies: `def-filtration-and-filtered-probability-space` and `def-adapted-and-integrable-stochastic-process`; no in-run supplier, level 0. Source: Howard et al., §2 and Theorem 4, full arXiv v9 PDF. Carrier authored at `items/def-time-varying-target-confidence-sequence.md`; scoped render, content-policy, source-fetch and dependency checks pass; readiness record is ready.

### `alg-empirical-bernstein-confidence-sequence` — completed draft

Defines the streaming update for $\bar X_t$ and $V_t=\sum_{i\le t}(X_i-\widehat X_i)^2$, with the zero-width $a=b$ branch and a supplied Borel one-sided boundary at error $\delta/2$. It makes no coverage claim on its own. Direct in-run dependencies are both local definitions; external inputs are the filtration, adaptedness, and predictability definitions. Item level 1. Source: Howard et al., Theorem 4 and §4.1, full arXiv v9 PDF. Carrier authored at `items/alg-empirical-bernstein-confidence-sequence.md`; scoped render, content-policy, source-fetch and dependency checks pass; readiness record is ready.

### `thm-empirical-bernstein-confidence-sequence` — completed draft

Exact claim: for $X_t\in[a,b]$ a.s. and bounded $\mathcal F_{t-1}$-measurable forecasts, the interval output covers the time-varying average conditional expectation $\mu_t$ simultaneously at every positive integer time with probability at least $1-\delta$, for any valid one-sided sub-exponential boundary at $\alpha=\delta/2$. The $a=b$ singleton branch, invariance under conditional-expectation versions, no-common-mean scope, and fixed-mean specialization are explicit. Also proves a finite-mixture root boundary, with finite support ensuring product measurability.

Direct in-run deps: `alg-empirical-bernstein-confidence-sequence`, `def-subexponential-uniform-boundary`, and `def-time-varying-target-confidence-sequence`; level 2. External proof deps: filtration/adapted/predictable and conditional-expectation definitions; conditional-expectation order, bounded-factor and tower theorems; martingale/test-supermartingale definitions; finite mixture closure; Ville; and AC. The Fan inequality is proved locally from $r(x)=\int_0^1t/(1+tx)\,dt$ and its monotonicity, then the predictable conditional step gives the exponential test supermartingale.

Source: Howard et al., arXiv v9, Theorem 4 §4.1 (PDF p.14), Appendix A.8 (p.35), and §2 Definitions 1–2; full text and complete relevant proof inspected. The local proof derives the quoted scalar inequality rather than citing it as a missing step. Independent treatment: Tropp full Caltech lecture notes, Lecture 26 §26.4.4, Theorem 26.21 and exercises/proof, PDF pp.397–399 (printed lecture pp.382–385); this different quadratic-variation theorem is context only, not a supplier for forecast residuals. Item source paths/URLs and proof arguments are recorded above. Carrier authored at `items/thm-empirical-bernstein-confidence-sequence.md`; strict contract, proof-layout, scoped dependency, render, content-policy and source checks pass; readiness record is ready.

### `ex-repeated-fixed-level-tests-not-anytime-valid` — completed draft

Exact calculation: for independent uniform null p-values and the rejection rule $U_t\le\alpha$, each fixed test has size $\alpha$, while the familywise rejection probability through $n$ is $1-(1-\alpha)^n>\alpha$ for $n\ge2$. No logical supplier is needed; deps empty, level 0. The complete computation is local; no registered finite-smoke check is applicable to this symbolic independent-uniform example. Carrier authored at `items/ex-repeated-fixed-level-tests-not-anytime-valid.md`; proof-layout and strict contract pass; readiness record is ready.

### `ex-predictable-linear-forecast-empirical-bernstein` — completed draft

Uses iid Bernoulli$(1/4)$ outcomes and the lagged linear forecast $1/4+X_{t-1}/2$, which is predictable, bounded, and differs from the conditional mean on histories with $X_{t-1}=1$. On path $(1,0,0,1)$, the residual squares are $(9,9,1,9)/16$, so $V_4=7/4$, $\bar X_4=1/2$, and the path probability is $9/256$. The local theorem gives the all-times coverage guarantee under AC. Direct deps are the algorithm, theorem, AC, conditional-expectation version definition, and uniqueness; in-run suppliers are theorem level 2 and algorithm level 1, so this example is level 3. Proof and arithmetic are local. Carrier authored at `items/ex-predictable-linear-forecast-empirical-bernstein.md`; precheck, proof-layout, strict contract, render, content-policy and dependency checks pass; readiness record is ready.

### `ex-diagonal-scalar-bounds-miss-offdiagonal-matrix` — completed draft

Exact example: the deterministic family $A^{(r)}=\begin{pmatrix}0&r\\r&0\end{pmatrix}$ has the same zero diagonal streams for every $r>0$, so the theorem's scalar degenerate-range branch returns the same diagonal intervals, while the matrix operator norm is $r$. This demonstrates why a scalar result does not supply a matrix confidence sequence. Direct in-run supplier: the scalar theorem, level 3; no matrix theorem or source result is imported. Carrier authored at `items/ex-diagonal-scalar-bounds-miss-offdiagonal-matrix.md`; precheck, proof-layout, strict contract, render, content-policy and dependency checks pass; readiness record is ready.

## Pages, source evidence, and cross-batch inputs

Both page carriers are frontmatter-only with empty Markdown bodies and no summaries. The A page lists the four A items; the B page lists the three example leaves. The `ex-predictable-linear-forecast-empirical-bernstein` contract explicitly includes AC and the conditional-expectation version/uniqueness interfaces used by its finite-atom verification. The matrix example carries AC through the scalar theorem. These external edges do not change item levels.

The actual external item dependency roots in the authored manifests have a transitive published supplier closure of 607 items on 56 published pages. The source of that closure was computed from actual item `deps` and page inventories; it is serialized in `research/machine-learning-all-101-2026-10-19-batch-91.dependency-inputs.json`. Direct page prerequisites remain the four dispatched pages; `relations-functions-and-quotients` is included for the direct AC item edge, and SME-58's discrete-Ville page is recorded as a transitive checked interface. `research/machine-learning-all-101-2026-10-19-batch-91.cross-batch-dependencies.json` records the direct published page/item suppliers and their inspected hypotheses. There are no in-run pair suppliers and no cross-batch cycle.

Source retrieval history: the first `source-fetch-check --stamp` call returned `fetch-check-empty: zero sources in scope` because the initial coverage draft used a top-level `sources` array; no URL was accessed. I corrected the coverage to the native `pages[].sources[]` schema and reran the same command. It returned exit 0: 2/2 sources fetch-verified, 2 newly stamped; 2/2 resolved, zero drops. No source URL retrieval failed, so no recovery retry or `source_resolution` alternative proof record is applicable. Exact stamps and locator/support/disposition records are in `batch-91.coverage.json` and `batch-91.source-evidence.json`.

## Final authoring inventory

| Item | Status | Local dependency level | Argument/evidence disposition |
|---|---|---:|---|
| `def-subexponential-uniform-boundary` | draft complete | 0 | Standard $l_0=1$ sub-exponential domination and boundary interface; Howard definition matched. |
| `def-time-varying-target-confidence-sequence` | draft complete | 0 | Local all-times coverage definition for an adapted, possibly random target sequence; required because the existing family definition is fixed-parameter. |
| `alg-empirical-bernstein-confidence-sequence` | draft complete | 1 | Online mean and observed forecast-error update; zero-range case is explicit. |
| `thm-empirical-bernstein-confidence-sequence` | draft complete | 2 | Full Fan inequality, predictable conditional step, two signs, union bound, finite-mixture root boundary, version-invariance and fixed-mean branch. |
| `ex-repeated-fixed-level-tests-not-anytime-valid` | draft complete | 0 | Exact finite familywise-error calculation, locally proved. |
| `ex-predictable-linear-forecast-empirical-bernstein` | draft complete | 3 | Finite Bernoulli path calculation, conditional-mean version, algorithm output and theorem coverage. |
| `ex-diagonal-scalar-bounds-miss-offdiagonal-matrix` | draft complete | 3 | Exact operator-norm witness; no matrix-valued theorem is claimed. |

All carriers remain drafts; Step 1 readiness is not independent approval. Seven ready records are closed for this batch. Run-wide readiness and dependency gates remain open because other batches contain 139 empty scaffold inventories, one unrelated dependency-level mismatch, and earlier owner-held escalations; these run-level findings are recorded above and were not modified.
