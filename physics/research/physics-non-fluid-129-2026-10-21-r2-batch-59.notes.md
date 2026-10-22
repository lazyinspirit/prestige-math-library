# Batch 59 notes — Spectral calculus, Gaussian fields and covariance normalization prerequisites

## Plan and scope reconciliation

- `plan-spec.json` matches the assigned A/B page IDs, titles, category, library, order 815/816, and exact page-level `requires` lists. Its `items` arrays are empty; the complete track-design section and prose scaffold supply the planned inventory of three A items and one B item.
- The planned A items are `thm-qftx-positive-unbounded-spectral-calculus`, `thm-qftx-tempered-massive-gaussian-field`, and `lem-qftx-finite-lorentz-cocycle-splitting`; the planned B item is `cex-qftx-resolvent-zero-continuous-spectrum`. The A page requires `spectral-measures-and-borel-functional-calculus`, `infinite-product-measures-and-kolmogorov-extension`, and `qft-ir01`; the B page requires the A page.
- No owner authoring-direction file was present.
- The A page contains the three planned items plus `lem-qftx-hermite-coefficient-decay`, a new local mathematical supplier required by the planned Gaussian proof's rapid Hermite-coefficient step. The manifest marks this inventory expansion. The local lemma has a complete integration-by-parts proof and declares its exact Hermite, recurrence, Hilbert-expansion, and Countable Choice inputs.
- The Gaussian proof's Fourier and Plancherel suppliers were found in the already-required transitive closure `qft-ir01 → qm-math-oscillator → schwartz-space-and-the-plancherel-theorem`; no duplicate local Fourier result was created.
- The planned spectral and Gaussian claims explicitly carry AC. Their proof facts also carry CC where the actual PVM-integration and Hermite suppliers require it. The Lorentz cocycle statement remains choice-free: its proof defines a finite-chart normalized round-volume integral and uses only the continuous compact-group average needed for the fixed-point argument.
- The Lorentz result stays finite-dimensional and makes no infinite-dimensional, gauge-cohomology, interacting-field, or renormalization-order conclusion. The Gaussian result constructs cylinder-measurable tempered-distribution samples on one common full-measure set and makes no pointwise-field or interaction-measure claim.

## Inventory and dependency levels

The assigned manifest has four A-page items and one B-page counterexample, below the page cap. Levels are computed from the actual item `deps`, counting only in-batch suppliers:

| Level | Item | Direct dependencies |
|---|---|---|
| 0 | `thm-qftx-positive-unbounded-spectral-calculus` | `def-axiom-of-choice`, `def-countable-choice`, `def-projection-valued-measure`, `thm-bounded-borel-pvm-integral`, `thm-pvm-integral-is-a-star-homomorphism`, `thm-spectral-theorem-for-bounded-normal-operators-pvm-form` |
| 0 | `lem-qftx-hermite-coefficient-decay` | `def-countable-choice`, `lem-qft-hermite-oscillator-research-supplier`, `thm-hilbert-space-fourier-expansion`, `thm-nrqm-oscillator-hermite-recurrence`, `thm-nrqm-oscillator-multidimensional-oscillator-completeness` |
| 0 | `lem-qftx-finite-lorentz-cocycle-splitting` | `def-riemannian-metric-and-riemannian-manifold`, `ex-the-round-metric-on-the-sphere-as-an-induced-metric`, `def-riemannian-volume-density`, `def-support-and-compactly-supported-riemann-integral-in-rn`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands`, `thm-heine-borel-rn` |
| 1 | `thm-qftx-tempered-massive-gaussian-field` | `def-axiom-of-choice`, `def-countable-choice`, `def-standard-borel-space`, `def-schwartz-space-and-its-seminorms`, `def-fourier-transform-on-l-one-of-rn`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `lem-qft-hermite-oscillator-research-supplier`, `lem-qftx-hermite-coefficient-decay`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-hilbert-space-fourier-expansion`, `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`, `thm-parseval-pairing-on-schwartz-space`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space` |
| 1 | `cex-qftx-resolvent-zero-continuous-spectrum` | `def-axiom-of-choice`, `thm-qftx-positive-unbounded-spectral-calculus` |

The within-batch edges are `lem-qftx-hermite-coefficient-decay → thm-qftx-tempered-massive-gaussian-field` and `thm-qftx-positive-unbounded-spectral-calculus → cex-qftx-resolvent-zero-continuous-spectrum`; both suppliers were authored/readied before their consumers. The declared page requirements are outside this run's page manifests. There are no in-run cross-batch edges, so `physics-non-fluid-129-2026-10-21-r2-batch-59.cross-batch-dependencies.json` is `[]`. Batch 59 is level 0 with no batch requirements.

The run-wide batch dependency file's input hash is stale after the populated manifests. It was left unchanged for the owner’s drained construction join. The full-run item-level command currently reads 258 pages and 242 items and reports 190 empty inventories in other batches; it reports no other item-level errors. The assigned batch-59 graph itself has five items, maximum level 1, and no cycles or level mismatches.

## Prerequisite and readiness review

- The current complete statements and proofs were inspected for all direct suppliers. The bounded spectral theorem, PVM integral hypotheses, Hermite scaling, Kolmogorov coordinate-space conditions, Fourier normalization, and compact-volume integration conditions match the actual uses in these drafts.
- The external direct suppliers are outside this run and have no run-scoped Step 1 records (`step1Decision` reports `Readiness record missing` for those out-of-run IDs). Their current published carriers and complete proofs exist and match the declared interfaces; this is not an absent-carrier or unsupported-argument blocker. The in-run prerequisites are recorded ready below.
- `loadStep1Record` and `step1Decision` were checked for every assigned item and its direct dependencies. All five assigned rows are `ready` and current; the two level-1 consumers hash-bind their in-run level-0 suppliers. These records cover authoring prerequisites and do not constitute independent proof approval.

## Source harvest and resolution

`physics-non-fluid-129-2026-10-21-r2-batch-59.coverage.json` records all 18 harvested source results and their item-level dispositions. It includes two independent spectral-theory treatments, two Kolmogorov-extension treatments, two oscillator treatments, a Fourier/Plancherel textbook source, and two compact-Lie-group/Lie-algebra treatments. The general arbitrary-index Kolmogorov extension and the general First Whitehead Lemma are marked out of scope because this batch proves only the countable Gaussian-coordinate case and the specific finite-dimensional Lorentz cocycle route.

All nine full-text URLs passed `source-fetch-check --stamp` on the first attempt: 9/9 fetched and stamped, 0 failures, 0 retries, 0 drops. Coverage has 8 `included`, 8 `inline`, and 2 justified `out-of-scope` dispositions; `coverage-checklist` reports 18 harvested results, 0 errors, 0 warnings. No `source_resolution` recovery or dropped-source record was needed.

## Scoped checks

- `content-policy.mjs --manifest-only --authored`: 5 items, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 5 items, 0 missing dependency arrays, 0 errors.
- Batch-59 item-level calculation: 5 items, maximum level 1, no cycle or level error.
- Scoped `depcheck.mjs --items-file`: selected items and prerequisite cycles passed.
- `rendercheck.mjs`: all 5 item files and both A/B page files passed YAML and math rendering checks.
- `precheck.mts`: all 5 assigned proofs passed after adopting its canonical phase numbering.
- `proof-layout.mjs`: all 5 changed proof-bearing items, 26 steps, 0 defects.
- `proof-contract.mjs --strict`: 5/5 items checked, 33 exact supplier citations, 26 step derivations, complete boundary worksheets, 0 errors, 0 warnings.
- `source-fetch-check.mjs` check mode: 9/9 source stamps verified.
- Full-run `item-dependency-levels.mjs check` remains blocked by 194 empty inventories in other batches; no non-empty item graph errors were reported. Full-run `batch-dependency-levels.mjs check` reports the shared input hash stale after manifest changes; the shared run-level file was not edited.

## Owner-join follow-up

Refresh `research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json` at the drained construction join after the other batch inventories are populated. No batch-59 mathematical prerequisite, source-retrieval, proof-contract, or page-capacity gap remains.
