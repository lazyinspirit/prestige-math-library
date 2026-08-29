# frontier-23 reader-8 report

Date: Saturday, August 29, 2026.

## Opened scope

- Control and instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-23-reader.task.md`, `research/frontier-23-dispatch/reader-reader-8.prompt.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-23-batch-8.pages.json`, `research/frontier-23-batch-8.coverage.json`, `research/frontier-23-batch-8.notes.md`, and `research/frontier-23-batch-8.proof-contracts.json`.
- Assigned pages: `library/category-theory/exactness-and-the-member-calculus.md` and `library/category-theory/exactness-and-the-member-calculus-examples.md`.
- Assigned items: all 58 batch-8 manifest items under `items/`, namely the 39 A-page items, 10 A-page `fs/cex` witnesses, and 9 B-page examples named in `research/frontier-23-batch-8.pages.json`.
- Required page dependencies opened: `library/category-theory/abelian-categories.md`, `library/category-theory/subobject-lattices-generators-and-the-grothendieck-axioms.md`, `library/category-theory/subobject-lattices-generators-and-the-grothendieck-axioms-examples.md`, and `library/abstract-algebra/free-modules-and-exact-sequences.md`.
- Direct dependency items opened for verification: `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero`, `cor-equalizers-are-monic-and-coequalizers-are-epic`, `def-abelian-category`, `def-biproduct`, `def-category`, `def-equivalence-of-members`, `def-exact-functor-between-abelian-categories`, `def-image-and-coimage-in-a-category-with-kernels-and-cokernels`, `def-injective-object`, `def-kernels-and-cokernels-as-equalizers-and-coequalizers`, `def-member-of-an-object`, `def-monomorphism-and-epimorphism`, `def-projective-object`, `def-pullbacks-and-pushouts`, `def-small-finite-and-large-limits-completeness-and-cocompleteness`, `def-subobject-and-quotient-object`, `def-the-axioms-ab5-and-ab5-star`, `def-filtered-category-and-filtered-colimit`, `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism`, `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero`, `prop-zero-object-induces-zero-morphisms`, `thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs`, `thm-abelian-groups-form-an-abelian-category`, `thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits`, `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism`, `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism`, `thm-injective-object-characterisations`, `thm-modules-over-a-ring-form-an-abelian-category`, `thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation`, `thm-projective-object-characterisations`, `thm-representable-functors-preserve-small-limits`, `thm-splitting-lemma-for-modules`, `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors`, `thm-the-opposite-of-an-abelian-category-is-abelian`, and `thm-the-pullback-of-an-epimorphism-is-an-epimorphism`.

## Edits kept

- `items/thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian.md`
  Replaced the uncited short-exactness jump with an explicit cokernel-based pushout proof and aligned the dependency list with the repaired argument.
- `items/thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses.md`
  Rewrote the kernel-half proof as a typed covering-criterion argument and kept the cokernel half as its formal dual.
- `items/thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each.md`
  Replaced the non-typed kernel-pullback discussion with a proof that cites the repaired endpoint-hypothesis theorem and proves the first kernel node by monicity.
- `items/thm-the-kernel-cokernel-sequence-of-a-composite.md`
  Added the missing middle map `q_f k_g`, defined the other canonical comparison arrows, and replaced the sketch proof with explicit comparison diagrams plus duality.
- `items/fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks.md`
  Replaced the non-refutation with a concrete pointed-category counterexample in commutative rings, showing `x \equiv y`, `y \equiv z`, but `x \not\equiv z`.
- `items/ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps.md`
  Restored the dropped `\ker(g)` term and corrected the concrete maps to `\times 2`, `0`, and `1_{\mathbb Z/2}`.
- `items/fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism.md`
  Narrowed the claim to the subobject-side definition of exactness, which is the point actually discharged by item 1.
- `research/frontier-23-batch-8.proof-contracts.json`
  Regenerated the seven affected contract entries after the item repairs and updated boundary evidence for the repaired proofs.

No page prose change was needed.

## Confirmed defects repaired

1. `thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian` used the kernel-cokernel conclusion without citing or proving it and did not actually spell out the pushout universal property.
2. `thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses` contained a handwavy kernel proof that did not trace the induced maps through the kernel universal properties.
3. `thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each` relied on an untyped “cartesian on kernels” discussion instead of a valid argument.
4. `thm-the-kernel-cokernel-sequence-of-a-composite` omitted the connecting morphism from its statement and supplied only an uninstantiated splice sketch.
5. `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` did not give a counterexample; it only observed that the abelian proof uses a stronger hypothesis.
6. `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps` dropped the `\ker(g)` term and therefore displayed the wrong concrete sequence.
7. `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism` overclaimed: the dual quotient-side definition shows the original universal phrasing was false, while the subobject-side phrasing is the intended refutation.

No uneditable in-flight-item, page, or published-dependency defect remained after those repairs on the opened batch-8 scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <7 changed items>`
  Result: all 7 changed items reflowed into canonical form.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-8.proof-contracts.json thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each thm-the-kernel-cokernel-sequence-of-a-composite ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism`
  Result: regenerated the six fact-bearing repaired entries; the self-contained ring counterexample contract was updated directly after `regen-contract-entries` skipped it.
- `node tools/tsx-run.mjs tools/precheck.mts <7 changed items>`
  Result: pass, `7 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-23-batch-8.proof-contracts.json --strict --items thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian,thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,thm-the-kernel-cokernel-sequence-of-a-composite,fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks,ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps,fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism`
  Result: pass, `0 error(s), 0 warning(s), 7/7 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-8.proof-contracts.json --items-dir items --items thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian,thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,thm-the-kernel-cokernel-sequence-of-a-composite,fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks,ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps,fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism --fail-on-missing-quote`
  Result: pass, no missing quotes and no widening candidates.
- `node tools/rendercheck.mjs library/category-theory/exactness-and-the-member-calculus.md library/category-theory/exactness-and-the-member-calculus-examples.md <7 changed items>`
  Result: pass, `OK — 9 file(s)`.
- `git diff --check -- <7 changed items> research/frontier-23-batch-8.proof-contracts.json`
  Result: pass.

## Page verdicts

- `exactness-and-the-member-calculus`
  Sufficient after repair on the opened scope. The exactness lemmas now give typed constructions, and the composite exact-sequence item now states and proves the actual canonical maps it needs.
- `exactness-and-the-member-calculus-examples`
  Sufficient after repair on the opened scope. The module example now matches the repaired theorem, and the false-statement witnesses now include an actual nontransitivity counterexample and a correctly scoped exactness-definition warning.

## Blockers

- None in the opened batch-8 scope.
- No uneditable published-dependency defect remains.
