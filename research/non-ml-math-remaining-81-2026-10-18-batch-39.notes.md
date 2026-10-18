# Batch 39 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: PA-08, `regular-weyl-representations-and-stone-von-neumann`  
Scheduling input: `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`  
Assigned run-level dependency: 2; prerequisite batch: 38.

## Plan and design reconciliation

The full PA-08 design row in `research/plan-physics-algebras-track.md` fixes the finite-dimensional real Weyl algebra, the fixed nonzero central character, irreducibility, strong continuity, the explicit Schrödinger model, and the separate failure examples. It excludes arbitrary algebraic modules, nonregular representations from the uniqueness theorem, infinite-mode uniqueness, and domain-free unbounded commutators. Those boundaries are retained.

The current `plan-spec.json` makes both `heisenberg-and-algebraic-weyl-algebras` and `unitary-representations-positive-type-and-gns` page-level `requires`. The PA-08 design's formal prerequisite route names PA-07 and records GNS as an existing context route. This is a plan/design mismatch: the controlling plan wins, so the A page records both routes. Neither page-level route is treated as an item-level logical dependency except for the exact published interface `def-strongly-continuous-unitary-representation`, which is directly cited where used.

## Inventory and dependency levels

The final manifest has 9 A-page items and 4 B-page examples/counterexamples, below the 100-item cap. Item levels were recomputed from in-batch `deps`, including the added reference-vector construction and the explicit dependency from the regular-Weyl definition to the Heisenberg-group definition:

- Level 0: `def-heisenberg-group-of-a-symplectic-vector-space`, `def-incomplete-tensor-product-with-reference-vector`, `def-universal-weyl-c-star-algebra`.
- Level 1: `def-regular-weyl-system-on-a-symplectic-vector-space`, `lem-heisenberg-group-lagrangian-splitting-and-dual-orbit`, `lem-universal-weyl-c-star-algebra-is-well-defined`.
- Level 2: `lem-schrodinger-weyl-system-is-regular-and-irreducible`, `cex-universal-weyl-c-star-algebra-has-nonregular-representations`, `ex-zero-central-character-has-many-regular-characters`.
- Level 3: `thm-stone-von-neumann-for-finite-dimensional-weyl-systems`, `lem-one-mode-gaussian-weyl-average-is-rank-one`, `ex-one-mode-schrodinger-weyl-relations`.
- Level 4: `cex-infinite-mode-regular-weyl-representations-are-inequivalent`.

A pair-local `dependencyLevels` calculation over the final 13-item manifest reports no cycles or label errors. Every carrier's `deps` matches its manifest row. The run-level item-level check is broader and currently fails on unrelated run manifests; see the run-state section below.

## Mathematical route and conventions

The Heisenberg product is `(v,t)(w,s)=(v+w,t+s-ω(v,w)/2)`, so the central character `e^{iλt}` produces the Weyl phase `e^{-iλω/2}`. The finite-dimensional theorem converts a regular Weyl system to a strongly continuous Heisenberg representation, obtains its SNAG PVM, restricts that measure to the free orbit with central parameter `λ`, and applies Mackey imprimitivity with stabilizer `N`. The fiber comparison is done on a common conull set indexed by the explicit rational dense subset `Q^n×Q`; continuity and full support then identify the inducing representation with `χ_{0,λ}`. The Schrödinger model has the same inducing character, and Mackey uniqueness completes the proof.

The finite-mode theorem assumes AC because the SNAG, transitive-measure and Mackey suppliers do. Countable Choice remains a separate declared dependency for L² translation continuity, Fourier inversion/density and the Hilbert completions. The proof does not add arbitrary choices for rational dense sets or common conull intersections. The local group cocycle and symplectic-coordinate calculations are choice-free.

The universal C*-algebra treats the additive phase space as discrete; regularity is a property of a representation and is not built into the completion. The A page states the polynomial-algebra distinction locally and does not depend logically on the unaccepted PA-07 polynomial item. The new incomplete tensor-product item defines the Hilbert completion and proves the coordinate projections used by the infinite-mode example. That example proves only two inequivalent irreducible line-regular representations; it does not classify infinite-mode representations.

## Cross-batch supplier audit

The current PA-07 bodies inspected were `def-polynomial-weyl-algebra`, `lem-common-domain-commutator-integrates-to-weyl-relations`, and `rem-algebraic-weyl-modules-do-not-automatically-exponentiate`. They remain draft. The PA-08 page-reading route is therefore open for owner reconciliation. No PA-08 theorem depends on their acceptance: the polynomial comparison is defined locally, and no unbounded-operator/domain claim is made. The exact interfaces, conditional hypotheses and affected claims are in `batch-39.cross-batch-dependencies.json`.

The published GNS/positive-type page and `def-strongly-continuous-unitary-representation` were inspected. The latter's strong-continuity content is the exact definition-level interface used here; no positive-type theorem or GNS theorem is used as a Stone–von Neumann premise. The algebraic GNS construction for the universal Weyl norm is proved within PA-08.

## Sources and dispositions

Three independent full-text treatments were inspected: Speicher's lecture notes, Prasad's paper, and Fewster–Rejzner's AQFT introduction. Their full-text bodies were fetch-verified. Source records, locators, read extents, harvested headings, dispositions and hashes/stamps are in `batch-39.source-coverage.json`; the omission checklist mirror is `batch-39.coverage.json`.

- Speicher's Chapter VIII proof gives the one-mode uniqueness proof and describes the multi-mode extension as similar. The local Mackey proof supplies the finite-dimensional argument in full. Chapter X Example X.4 sketches its infinite-mode inequivalence argument; the local B-page proof supplies the tensor projections, cyclicity and inequivalence calculation.
- Prasad supplies an independent real-vector-space treatment and Gaussian averaging argument. The local proofs do not rely on its compressed Fourier/Plancherel steps.
- Fewster–Rejzner state the Weyl C*-completion with a reference to another source, leave `W(0)=1` as an exercise, and show an explicit ℓ² representation. The local C*-lemma and nonregularity counterexample prove the details used here.

No retrieval failed, so no `source_resolution` drop or escalation record was created. The source coverage checker reports 45 harvested results and one low-yield advisory: 10 of 26 A-page harvested results are `included`; all remaining results have explicit inline/out-of-scope dispositions and reasons. That advisory is preserved for independent review.

## Scoped checks

- `proof-layout.mjs` on all 13 changed items: 56 phase-tagged proof steps, zero defects.
- `precheck.mts` on all 10 proof-bearing items: 10 passed, zero failed.
- `proof-contract.mjs --strict`: 13/13 items checked, zero errors and warnings; every cited fact has an exact supplier excerpt and step-use map, all steps have input records, and all eight standard boundaries are dispositioned.
- `content-policy.mjs` on the batch manifest: 13 items, zero errors and warnings.
- focused `depcheck.mjs`: 13 items checked; prerequisite closure covers 1,776 items and 325 pages; zero errors and warnings.
- `rendercheck.mjs` on all 13 items and both pages: 15 files; renderer YAML and KaTeX checks passed with zero hard errors.
- `source-fetch-check.mjs --stamp`: 5/5 source records verified and resolved, zero failures. A check-mode rerun also passes 5/5.
- `coverage-checklist.mjs --require-destination`: 2 pages, 45 harvested results, zero errors and the one low-yield advisory above.
- Pair-local item dependency levels: 13 items, zero graph/label errors, maximum level 4.

## Readiness records and run-state blockers

All 13 batch-39 items have hash-current `ready` records under `research/<run>-step1-<item>.json`; no `--owner` option was used and no existing escalation was overwritten. The whole-run `step1-decisions check` remains open on other batches; it reports 1,166 run items and 836 ready, including 29 empty page inventories. All 13 batch-39 records are hash-current and ready. The existing owner escalation for `lem-it-quantum-relative-entropy-support-regularization` and all other owner records were left untouched.

The recomputed autopilot status reports stage `1-scaffold`, 48/81 covered, missing batches `11, 13, 14, 15, 17, 18, 19, 20` plus 25 more, and no in-flight work. Its blocker is `stage 1-scaffold: plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)`. The read-only run-level batch-dependency check separately reports `Invalid escape sequence \\D at line 26, column 102`; the diagnostic text points to the Drinfeld–Jimbo coproduct convention in `lem-hall-and-dj-borel-conventions-are-isomorphic` (batch 51). The full-run item dependency check covers 162 pages and 1,166 items and reports 29 unrelated empty scaffold inventories plus 89 unrelated stale dependency-level labels; it reports no batch-39 graph errors or cycles. These are shared owner-side inputs and were not edited.

The authoring records and proof contracts are submission evidence only; they are not independent mathematical approval or publication evidence.
