# Batch 1 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`  
Role: beta; assigned batch: 1.

## Inventory, placement, and dependency levels

The owned A page contains ten assigned mathematical items; its B page contains the assigned Dirac coordinate example. The A page is below the 100-item cap. The current batch manifest is `research/quantum-computing-algorithms-60-2026-10-15-batch-1.pages.json`; the cross-batch dependency input is empty (`research/quantum-computing-algorithms-60-2026-10-15-batch-1.cross-batch-dependencies.json`). No in-run supplier from another pair is missing, and no extra local intermediate item was needed: every external prerequisite used by these proofs is present and published.

Computed item levels are:

- Level 0: `def-qc-dirac-notation-conversion`, `def-qc-trace-norm`.
- Level 1: `thm-qc-dirac-adjoint-amplitude-translation`, `thm-qc-dirac-notation-coordinate-identity`, `thm-qc-trace-norm-duality-and-norm-properties`, `thm-qc-trace-norm-rank-one-formula`, `thm-qc-trace-norm-spectral-formula`, `thm-qc-trace-norm-unitary-invariance-and-positive-formula`.
- Level 2: `prop-qc-trace-holder-inequality`, `thm-qc-hermitian-trace-norm-positive-negative-parts`, `ex-qc-inner-product-dirac-coordinate-check`.

The batch manifest titles, kinds, direct `deps`, `justified_by` links, and levels were synchronized from the final item frontmatter. A batch-only recomputation checked all 11 labels with no cycles or errors. The full-run level checker currently reports 137 errors elsewhere in the run: 56 empty scaffold inventories and 81 stale/mismatched labels. It reports no error for these 11 items. Examples outside this pair include empty pages `reversible-arithmetic-and-oracle-conversion` and `exact-oracle-algorithms`, and level mismatches `thm-qc-instrument-induces-povm` (6 recorded, 7 computed) and `thm-qc-one-qubit-euler-decomposition` (0 recorded, 6 computed). Those manifests and items were left untouched.

## Plan and design reconciliation

The complete QC01 design section in `research/plan-quantum-computing-track.md` matches the assigned scope: root linear-first inner products, explicit Dirac conversion, finite rectangular trace-norm interfaces, and an example page. The controlling `research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md` overrides stale hold language in older design/audit prose; authoring proceeded under that current direction.

The row for this A/B pair in `research/plan-spec.json` has the correct page IDs, order, category, and `requires` list, but its A-page `items` array is empty. The current audited `research/quantum-computing-planning/pages.json` and the dispatch inventory contain the ten A items and one B example authored here. This is a plan-spec versus current-planning-export conflict, recorded for reconciliation; no shared plan was changed.

Some audited proposals omit direct prerequisites used by the complete local proofs. The owned carriers therefore declare the actual root suppliers: matrix-coordinate and conjugation facts for the Dirac matrix identity; singular-value well-definedness, SVD, trace cyclicity, operator norm, adjoints, Bessel/Parseval, and scalar modulus facts for trace-norm duality; and finite spectral, positivity, square-root, and trace facts for the Hermitian formula. Exact lists are in the carriers and manifest. The definitions’ `justified_by` results depend on those definitions through ordinary `deps`, as required by the schema; no definition is used as a proof of its own replacement.

## Conventions, arguments, and axioms

All inner products use the root convention, linear in the first argument. The Dirac pairing reverses the root pairing; bras and rank-one maps are defined by `z ↦ ⟨z,y⟩root` and `z ↦ ⟨z,y⟩root x`. The coordinate theorem derives the `xy†` matrix and operator expansion from finite basis expansions, including zero dimensions. The trace norm is the sum of domain singular values for rectangular maps, with the empty sum zero. The authored proofs establish its trace formula, duality and norm properties, rank-one formula, unitary invariance, positive-operator formula, trace Hölder bound, and Hermitian positive/negative decomposition. The example computes the action, matrix, and adjoint on `C²` directly.

All item contracts declare no additional axiom (`axioms: []`), and the arguments use only finite-dimensional basis selection and published finite spectral results. The transitive dependency graph has an apparent path from `thm-complex-spectral-theorem-for-normal-endomorphisms` through the fundamental theorem of algebra, the odd-degree real-root theorem and the intermediate value theorem to the sequential continuity criterion, `def-countable-choice`, and the Axiom of Choice. We read this supplier chain. The actual intermediate-value proof uses only the `1 ⇒ 2` direction of the sequential criterion (`thm-intermediate-value.md`, Fact L6 / Step 6.1); the criterion’s Step 1.2 proves that direction in ZF, while its Countable-Choice-dependent converse is Step 1.3 and is not used. This is an overbroad graph path, not an axiom used by these proofs. The infinite-dimensional positivity supplier with a Countable Choice dependency is also not used; the finite-dimensional positivity definition and spectral theorem supply the Hermitian argument.

## Sources and retrieval

For the A page, the two independent treatments were read in full for the relevant passages:

- John Watrous, *The Theory of Quantum Information*, §1.1.3, Eqs. (1.165)–(1.182), the Jordan–Hahn discussion on printed pp. 26–27, and the complete Chapter 3 §3.1.1 / Theorem 3.4 proof. Chapter 1 is an explicitly proof-free review for the trace-norm formulas, so the local items give full proofs.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6, Appendices A.3, A.5, A.7, and A.10. Its A.5 zero-singular-vector completion is abbreviated and is not relied on as the proof of any local result; the complete root SVD theorem is used.

The B-page proposal listed Watrous Chapters 1–2 despite those passages not using Dirac notation. Coverage now records Watrous as contrast context/out-of-scope for the B example and de Wolf A.3/A.5/A.10 as its notation context; the two-dimensional calculations themselves are proved locally. The source locators, harvested headings/results, dispositions, reading-verification notes, retrieval history, and stamps are in `research/quantum-computing-algorithms-60-2026-10-15-batch-1.coverage.json`. `source-fetch-check --stamp` verified 4/4 coverage entries, with zero new stamps and zero documented drops. There were no retrieval failures and no source-resolution escalation.

## Scoped checks and readiness

Final scoped checks on the authored pair passed:

- `precheck`: 9 proof-bearing items checked, 0 failures; the two definitions are not applicable.
- `proof-layout`: 11 items, 34 phase steps, 0 defects.
- strict `proof-contract`: 11/11 items, 0 errors and warnings.
- `rendercheck`: all 11 items and both pages, 0 errors.
- `content-policy`: 11 scoped items, 0 errors and warnings.
- focused `depcheck`: 11 selected items, 721-item / 167-page prerequisite closure, 0 errors and warnings.
- batch-local dependency-level recomputation: 11 items, levels 0/1/2, 0 errors.
- `coverage-checklist`: 2 pages, 14 harvested results, 0 errors and warnings.
- `source-fetch-check --stamp`: 4/4 verified, 4/4 resolved, 0 new stamps, 0 drops.

All 11 items have individual Step 1 `ready` records written with `node tools/step1-decisions.mjs record`, using each carrier’s current direct dependency list. A focused current-hash check through `step1Decision` confirms all 11 records are still closed and `ready`. These records state authoring readiness only and are not approval. The aggregate Step 1 checker still cannot evaluate the whole run: it stops on malformed YAML in an unowned QA-19 carrier, for example `items/alg-qa-19-complete-graph-spatial-search.md:28`, where the unquoted source title `Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1` is parsed as a nested mapping. The owner’s `proof-contract-coverage` run scope likewise stops before batch 1 on the empty inventory `reversible-arithmetic-and-oracle-conversion`. These out-of-pair files were not edited.

A fresh autopilot status recomputation (2026-10-15T17:50:03Z) reports the run still `running`, with 8/60 scaffold subjects covered and batch 1 still in the stage's `missing` list; the artifact-missing list now starts at batch 2 after the batch-1 readiness records were written. It also reports run-level blockers: `plan()` returned `Invalid pair undefined`; batch 12 has invalid construction-scheduling item `def-qc-effective-unitary-matrix-input`; item handoff fails on the unquoted John Preskill source title in line 16; and Step 1 owner repair/recertification remains required under `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. No `.autopilot` state or foreign batch evidence was changed.
