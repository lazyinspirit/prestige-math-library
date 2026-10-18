# Batch 39 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `nonlinear-parabolic-compactness-and-monotone-evolution`  
Current batch input: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`

## Plan comparison and supplier verification

- The assigned task, current `plan-spec.json` A/B records, and PE12 design agree on the scope, page IDs, order, `requires`, Aubin–Lions exponents, the p-threshold, and the listed examples.
- The PE12 design's prerequisite-interface paragraph calls `parabolic-finite-element-methods` a same-frontier NA-36 pair. That status is stale for this run: the assigned run's batch 36 is `hyperbolic-dg-and-summation-by-parts-discretizations`; `parabolic-finite-element-methods` is a separately published page (plan order 2396), and the current task and `plan-spec.json` retain it as a direct prerequisite. The run's batch-level graph therefore correctly gives batch 39 level 0 with no in-run batch suppliers. Follow the current plan and use the actual published page.
- The companion prerequisite is `homology-axioms-degree-and-classical-applications` (plan order 838). Its current published page contains the exact published `thm-brouwer-fixed-point-theorem`. The proof uses only the theorem's literal finite-dimensional ball hypothesis.
- Read the current p-FEM page and the actual bodies of `def-parabolic-evolution-triple-and-energy-space`, `lem-parabolic-energy-pairing-and-trace`, `lem-parabolic-discrete-energy-identity`, `alg-parabolic-backward-euler-averaged-forms`, `def-parabolic-ritz-projection`, `lem-parabolic-ritz-projection-well-defined`, and `thm-brouwer-fixed-point-theorem`. The linear form theorem and linear time-stepping algorithm do not establish nonlinear monotone existence, nonlinear compactness, or Minty identification; those claims are proved locally below.
- Design-vs-plan disposition: no scope or mathematical-statement conflict was found. The sole recorded discrepancy is the stale same-frontier label for the existing published p-FEM prerequisite, resolved in favor of the current plan as required.

## Item inventory and logical levels

The scaffold manifest contains 20 items. Levels are computed using only in-run logical suppliers; published suppliers remain external context.

| Level | Items |
|---:|---|
| 0 | def-pe12-gelfand-triple; lem-pe12-w1p-compact-l2-embedding; lem-pe12-bochner-lp-mollification; lem-pe12-w0p-separable-reflexive; thm-pe12-bochner-lp-completeness; lem-pe12-outward-zero-brouwer; ex-pe12-porous-medium-barenblatt; cex-pe12-linear-ritz-does-not-commute |
| 1 | def-pe12-monotone-diffusion-flux; def-pe12-stable-conforming-fem-family; lem-pe12-evolution-energy-chain-rule; thm-pe12-aubin-lions-compactness; thm-pe12-discrete-aubin-lions-compactness; lem-pe12-space-time-gradient-weak-compactness; ex-pe12-time-oscillations-without-derivative-control |
| 2 | thm-pe12-backward-euler-galerkin-existence-energy; lem-pe12-minty-identification; thm-pe12-strong-monotone-residual-estimate |
| 3 | thm-pe12-monotone-fem-limit |
| 4 | ex-pe12-p-laplacian |

No item cycle is present. Batch-level prerequisites are external and do not alter these levels.
The A/B page frontmatter contains exactly the manifest IDs (16 A items and 4 B examples); page display order is ascending by dependency level and supplier-first.

## Owner escalation: FEM projector interface

The discrete (V^*) derivative estimate for a conforming Galerkin scheme does not follow from the finite-dimensional test equation alone. It requires an (H)-orthogonal projection Π_h onto each (V_h) with a uniform (V	o V) bound; strong convergence Π_h v→v supplies passage to fixed tests. The plan specifies the discrete Aubin–Lions conclusion but does not state this projection hypothesis or a mesh theorem that verifies it. The published `finite-element-meshes-and-interpolation` page supplies local interpolation, inverse, and scaling estimates, but not uniform (W^{1,p})-stability of the (L^2) projection.

The A-page definition and convergence proof state this interface explicitly and prove every consequence conditional on it. Escalate the missing standard-mesh verification for `def-pe12-stable-conforming-fem-family`, `thm-pe12-backward-euler-galerkin-existence-energy`, `thm-pe12-monotone-fem-limit`, and `ex-pe12-p-laplacian`. Proposed local supplier if the owner requires the unconditional mesh-family instantiation: `thm-pe12-l2-projector-w1p-stability` on this A page, with shape-regularity, quasi-uniformity, polynomial-degree, and boundary hypotheses stated before the estimate.

## Source-reading record

Full texts inspected for the A-page arguments:

- Tomáš Roubíček, *Nonlinear Partial Differential Equations with Applications*, 2nd ed., §7.3, Lemma 7.7 and proof (Aubin–Lions); §7.2 (evolution-space energy chain rule). Full 457-page book PDF; retrieval and per-result dispositions are in `numerical-analysis-remaining-71-2026-10-17-batch-39.coverage.json`.
- Marvin Fritz, *Monotone Operators in Nonlinear PDEs*, JKU WS 2023/24 lecture notes, §§0, 2, 4, 8, 9 (Minty, Galerkin/Brouwer, p-Laplacian, Aubin–Lions and evolution framework). Full 43-page PDF. The notes explicitly disclaim extensive proofreading, so their route was independently checked and their claims are not accepted without the local proof.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Theorem 5.16 (Minty–Browder), Theorem 9.16 (Rellich–Kondrachov), Propositions 8.1 and 9.1 (Sobolev-space completeness/reflexivity/separability), and Chapter 3 weak subsequence/closed-subspace results. Full 614-page book PDF; the additional full-text checks are recorded in the coverage file.
- Christian Clason, *Introduction to Finite Element Methods*, Chapters 11–12 (evolution triples, time stepping, conforming Galerkin, discrete energy). Full 118-page lecture-note PDF.

Source retrieval stamps, locators, covered items, and disposition of each harvested result are recorded in the batch coverage file. Source reading supports navigation only; each authored claim has its full local proof.

The porous-medium profile was explored against two Vázquez-hosted full-text URLs; both web retrievals returned HTTP 502, and a subsequent local host lookup failed DNS. The prior exploration record retained only the host and outcomes, not the exact URLs or search strings, so those attempts are not represented as fetch stamps or citations. The B-page example carries a complete independent scaling, derivative, interface and support calculation and cites no Vázquez result; its item has no source dependencies.

## Readiness decisions

`node tools/step1-decisions.mjs record` recorded 16 items as `ready` and 4 as `escalated`, with each carrier's direct dependency IDs. The escalations are `def-pe12-stable-conforming-fem-family`, `thm-pe12-backward-euler-galerkin-existence-energy`, `thm-pe12-monotone-fem-limit`, and `ex-pe12-p-laplacian`; each names the missing standard-mesh $L^2$-projector stability theorem and proposes `thm-pe12-l2-projector-w1p-stability` on the A page. All 16 ready records are hash-current. The run-wide decision check remains open for other batches; these records cover only batch 39.

## Scoped check record

- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-39.proof-contracts.json --strict` — 20/20 items, 72 numbered proof steps, 0 errors and 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/*pe12*.md` — 17 proof-bearing items checked, 0 failing.
- `node tools/proof-layout.mjs items/*pe12*.md` — 20 carriers, 72 steps, 0 defects.
- `node tools/rendercheck.mjs items/*pe12*.md library/numerical-pdes-and-spatial-discretization/nonlinear-parabolic-compactness-and-monotone-evolution.md library/numerical-pdes-and-spatial-discretization/nonlinear-parabolic-compactness-and-monotone-evolution-examples.md` — 22 files, pass; KaTeX and renderer YAML parsing both ran.
- Focused `node tools/depcheck.mjs` over the 20 item IDs and 2 assigned pages — pass; prerequisite closure covered 1,695 items and 273 pages.
- `node tools/content-policy.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-39.pages.json` — 20 scoped items, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-39.coverage.json --stamp` — 3/4 sources fetch-verified; all 4/4 resolved, including 1 documented Roubíček drop; 0 new stamps.
- Batch-only dependency-level calculation — 2 manifests, 20 items, maximum level 4, 0 errors; carrier dependency lists match the scaffold manifest.
- Run-wide `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` remains red outside this batch: 66 empty scaffold inventories and 10 stale labels, all on incremental/randomized Delaunay items. It reports no dependency cycles. The assigned two-page manifest passes independently.

## Owner-requested continuation — 2026-10-18

The original native result and attempt-1 evidence remain unchanged; both current SHA-256 values match the owner-provided result hash `1e9f455e4e2f675fdbecdb17c7247b3ed08b1a505973148a60f5ccebd8d04ce6`. The request prompt and hashes are preserved. This continuation completes the three already inventoried same-A-page suppliers and the PE12 follow-through; all authored carriers remain draft. It does not publish content, change the shared plan, alter engine state, or add a fourth Bochner item.

### Current inventory and logical levels

The current manifest and pages contain **23 items: 19 A-page items and 4 B-page examples**. The computed in-run levels are:

| Level | Items |
|---:|---|
| 0 | `def-pe12-gelfand-triple`, `lem-pe12-w1p-compact-l2-embedding`, `lem-pe12-bochner-lp-mollification`, `lem-pe12-w0p-separable-reflexive`, `thm-pe12-bochner-lp-completeness`, `lem-pe12-outward-zero-brouwer`, `lem-pe12-quasiuniform-mass-inverse-decay`, `ex-pe12-porous-medium-barenblatt`, `cex-pe12-linear-ritz-does-not-commute` |
| 1 | `def-pe12-monotone-diffusion-flux`, `def-pe12-stable-conforming-fem-family`, `lem-pe12-evolution-energy-chain-rule`, `thm-pe12-aubin-lions-compactness`, `lem-pe12-space-time-gradient-weak-compactness`, `thm-pe12-discrete-aubin-lions-compactness`, `lem-pe12-boundary-preserving-quasi-interpolation`, `ex-pe12-time-oscillations-without-derivative-control` |
| 2 | `lem-pe12-minty-identification`, `thm-pe12-strong-monotone-residual-estimate`, `thm-pe12-l2-projector-w1p-stability` |
| 3 | `thm-pe12-backward-euler-galerkin-existence-energy` |
| 4 | `thm-pe12-monotone-fem-limit` |
| 5 | `ex-pe12-p-laplacian` |

The batch itself remains level 0 with no in-run prerequisite batch. The scoped 23-item dependency calculation has no cycles or label errors. The three new suppliers are ordered mass inverse (0), quasi-interpolation (1), projector theorem (2); the consumers follow at levels 3–5.

### Mathematical work and consumer disposition

- Added and proved the three inventoried suppliers on the PE12 A page. The mass result includes direct interval and matching-simplex branches, local and global coefficient estimates, matrix spectrum, graph-ball count, Neumann-series decay and absolute row/column sums. The quasi-interpolant uses zero extension, mollification, zero boundary coefficients, cube Poincaré estimates and a direct interval membership proof. The projector result proves inclusive Lr stability, strict-range W1p stability/convergence, and the actual interval and Kuhn/Freudenthal mesh instances.
- Preserved the entire d>=1, p>max(1,2d/(d+2)) PE12 range. The bounded-open compact embedding has a separate d=1 proof using zero extension, FTC/Hölder and Arzelà–Ascoli; the subcritical r reduction is restricted to d>=2. The flux domain is bounded open. The existing closed-gradient/Bochner compactness proof remains in place and now spells out the finite-valued simple-function product-space isometry by Tonelli. No duplicate weak-closure item was added.
- The concrete simplex family is the uniform Kuhn/Freudenthal family on each unit cube; the interval family is uniform on (0,1). The proofs give the matching-face, shape-class, diameter, inradius, quasi-uniformity and h-to-zero calculations. A 2D, N=1 TikZ picture labels the two ordered triangles and their shared diagonal; the coordinate argument, not the picture, proves matching. Time refinement is independent. The finite-step theorem, monotone limit theorem and p-Laplacian example all state the actual nonempty standard-mesh instances.
- Read-only cross-pair check: batch 44 item `lem-mimetic-fv-parabolic-limit-identification` assumes a bounded C1 domain, which is a narrower case of the newly broadened bounded-open supplier hypotheses. Its proof-contract excerpts cite the current `def-pe12-monotone-diffusion-flux` statement and `lem-pe12-space-time-gradient-weak-compactness`. No batch-44 carrier was edited.

### Sources and coverage

The current A-page coverage records the inspected DStT arXiv paper (locality/graph-distance results and the full zero-boundary projection results), Clason’s full lecture notes, the Brezis book, Fritz’s full lecture notes, and the historical Roubíček record. DStT results are marked `inline` with explicit notes that the local carriers prove their estimates independently and do not import Scott–Zhang. The B page now has its own Brezis/Fritz harvest for the p-Laplacian example; the other B examples remain locally proved.

The original Roubíček retrieval failure/search history and six attempts are retained. Its source-level disposition remains `dropped` with local alternatives and current dependencies; the individual harvested results are recorded as `inline`. Final `source-fetch-check --stamp`: 6/7 source entries fetch-verified, 7/7 resolved, one documented source drop, zero new stamps on the final pass. The initial DStT retrieval was stamped in the prior pass.

### Current readiness

The readiness check over this batch reports **19 ready and 4 escalated**, with no other open records. The three new items and all non-escalated items whose hashes changed have current `ready` records listing their examined direct dependencies. The four original owner escalations remain untouched, without `--owner` or an overwrite: `def-pe12-stable-conforming-fem-family`, `thm-pe12-backward-euler-galerkin-existence-energy`, `thm-pe12-monotone-fem-limit`, and `ex-pe12-p-laplacian`. Their projector prerequisite is now proved and the consuming carriers are complete, but the original decision records can only be refreshed through the owner’s path; these are readiness-record holds, not an unresolved projector proof gap.

### Scoped checks

- Precheck: 8 changed proof-bearing items, all pass.
- Proof layout: 10 explicitly changed items, 57 steps, 0 defects.
- Strict proof contracts: 23/23 items, 0 errors and 0 warnings.
- Focused `depcheck` on the 23 items and prerequisite closure: pass; no cycle or unresolved reference.
- Manifest dependency arrays: 23 items, 0 missing or malformed arrays.
- Content policy: 23 items, 0 errors and 0 warnings.
- Coverage checklist: 2 pages, 26 harvested results, 0 errors and 0 warnings.
- Render check: 12 changed items/pages, 0 errors and 0 warnings.
- Scoped item levels: 23 items, no cycles or errors; maximum level 5.

### Run-wide owner holds observed read-only

- `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` still reports 21 stale labels outside batch 39, on `def-na-evolutionary-skew-convective-form`, `lem-na-evolutionary-skew-convective-form-bound`, `def-na-evolutionary-incompressible-ns-weak-solution`, `lem-na-evolutionary-ns-weak-form-is-well-defined`, `def-na-solenoidal-energy-weak-ns-velocity`, `def-na-mini-navier-stokes-backward-euler-scheme`, `lem-na-mini-be-scheme-is-well-defined`, `lem-na-mini-fortin-l2-approximation`, `thm-na-mini-be-step-existence-energy`, `lem-na-mini-weak-solenoidal-compactness`, `lem-na-continuous-pressure-recovery-from-solenoidal-residual`, `thm-na-mini-navier-stokes-be-subsequential-limit`, `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d`, `thm-na-mini-solenoidal-stokes-projection-error`, `thm-na-mini-be-smooth-velocity-error`, `rem-na-pe06-pressure-recovery-escalation`, `ex-na-periodic-taylor-green-vortex`, `ex-na-mini-backward-euler-energy-budget`, `ex-na-zero-mean-pressure-gauge`, `ex-na-unit-square-mini-mesh-family`, and `ex-na-conditional-three-dimensional-flow-computation`. None is a batch-39 item.
- The run-wide `batch-dependency-levels.mjs check` cannot finish its graph calculation because the external draft carrier `items/def-maxwell-edge-fem-semidiscretization.md` has an unquoted colon in its second source title (`Finite element exterior calculus: ...`); YAML parsing reports a nested mapping at frontmatter line 21, column 14. This is outside batch 39 and was not edited.
- Read-only autopilot status remains `running` at `1-scaffold`, 48/71 initially covered, no worker in flight, with the existing owner repair/recertification blocker. This continuation changed no engine state.
