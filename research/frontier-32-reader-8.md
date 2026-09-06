# Frontier 32 — Step 6a reader 8 (Batch 8)

## Scope opened

- Task, manifest, contracts, coverage record, and authoring notes:
  `research/frontier-32-dispatch/reader-reader-8.prompt.md`,
  `research/frontier-32-batch-8.pages.json`,
  `research/frontier-32-batch-8.proof-contracts.json`,
  `research/frontier-32-batch-8.coverage.json`, and
  `research/frontier-32-batch-8.notes.md`.
- Assigned current pages: A page
  `library/homological-algebra/triangulated-categories.md` and B page
  `library/homological-algebra/triangulated-categories-examples.md`.
- All 53 assigned current items: 46 A items
  (`def-category-with-translation` through
  `fs-the-rotation-of-a-distinguished-triangle-has-no-sign`) and 7 B items
  (`ex-the-split-distinguished-triangle` through
  `cex-nonuniqueness-of-a-tr-three-completion`), in the manifest order.
- Direct dependency closure: `def-abelian-category`, `def-additive-category`,
  `def-additive-functor`, `def-biproduct`, `def-cone-triangle-of-a-chain-map`,
  `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex`,
  `def-functor-and-contravariant-functor`,
  `def-homotopy-category-of-chain-complexes`, `def-natural-isomorphism`,
  `def-quasi-isomorphism`, `def-split-monomorphism-and-split-epimorphism`,
  `def-zero-and-stalk-complex`,
  `lem-the-three-cone-calculation-for-a-composite-chain-map`,
  `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps`,
  `prop-finite-biproducts-of-complexes-are-computed-degreewise`,
  `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign`,
  `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism`,
  `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic`,
  `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones`,
  `thm-five-lemma-for-a-morphism-of-long-exact-sequences`,
  `thm-homology-factors-uniquely-through-the-homotopy-category`,
  `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories`,
  `thm-the-cone-long-exact-sequence`, `thm-the-cone-of-an-identity-map-is-contractible`,
  `thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups`,
  and `thm-the-homotopy-category-is-additive`.
- Opened external sources at the cited sections: Stacks Project §§13.3--13.4
  (tags `05QK`, `05QN`) for the axioms, representable exactness, splitting,
  and subcategories; §§13.9--13.10 (tags `014D`, `014P`) for cone triangles
  and the homotopy category; and the cited Yekutieli course notes.  The
  Stacks passages were used to check the signs, rotations, comparison
  triangles, and precise split-triangle orientation rather than relying on
  the prior coverage record.

## Confirmed in-flight repairs

- `thm-representable-hom-functors-on-a-triangulated-category`: corrected the
  Stacks citation (`05QN`) and replaced the invalid direct TR3 assertion with
  the rotated-identity-triangle comparison that proves exactness, plus its
  dual.  Its proof-contract obligations now name that comparison and its
  dual.
- `prop-a-distinguished-triangle-with-zero-first-map-is-split`: corrected the
  reference to Stacks Lemma 13.4.11 and repaired a fatal orientation error.
  A triangle with zero first arrow is now identified with the right rotation
  \(X\xrightarrow0Y\to Y\oplus X[1]\to X[1]\), rather than the incompatible
  unrotated canonical triangle.  The proof constructs the section and the
  explicit inverse pair; the contract was updated accordingly.
- `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes`:
  made the rotation convention explicit: a triangle is split *up to rotation*
  iff at least one of its three arrows is zero.  The proof and contract now
  reduce each case to the repaired zero-first-arrow proposition and prove the
  converse from the canonical split triangle.
- `fs-cones-form-a-functor-in-every-triangulated-category`: retained the
  proposed withdrawal but narrowed it to the actually false assertion: the
  axioms do not *canonically* supply a cone functor.  This agrees with the
  nonunique TR3 completion argument and its contract.
- `fs-every-triangulated-subcategory-is-thick`: retained the refutation but
  made its witness category \(K^b(\mathsf{Free}^{\mathrm{fg}}_{\mathbb Z})\),
  so the Euler characteristic used to exclude \(\mathbb Z/2\) is defined.
  Corrected its Stacks reference and the contract's witness obligation.
- Corrected stale citation tags in the remaining affected assigned items:
  `thm-long-exact-hom-sequences-of-a-distinguished-triangle`,
  `prop-two-isomorphism-components-of-a-morphism-of-triangles`,
  `def-distinguished-cone-triangle-in-the-homotopy-category`,
  `lem-cone-triangles-satisfy-the-octahedral-axiom`,
  `prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category`,
  `ex-an-octahedron-for-two-composable-maps-of-stalk-complexes`,
  `ex-the-thick-subcategory-of-acyclic-complexes`, `def-thick-subcategory`,
  `ex-the-long-exact-hom-sequence-of-a-cone-triangle`, and
  `prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories`.
  The `05RE`/`05RF`/`05RG` and `014F` targets had been cited for results in
  §§13.4/13.10; the new tags point to the sections actually containing them.

No affected item contained a `verification.judge` record, so none required
removal.  No A-page prose or B-page body was changed, and no published item,
other batch, or plan file was edited.

## Page verdicts

| Page | Verdict | Basis |
| --- | --- | --- |
| `triangulated-categories` (A) | pass after repair | Definitions, axiom typing/signs, split-triangle orientation, representable exactness, cone/homotopy constructions, and contracts are now mutually consistent. |
| `triangulated-categories-examples` (B) | pass after item citation repair | Each displayed computation/witness and its required cone or octahedral dependency was opened; B-page prose was not altered. |

## Validation

- Reflow check on all 15 changed items: unchanged.
- Precheck on the 13 changed proof-bearing items: 13 passed.
- `node tools/proof-contract.mjs research/frontier-32-batch-8.proof-contracts.json --strict`:
  35/35 contracts passed, with no errors or warnings.
- `node tools/content-policy.mjs research/frontier-32-batch-8.pages.json`:
  53 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-32-batch-8.pages.json`:
  53 items, 0 normalisations, 0 errors.

## Uneditable findings and blockers

None.  Every confirmed defect was in an assigned in-flight item and repaired
above.  There is no published-dependency, forbidden-page, or other uneditable
finding to place in the structured artifact, and no remaining blocker.
