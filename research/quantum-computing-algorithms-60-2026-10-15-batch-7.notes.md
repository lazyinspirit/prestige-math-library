# Batch 7 authoring continuation

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`  
Dispatch: `batch-7-refresh-3c092bae-b768-40e4-8635-c1e95b020045`

## Scope and plan comparison

The current QC07 proposal inventory contains ten A-page items and one B-page example, matching the assigned pair and remaining below the 100-item page cap. The QC track design row and `plan-spec.json` agree on both page IDs, category, order 2178/2179, title, companion relation, and the four A-page prerequisites. The canonical page item arrays are empty at the pre-authoring plan boundary; the current audited QC proposal supplies the item contracts. No page-scope conflict was found.

The four page prerequisites are present at their actual homes: QC01 (`finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`), QC02 (`registers-tensor-products-and-partial-trace`), QC03 (`pure-and-mixed-states-ensembles-and-schmidt-decomposition`), and the published linear-algebra page `the-spectral-theorem-and-singular-value-decomposition`. QC01–QC03 remain draft pages. Their actual item interfaces used by QC07 were read; this records dependency review, not supplier acceptance.

The earlier `batch-7-authoring-hold.md` and original native result describe the pre-release state. The current owner direction and `authoring-release.json` supersede that operational hold: the release records 71 integrated repairs, zero pending proposals, and an actual scoped proposal-check pass for 120 pages, 896 items, and 1,835 root prerequisites. That release grants authoring permission only; no proof acceptance, review coverage, or publication permission is claimed here. The original result and attempt evidence were preserved unchanged. The result hash remains `fbce4db976364ccad4d3b0b428bee1c25b2f0a75db2ed2efab7d0740eb81497a`; the original prompt hash remains `fbc23dec436e7250e6cf8aaee916354d9c40a045ffcb7f4730234547e6e6c81b`.

## Authored items and dependency levels

The complete A/B carriers, item manifests, source coverage, proof contracts, cross-batch observations, and readiness records are present. The final item levels are:

| Item | Level |
|---|---:|
| `def-qc-qubit-and-bloch-representation` | 2 |
| `def-qc-pauli-matrices` | 3 |
| `thm-qc-pauli-algebra` | 4 |
| `def-qc-bloch-coordinate-map` | 4 |
| `def-qc-one-qubit-gate-alphabet-and-rotations` | 5 |
| `thm-qc-bloch-coordinate-existence-and-uniqueness` | 5 |
| `thm-qc-axis-rotation-pauli-formula` | 6 |
| `thm-qc-hadamard-pauli-conjugation` | 6 |
| `thm-qc-bloch-positivity-ball` | 6 |
| `thm-qc-bloch-purity-sphere` | 7 |
| `ex-qc-zero-plus-bloch-and-hadamard` (B page) | 8 |

I added explicit dependencies needed by the actual proofs, including the computational-basis orthonormality theorem, the Pauli-matrix entries, the unitary definition, finite-dimensional completeness and boundedness, the Hermitian matrix convention, and the rank-one density result used by the worked example. `def-qc-one-qubit-gate-alphabet-and-rotations` now declares its actual use of `def-qc-bloch-coordinate-map`; its level is 5, with its axis-rotation and Hadamard consumers at level 6. `def-qc-pauli-matrices` retains its mathematical definition and places its nonlogical link to the following product theorem in Remarks, avoiding a false dependency cycle.

The coordinate theorem now states its Hermitian and orthonormal-basis inputs explicitly. The positivity proof calculates the zero-radius and unit-radius eigenvalue cases. The purity proof establishes both directions using the actual rank-one density supplier. The B example proves that both displayed projectors are density operators before applying the purity theorem. No approved claim was narrowed or omitted, and no local intermediate item was needed.

I read the actual QC01–QC03 supplier statements and proofs used by this pair, including `thm-qc-dirac-notation-coordinate-identity` (its finite orthonormal-basis coordinate expansion), the Dirac conversion, register basis and orthonormality, density and pure-ray definitions, ray-projector proof, density spectral ensemble, and rank-one density theorem. I also checked the applicable Bessel/finite-Parseval argument: the ray-projector trace calculation expands a vector in the stated finite orthonormal basis and sums its squared coordinates, so it needs no infinite-basis completeness claim or arbitrary-index choice principle. I checked the root adjoint, trace, finite-dimensional unitary, positivity, trigonometric, boundedness, Banach, exponential-series, and spectral characterisations against their actual carriers. No required supplier body was absent at handoff.

The batch dependency input still gives level 3 with prerequisite batches 1, 2, and 3. The four page-level requirements and all direct out-of-batch item suppliers are recorded in `quantum-computing-algorithms-60-2026-10-15-batch-7.cross-batch-dependencies.json` (53 observations: 49 item edges and four page edges). Each records an inspected current supplier body; draft supplier status is not treated as mathematical acceptance.

## Sources and provenance

The A-page has three independent full-text treatments, with supported claims and each disposition recorded in `quantum-computing-algorithms-60-2026-10-15-batch-7.coverage.json`:

- [John Preskill, *Quantum Computation*, Chapter 2](https://www.preskill.caltech.edu/ph219/chap2_15.pdf), §2.2.1, PDF pp. 10–11, Eqs. (2.29)–(2.31), and §2.3.2, pp. 21–22. I inspected the complete cited passages in the retained chapter extraction; the QC source ledger records the assigned researcher’s complete 53-page chapter read separately.
- [Ronald de Wolf, *Quantum Computing: Lecture Notes*, v6](https://arxiv.org/pdf/1907.09415v6), §1.3, PDF pp. 7–8; §1.4, p. 9; Appendix A.9, p. 198. I inspected these complete passages in the retained full-text extraction; the QC source ledger records the assigned researcher’s full 239-page read separately.
- [Aram Harrow, Lecture 1: “Quantum states and operations”](https://web.mit.edu/8.371/www/lectures/lect01.pdf), §1.2.1, PDF pp. 2–3, Eqs. (1.1)–(1.3). I downloaded and inspected all three pages; SHA-256 `8fd3bb4a84dba7ec92bc91fcf66777eb407d2e211c509bdaf11a214aea4291d6`.

`source-fetch-check --stamp` fetched and stamped all six A/B source occurrences (3/3 treatments on each page); the final check mode verified 6/6 with zero drops. No retrieval failed, so no `source_resolution` record was required. The Harrow eigenvalue computation is used as corroboration only; the local proof supplies the full finite-matrix calculation.

All item contracts state no additional axioms. The proofs use finite-dimensional constructions and retain the root library’s first-argument-linear inner-product convention. The 11-entry proof-contract file contains 22 numbered proof steps, 62 exact supplier citations, all eight boundary dispositions per item, and no registered finite-smoke fixture; the finite matrix calculations themselves are proved in the item arguments. The strict contract check found three stale quotes for `def-qc-density-operator` (the coordinate theorem, positivity theorem, and purity theorem); I replaced them with the exact current Definition excerpt and reran the check successfully.

## Scoped checks

| Check | Result |
|---|---|
| `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-7.proof-contracts.json --strict` | Pass: 11/11 entries, zero errors and warnings. |
| `node tools/tsx-run.mjs tools/precheck.mts` on the eight proof-bearing items | Pass: 8 checked, zero failures. |
| `node tools/proof-layout.mjs` on all eleven batch item files | Pass: 11 items, 22 steps, zero defects. |
| `node tools/rendercheck.mjs` on all eleven batch items and both pages | Pass: 13 files; YAML and KaTeX rendering checks passed. |
| `node tools/depcheck.mjs --items-file /tmp/qc07-items.json --json --quiet` | Pass: 11 items and both pages checked, zero errors and warnings; dependency closure 1,011 items/192 pages, zero cycle errors. |
| `node tools/content-policy.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-7.pages.json --json` | Pass: 11 items, zero errors and warnings. |
| `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-7.coverage.json` | Pass: 6/6 sources fetch-verified, zero drops. |
| `node tools/step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15` | The immediate post-record check closed all 11 batch-7 items; at that snapshot the run had 27/514 ready items. A later current-source rerun now stops while parsing `items/alg-qa-19-complete-graph-spatial-search.md` at line 28, column 14: its unquoted `title` value contains `Quantum Computing:`. The same YAML error occurs in the nine other `qa-19` item files. QC07's records remain on disk, but this external parse defect prevents the latest run-wide revalidation. |
| `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Fails outside this batch: 514 current items across 120 pages, 60 empty page inventories, 215 stored level mismatches, zero cycles. All 11 QC07 levels match their recomputed levels. |
| `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Fails before reconciliation on `items/lem-qc-knill-laflamme-coefficient-matrix-is-positive.md` at line 16, column 14: the unquoted Preskill Chapter 7 source title contains a colon, causing “Nested mappings are not allowed in compact mappings.” The recorded run-level input hash is `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; the dispatch snapshot was `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`. |

The recomputed autopilot status reports `1-scaffold` at 3/60 covered, with no work in flight; batch 7 remains listed as native-refresh pending and its run artifact missing. Run blockers include the earlier invalid pair, the Batch 12 construction identity `def-qc-effective-unitary-matrix-input`, the malformed source title above, and the Step 1 owner hold: unit 29 is covered but artifact-incomplete and no longer running, as recorded in `quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. These are run-level owner repairs; this pair did not change engine state, shared plans, other batches, or verdicts.

Correcting the QC07 gate dependency changes levels for 166 other in-run items; 140 currently stored foreign levels require reconciliation. The exact old/current values and affected IDs are in `quantum-computing-algorithms-60-2026-10-15-batch-7.level-propagation.json` across batches 8, 10, 11, 13–15, 17, 22–25, 30–31, 34, 41, 43, and 46. No other batch was edited. The QC07 carriers and contracts are ready for owner reconciliation; these authoring records are not independent review or approval.
