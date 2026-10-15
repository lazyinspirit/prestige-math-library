# Batch 12 authoring notes — hopf-hecke-unfinished-15-2026-10-15

## Scope and plan comparison

Read the owner authoring direction, Batch 12 task and dependency-order task, HH-15 design in research/plan-hopf-hecke-algebras-track.md, the current research/plan-spec.json, the scaffold inventory, the current batch manifest, scope ledger, drift evidence, baseline blocker record, and active run status.

The HH-15 design and current plan agree on page IDs, order 1716/1717, category, titles, and all four declared page prerequisites. The plan-spec item lists are intentionally still empty while the design and scaffold inventory specify the HH-15 contracts; there is no design/spec conflict to record. The active run status at authoring was running at 1-scaffold, with no worker in flight and no scaffold results collected. The earlier baseline validate-plan blocker reports the expected zero authored items and the correct HH-15 page interfaces.

The scaffold inventory proposed five A-page items. Two additional A-page suppliers were necessary under the proof route and the instruction to make implicit constructions explicit:

- **def-hh-type-a-rational-skew-group-algebra** defines the crossed multiplication used by the operator proof and proves associativity before that algebra is used.
- **lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization** transports the published square-root-normalized finite standard basis to the universal Q normalization by the explicit free rank-two extension Z[Q,Q^-1] → Z[v,v^-1], Q ↦ v². The rank-two free extension then reflects the basis isomorphism back to Z[Q,Q^-1].

The published **def-affine-and-cyclotomic-type-a-hecke-algebras** on **cyclotomic-hecke-and-quiver-hecke-algebras** was read and preserved. It states the affine generator relation in a finite-quantum-characteristic field branch and includes cyclotomic material; it does not supply the universal coefficient-ring PBW, polynomial representation, or center contracts owed here. The new IDs are distinct, and that carrier was not edited or used as a substitute for the universal proof.

## In-run item dependencies

All levels are recomputed from actual manifest dependencies. External published suppliers do not raise an in-run level.

| Item | In-run suppliers | Level |
|---|---|---:|
| lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization | none | 0 |
| def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences | none | 0 |
| def-hh-type-a-rational-skew-group-algebra | def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences | 1 |
| def-hh-type-a-affine-bernstein-presentation | def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences | 1 |
| lem-hh-demazure-lusztig-operators-satisfy-affine-relations | weight/divided-difference, skew algebra, affine presentation | 2 |
| thm-hh-affine-type-a-bernstein-pbw | Demazure–Lusztig operators, finite normalized basis | 3 |
| thm-hh-affine-type-a-center | PBW, Demazure–Lusztig operators | 4 |
| ex-hh-type-a-negative-laurent-divided-difference | weight/divided-difference | 1 |
| ex-hh-type-a-rank-two-bernstein-relation | weight/divided-difference, affine presentation | 2 |
| ex-hh-type-a-polynomial-module-action | weight/divided-difference, skew algebra, Demazure–Lusztig operators | 3 |
| ex-hh-type-a-symmetric-central-elements | center theorem, weight/divided-difference | 5 |

The item-level checker is the source of truth for these labels. Batch 12 still has dependency level zero and no in-run prerequisite batches; research/hopf-hecke-unfinished-15-2026-10-15-batch-12.cross-batch-dependencies.json is empty. Editing the assigned manifest changes the hash input to the run-wide batch scheduling artifact. That shared artifact is owner/controller state and was left untouched; the controller must recompute it before a later dispatch.

## Supplier and convention audit

The actual published suppliers were read, not inferred from page titles. The Laurent construction gives a free monomial basis, the domain condition and a fraction field; the type-A Coxeter result identifies adjacent generators and length with S_n; the free-presentation supplier gives quotient universal properties; the generic Hecke supplier is in (U_i-v)(U_i+v^-1) normalization; the finite basis and normalization suppliers establish the conversion T_i=vU_i, Q=v²; and the universal-presentation supplier transports presented algebras and explicit bases under arbitrary commutative base change. No source supplier provides the present local adjacent braid calculation or a center theorem after arbitrary specialization.

The Laurent divided difference is defined only after its divisibility proof. The proof treats all integer exponent differences, including negative exponents, and uses only finite geometric sums and domain cancellation. The skew product is built and its action on the fraction field is checked locally. The adjacent braid proof expands the six elements of the rank-three symmetric group and compares all coefficients. PBW independence uses a nonzero top-permutation coefficient over the universal fraction field; arbitrary specialization follows from the explicit universal free basis, not from specialized faithfulness. The center claim is only over Z[Q,Q^-1]; no center-preservation claim is carried through base change. Every argument is choice-free.

The source normalization check was explicit: the old finite generator is denoted U_i; setting T_i=vU_i and Q=v² gives (T_i-Q)(T_i+1)=0, and each braid side scales by the same power because it has the same number of factors.

## Source retrieval and disposition

The direct Cambridge Core chapter endpoint for Macdonald's book returned a login-alert HTML page rather than chapter text. Searches for accessible full text found Macdonald's complete Bourbaki lecture, Cherednik's complete 42-page Harvard lecture notes, and Solleveld's complete article. The finite-basis work also inspected the full relevant Lusztig lecture section and the cited pages of the full Björner–Brenti book. The seven-page Burrull note was read only for the page-level p-adic convolution comparison; it is labelled rough in the note and supplies no proof premise.

The command node tools/source-fetch-check.mjs --coverage research/hopf-hecke-unfinished-15-2026-10-15-batch-12.coverage.json --stamp returned 6/6 source(s) fetch-verified and 6/6 source(s) resolved; the actual stamps are stored in coverage. Cherednik states the PBW result but defers its independence proof; Macdonald's Bourbaki lecture states the Bernstein basis and center while citing a finite-basis proof or using specialization for the reverse center inclusion; Solleveld's theorem also cites Bernstein/Lusztig. These statements were harvested as context only. Every result used here has a complete local argument, and none of the source citations is treated as proof acceptance.

Source locators, all six fetched URLs, per-result support, and each disposition are recorded in the coverage file. No source remains unresolved, so no source_resolution.status drop or owner escalation is asserted.

## Reconciliation and outstanding owner input

The only added scope is the two local A-page prerequisites above, both placed before their consumers. No published item, shared plan, engine state, or verdict was edited. The run-wide scheduling input hash still reflects the pre-authoring manifest; its owner/controller recomputation is the remaining operational reconciliation before dispatch. Mathematical source and proof work is complete within Batch 12.

## Final scoped checks

- `node tools/tsx-run.mjs tools/precheck.mts <11 explicit item paths> --json`: 11/11 pass. Each proof-bearing draft records `verification.precheck: pass` from this run.
- `node tools/proof-layout.mjs <11 explicit item paths>`: 11 items, 46 steps, 0 defects.
- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-12.proof-contracts.json --strict --json`: 11/11 checked, no errors or warnings.
- Focused `depcheck` using the batch-12 item selection: 0 errors, 0 warnings; it checked the 527-item prerequisite closure and 60 prerequisite pages.
- `content-policy` on the batch-12 manifest: 11 items, 0 errors, 0 warnings.
- Batch-only item-level recomputation: all 11 manifest levels equal `max(in-run supplier level)+1` (zero when no in-run supplier), and every manifest `deps`, `justified_by`, and `dependency_level` matches its item frontmatter.
- `source-fetch-check --stamp`: all 6/6 source URLs remain fetch-verified and resolved; no new stamp was needed.
- `node tools/step1-decisions.mjs record`: all 11 Batch 12 items were recorded `ready` with their examined direct dependencies and current hashes. A focused re-read confirms all 11 records are closed.
- Run-wide `step1-decisions check` remains open because 96 items on the other ten in-flight pairs still lack closed readiness records; Batch 12 contributes no unresolved item. Those pairs remain with their assigned authors.

The batch-12 cross-batch dependency input remains empty, matching its level-zero scheduling assignment. The shared run-wide scheduling hash still requires owner/controller recomputation after this manifest change; it was not edited here.

## Controller handoff

The recomputed autopilot status remains `running` at `1-scaffold` (5/15 covered). The current owner blocker is `stage-stalemate` on unit `10`: it is covered, artifact-incomplete, and no longer running. The blocker file names no Batch 12 item. Its required owner/operator reconciliation and any shared scheduling-hash refresh remain outside this pair's files and were left untouched.

