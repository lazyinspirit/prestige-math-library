# frontier-25 reader-7 report

Date: Sunday, August 30, 2026.
Run: `frontier-25`.
Batch: `7`.
Role: independent Step-6 reader.

## Opened scope

- Batch artifacts:
  `research/frontier-25-reader.task.md`,
  `research/frontier-25-beta-7.task.md`,
  `research/frontier-25-batch-7.pages.json`,
  `research/frontier-25-batch-7.proof-contracts.json`,
  `research/frontier-25-batch-7.notes.md`,
  `research/frontier-25-step6-hash-7-pre.json`.
- Assigned page files:
  `library/homological-algebra/chain-homotopy-and-the-homotopy-category.md`,
  `library/homological-algebra/chain-homotopy-and-the-homotopy-category-examples.md`.
- Assigned A-page items:
  `def-graded-morphism-of-chain-complexes`,
  `def-hom-complex-of-chain-complexes`,
  `lem-the-hom-complex-differential-squares-to-zero`,
  `prop-zero-cocycles-in-the-hom-complex-are-chain-maps`,
  `def-chain-homotopy`,
  `def-null-homotopic-chain-map`,
  `prop-chain-homotopy-is-an-equivalence-relation`,
  `lem-chain-homotopy-is-compatible-with-addition-and-composition`,
  `prop-null-homotopic-maps-form-a-two-sided-additive-ideal`,
  `thm-chain-homotopic-maps-induce-the-same-map-on-homology`,
  `cor-null-homotopic-maps-induce-zero-on-homology`,
  `def-chain-homotopy-equivalence`,
  `def-contractible-complex`,
  `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism`,
  `cor-a-contractible-complex-is-acyclic`,
  `def-homotopy-classes-of-chain-maps`,
  `lem-composition-of-homotopy-classes-is-well-defined`,
  `def-homotopy-category-of-chain-complexes`,
  `thm-the-homotopy-category-is-additive`,
  `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive`,
  `thm-homology-factors-uniquely-through-the-homotopy-category`,
  `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`,
  `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex`,
  `def-shift-of-a-chain-complex`,
  `lem-the-shifted-differential-squares-to-zero`,
  `def-shift-of-a-chain-map-and-chain-homotopy`,
  `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories`,
  `prop-homology-of-a-shift-is-shifted-homology`,
  `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms`,
  `def-suspension-and-desuspension-of-a-chain-complex`,
  `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible`,
  `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split`,
  `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split`,
  `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes`,
  `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence`,
  `fs-chain-homotopic-maps-are-equal-as-chain-maps`,
  `fs-every-acyclic-complex-is-contractible`,
  `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence`,
  `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities`,
  `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign`.
- Assigned B-page items:
  `ex-a-contracting-homotopy-for-the-two-term-identity-complex`,
  `ex-two-homotopic-maps-with-different-components`,
  `ex-the-hom-complex-of-two-two-term-complexes`,
  `ex-a-split-exact-complex-and-its-contraction`,
  `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`,
  `cex-a-quasi-isomorphism-with-no-homotopy-inverse`,
  `ex-shifting-a-three-term-complex-with-all-signs`,
  `ex-homotopy-classes-as-h-zero-of-a-hom-complex`.
- Dependency items opened to verify the current proofs and definitions:
  `def-bounded-bounded-below-and-bounded-above-complex`,
  `def-chain-complex-in-an-abelian-category`,
  `def-chain-map`,
  `def-cycle-and-boundary-subobjects-of-a-complex`,
  `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex`,
  `def-homology-object-of-a-chain-complex`,
  `def-injective-object`,
  `def-projective-object`,
  `def-quasi-isomorphism`,
  `prop-finite-biproducts-of-complexes-are-computed-degreewise`,
  `prop-homology-respects-identities-and-composition`,
  `prop-identities-and-composites-of-chain-maps-are-chain-maps`,
  `thm-a-chain-map-induces-a-well-defined-map-on-homology`,
  `thm-abelian-groups-form-an-abelian-category`,
  `thm-homology-is-an-additive-functor`,
  `thm-the-category-of-complexes-in-an-additive-category-is-additive`,
  `thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups`,
  `thm-the-opposite-of-an-abelian-category-is-abelian`.

## Repaired defects

1. `items/def-chain-homotopy.md`
   The definition's final sentence invoked the Hom-complex boundary formulation
   without declaring that dependency. I repaired the item by adding
   `def-hom-complex-of-chain-complexes` to `deps` and turning the sentence into
   an explicit wikilinked citation of the earlier definition.

2. `items/prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category.md`
   The original proof established only
   `[1_C]=0 \iff C_\bullet \text{ contractible}` plus
   `contractible \Rightarrow acyclic`, but its title and last sentence claimed
   the stronger existential consequence that vanishing homology does not force
   zero in the homotopy category. I repaired the claim by adding the explicit
   abelian-group witness
   `0 -> Z -> Z -> Z/2 -> 0`, proving inside the item that it is acyclic and not
   contractible, and concluding from step `1.1` that its identity class is
   nonzero in `K(\mathbf{Ab})`.

## Contract updates

- Regenerated the affected `citations` and `derivations` entries in
  `research/frontier-25-batch-7.proof-contracts.json` for:
  `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`,
  `prop-chain-homotopy-is-an-equivalence-relation`,
  `lem-chain-homotopy-is-compatible-with-addition-and-composition`,
  `thm-chain-homotopic-maps-induce-the-same-map-on-homology`,
  `fs-chain-homotopic-maps-are-equal-as-chain-maps`,
  `fs-every-acyclic-complex-is-contractible`,
  `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence`,
  `ex-a-contracting-homotopy-for-the-two-term-identity-complex`,
  `ex-two-homotopic-maps-with-different-components`,
  `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`.
- Corrected the stale `iff-reverse` boundary evidence row for
  `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`
  after the proof rewrite.
- No `verification.judge` record was removed; the touched items are draft items
  with no judge stamp on disk.

## Uneditable defects

- None confirmed after the licensed repairs above.

## Page verdicts

- `chain-homotopy-and-the-homotopy-category`: repaired and closed on the current
  bytes.
- `chain-homotopy-and-the-homotopy-category-examples`: closed with no edit on
  the current bytes.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/def-chain-homotopy.md items/prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category.md`
  -> both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-chain-homotopy.md items/prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category.md`
  -> `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`
  passed; `def-chain-homotopy` is a definition with `precheck: n/a`.
- `node tools/rendercheck.mjs items/def-chain-homotopy.md items/prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category.md library/homological-algebra/chain-homotopy-and-the-homotopy-category.md`
  -> OK.
- `node tools/content-policy.mjs research/frontier-25-batch-7.pages.json`
  -> `48` scoped items, `0` errors, `0` warnings.
- `node tools/proof-contract.mjs research/frontier-25-batch-7.proof-contracts.json --strict`
  -> `0` errors, `0` warnings, `37/37` items checked.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-7.proof-contracts.json --fail-on-missing-quote`
  -> `108` citations checked, no missing quote, no widening candidate.
- `node tools/boundary-audit.mjs research/frontier-25-batch-7.proof-contracts.json`
  -> no contradicted disposition, no template cluster at threshold.
- `git diff --check -- items/def-chain-homotopy.md items/prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category.md research/frontier-25-batch-7.proof-contracts.json`
  -> clean.

## Blockers

- None.
