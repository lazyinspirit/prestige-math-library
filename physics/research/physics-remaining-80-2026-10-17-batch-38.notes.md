# Batch 38 notes — Local spin matrix algebras and isometric inclusions

Run `physics-remaining-80-2026-10-17`, role **beta**, batch **38**. The owned pair is `qsm-quasilocal-states` (A, order 573) and `qsm-quasilocal-states-examples` (B, order 574), category `quantum-statistical-mechanics`, library `physics`. All authored items are mathematics (`domain: mathematics`); no physical postulate, measurement, or empirical conclusion is made.

The binding owner direction was read before authoring. This note records the assigned work and unresolved inputs; it does not publish content or certify independent approval.

## Design and plan conflicts

- The assigned design section reserves seven A items and lists `qsm-states-ensembles` as the earlier page. Current `research/plan-spec.json` requires three pages: `countability-and-uncountability`, `gelfand-theory-and-commutative-c-star-algebras`, and `qsm-states-ensembles`. The plan governs; the A manifest retains all three. The B page requires the A page.
- Current plan-spec item arrays are empty for both batch-38 pages and for `qsm-states-ensembles`. The source inventory nevertheless reserves the seven A items. Batch 38 authors those seven plus two local prerequisite lemmas required to state/prove the lattice and inclusion conventions. The current batch-36 manifest now declares 20 items for `qsm-states-ensembles`, while plan-spec still has an empty item list. Neither shared plan nor run-level dependency state was edited.
- The page pair is below the 100-item cap: 9 A items and 3 B examples. The A page includes a TikZ triangle for nested factor inclusions; its commutativity is proved on configuration basis vectors and the diagram is explanatory only. The category directory did not exist, so only the two assigned draft page files were created there; no category overview or pathway file was added.

## Inventory and dependency levels

A-page items: `lem-qsm-integer-lattice-countable` (new local prerequisite), `def-qsm-local-spin-algebras`, `lem-qsm-local-spin-inclusions-isometric` (new local prerequisite), `def-qsm-quasilocal-spin-algebra`, `lem-qsm-quasilocal-completion`, `def-qsm-infinite-algebraic-state`, `lem-qsm-consistent-local-states`, `lem-qsm-spin-state-compactness`, and `lem-qsm-state-gns-construction`.

B examples: `ex-qsm-quasilocal-two-site-locality`, `ex-qsm-quasilocal-infinite-tail-observable`, and `ex-qsm-maximally-mixed-consistent-product-state`.

The current in-run supplier `lem-qsm-matrix-state-calculus` is level 0 on batch 36; batch 38 is level 1 and requires batch 36. Recomputed scoped item levels, including that current batch-36 matrix item, are:

- 0: `lem-qsm-integer-lattice-countable`, `lem-qsm-matrix-state-calculus`
- 1: `def-qsm-local-spin-algebras`
- 2: `lem-qsm-local-spin-inclusions-isometric`
- 3: `def-qsm-quasilocal-spin-algebra`
- 4: `lem-qsm-quasilocal-completion`
- 5: `def-qsm-infinite-algebraic-state`, `ex-qsm-quasilocal-two-site-locality`, `ex-qsm-quasilocal-infinite-tail-observable`
- 6: `lem-qsm-consistent-local-states`
- 7: `lem-qsm-spin-state-compactness`, `lem-qsm-state-gns-construction`, `ex-qsm-maximally-mixed-consistent-product-state`

The scoped dependency-level computation checked 13 current in-run item declarations, maximum level 7, with no cycles or label errors. The run-level dependency digest remains owner-managed; its current batch-38 entry is level 1 with `requires: [36]`.

## Supplier status and conditional claims

The previously absent `qsm-states-ensembles` page and batch-36 inventory appeared during authoring. I re-read its current page carrier, its 20-item manifest entry for `lem-qsm-matrix-state-calculus`, and the supplier item file. The page is draft. The matrix item is `design_state: draft-research`, its item file remains `status: draft`, and no current Step 1 record exists.

The actual statement at `items/lem-qsm-matrix-state-calculus.md:28–30` supplies finite Hermitian spectral calculus, positive square roots, trace pairing for a density matrix already given, weighted Cauchy–Schwarz, and finite density purity/extremality. It does **not** supply the finite-matrix C*-identity `||T*T|| = ||T||^2` or the converse that every positive normalized functional on `M_D(C)` has a unique positive trace-one density. Consequently:

- `def-qsm-quasilocal-spin-algebra` and `lem-qsm-quasilocal-completion` remain conditional on the missing finite-matrix C*-identity.
- `def-qsm-infinite-algebraic-state`, `lem-qsm-consistent-local-states`, and `lem-qsm-spin-state-compactness` remain conditional on the finite state/density correspondence and norm-one bound.
- `lem-qsm-state-gns-construction` uses the stated finite positive-square-root clause, but that statement cannot be treated as proved: line 42 calls normalized rational-coordinate vectors dense because rational vectors are dense and normalization is continuous. Normalizing arbitrary rational coordinates need not leave coordinates rational, so the displayed reasoning does not establish density of the named set. This is a proof gap, not a refutation of the finite-dimensional spectral theorem.

The paired source inventory names `qsm-contract-td-M32` as the planned no-choice finite-dimensional subsequence supplier. The current matrix item frontmatter instead depends on `cor-bolzano-weierstrass-in-rn`. The M32 source is a completed research-prose argument, not a production item. This dependency-route drift and the matrix proof/interface gaps are escalated to the owner for reconciliation on the A page of `qsm-states-ensembles`; batch 38 does not author or repair that supplier. All consuming arguments here are written conditionally at the exact interfaces and checked against the currently declared item.

The current `qsm-states-ensembles` page itself lists ten earlier page requirements in its manifest. Batch 38 consumes only its matrix-state item; those other page-level requirements remain owned by batch 36 and are not silently imported as proved in this pair.

## Sources and harvested coverage

Two independent complete treatments were retrieved and read: Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, complete 157-page author-hosted lecture-note/book manuscript (`https://arxiv.org/pdf/1311.2717`), and David Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*, complete 36-page author-hosted lecture notes (`https://arxiv.org/pdf/math-ph/0107009`). Relevant locators, item support, and dispositions are recorded in the coverage file: Naaijkens §§1.2, 2.4, 2.5 Theorem 2.5.3, and 3.2.2–3.2.3; Ruelle Chapter 1 §§3–4 and Chapter 3 §1. The countability proof is explicitly local because both treatments take the lattice as their index set. `coverage-checklist` reports 2 pages, 24 harvested results, 0 errors, 0 warnings. `source-fetch-check --stamp` verified and stamped all four page/source entries; final check remains 4/4 fetch-verified, 0 documented drops. There were no retrieval failures, so no source-resolution decision was necessary.

Proof contracts were generated from the final numbered arguments, with exact supplier statement excerpts, per-step input maps, standard boundary dispositions, and applicable finite checks. The six conditional A results and all B examples retain their explicit interface qualifications.

## Final scoped checks

- Item dependency levels: 13 in-run items, maximum 7, 0 errors/cycles.
- `precheck.mts`: 12 files, 9 proof-bearing items checked, 0 failures.
- `proof-layout.mjs`: 12 items, 41 steps, 0 defects.
- `proof-contract.mjs --strict`: 9/9 proof contracts, 0 errors, 0 warnings.
- `depcheck`: 12 selected items, 0 errors, 0 warnings.
- `fwdcheck`: 12 selected items, 0 errors, 0 warnings.
- `extcheck`: 12 selected items, 0 errors, 0 warnings.
- `rendercheck`: all 12 items and both pages after the final page edit, no KaTeX or frontmatter errors.
- `content-policy`: 12 manifest items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 24 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 4/4 source entries fetch-verified and resolved.
- `physics-check --plan ... --pages-file ...`: 0 errors, but the plan-spec selection contained 0 item declarations; item-body validation is therefore represented by the scoped item checks above.

An initial unsupported `--help` probe invoked unscoped forward-reference and external-reference scans, which reported diagnostics outside batch 38; these scans made no file changes and are not used as batch evidence. The focused checks above are the scoped results.

## Step 1 readiness

`lem-qsm-integer-lattice-countable` is recorded `ready` against its three inspected published mathematics dependencies. The other 11 batch-38 items are recorded `escalated`, with their direct dependencies and exact matrix/page blockers in their Step 1 records and in `batch-38.cross-batch-dependencies.json`. No `--owner` option was used. These records indicate completed authoring and conditional proof status only; they are not independent approval.
