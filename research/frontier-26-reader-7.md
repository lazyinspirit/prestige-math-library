# frontier-26 reader-7 report

Date: 2026-08-31.
Run: `frontier-26`
Batch: `7`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-26-reader.task.md`, `research/frontier-26-beta-7.task.md`, `research/frontier-26-batch-7.pages.json`, `research/frontier-26-batch-7.coverage.json`, `research/frontier-26-batch-7.proof-contracts.json`, `research/frontier-26-batch-7.notes.md`, `research/plan-homological-algebra-track.md` (HA-3 block), and `research/plan-spec.json`.
- Assigned pages: `library/homological-algebra/mapping-cones-cylinders-and-chain-triangles.md`, `library/homological-algebra/mapping-cones-cylinders-and-chain-triangles-examples.md`.
- Assigned A-page items: `def-mapping-cone-of-a-chain-map`, `lem-the-mapping-cone-differential-squares-to-zero`, `def-canonical-inclusion-and-projection-for-a-mapping-cone`, `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact`, `def-cone-triangle-of-a-chain-map`, `prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift`, `thm-the-cone-of-an-identity-map-is-contractible`, `prop-isomorphic-chain-maps-have-isomorphic-cones`, `def-morphism-of-chain-maps`, `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones`, `prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes`, `lem-homotopic-maps-have-chain-isomorphic-mapping-cones`, `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic`, `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible`, `def-mapping-cylinder-of-a-chain-map`, `lem-the-mapping-cylinder-differential-squares-to-zero`, `thm-the-mapping-cylinder-factors-a-chain-map`, `prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder`, `cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence`, `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone`, `prop-cones-preserve-chain-homotopy-equivalences-of-arrows`, `lem-the-three-cone-calculation-for-a-composite-chain-map`, `prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category`, `prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category`, `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism`, `prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences`, `def-relative-homology-of-a-chain-map`, `prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows`, `cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms`, `fs-the-mapping-cone-differential-needs-no-minus-sign`, `fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting`, `fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data`, `fs-an-acyclic-mapping-cone-is-contractible`, `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization`.
- Assigned B-page items: `ex-the-cone-of-multiplication-by-m-on-the-integers`, `ex-the-cone-of-zero-and-of-the-identity`, `ex-a-quasi-isomorphism-detected-by-an-acyclic-cone`, `cex-an-acyclic-noncontractible-cone`, `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes`, `ex-relative-homology-of-a-map-between-stalk-complexes`, `ex-the-three-cone-calculation-for-a-composite`, `cex-a-degreewise-split-cone-sequence-with-no-chain-splitting`.
- Published dependency items opened for verification: `def-category-of-chain-complexes`, `def-chain-homotopy`, `def-chain-homotopy-equivalence`, `def-chain-map`, `def-contractible-complex`, `def-exact-functor-between-abelian-categories`, `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex`, `def-homology-object-of-a-chain-complex`, `def-homotopy-category-of-chain-complexes`, `def-quasi-isomorphism`, `def-shift-of-a-chain-complex`, `def-shift-of-a-chain-map-and-chain-homotopy`, `def-short-exact-sequence-of-complexes`, `def-split-short-exact-sequence-in-an-abelian-category`, `lem-the-cokernel-of-a-chain-map-is-computed-degreewise`, `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps`, `prop-finite-biproducts-of-complexes-are-computed-degreewise`, `prop-homology-of-a-shift-is-shifted-homology`, `prop-identities-and-composites-of-chain-maps-are-chain-maps`, `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms`, `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`, `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism`, `thm-a-chain-map-induces-a-well-defined-map-on-homology`, `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive`, `thm-abelian-groups-form-an-abelian-category`, `thm-the-category-of-complexes-in-an-additive-category-is-additive`, `thm-the-homotopy-category-is-additive`, `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`.
- Source controls opened for disputed conventions: Weibel §1.5 searchable copies confirming the cylinder coordinates, the subcomplex `(b,0,0)`, and the quotient `\mathrm{cyl}(f)/B`; Stacks tag `014D` for the cone-functoriality and homotopy-category cautions already encoded on the page.

## Design/spec check

- The HA-3 design block and the live spec agree on the page order and companion page.
- They still differ on prerequisites: the design names `chain-homotopy-and-the-homotopy-category` and `exactness-and-the-member-calculus`, while `research/plan-spec.json` keeps `chain-homotopy-and-the-homotopy-category-examples`. I recorded the drift and kept the live spec unchanged.

## Confirmed defects and edits

1. Repaired `items/def-mapping-cylinder-of-a-chain-map.md`, `items/thm-the-mapping-cylinder-factors-a-chain-map.md`, and `items/prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone.md`.
   The cylinder definition had the source inclusion as `(x,f(x),0)`, but the current differential and Weibel's §1.5 convention place the source as the first-summand inclusion `(x,0,0)`. With the old formula, the quotient proof's class representative and induced differential were wrong. I corrected the inclusion, kept the factorization map `p(x,y,z)=f(x)+y`, and rewrote the quotient proof through the degreewise cokernel plus the sign-twist from `\operatorname{Cone}(-f)` to `\operatorname{Cone}(f)`.
2. Repaired `items/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic.md`.
   The old proof mixed the degree-`n` cone homology condition with injectivity of `H_{n-1}(f)` and then concluded an equivalence for `H_n(f)` without tracking the shift correctly. It also used the cone differential without depending on `def-mapping-cone-of-a-chain-map`. I replaced it with a direct cycle-and-boundary proof, added the missing dependency, and aligned the proof contract.
3. Repaired `items/thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible.md`.
   The old converse extracted a candidate homotopy inverse from a contraction but never established that the extracted map was a chain map, and the forward explicit contracting-homotopy formula was not justified. I rewrote the forward direction via the cone-preservation proposition and `\operatorname{Cone}(1_D)`, and rewrote the converse as a block-component calculation from `dH+Hd=1`.
4. Updated `research/frontier-26-batch-7.proof-contracts.json`.
   I regenerated the changed contract entries for `thm-the-mapping-cylinder-factors-a-chain-map`, `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone`, `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic`, `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible`, and the two downstream items whose exact quotes from `def-mapping-cylinder-of-a-chain-map` changed: `lem-the-mapping-cylinder-differential-squares-to-zero` and `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes`. I also corrected the stale `iff-forward` / `iff-reverse` boundary evidence on the quasi-isomorphism criterion.

## Per-page verdicts

- `mapping-cones-cylinders-and-chain-triangles`: pass after the repairs above. The current titles, summary prose, sign conventions, cone/cylinder constructions, and proof contracts now agree with the opened dependencies and the checked source convention.
- `mapping-cones-cylinders-and-chain-triangles-examples`: pass. The stalk-complex and two-term computations were rechecked against the repaired A-page conventions, and no B-page-body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-mapping-cylinder-of-a-chain-map.md items/thm-the-mapping-cylinder-factors-a-chain-map.md items/prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone.md items/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic.md items/thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible.md`
  Result: four proof-bearing items reflowed; the definition file was already stable.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-mapping-cylinder-of-a-chain-map.md items/thm-the-mapping-cylinder-factors-a-chain-map.md items/prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone.md items/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic.md items/thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible.md`
  Result: `4 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-26-batch-7.proof-contracts.json thm-the-mapping-cylinder-factors-a-chain-map prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible lem-the-mapping-cylinder-differential-squares-to-zero ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes`
  Result: all six contract entries regenerated cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts <all 36 proof-bearing batch-7 items from the contract scope>`
  Result: `36 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-26-batch-7.pages.json`
  Result: `42 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-26-batch-7.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 36/36 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-26-batch-7.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-26-batch-7.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `git diff --check -- items/def-mapping-cylinder-of-a-chain-map.md items/lem-the-mapping-cylinder-differential-squares-to-zero.md items/thm-the-mapping-cylinder-factors-a-chain-map.md items/prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone.md items/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic.md items/thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible.md items/ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes.md research/frontier-26-batch-7.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
