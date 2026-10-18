# Batch 71 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: beta; pages: `monotone-hjb-schemes-and-policy-iteration` (A) and
`monotone-hjb-schemes-and-policy-iteration-examples` (B).  
Task scheduling-input SHA-256:
`efba2b53eb5d3314ab67536c60a32900207f4c30fe7d1fb4993a0b7f1d9f34d3`.

Only the assigned draft carriers, their two page manifests, and batch-71
evidence were edited. Published items, other pairs, shared plans, and engine
state were left unchanged.

## Controlling plan and conflict log

The owner direction and the full PE32 design at
`research/plan-numerical-spatial-track.md` §PE32 were compared with PE32 in
`research/plan-spec.json`. The plan controls the following design differences:

| Plan requirement | Older design scope | Batch-71 construction |
|---|---|---|
| Both positive-interpolation semi-Lagrangian and monotone upwind first-order schemes | The worked first-order route centers on the semi-Lagrangian update | Both are locally defined and proved, with their distinct mesh conditions and consistency errors. |
| Compact controls or finite controls with a uniform Hamiltonian-grid error | The selected Cauchy branch uses a fixed finite control set | The model permits compact controls; each numerical update uses a finite nonempty set with explicit error `eta_k(R)`, and the B-page quantization example proves a uniform bound. |
| A second-order comparison/convergence theorem for the selected diagonal-diffusion branch | The design calls the branch optional and holds comparison/convergence until local suppliers exist | The diagonal scheme, monotonicity, consistency, initial trace, and half-relaxed sub/supersolution passage are proved. A conditional convergence corollary is included, but the required local comparison proof remains an owner escalation; no unconditional convergence claim is made. |

The explicit diagonal stencil retains the design's diffusion-dominance and CFL
conditions. No arbitrary anisotropic central stencil or universal error rate
is asserted. The discounted generator branch retains strict policy switches,
deterministic tie handling, exact solves, and a finite policy budget.

## Inventory and item levels

The manifest contains 23 A items and 5 B items (28 total); the A page is at
23/100 items. Levels below were recomputed over the current run manifests,
including batch-70 suppliers. Direct dependencies are listed in the manifest.

| Level | A items |
|---:|---|
| 0 | `def-na-finite-state-discounted-bellman-system` |
| 1 | `def-na-periodic-grid-and-tensor-multilinear-interpolation`; `lem-na-discounted-bellman-policy-matrix-inverse-positive` |
| 2 | `alg-na-finite-control-howard-policy-iteration`; `def-na-first-order-hjb-cauchy-problem`; `def-na-periodic-diagonal-controlled-diffusion-hjb-problem`; `lem-na-multilinear-interpolation-positive-and-second-order-accurate` |
| 3 | `alg-na-explicit-diagonal-diffusion-hjb-grid-step`; `alg-na-positive-interpolation-semilagrangian-hjb-step`; `alg-na-upwind-hjb-grid-step`; `def-na-second-order-parabolic-viscosity-solution`; `lem-na-grid-contact-localization-for-half-relaxed-limits`; `thm-na-howard-policy-iteration-monotone-improvement-termination` |
| 4 | `lem-na-diagonal-diffusion-discrete-initial-trace`; `lem-na-diagonal-diffusion-stencil-is-monotone`; `lem-na-first-order-hjb-discrete-initial-trace`; `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity`; `thm-na-diagonal-diffusion-stencil-consistency`; `thm-na-positive-interpolation-hjb-step-monotone-stable-consistent`; `thm-na-upwind-hjb-grid-step-monotone-stable-consistent` |
| 5 | `thm-na-diagonal-diffusion-scheme-half-relaxed-limits`; `thm-na-first-order-hjb-scheme-convergence` |
| 6 | `cor-na-diagonal-diffusion-scheme-converges-under-comparison` (conditional on second-order comparison) |

The B items are: level 4 — `cex-na-centered-hjb-update-is-not-monotone`,
`ex-na-discounted-control-switching-policy-iteration`; level 5 —
`ex-na-diagonal-diffusion-manufactured-solution`; level 6 —
`ex-na-compact-control-quantization-hamiltonian-error`,
`ex-na-eikonal-kink-monotone-hjb-updates`.

The generated run-level dependency artifact currently has input hash
`4e9cbf925e8268ca704d079980b63312b1df8cb6637884cf5181cf12b0c1a8e2`, while the
dispatch hash above is different. Its batch-71 row remains dependency level 4
with prerequisite batch 70. The mismatch and the computed item levels are
recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-71.dependency-level-check.json`;
the shared artifact was not changed.

## Supplier inspection and cross-batch evidence

The current batch-70 PE31 manifest contains 12 A items and 4 B examples. I read
the batch-70 notes, dependency-level check and cross-batch ledger, then read the
complete current bodies of `def-semilagrangian-periodic-grid-and-interpolant`
and `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting`. Their
Step-1 records are `ready` with `owner: false`; that is author readiness, not
independent acceptance. The general PE31 periodic grid/interpolant is used as
the supplier for the local unit-period, `N_j >= 3` specialization. Its convex
interpolation lemma supplies nonnegative weights, unit sum and contraction;
the local PE32 accuracy lemma proves the additional `O(h^2)` estimate.

I also inspected the actual PE31 algorithm and flow theorem. They require a
`C^1` velocity and use a characteristic-flow foot; PE32 assumes only bounded
Lipschitz control coefficients and selects the explicit frozen-time Euler
foot `x_i + tau b_a(x_i,t_n)`. That footpoint update is defined and analyzed
locally, so no stronger flow regularity or unproved characteristic error is
imported. These exact interfaces and affected claims are recorded in
`batch-71.cross-batch-dependencies.json`.

The published hyperbolic supplier `def-periodic-one-way-advection-schemes` was
read in full. Its positive-speed row is reflected to velocity `-b` for the
PE32 sign convention. The published Hamilton–Jacobi suppliers
`def-hamilton-jacobi-cauchy-problem`,
`def-viscosity-subsolution-and-supersolution`, `def-half-relaxed-limits`, and
`thm-comparison-for-first-order-hamilton-jacobi-equations` were inspected; the
complete comparison proof was checked against the periodic lift, bounded
semicontinuous envelopes, pointwise initial order, and the global Lipschitz
bounds for the compact-control Hamiltonian. Countable Choice is recorded only
for half-relaxed recovery/localization; the finite row and policy arguments
remain choice-free. The exact published `def-countable-choice` AC_omega
statement was also checked; the cross-batch ledger records the recovery-only
use and the finite-cover proof that avoids further choice.

## Sources and retrieval record

`batch-71.source-coverage.json` records source locators, harvested headings,
per-result dispositions and fetch stamps. The A-page source treatments are:

- Crandall–Ishii–Lions, complete 69-page paper, including §3 Theorem 3.2 and
  Appendix A pp. 56–63, §6 half-relaxed stability, and §8 parabolic conventions.
- Tran, complete 289-page textbook, including first-order comparison and
  Chapter 3 §4 finite-difference schemes.
- Barles–Souganidis, complete paper, §2 Theorem 2.1 and proof.
- Debrabant–Jakobsen, complete paper, §§2–4 positive interpolation and
  semi-Lagrangian HJB schemes.
- Wang He, complete policy-iteration chapter, §§10.6–10.10.
- Süli, complete 110-page lecture-note PDF, §§6.5–6.6, equations (162)–(166)
  and the upwind CFL/max-norm estimate.

The B page harvests the relevant second-order HJB, first-order grid, positive
interpolation, and policy-iteration sections from five of those full texts.
`source-fetch-check --stamp` verified 11/11 source placements (2 newly
stamped); the source and main coverage copies subsequently verified 22/22
placements. There are no active source drops or unresolved active retrievals.
Additional Bressan/Calder candidate lookups returned access errors and were not
selected or relied on; the retrieved Tran, Crandall–Ishii–Lions and
Barles–Souganidis texts were used instead, so no failed source was represented
as read and no source-resolution drop was recorded.

## Remaining second-order proof obligation

The conditional corollary is not the unconditional second-order theorem
required by plan-spec PE32. The scheme, its monotone rows, smooth consistency,
initial trace, and half-relaxed viscosity inequalities are complete. The
missing claim is comparison for the periodic diagonal controlled-diffusion
operator, which is needed to identify the upper and lower relaxed limits.
The full CIL proof of the theorem of sums was read; its local proof route uses
sup/inf convolution, semiconvex Alexandrov twice-differentiability, Jensen's
maximum principle, and differentiability/null-set measure facts. The existing
published Lipschitz-null-set result assumes Countable Choice and supplies
null-image preservation, but it does not supply the missing multidimensional
Rademacher theorem, semiconvex Alexandrov/Jensen chain, or the full
theorem-of-sums argument.

Proposed placement is on this same A page, in supplier order, if the owner
continues the theory: (1) `thm-na-rademacher-differentiability-lipschitz-maps`
and any required local area/null-set-control lemma; (2)
`lem-na-semiconvex-aleksandrov-twice-differentiability`; (3)
`lem-na-jensen-maximum-principle-semiconvex`; (4)
`lem-na-parabolic-theorem-of-sums`; (5)
`thm-na-periodic-diagonal-hjb-second-order-comparison`. The current Cauchy
domain is periodic, so it has no lateral spatial boundary; the scheme's initial
trace is supplied. The comparison proof still needs the exact initial/terminal-
time penalty and doubled-variable estimates for the declared coefficient class.
These proposed IDs are escalation suggestions, not current
manifest items or completed suppliers.

## Checks and readiness

- Scoped precheck: 19 proof-bearing items pass; 9 definitions/algorithms are
  not applicable.
- Scoped proof layout: 28 items, 59 steps, 0 defects.
- Scoped rendercheck: 28 items, 0 errors and 0 warnings.
- Focused dependency check: 28 items and 686 prerequisite items, 0 errors and
  0 warnings. Focused content policy: 28 items, 0 errors and 0 warnings.
- Strict proof contracts: 28 entries, covering all 19 proof-bearing items,
  exact supplier excerpts, mapped numbered steps and eight boundary
  dispositions; 0 errors and 0 warnings. Five applicable finite checks are
  recorded for worked/counterexample items.
- Coverage checklist: 2 pages, 25 harvested results, 0 errors and 0 warnings.
  Source-fetch check: 11/11 active source placements pass.
- Full-run item dependency levels: 1,421 items across 142 pages, maximum level
  12; no errors. The batch-71 labels match all in-run dependencies, including
  the newly verified PE31 grid/interpolation suppliers.
- Full-run proof-contract coverage is blocked by the unrelated missing item
  `thm-na-mini-be-smooth-integrated-pressure-error`; the strict batch-71
  proof-contract check itself covers all assigned proof-bearing items.
- Step-1 author-readiness records were written for all 28 assigned items with
  their direct dependencies and current evidence. These records do not
  constitute independent mathematical approval. The plan-level unconditional
  second-order comparison/convergence obligation remains explicitly escalated
  above despite the completed conditional corollary.
- The final full-run Step-1 snapshot reports 1,268/1,421 items ready overall;
  all 28 batch-71 items are hash-current and ready. The run remains open for
  other pairs and for the PE32 second-order theory escalation.


## Owner-directed combined continuation (2026-10-18)

The current binding owner direction was reread before this continuation. Its batch-71 continuation supersedes the old initial-writer operational hold only: all eleven local proofs, exact source evidence, current contracts/coverage, and honest Step-1 records remain required. The current plan-spec PE32 descriptions require unconditional second-order comparison and convergence; older PE32 design prose calls this branch optional. I followed plan-spec and preserved the full second-order scope. The original 28-item native result, prompt, and initial notes remain historical evidence; the original conditional corollary carrier was not edited.

Materialized both previously absent library pages: the A page now lists all 34 A items (the original 23 plus all eleven new foundations/consumers), and the companion page lists all five original B examples with explanatory prose. The existing finite-control model Statement and hypotheses are preserved: arbitrary d≥1, finite ordered controls, bounded periodic jointly Lipschitz α,b,f, α_j^a≥α_*>0, and continuous periodic initial data. Only its stale Remarks now say that comparison and unconditional convergence have local draft proofs pending the assigned reviews. The A page contains a TikZ five-point stencil with its dimension-two and non-proof role explained.

### Added local dependency chain

| Level | New items | In-run supplier relation |
|---|---|---|
| 0 | `def-na-second-order-elliptic-semijets-and-closure`; `lem-na-convex-support-localization-and-lipschitz-dual-gradient`; `lem-na-jensen-maximum-principle-semiconvex`; `lem-na-lipschitz-critical-image-null`; `thm-na-rademacher-euclidean` | No in-run supplier |
| 1 | `lem-na-sup-convolution-semiconvexity-and-jet-transfer`; `thm-na-semiconvex-alexandrov-second-order-differentiability` | Semijet definition; Rademacher, critical-image, and convex-support suppliers respectively |
| 2 | `thm-na-elliptic-theorem-of-sums` | Semijet, Jensen, sup-convolution, and Alexandrov chain |
| 4 | `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities` | Semijet plus existing model and parabolic viscosity definition (level 3 maximum) |
| 5 | `thm-na-periodic-diagonal-hjb-second-order-comparison` | New elliptic sums and space-time jet interface plus existing model/viscosity definition |
| 7 | `thm-na-diagonal-diffusion-hjb-scheme-convergence` | New comparison plus existing half-relaxed limit and conditional convergence carriers |

The manifest dependencies were reconciled against every new item's current frontmatter. The proof of the critical-image lemma uses the RN null-union supplier, not the one-dimensional real-line null-union result. Its selected fivefold balls are enumerated via rational points, and the image tubes are covered directly by cubes, without an area formula. The Rademacher proof derives the needed all-dimensional estimate from local ACL/weak gradients, Lebesgue differentiation, the L1 ball Poincaré inequality, and a Lipschitz oscillation argument; it does not import a Morrey proof requiring p>n. Its final radius is chosen as 3|h| so the evaluation point lies inside the open ball. Full Axiom of Choice is declared and propagated to the semiconvex/Alexandrov/sums/comparison/convergence consumers; the semijet definition, sup-convolution transfer, and jet interface remain choice-free.

### Sources and source history

The complete CIL User's Guide and complete Barles–Souganidis paper were inspected for their relevant proofs and interfaces. I also opened the full 168-page Aalto PDF of Juha Kinnunen's *Sobolev Spaces* and inspected the full ACL characterization proof (§2.6, Theorem 2.36, pp. 54–60), the Lipschitz/W1,∞ results and Rademacher proof (§3.4, Theorems 3.28 and 3.31, Corollary 3.32, pp. 75–83). Kinnunen's Rademacher proof uses p>n and Morrey; that restriction is recorded and not imported into the local proof. The current source-fetch check stamped two previously unstamped Kinnunen copies and passed 24/24 source placements. Historical source harvest rows that were deferred before construction now record the current included item and retain the prior disposition/reason in explicit `historical_*` fields. No covered source was dropped. Earlier Bressan/Calder candidate lookup failures remain in the prior notes; neither was selected or used. No new selected-source retrieval failed, so the five-retry/drop procedure was not activated and no `source_resolution` drop or escalation was added.

### Current scoped evidence

Current batch manifest inventory is 34 A items and 5 B examples. The one pair-scoped dependency-level recomputation examined all 39 batch-71 rows against the present in-run supplier graph: all 39 labels match, with zero batch-71 errors. The separate immutable initial check still records the original 28-row input and its original historical run observations. Current source fetch, proof-contract, coverage, precheck, renderer, content-policy, proof-layout, and Step-1 decision results are appended after they have run; none is an independent proof approval. The original owner scope escalation remains for owner-level reconciliation; the independent foundation→sums→comparison review sequence and native later gates remain due. The broader run's unrelated Gaussian and pressure holds remain untouched.

## Final continuation checks and current author readiness

Final pair-scoped results after the last item edits:

- Precheck: 10 proof items, 10 pass, 0 failing.
- Rendercheck: 14 changed item/page files, 0 errors; KaTeX and renderer YAML parsing pass.
- Proof layout: 12 explicitly changed item files, 42 steps, 0 defects.
- Strict contracts: all 11 new items checked, 0 errors or warnings. Ten proof-bearing items have mapped derivations, exact supplier excerpts, and checked boundary dispositions; the semijet definition has no proof derivation.
- Coverage checklist: both pages, 27 harvested source results, 0 errors or warnings.
- Source fetch: 24/24 source placements resolved; two previously unstamped copies were stamped during this continuation.
- Content policy: all 39 current pair items, 0 errors or warnings.
- Focused dependency check: all 39 pair item labels match their computed levels, 0 pair errors. The current run graph read contained 142 pages and 1,448 items; no unrelated run artifact was written.
- Focused dependency/page-cycle check: 39 selected items and both pages, 0 errors or warnings; prerequisite closure covered 1,505 items and 417 pages.
- Current Step-1 hash check: all 11 newly authored records are `ready`, `owner: false`, and hash-current. The original conditional-corollary escalation and its archived author-readiness record were left untouched; the carrier hash matches the archived pre-hold readiness hash. The other original batch-71 Step-1 rows were not rewritten; root retains their post-continuation hash reconciliation/recertification. No final native review, adjudication, publication, or push is claimed.

No test suite was run. No new cross-batch supplier was introduced: the existing batch-70 periodic-grid/interpolation interfaces and other declared page prerequisites remain the only cross-batch inputs for this pair. Root-level owner escalation, the sequential foundation→sums→comparison independent review cycle, run-wide recertification, and later native gates remain due.

The final pair-scoped Step-1 audit contains 39 items: all 11 continuation items are current and ready with `owner: false`; the 27 other original author-ready rows were preserved but now report stale item hashes for root's coordinated post-review recertification, and the original conditional-corollary row remains owner-escalated. These records were not overwritten. The archived pre-hold conditional-corollary hash matches the current carrier hash exactly.
