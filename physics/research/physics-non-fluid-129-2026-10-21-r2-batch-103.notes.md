# Batch 103 authoring notes — `qsmx-matrix-product-states`

## Inventory, plan and design reconciliation

- The canonical plan route and the complete track design agree on A page `qsmx-matrix-product-states` (order 903), B companion `qsmx-matrix-product-states-examples`, title, category `quantum-statistical-mechanics`, library `physics`, and the three A-page prerequisites `qsmx-entropy-entanglement`, `qsm-quasilocal-states`, and `pure-and-mixed-states-ensembles-and-schmidt-decomposition`. The plan specification intentionally has empty item arrays; the design inventory supplies four planned A items and one B example.
- Added `def-qsmx-transfer-infinite-state` on A as a necessary local definition before the clustering theorem and GHZ example. It defines the finite transfer insertions, compatible local states and density matrices, and the conditional extension to the quasi-local algebra, with a complete proof under the supplier's exact Countable Choice assumption. This adds one A item without changing page scope or exceeding capacity: A has five items and B has one.
- The planned B example title, “GHZ transfer lacks primitive clustering,” was refined to “GHZ transfer has persistent connected correlations.” The proved claim is the exact value (1) at every gap; the wording avoids implying a general characterization of primitivity. The item ID and mathematical scope are unchanged.
- The parent-Hamiltonian definition proves positivity, the local kernel, and the frustration-free ground-state property only. It claims no uniqueness or gap. The transfer theorem states algebraic simplicity and proves the decay bound for Jordan blocks without assuming diagonalizability. The truncation theorem distinguishes current-sweep losses from original-input Schmidt tails.
- The current owner authoring-direction file was absent. The persisted run schedule lists batch 103 at dependency level 1 with `requires: ["101"]`.

## Items, direct dependencies and scoped levels

The assigned carriers and their exact item dependency lists are synchronized in the batch manifest. Scoped recomputation over the assigned dependency closure plus the batch 101 entropy convention (seven items total) found no cycles or level errors.

| Item | Level | Direct item dependencies |
|---|---:|---|
| `def-qsmx-mps-and-transfer` | 0 | `thm-qc-schmidt-decomposition`; `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` |
| `def-qsmx-transfer-infinite-state` | 1 | `def-qsmx-mps-and-transfer`; `def-qsm-local-spin-algebras`; `def-qsm-quasilocal-spin-algebra`; `def-qsm-infinite-algebraic-state`; `lem-qsm-finite-matrix-cstar-and-state-duality`; `lem-qsm-matrix-state-calculus`; `lem-qsm-consistent-local-states`; `def-countable-choice` |
| `alg-qsmx-schmidt-mps-truncation` | 1 | `def-qsmx-mps-and-transfer`; `thm-qc-schmidt-decomposition` |
| `thm-qsmx-schmidt-mps-error` | 2 | `alg-qsmx-schmidt-mps-truncation`; `def-qsmx-mps-and-transfer`; `thm-qc-schmidt-decomposition`; `thm-singular-value-decomposition`; `def-qsmx-information-conventions`; `cor-mean-value-theorem`; `thm-logarithm-derivative-and-integral`; `thm-natural-logarithm-laws` |
| `thm-qsmx-primitive-transfer-clustering` | 2 | `def-qsmx-mps-and-transfer`; `def-qsmx-transfer-infinite-state`; `def-countable-choice`; `def-eigenvalue-eigenvector-eigenspace-and-spectrum`; `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`; `thm-jordan-canonical-form-from-pid-module-structure`; `lem-qsm-matrix-state-calculus` |
| `ex-qsmx-ghz-noninjective` | 2 | `def-qsmx-mps-and-transfer`; `def-qsmx-transfer-infinite-state`; `def-countable-choice` |

The page edge to `qsmx-entropy-entanglement` and item edge from `thm-qsmx-schmidt-mps-error` to `def-qsmx-information-conventions` are the two exact cross-batch edges. Both are `verified` in `physics-non-fluid-129-2026-10-21-r2-batch-103.cross-batch-dependencies.json`; their evidence records current batch 101 readiness and the scoped interface checked. The batch 101 records for the information convention, CMI/channel DPI, and thermal mutual-information bound were rechecked with `loadStep1Record`/`step1Decision` and are ready and hash-current.

The full-run `item-dependency-levels.mjs check --run` remains unclean because 99 unrelated scaffold pages have empty inventories and two unrelated items have stored/computed level mismatches: `lem-nrqmx-finite-symplectic-implementers` (2 vs 1) and `lem-qsmx-local-expectation-locality` (0 vs 1). None is in this batch's dependency closure; all six assigned items are absent from the global error set and pass the scoped calculation above. `batch-dependency-levels.mjs check --run` reports the run-wide scheduling snapshot stale. The shared snapshot and other batches were left untouched for the owner's drained join.

## Source harvest and dispositions

`physics-non-fluid-129-2026-10-21-r2-batch-103.coverage.json` records all URLs, locators, inspected extents, supported items, limitations, searches, retrieval attempts and individual harvested-result dispositions. A has three full-text treatments and B has two. Across 20 harvested results, 16 are included, one is inline, and three are out of scope; none was dropped. All five source records are fetch-verified and resolved, so no failed-retrieval `source_resolution` record is applicable.

- Pérez-García, Verstraete, Wolf and Cirac, *Matrix Product State Representations*: <https://arxiv.org/pdf/quant-ph/0608197>. A locators: §2 Theorem 1; §3.2.4 Eq. (18), Condition C1, and Eq. (6); §4.1.1 and Theorem 9, PDF pp. 5–6, 11–12, 15–16. Supports `def-qsmx-mps-and-transfer`, `thm-qsmx-primitive-transfer-clustering`, and `ex-qsmx-ghz-noninjective`; the local-map, transfer, MPS-construction and GHZ results are included. The injective-parent uniqueness theorem is out of scope. B locator: §2 GHZ tensors and finite ring contraction; its GHZ result is included.
- Misguich, *Introduction to matrix-product states and tensor networks*: <https://arxiv.org/pdf/2606.24803>. A locators: §§2.1, 2.3.1, 2.4.4, 2.5.3 Eqs. (27)–(30), Appendix A.1 Eqs. (96)–(103), and Appendices B.1–B.3, printed/PDF pp. 9–20 and 52–55. Supports the MPS definition, GHZ example, truncation algorithm and error theorem, clustering theorem, and local parent projector; these results are included. The closing uniqueness/gap claim is out of scope. B locators: §2.3.1 and §2.5.3 footnote 8; the finite GHZ result is included and the transfer-degeneracy caveat is inline.
- Naaijkens, *Quantum Spin Systems on Infinite Lattices*: <https://arxiv.org/pdf/1311.2717v2>. A locator: §3.2.3, printed pp. 56–57, on local spin algebras, inclusions, strictly local observables and norm completion; this supports `def-qsmx-transfer-infinite-state` and is included. Exercise 3.2.3's commutant statement is out of scope.

The coverage record contains the source-by-source individual dispositions, including the reasons for every out-of-scope result. Search history is retained there; no retrieval failed and no recovery retry was needed.

## Final check and readiness record

- `research/physics-non-fluid-129-2026-10-21-r2-author-check-103.json`: all four aggregate author checks pass—precheck, rendercheck, content policy and strict proof contract.
- Explicit final proof-layout check: six changed items, 19 proof steps, zero defects. Strict proof-contract check: 6/6 items, zero errors or warnings. Precheck: five proof-bearing items pass; the algorithm has no proof section and has no precheck stamp. Rendercheck: all six items and both pages pass.
- Scoped `depcheck` passes for the six assigned items and their prerequisite context (1,403 items and 501 pages). Scoped item levels are `0, 1, 1, 2, 2, 2`. Coverage checklist: two pages, 20 harvested results, zero errors or warnings. Source-fetch check: 5/5 records fetch-verified and resolved.
- All six authored items have current Step 1 `ready` records with their direct dependencies recorded. These records establish authoring readiness only; they do not constitute independent proof approval.
