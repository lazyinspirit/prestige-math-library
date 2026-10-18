# Batch 30 — Toric Code Anyons, Logical Operators, and Protection

Run: `non-ml-math-remaining-81-2026-10-18`  
Owner: beta · batch: `30` · scheduled dependency level: `0` · page order: `2552`  
Scheduling input: `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`

## Authority and scope

The binding direction is `research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md`; it supersedes stale task and design text. The live `research/plan-spec.json` controls page prerequisites and item scope. The assigned pair remains the A page `toric-code-anyons-logical-operators-and-protection` and its B companion. The A page requires the published `stabilizer-css-codes-syndromes-and-procedures` page; the B page requires the A page. No published item, shared plan, engine state or verdict was changed.

The finite scope is the periodic square toric stabilizer model for integers `L≥3`. It includes check incidence and rank, e/m check-eigenvalue syndromes, logical loops and their Pauli algebra, code dimension, distance and recovery, a stated contractible-disk local-indistinguishability theorem, the exact finite commuting-check Hamiltonian gap, and an explicit constant upper bound on a logical-string Pauli-path energy barrier. It makes no positive material-phase, small-local-perturbation-stability, thermal-lifetime or self-correcting-memory conclusion.

## Design comparison and conflict record

The complete QC27 section of `research/plan-quantum-computing-track.md` and its cited TQC expansion section were read. The old `research/quantum-computing-planning/pages.json` QC27 record declares four extra direct page prerequisites alongside the stabilizer page: `classical-and-quantum-error-correcting-codes`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, and `controlled-gates-phase-and-entanglement`. The current `research/plan-spec.json` declares only `stabilizer-css-codes-syndromes-and-procedures`. The old four are already in the current prerequisite page's transitive closure, so the current plan controls and no mathematical prerequisite is lost. The A carrier and scaffold retain only the current direct edge.

The expansion design's scope warnings were preserved. In particular, source discussions of robustness, perturbative splitting, thermally activated errors, cooling or a physical realization are context only; the carriers prove the finite algebraic statements and state their limits.

## Inventory and dependency levels

The A page has 22 items and the B page has two items, for 24 assigned items total. The scaffold manifest was reconciled against every carrier's `deps` and `justified_by`, and all `dependency_level` labels were recomputed from direct in-run item suppliers. Levels are 0–7; the suppliers are ordered before consumers. The exact inventory and statements are in `batch-30.pages.json`.

- Level 0: `def-qc-tqc-periodic-square-cellulation`, `lem-qc-tqc-finite-square-cycle-is-boundary`.
- Level 1: `def-qc-tqc-toric-checks`, `lem-qc-tqc-contractible-disk-lifts-to-plane`, `lem-qc-tqc-toric-incidence-ranks`.
- Level 2: `def-qc-tqc-toric-excitations`, `lem-qc-tqc-toric-check-commutation`, `lem-qc-tqc-toric-cycle-quotient`.
- Level 3: `def-qc-tqc-toric-hamiltonian`, `lem-qc-tqc-toric-joint-check-eigenspaces`, `lem-qc-tqc-toric-string-syndrome`, `thm-qc-tqc-toric-code-dimension`.
- Level 4: `def-qc-tqc-toric-logical-loops`, `thm-qc-tqc-toric-gap`, `thm-qc-tqc-toric-local-indistinguishability`, `thm-qc-tqc-toric-mutual-sign`.
- Level 5: `def-qc-tqc-toric-energy-barrier`, `thm-qc-tqc-toric-distance`, `thm-qc-tqc-toric-logical-algebra`, and B example `ex-qc-tqc-l3-toric-checks`.
- Level 6: `thm-qc-tqc-toric-constant-barrier`, `thm-qc-tqc-toric-recovery`, and B counterexample `cex-qc-tqc-planar-is-not-toric`.
- Level 7: `cex-qc-tqc-gap-not-physical-protection`.

There is no in-run prerequisite batch; `batch-30.cross-batch-dependencies.json` is empty and the batch remains level 0. The existing QC20 supplier bodies and the external finite-dimensional Pauli, register, tensor, rank-nullity, code-space, projector/dimension, logical-operator, distance, recovery, local-support and planar-code supplier statements were inspected at the points where they are used. No absent cross-pair supplier is being treated as complete.

Three independent full-text treatments were inspected: Kitaev, §1; Dennis–Kitaev–Landahl–Preskill, §III.A; and Preskill, §§9.6–9.7. Source locators, retrieval evidence, all harvested-result dispositions and full-text fetch stamps are recorded in `batch-30.coverage.json`. The infinite-grid filling formula, disk-lift details, toric checks, exact finite gap and energy-path bounds have complete local arguments. No source retrieval failed, so no source-drop or `source_resolution` record was needed.

The B page includes a TikZ fundamental-domain diagram for the `L=3` example. Its caption fixes the boundary-identification and endpoint conventions; all incidence and syndrome calculations are proved from the indexed cellulation, not from the picture.

## Axiom and proof review

All items use finite sets, finite-dimensional complex linear algebra and finite binary chains. No choice principle is used. The disk lifting construction fixes one basepoint lift, constructs path lifts by local inverse charts, and proves endpoint independence by homotopy lifting. The argument does not select an unspecified family of witnesses. Each proof contract records the exact cited supplier section, every numbered step and its inputs, all eight boundary dispositions, and relevant finite checks.

## Finite checks

For $L=3$, a direct modulo-three construction of the nine star-support and nine face-boundary rows produced binary ranks $8$ and $8$; placing X and Z supports in separate Pauli coordinates gave combined rank $16$. All 81 star/plaquette overlaps had size zero or two, and each edge occurred twice in each global check product. The four fixed logical loops had pairing matrix $\begin{pmatrix}1&0\\0&1\end{pmatrix}$. These checks agree with the exact arguments; the `L=3` example carrier also lists both partial-loop endpoint pairs and the closing third edge.

## Scoped checks and readiness

- Scoped item dependency graph: 24/24 items, no cycles or label errors, maximum level 7. The manifest and all carrier dependency arrays agree; `manifest-deps` reports zero omissions or malformed entries.
- `proof-layout.mjs`: 24 items, 64 numbered steps, zero defects.
- `precheck.mts`: 24 checked, zero failing.
- Strict proof contracts: 24/24 items, 64 steps, 105 exact supplier citations, zero warnings/errors.
- `depcheck.mjs` and `fwdcheck.mjs` over the 24-item scope: pass, including prerequisite cycle checks.
- `content-policy.mjs`: 24 scoped items, zero errors and warnings.
- `rendercheck.mjs`: 26 scoped files (24 items and two pages), all math parses under real KaTeX and both page/item frontmatters parse under the renderer's YAML parser.
- `coverage-checklist.mjs`: two pages, 52 harvested results, zero errors or warnings. All source findings have an explicit `included`, `inline`, or reasoned `out-of-scope` disposition.
- `source-fetch-check.mjs --stamp` initially stamped the three unique full-text PDFs; the final coverage has five page-scoped source records, all 5/5 fetch-verified with no documented drops. Hashes, byte counts, page counts and fetch times are in `batch-30.coverage.json`.

The required whole-run `item-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` does not pass in the current repository snapshot. Its errors are outside batch 30: multiple other batches have empty scaffold inventories; item IDs are duplicated across batches 21 and 22, including `lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, and `thm-it-holevo-measurement-bound`; and other batches have dependency-level mismatches. The batch-30 scoped graph is clean and its cross-batch dependency input remains empty.

No batch-30 readiness record was written. The attempted command was `node tools/step1-decisions.mjs record --run non-ml-math-remaining-81-2026-10-18 --item def-qc-tqc-periodic-square-cellulation --decision ready --dependencies '[]' --reason 'Complete local definition and verification; no in-run supplier, exact source and proof contract recorded, dependency level 0, scoped proof-layout/precheck/render checks passed.'`. It aborts while loading the whole-run snapshot with `Duplicate item lem-it-quantum-relative-entropy-support-regularization`. The duplicate is present in `research/non-ml-math-remaining-81-2026-10-18-batch-21.pages.json` and `research/non-ml-math-remaining-81-2026-10-18-batch-22.pages.json`. No `--owner` bypass or out-of-scope edit was used. After that duplicate and the run-wide manifest defects are reconciled, the owner can record readiness for the 24 complete batch-30 items from the evidence above.
