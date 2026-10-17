# Batch 63 authoring notes — periodic orbit shooting, collocation, and Floquet error

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: beta  
Assigned page pair: `periodic-orbit-shooting-collocation-and-floquet-error` (A, order 2410) and `periodic-orbit-shooting-collocation-and-floquet-error-examples` (B, order 2411)  
Dispatch scheduling-input digest: `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`  
Shared schedule file: `research/numerical-optimization-dynamics-2026-10-16-batch-dependency-levels.json` (stored `input_sha256`: `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`; raw-file SHA-256 at inspection: `2a0f995df70f741205c9b460eae21cf51eceb2a02408210e329dd6ad95fa74b7`). Its batch 63 row matches the dispatch: level 5, requiring batches 3, 22, 29, 42, 61, and 62.

## Authority and plan comparison

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner authoring direction, the assigned task, the complete design section at `research/plan-numerical-dynamics-track.md` L774+, `research/plan-spec.json`, the current plan, batch evidence, and the batch dependency-level input. The owner direction is binding over stale task/design wording. The plan-spec page IDs, order, category, and `requires` match the assignment. No metadata conflict was found. The track design supplies the contour/resolvent/argument-principle proof route and warns that the AUTO manual specifies computations but does not prove their certificates; both are preserved here.

## Inventory and dependency levels

The assigned pair contains 22 A items and 4 B examples, below the 100-item page cap. `batch-63.pages.json` records the full direct dependency arrays and the computed in-run levels. The item level is zero when there is no supplier in this run and otherwise one plus the largest in-run supplier level.

- **Level 0:** `def-verified-flow-variational-range-oracle`, `lem-positive-convex-polygon-winding-index`.
- **Level 1:** `alg-validated-euler-flow-and-monodromy-enclosure`, `def-phase-bordered-periodic-orbit-bvp`, `lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier`, `thm-c2-ode-flow-on-common-tube`.
- **Level 2:** `lem-periodic-poincare-spectrum-matches-transverse-monodromy`, `lem-phase-bordered-shooting-jacobian-invertibility`, `prop-phase-bordered-bvp-root-equivalence`, `thm-validated-euler-flow-and-monodromy-enclosure-soundness`, `ex-coarse-euler-variational-step-gives-spurious-instability`.
- **Level 3:** `lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse`, `ex-phase-singularity-in-stable-planar-oscillator`.
- **Level 4:** `def-phase-bordered-multiple-shooting-and-midpoint-collocation`.
- **Level 5:** `def-validated-periodic-shooting-jet-enclosure`, `thm-periodic-midpoint-collocation-error-budget`.
- **Level 6:** `alg-validated-periodic-orbit-corrector`, `lem-separated-simple-floquet-multiplier-perturbation-bound`, `thm-periodic-shooting-residual-to-orbit-error-budget`.
- **Level 7:** `alg-floquet-multiplier-cluster-certifier`, `alg-periodic-orbit-pseudoarclength-continuation`.
- **Level 8:** `thm-floquet-multiplier-cluster-certificate-soundness`.
- **Level 9:** `thm-validated-periodic-orbit-certificate-soundness`.
- **Level 10:** `thm-orbital-stability-from-certified-floquet-multipliers`.
- **Level 11:** `ex-near-unit-floquet-multiplier-is-inconclusive`, `ex-van-der-pol-stability-conditional-on-validated-enclosure`.

The in-run item edges are supplied by batches 3 (1 edge), 22 (20), 29 (2), 42 (7), 61 (6), and 62 (6). The cross-batch input contains exactly these 42 edges and all 7 page prerequisites; no expected or extra edge was found. The four missing direct links reported during the initial scoped dependency scan were added to the assigned items: continuation → validated shooting jet, corrector → range-oracle contract, jet enclosure → validated Euler algorithm, and midpoint budget → phase-bordered BVP definition. Their computed levels did not change. Item frontmatter, batch manifest, and full-run computed levels now agree for all 26 assigned items.

Actual supplier bodies and proofs were inspected for the direct in-run dependencies before recording readiness. The required hypotheses and affected claims are recorded with exact supplier excerpts in `batch-63.cross-batch-dependencies.json`. This is authoring evidence only; it does not record owner acceptance or independent approval. No unavailable supplier remains at handoff.

## Mathematical scope and proof decisions

The phase residual uses the time-scaled augmented autonomous system (u'=(\theta f(x),0)) on ([0,1]), with periodic endpoint rows and an affine phase condition. The root-equivalence proof includes the nonstationarity condition needed to exclude constant solutions. The shooting Jacobian is the bordered matrix with top row (M-I,f_*) and phase row (c^T,0); its invertibility is derived from algebraic simplicity of the neutral multiplier and (c^Tf_*\ne0). A separate continuous BVP lemma derives a bounded inverse constant rather than assuming one.

The midpoint result keeps the stated mesh, smoothness, derivative-bound, and inverse hypotheses and displays the local second-order constants. The shooting residual theorem derives a finite residual-to-state and residual-to-trajectory bound from the interval jet, local Jacobian variation, and Gronwall estimate. The local theorem `thm-c2-ode-flow-on-common-tube` was added because the continuation supplier requires a (C^2) branch residual: it proves common-tube (C^2) flow regularity from the (C^2) vector-field assumption using the second-variation linear IVP and uniform continuity of (D^2f).

The validated Euler algorithm uses exact rational set arithmetic and an explicit range-oracle interface for state and variational data; its soundness theorem proves containment of the exact flow and monodromy under the tube and defect hypotheses. Newton, multiple shooting, and collocation output is only a candidate. The corrector requires strict Krawczyk inclusion for existence, a separate contraction bound for uniqueness, and a nonzero field component to exclude a stationary root.

The simple-multiplier perturbation lemma is conditional on an explicit uniform complementary-resolvent bound and separation; an unseparated cluster follows the separate contour route. The cluster certifier uses a resolvent cover, exact rational interval arithmetic, polygon winding, and an argument-principle count; a resolvent certificate alone does not count eigenvalues. Stability is claimed only under strict unit-circle separation and a complete cluster count. The near-unit example stays inconclusive, and the van der Pol example is conditional on a future validated enclosure; it reports no fabricated numerical interval.

No new choice axiom or special axiom branch is used. Selections are finite-dimensional or are explicitly supplied by the hypotheses. Existing suppliers' hypotheses and strength are retained.

## Source reading and retrieval history

The coverage file records 30 harvested results with a disposition for each; none was dropped. The A page has several independent full-text treatments, including books, a survey, and lecture-style/reference material. The B page reuses the relevant independent sources. Source URLs, locators, supported items, and individual dispositions are in `batch-63.coverage.json`.

- Kuznetsov, *Elements of Applied Bifurcation Theory*, 2nd ed., full 614-page PDF: <https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf>. Inspected printed pp. 26–30 (transverse sections, return maps, variational equation, monodromy, and phase multiplier), with the coverage locators also mapping Ch. 3 §§3.4–3.5 to orbital stability.
- Doedel and Oldeman, AUTO-07P full manual, complete 12,856-line official source: <https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex>. Inspected lines 587–645, 4926–4950, and 6822–6863. The official homepage timed out and a guessed PDF path returned HTTP 404; the complete official raw GitHub manual was then found and read at the relevant sections. The source was recovered, not dropped.
- Rump, “Verification methods: Rigorous results using floating-point arithmetic,” *Acta Numerica* 19 (2010), full 163-page article: <https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf>. Inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk argument.
- Kearfott, “Interval Computations: Introduction, Uses, and Resources,” *Euromath Bulletin* 2(1) (1996), full 23-page PDF: <https://interval.louisiana.edu/preprints/survey.pdf>. Inspected complete §§1–2 on represented interval sets, outward enclosure, Brouwer, and interval Newton/Krawczyk.
- Lebl, *Guide to Cultivating Complex Analysis*, complete 304-page text: <https://www.jirka.org/ca/ca.pdf>. Inspected Ch. 4 §4.1, printed pp. 93–96, and Ch. 5 §5.4, printed pp. 128–132.

The sources were initially fetched and stamped with `source-fetch-check --stamp`: 8/8 full-text sources verified. Final check mode again reports 8/8 fetched sources verified and zero documented drops. Full-text retrieval and reading do not constitute proof acceptance.

## Final scoped checks

- `manifest-deps` on batch 63: 26 items, 0 missing dependency arrays, 0 errors.
- Assigned item dependency-level comparison: 26 items, 0 assigned errors, 0 item/manifest level mismatches. The full-run command reports unrelated errors listed below.
- `proof-layout` on all 26 assigned items after final edits: 62 proof steps, 0 defects.
- `precheck`: all 18 proof-bearing items pass; definitions and algorithms retain `n/a`.
- Strict proof-contract check: 18 contracts checked, 0 errors or warnings.
- `rendercheck`: both page carriers and all 26 item carriers (28 files), no errors; all formulas parsed with the renderer's KaTeX.
- `coverage-checklist`: 2 pages, 30 harvested results, 0 errors or warnings.
- `source-fetch-check` check mode: 8/8 verified, 0 drops.
- Scoped `depcheck`: 0 errors and 0 warnings. Scoped `fwdcheck`: 0 errors and 0 warnings.
- Cross-batch dependency comparison: 42/42 item edges and 7/7 page prerequisites; no missing or extra records.
- No tests were run.

The full-run `item-dependency-levels.mjs check` remains red outside batch 63. At the recorded check it reports 18 empty scaffold inventories: `spectral-collocation-and-galerkin-methods`, `spectral-collocation-and-galerkin-methods-examples`, `imex-and-operator-splitting-methods`, `imex-and-operator-splitting-methods-examples`, `direct-transcription-and-numerical-ode-optimal-control`, `direct-transcription-and-numerical-ode-optimal-control-examples`, `numerical-identifiability-and-optimal-experiment-design`, `numerical-identifiability-and-optimal-experiment-design-examples`, `simulation-gradient-estimation-and-simultaneous-perturbation`, `simulation-gradient-estimation-and-simultaneous-perturbation-examples`, `multirate-and-partitioned-time-integration`, `multirate-and-partitioned-time-integration-examples`, `event-location-and-hybrid-trajectory-error`, `event-location-and-hybrid-trajectory-error-examples`, `langevin-splittings-and-invariant-measure-error`, `langevin-splittings-and-invariant-measure-error-examples`, `global-sensitivity-anova-and-sobol-estimation`, and `global-sensitivity-anova-and-sobol-estimation-examples`. It also reports stale dependency-level labels in `alg-certified-exponential-euler-etd2-step` (5 vs computed 4), `lem-certified-exponential-step-action-error` (6 vs 5), `thm-exponential-euler-etd2-global-error-and-action` (7 vs 6), `ex-diagonal-stiff-diffusion-with-reaction-etd` (6 vs 5), `ex-skew-hermitian-imaginary-time-unitary-step` (8 vs 7), and `ex-additive-eigensolve-tolerance-residual-certificate` (3 vs 4). These are outside batch 63 ownership and were not edited here.

The full-run `batch-dependency-levels.mjs check` is also blocked before comparison by malformed YAML in unrelated `items/lem-convergent-power-series-termwise-differentiation.md:20`: the source title `Tobias Holck Colding, MIT 18.100B Real Analysis, Lecture 22: Differentiating and Integrating Power Series` is unquoted. The schedule's batch 63 row was read directly and matches the dispatch; the shared schedule file was left unchanged.

## Readiness record

Each assigned item's final Step 1 decision is recorded in `research/numerical-optimization-dynamics-2026-10-16-step1-<item-id>.json` with its exact direct dependency IDs, page placement, proof/contract status, and scoped evidence. A ready record means the assigned draft and its inspected prerequisites are ready for reconciliation; it is not an independent review or owner approval.
