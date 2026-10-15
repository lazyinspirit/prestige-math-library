# Batch 48 notes — qft-mx04 / qft-mx04-examples

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, batch 48. These notes record authoring and evidence state; they are not independent approval.

## Design and plan comparison

The complete design section is `research/plan-quantum-field-theory-track.md` §“Ideal linear Penning mode-frequency invariant” (order 535). The current `research/plan-spec.json` record agrees on both page IDs, titles, category/library, orders 535–536, and page prerequisites: qft-mx04 requires only qft-mx01 and the B companion requires qft-mx04. There is no current plan-spec conflict.

The design’s current 2026-10-12 binding and `research/scaffold-audit-2026-10-12/qft/revised-inventory.json` supersede the historical reservation and the original proposed inventory: the second A item is `lem-qft-example-deterministic-ratio-error`, replacing the covariance/weighted-estimator item; B leaf `ex-qftmath-x08` depends only on that deterministic lemma. The probability-space, moments, covariance, and weighted-estimator dependencies are withdrawn and were not added. The current 2026-10-12 local argument was read in full at `complete-local-arguments.md#MX04-D`; B08’s values remain stipulated intervals, with no statistical interpretation.

## Item inventory and dependency levels

The run dependency-level file gives batch 48 level 1 and requires batch 41 (qft-mx01), level 0. The current revised inventory places `def-qft-example-data` on qft-mx01 and makes it the only item dependency of the invariant lemma. The two local levels are: `lem-qft-example-penning-frequency-invariant` 1; `lem-qft-example-deterministic-ratio-error` 0; `ex-qftmath-x08` 1 (it depends on the level-0 deterministic lemma).

The qft-mx01 page itself declares page-level prerequisites `countability-and-uncountability`, `qm-math-controlled-dynamics`, `schwartz-space-and-the-plancherel-theorem`, and `qm-math-oscillator`. These remain in the assigned page-level closure. The invariant lemma’s actual item-level dependency is only `def-qft-example-data`; its definition has `deps: []`, and no step uses the other qft-mx01 items or their supplier theorems.

## Cross-batch supplier interface

The QFT-MX01 carrier appeared during authoring. I read the actual complete draft `items/def-qft-example-data.md`, including its Definition and its three unit-check proof steps, and checked it against the recorded use. Its actual definition states “Write $M=mc^2$ for rest energy in joules,” uses $c>0$ in metres per second, and has no item dependencies. This matches the consumer’s use $m=M/c^2$ and $q/m=qc^2/M$. The supplier is a draft definition with a local unit verification; no independent acceptance is claimed. The consumer uses no other QFT-MX01 result.

`research/physics-td-qft-rpm-62-2026-10-14-batch-48.cross-batch-dependencies.json` records the qft-mx04 → qft-mx01 page edge and the lemma → def-qft-example-data item edge as interface-verified. Batch 41’s manifest now parses; the complete graph computes this consumer at level 1 and the three assigned item levels match their manifests. Batch 48 did not edit batch 41.

## Source research

Full-text source coverage, exact locators, harvested results, per-result dispositions, and fetch stamps are in `research/physics-td-qft-rpm-62-2026-10-14-batch-48.coverage.json`.

- Brown and Gabrielse, “Geonium theory,” §II.A (printed pp. 237–240) and §II.D (pp. 243–244): the ideal quadratic model and exact quadratic-field invariance theorem. The local trace proof is independent. The APS Harvest URL returned HTTP 401; the coauthor-hosted 79-page PDF was fetched, stamped, and the theorem pages were OCR-inspected and visually checked.
- Vogel, *Particle Confinement in Penning Traps*, Chapter 5, §§5.1–5.3.2 (printed pp. 45–54): ideal mode equations, stability conditions, and Eq. (5.27). The full textbook file was fetched and stamped; trajectory/orbit-closure results outside the assigned claim are dispositioned in coverage.
- Tong, “Quantum Field Theory,” §0.1 “Units and Scales”: the natural-unit convention and mass-energy conversion supporting the exact QFT-MX01 definition. The compressed PDF could not be page-count verified because `mutool` is unavailable; the author’s complete HTML rendering of §0.1 was fetched, stamped, and read instead.
- Fan et al., “Measurement of the Electron Magnetic Moment,” full arXiv HTML text: read for the distinction between reported frequency measurements/uncertainties and B08’s stipulated intervals. No measured value, error bar, statistical estimate, or empirical premise is used in the example.

An auxiliary MIT multivariable-calculus PDF was not retained: its compressed-page parser check failed, and no step in the complete local quotient/remainder proof depends on an external calculus theorem. No mathematical coverage was dropped; the two independent Penning-trap treatments above satisfy the A-page source requirement.

## Mathematical and physical scope

The invariant item is a mathematical trace identity for the stated SI numerical state matrix with uniform constant (mathbf B), a real symmetric traceless quadratic-potential matrix (K), and a diagonalizable spectrum consisting of three positive imaginary-frequency pairs. The complete argument is conditional on those hypotheses; it does not establish stability for arbitrary parameters or physical validity of the apparatus model. Nonquadratic multipoles, magnetic inhomogeneity, relativistic corrections, radiation/cavity shifts, and nonlinear motion are excluded. The ratio lemma proves exact deterministic interval and quadratic-remainder bounds by algebra and quotient limits, with no probability, inference, Taylor theorem, or chain-rule dependency. The example uses only the ratio lemma and stipulated values.

## Current authoring disposition

Both pages and all three local items are drafted. Proof contracts map every proof step and boundary case; the supplier excerpt for the invariant is bound to the actual draft definition. The only cross-batch logical dependency is the actual qft-mx01 definition; its interface matches. The B example names the deterministic-ratio lemma as a draft conditional input and does not certify it. Current hash-bound Step-1 records mark all three assigned items ready; the invariant record was refreshed after the supplier carrier hash changed and its interface was rechecked. The full run’s readiness remains open for other batches, and the latest run-wide dependency-level computation reports 108 errors outside this assigned batch (80 empty scaffold inventories and 28 dependency-level mismatches); all three assigned levels (1, 0, 1) match and have no scoped errors. No other pair’s carrier, shared plan, engine state, verdict, or published content was edited.

## Checks

- proof-contract.mjs with strict mode: pass; all 3 items checked, 0 errors and 0 warnings.
- precheck.mts on the 3 assigned items: pass; all 3 phase-format proofs pass without repair.
- rendercheck.mjs on the 3 items and 2 pages: pass; 5 files checked, 0 errors and 0 warnings.
- coverage-checklist.mjs: pass; 1 page, 10 harvested results, 0 errors and 0 warnings.
- source-fetch-check.mjs with --stamp: pass; 4/4 sources fetch-verified and resolved, 0 newly stamped.
- content-policy.mjs with --manifest-only --authored: pass; 3 authored items, 0 errors and 0 warnings.
- Focused depcheck.mjs with the 3 assigned item IDs: pass; 0 errors and 0 warnings; both assigned pages are included in its page checks.
- item-dependency-levels.mjs for the run: fails with 108 errors in other batches (80 empty scaffold inventories and 28 mismatched dependency labels). None names an assigned item. The loaded graph gives assigned levels 1, 0, 1, matching the batch manifest.
- proof-layout.mjs on the 3 changed items: blocked before layout analysis because the renderer checkout cannot resolve @/components imported by /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx (ERR_MODULE_NOT_FOUND). This is an external renderer/tooling issue; the physics workspace was not modified to work around it.
- Current Step-1 hash checks close all 3 assigned readiness records. The overall run remains open for other batches (244 current run items; 73 ready at the final inspected snapshot).
