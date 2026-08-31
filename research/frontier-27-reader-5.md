# frontier-27 reader-5 report

Date: Monday, August 31, 2026.
Batch: `5`.
Assigned A/B pair: `closed-monoidal-categories-and-the-internal-hom` / `closed-monoidal-categories-and-the-internal-hom-examples`.

## Opened scope

- Control and batch artifacts: `CLAUDE.md`, `README.md`, `research/STANDING-INSTRUCTIONS.md`, `.autopilot/frontier-27/status.md`, `.autopilot/frontier-27/state.json`, `research/frontier-27-batch-5.pages.json`, `research/frontier-27-batch-5.coverage.json`, `research/frontier-27-batch-5.proof-contracts.json`, `research/frontier-27-batch-5.notes.md`, `research/frontier-27-alpha-b-step3-scaffold-review.md`, `research/frontier-27-alpha-b-step3-verdicts.json`, `research/frontier-27-alpha-b-recheck.md`.
- Assigned pages: `library/category-theory/closed-monoidal-categories-and-the-internal-hom.md`, `library/category-theory/closed-monoidal-categories-and-the-internal-hom-examples.md`.
- Assigned items: `def-left-closed-and-right-closed-monoidal-category`, `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism`, `def-the-internal-hom-and-its-evaluation-morphism`, `thm-in-a-symmetric-monoidal-category-the-two-closures-agree`, `cex-a-monoidal-category-need-not-be-closed`, `thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable`, `thm-the-internal-hom-is-continuous-in-each-variable`, `thm-the-internal-hom-composition-morphism`, `thm-the-unit-is-an-internal-hom-unit`, `def-exponential-object`, `def-cartesian-closed-category`, `thm-set-is-cartesian-closed`, `thm-the-category-of-small-categories-is-cartesian-closed`, `thm-a-presheaf-category-on-a-small-category-is-cartesian-closed`, `thm-currying-and-uncurrying-are-mutually-inverse`, `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects`, `thm-cartesian-closed-preorders-have-relative-implications`, `def-slice-category-and-the-pullback-functor`, `def-locally-cartesian-closed-category`, `thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed`, `thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed`, `thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits`, `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint`, `thm-set-is-locally-cartesian-closed`, `def-subobject-classifier`, `thm-a-subobject-classifier-represents-the-subobject-functor`, `thm-the-two-element-set-is-a-subobject-classifier-for-sets`, `rem-what-is-not-developed-here`, `fs-every-monoidal-category-is-closed`, `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category`, `fs-a-cartesian-closed-category-has-all-finite-limits`, `fs-every-cartesian-closed-category-is-locally-cartesian-closed`, `fs-a-subobject-classifier-is-any-object-representing-monomorphisms`, `ex-the-function-set-as-an-exponential-computed`, `ex-currying-for-sets-of-three-variables`, `ex-the-internal-hom-of-abelian-groups`, `ex-the-exponential-of-two-small-categories`, `ex-a-locally-cartesian-closed-slice-computed`, `ex-the-subobject-classifier-of-a-presheaf-category`.
- Published dependencies opened for verification: `def-monoidal-category`, `def-adjunction-by-unit-counit-and-triangle-identities`, `thm-adjoints-are-unique-up-to-unique-natural-isomorphism`, `def-natural-isomorphism`, `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category`, `def-lattice-distributive-lattice-and-order-ideal`, `cor-left-adjoints-preserve-colimits`, `thm-right-adjoints-preserve-limits`, `thm-set-has-all-small-limits`, `thm-currying-is-an-adjunction-in-set`, `cor-set-cat-and-every-complete-category-are-cartesian-monoidal`, `def-functor-category`, `prop-size-of-functor-categories`, `def-yoneda-embedding`, `cor-contravariant-yoneda-lemma`, `thm-limits-and-colimits-in-functor-categories-are-computed-pointwise`, `thm-a-category-with-finite-products-is-monoidal`, `def-products-and-coproducts`, `prop-preorders-as-categories-and-monotone-maps-as-functors`, `def-comma-slice-and-coslice-categories`, `def-pullbacks-and-pushouts`, `def-functor-and-contravariant-functor`, `def-initial-terminal-and-zero-object`, `prop-sets-and-functions-form-category-set`, `def-subobject-and-quotient-object`, `def-well-powered-and-co-well-powered-category`, `def-presheaf-representable-functor-and-representation`, `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence`, `thm-monomorphisms-and-epimorphisms-in-set`, `thm-hom-tensor-adjunction-for-modules`, `def-the-reverse-and-the-opposite-of-a-monoidal-category`.

## Edits

1. Repaired `items/thm-the-internal-hom-composition-morphism.md`.
   The old unit construction transposed the wrong unitor and cited adjoint-uniqueness where the actual reason was uniqueness inside a fixed transpose bijection. I changed the proof to use the left unitor, removed the unnecessary dependency, and aligned the proof contract.
2. Repaired `items/thm-the-unit-is-an-internal-hom-unit.md`.
   The old step `1.1` jumped from `-\otimes \mathbf 1 \cong 1_\mathcal C` to right-adjoint uniqueness without first exhibiting the identity functor as a right adjoint to `-\otimes \mathbf 1`. I inserted that adjunction argument explicitly and updated the contract.
3. Repaired `items/thm-the-internal-hom-is-continuous-in-each-variable.md`.
   The old proof conflated the left internal hom `\langle X,Y\rangle` with the contravariant action of the right internal hom `[-,Y]`. I rewrote the contravariant-variable half directly: define the maps `[u,Y]` by transpose, use tensor cocontinuity from the preceding theorem, and prove that colimits in the first variable become limits. The item dependency list and proof contract now match that proof.
4. Repaired `items/fs-every-cartesian-closed-category-is-locally-cartesian-closed.md`.
   The old fact row cited `[[def-cartesian-closed-category]]` for local cartesian closedness. I added the missing dependency `def-locally-cartesian-closed-category` and corrected the citation.
5. Repaired `items/fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category.md`.
   The old witness `X=Y=R` does not separate the two closures in the bimodule category. I replaced it with the upper-triangular-matrix example `R=T_2(k)`, `N=ke_{12}`, `X=R/N`, `Y=R`, where the right and left internal homs identify with distinct annihilator bimodules.
6. Repaired source-reference rows in `items/thm-set-is-locally-cartesian-closed.md`, `items/thm-the-category-of-small-categories-is-cartesian-closed.md`, and `items/ex-the-internal-hom-of-abelian-groups.md`.
   These fixes removed or corrected stale locator/title mismatches without changing the mathematical body.
7. Updated `research/frontier-27-batch-5.proof-contracts.json` so the repaired derivations, citations, and step numbering match the current item bytes.

## Confirmed defects

- Repaired in-flight defect: `items/thm-the-internal-hom-composition-morphism.md`.
  Class: false claim plus citation inaccuracy.
  Evidence: the old step `1.2` used the right unitor, but the adjunction `-\otimes X\dashv[X,-]` requires a map `\mathbf 1\otimes X\to X` for the unit element, namely the left unitor.
- Repaired in-flight defect: `items/thm-the-unit-is-an-internal-hom-unit.md`.
  Class: unlicensed inference.
  Evidence: the old step `1.1` invoked uniqueness of right adjoints before showing that the identity functor is a right adjoint to `-\otimes \mathbf 1`.
- Repaired in-flight defect: `items/thm-the-internal-hom-is-continuous-in-each-variable.md`.
  Class: false claim.
  Evidence: the old step `1.2` derived a statement about `[-,Y]` from the left internal hom `\langle X,Y\rangle`, which is a different closure in the non-symmetric setting developed on this page.
- Repaired in-flight defect: `items/fs-every-cartesian-closed-category-is-locally-cartesian-closed.md`.
  Class: citation inaccurate.
  Evidence: local cartesian closedness was cited to `def-cartesian-closed-category` instead of its own definition item.
- Repaired in-flight defect: `items/fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category.md`.
  Class: false claim.
  Evidence: for the regular bimodule `R`, both one-sided internal-Hom constructions collapse to the regular bimodule again, so the old witness did not refute the statement.
- Repaired in-flight defect: source metadata in `items/thm-set-is-locally-cartesian-closed.md`, `items/thm-the-category-of-small-categories-is-cartesian-closed.md`, and `items/ex-the-internal-hom-of-abelian-groups.md`.
  Class: citation inaccurate.
  Evidence: the old rows cited Riehl's `Example 4.6.5` for `Set`-local-cartesian-closedness, cited Riehl's `Example 4.4.9` for `Cat` cartesian closedness, and mismatched Kelly's name against a Riehl URL.

No uneditable page, in-flight-item, or published-dependency defect remains on the current batch-5 bytes.

## Page verdicts

- `closed-monoidal-categories-and-the-internal-hom`: pass after the repairs above. The title, summary, proofs, and false-statement witnesses are now coherent against the opened dependencies.
- `closed-monoidal-categories-and-the-internal-hom-examples`: pass. The example computations and source rows are now consistent with the current A-page mathematics.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-the-internal-hom-composition-morphism.md items/thm-the-unit-is-an-internal-hom-unit.md items/thm-the-internal-hom-is-continuous-in-each-variable.md items/fs-every-cartesian-closed-category-is-locally-cartesian-closed.md items/fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category.md items/thm-set-is-locally-cartesian-closed.md items/thm-the-category-of-small-categories-is-cartesian-closed.md items/ex-the-internal-hom-of-abelian-groups.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-the-internal-hom-composition-morphism.md items/thm-the-unit-is-an-internal-hom-unit.md items/thm-the-internal-hom-is-continuous-in-each-variable.md items/fs-every-cartesian-closed-category-is-locally-cartesian-closed.md items/fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category.md items/thm-set-is-locally-cartesian-closed.md items/thm-the-category-of-small-categories-is-cartesian-closed.md items/ex-the-internal-hom-of-abelian-groups.md`
- `node tools/proof-contract.mjs research/frontier-27-batch-5.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-27-batch-5.proof-contracts.json --fail-on-missing-quote`
- `node tools/content-policy.mjs research/frontier-27-batch-5.pages.json`

Observed results:

- `reflow` left all changed items unchanged.
- `precheck` passed on all `8` changed items.
- `proof-contract --strict` passed with `0 error(s), 0 warning(s), 31/31 item(s) checked`.
- `citation-fidelity` passed with `74` citations and no missing quotes or widening candidates.
- `content-policy` passed with `39 scoped item(s), 0 error(s), 0 warning(s)`.

## Blockers

- No blocker remains for batch `5`.
