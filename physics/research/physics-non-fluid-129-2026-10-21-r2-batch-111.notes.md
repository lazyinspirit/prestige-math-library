# Batch 111 authoring notes — `qsmx-quasifree-gases`

Authoring pass completed 2026-10-22 (Australia/Sydney) for run `physics-non-fluid-129-2026-10-21-r2`.

## Inventory and plan reconciliation

- Assigned A page: `qsmx-quasifree-gases`, order 919, category `quantum-statistical-mechanics`, library `physics`; B companion: `qsmx-quasifree-gases-examples`, order 920. The A page requires `qsm-bose-fermi-gases`, `qsmx-entropy-entanglement`, and `nrqmx-finite-mode-gaussian`; the B page requires the A page.
- Read the complete assigned prose-scaffold section (`research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-quasifree-gases`) and the assigned inventory pair. The design keeps the fermionic CAR covariance and entropy finite-dimensional, fixes the order of CAR modes for the restriction, and requires an explicit positive-frequency finite Bogoliubov certificate for the Bose theorem. It excludes general Williamson existence unless separately proved, infinite-mode implementation, interacting depletion, and superfluidity. The zero-mode B item is a finite-mode trace-divergence counterexample.
- Compared `research/plan-spec.json` with the design. Page IDs, titles, order, category, library, companion, requirements, and planned A/B item identities agree. The plan-spec item arrays are empty pre-authoring placeholders; the content inventory carries three A items and one B item. This is not a scope conflict.
- Added two necessary local A-page items under the dispatch rule for missing mathematics: `lem-qsmx-finite-car-quasifree-gibbs-construction` proves finite CAR existence, uniqueness, Wick moments, and Gibbs covariance; `def-qsmx-finite-boson-quadratic-form` defines the Schwartz core, grouped quadratures, units, and explicit certificate before the stability theorem uses them. The A page contains five items and the B page one example, well below the 100-item cap. Both page carriers are frontmatter-only.
- `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was absent. The page title mentions interacting boundaries, but this assigned inventory contains no interacting-boundary result; no interaction, depletion, superfluidity, or infinite-mode claim was added.

## Prerequisite and dependency audit

The page-level batch dependency row is level 2 and requires batches 52 and 101. The row in the current batch-dependency snapshot is `{"batch":"111","dependency_level":2,"requires":["52","101"]}`. The six authored item levels, recomputed against the full current in-run item graph, are:

| Item | Level |
|---|---:|
| `def-qsmx-quasifree-finite-covariance` | 0 |
| `lem-qsmx-finite-car-quasifree-gibbs-construction` | 1 |
| `thm-qsmx-quasifree-entropy` | 2 |
| `def-qsmx-finite-boson-quadratic-form` | 2 |
| `thm-qsmx-finite-boson-stability` | 5 |
| `cex-qsmx-bogoliubov-zero-mode` | 6 |

All six recorded item levels match the computed values. The local level calculation traversed the full in-run graph; the run-wide CLI separately reports 24 empty inventories in other batches.

- `qsm-bose-fermi-gases` is a published page. Its complete published occupation-basis and diagonal-trace arguments were read. The finite bosonic trace application uses its stated Countable Choice and `0<q_j<1`, `q_*<1`, and summability hypotheses on the positive-frequency modes.
- `qsmx-entropy-entanglement` is batch 101. Its four item readiness records are current, hash-matching and `ready`; the complete `def-qsmx-information-conventions` definition/proof was read. Its natural-log entropy, `0 ln 0 = 0` convention, finite partial trace, and ordered-factor conventions match the consuming restriction proof.
- `nrqmx-finite-mode-gaussian` is batch 52. Read the complete current proofs/interfaces for `def-nrqmx-finite-mode-symplectic-data`, `lem-nrqmx-finite-mode-fock-schr-identification`, `thm-nrqmx-finite-mode-bogoliubov`, and `thm-nrqmx-finite-metaplectic-construction`. `loadStep1Record` and `step1Decision` report all four current and hash-matching `ready`. Their exact finite quadrature, grouped symplectic action, unitary implementation, and Schwartz-core interfaces match the local use. These records mean authoring readiness only; they are not independent proof approval.
- The published `lem-qsm-fock-occupation-basis-and-car-relations`, `lem-qsm-matrix-state-calculus`, `lem-qsm-models-diagonal-occupation-trace`, `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, and relevant adjoint/graph/functional-calculus definitions were read at the actual statements and proofs used. Their assumptions are carried explicitly, including AC and Countable Choice for the finite bosonic theorem and the counterexample.
- Mathematical carriers remain in domain `mathematics`, library `physics`, with `mathematical-premise` dependency roles and no physical scope. No observation, experiment, or fabricated measurement is present.

The batch cross-dependency array has eight exact edges: two page prerequisites and six item dependencies. A scoped comparison against current manifests found no missing or extra edge; all eight are `verified` for interface/readiness checks only. The page-level `qsm-bose-fermi-gases` prerequisite is outside this run and is therefore not represented in the in-run cross-batch array.

## Sources, reading, and disposition

`research/physics-non-fluid-129-2026-10-21-r2-batch-111.coverage.json` records each URL, locator, inspected scope, supported item, harvest disposition, recovery history, and fetch stamp. It contains five A-page source records and two B-page records. Each page has two or more independent full-text treatments; the A page includes full lecture notes.

| Source | Read locator and supported scope |
|---|---|
| [H. Araki, “On Quasifree States of CAR and Bogoliubov Automorphisms”](https://ems.press/content/serial-article-files/41673) | Complete 58-page PDF; §§2–3, article PDF pp. 2–7 / printed pp. 386–392. Supports finite CAR quasifree covariance, determinant moments, and Bogoliubov-automorphism conventions. The local items prove finite existence, uniqueness, and Gibbs covariance directly. |
| [J. Surace and L. Tagliacozzo, “Fermionic Gaussian States: An Introduction to Numerical Approaches”](https://arxiv.org/pdf/2111.08343) | Complete 71-page arXiv PDF; §§3.1–3.7, PDF pp. 10–18, and §3.10, pp. 23–24. Supports finite fermionic covariance, Wick determinants, reductions, entropy, and thermal-state context; the local proofs handle endpoints and factor order. |
| [P. T. Nam, *Mathematical Quantum Mechanics II*](https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf) | Complete 228-page lecture notes; §6.3, PDF pp. 145–156. Supports finite-mode bosonic Bogoliubov implementation. No infinite-mode implementation claim is imported. |
| [C. Weedbrook et al., “Gaussian Quantum Information”](https://arxiv.org/pdf/1110.3234) | Complete 51-page survey; §§II.A–II.C.1, PDF pp. 6–9. Supports quadrature, phase-space, and symplectic conventions. Its vacuum covariance normalization differs from the local ℏ-scaled convention; the local definition requires an explicit certificate and does not claim general Williamson existence. |
| [P. Naaijkens, *Quantum Spin Systems on Infinite Lattices: A Concise Introduction*](https://arxiv.org/pdf/1311.2717v2) | Complete 157-page lecture notes; §3.4, PDF pp. 74–80. Supports finite Gibbs, entropy, and partition-function conventions. Infinite-system conclusions are not transferred. |

One retrieval route for the Surace–Tagliacozzo paper, `https://scipost.org/SciPostPhysCore.5.3.100/pdf`, returned HTML (3817 bytes). A search immediately recovered the complete arXiv PDF; its relevant sections were read and the source was retained. The failed route and successful recovery are preserved in coverage history. There were no dropped sources, unresolved retrievals, or source-resolution alternatives; `source_resolution` is empty.

`source-fetch-check --stamp` verified all 7/7 page-source entries, with zero drops. The five unique sources are stamped as full PDFs: Araki 58 pp / 5,360,323 bytes / `02620a9932038b5f`; Surace–Tagliacozzo 71 pp / 3,401,745 bytes / `0af588dc918aa56e`; Nam 228 pp / 967,993 bytes / `6e6dfe84a2b96f26`; Weedbrook 51 pp / 1,182,567 bytes / `ae4c33e7f1655387`; Naaijkens 157 pp / 1,894,041 bytes / `6d954604ef16fc58` (SHA-256 prefixes). Coverage has 22 harvested results with included, inline, and justified out-of-scope dispositions; no drop weakens mathematical coverage.

## Scoped validation and Step 1 readiness

- `precheck.mts`: 6 changed carriers selected; 4 proof-bearing items pass, 0 failures. The two definitions are not applicable to proof precheck.
- `proof-layout.mjs`: 6 items, 19 steps, 0 defects.
- `rendercheck.mjs`: all 6 items and both pages pass; 0 errors, 0 warnings.
- `content-policy.mjs`: 6 items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file`: all six assigned items and their prerequisite closure pass; 2,225 closure items, 587 prerequisite pages, 0 errors, 0 warnings.
- `proof-contract.mjs --strict`: 4/4 proof-bearing items, 0 errors, 0 warnings. Contracts include the final phase steps, exact supplier statement excerpts, inputs, all eight boundary dispositions, and applicable finite checks.
- `coverage-checklist.mjs`: 2 pages, 22 harvested results, 0 errors, 0 warnings. `source-fetch-check.mjs --stamp`: 7/7 page-source entries verified and resolved.
- The full-run `item-dependency-levels.mjs check` reports 24 empty inventories on other pages (the current list is in its output); none belongs to batch 111. The separate scoped full-graph calculation has no batch-111 errors and agrees exactly with levels 0, 1, 2, 2, 5, 6 above.
- The full-run `batch-dependency-levels.mjs check` reports `Stale batch dependency levels`; its batch-111 row still records level 2 requiring batches 52 and 101. The run-wide snapshot is owner-managed and was left untouched.
- `proof-contract-coverage.mjs --run` stops at the unrelated empty frontier page inventory `tgrx-topological-entropy-models`; batch-local strict proof-contract validation passes.
- The read-only `frontier-dependency-ledger` collector stops on the unrelated batch 97 cross-batch input (`invalid review or consumer ownership`). A separate scoped comparison confirms all eight batch-111 cross-batch rows match their current declarations exactly.

`loadStep1Record` / `step1Decision` now return `closed: true`, `decision: ready`, `owner: false` for each of the six assigned items, with current hashes. No item is escalated. These are authoring-readiness records only, not independent mathematical approvals or publication decisions.
