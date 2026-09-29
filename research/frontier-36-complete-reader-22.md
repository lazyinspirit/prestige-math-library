# Step 5a reader report — batch 22

Run: `frontier-36-complete`  
Role: reader (`reader-22`)  
Manifest: `research/frontier-36-complete-batch-22.pages.json`  
Contract file: `research/frontier-36-complete-batch-22.proof-contracts.json`

## Opened inventory

The manifest assigns pages 721–722 and nine draft items. I read the current
page files and item files, then opened the dependency carriers used in their
arguments. I also reviewed the assigned batch proof contracts and checked the
referenced source passages relevant to the totalization, K-flatness, and
two-sided-projective claims.

- A page: `library/homological-algebra/bounded-bimodule-complexes-and-derived-tensor.md`
- B page: `library/homological-algebra/bounded-bimodule-complexes-and-derived-tensor-examples.md`
- A items: `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization` (level 0); `lem-bimodule-tensor-totalization-respects-differentials-and-homotopies` (1); `thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility` (2); `thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor` (3); `prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors` (4); `thm-inverse-bimodule-complexes-give-derived-tensor-equivalences` (5).
- B items: `ex-two-term-tensor-complex-koszul-signs` (level 2); `ex-left-and-right-projective-not-enveloping-projective` (4); `ex-contractible-bimodule-complex-induces-zero-functor` (5).
- Relevant dependency items opened: `def-graded-ring-module-bimodule-and-internal-shift`; `def-graded-balanced-tensor-product-and-homogeneous-hom`; `def-cochain-complex-in-an-abelian-category`; `def-bounded-bounded-below-and-bounded-above-complex`; `def-tensor-product-total-complex-of-chain-complexes`; `def-tensor-product-of-modules-by-generators-and-relations`; `thm-bimodule-actions-induced-on-tensor-products`; `thm-universal-property-of-module-tensor-products`; `def-chain-homotopy`; `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero`; `lem-graded-balanced-tensor-and-shift-isomorphisms`; `def-mapping-cone-of-a-chain-map`; `def-cone-triangle-of-a-chain-map`; `def-standard-cone-triangle-in-the-homotopy-category`; `thm-the-homotopy-category-of-an-abelian-category-is-triangulated`; `thm-bimodule-tensor-exactness-and-projective-preservation`; `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`; `lem-projective-modules-are-flat-over-an-arbitrary-ring`; `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`; `def-derived-tensor-product-in-the-bounded-above-setting`; `def-derived-category-of-an-abelian-category`; `def-exact-functor-between-triangulated-categories`; `thm-the-derived-category-inherits-a-triangulated-structure`; `def-field`; `lem-field-is-a-commutative-ring`; `def-zero-divisor-and-integral-domain`; `def-multivariate-polynomial-ring-by-iteration`; `def-polynomial-ring-on-a-family-of-indeterminates`; `cor-multivariate-polynomial-ring-over-a-domain-is-a-domain`; `def-projective-module`.

## Item review and repair

All six A items and all three B items are mathematically supported under their
stated hypotheses. In particular, the cochain reindexing preserves the
Koszul sign; the two homotopy formulas have the required opposite mixed-term
signs; the cone comparisons preserve the connecting maps; right-projective
terms are flat, and the graded K-flat argument uses good truncations within
the degree bounds it states; and the two polynomial and contractible-complex
examples have the claimed conclusions.

I repaired one wording defect in
`items/def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization.md`:

- Changed “each differential … are degree-zero bimodule maps” to “each
  differential … is a degree-zero bimodule map.”
- Replaced “The empty or zero input” with “If either input is the zero
  complex.” A complex with empty support is already the zero complex, so this
  removes an undefined input case without changing the construction.
- Updated the corresponding `empty` boundary evidence in
  `research/frontier-36-complete-batch-22.proof-contracts.json` to say that
  empty support is the zero-complex case.
- No `verification.judge` record was present on the item. The edit does not
  change its mathematical statement or proof route; no other item or page was
  edited.

For the changed item, `node tools/tsx-run.mjs tools/reflow.mts items/def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization.md`
reported `unchanged`; precheck reported `0 checked, 0 failing`. I also parsed
the edited batch contract JSON successfully.

No defect was found in an uneditable item or published dependency. No
withdrawal is proposed. No blocker remains.

## Page verdicts

- **A page — no unresolved defect found.** Its summary accurately describes
  the definition, signed differential and homotopies, associativity and unit
  maps, cone-triangle comparisons, and the derived equivalence hypotheses.
- **B page — no unresolved defect found.** Its prose accurately describes the
  three assigned examples. B-page prose was not edited.

## Source checks

- Khovanov and Seidel, *Quivers, Floer Cohomology, and Braid Group Actions*,
  §2c, printed pp. 10–11, sets up bounded projective complexes and tensoring
  with two-sided projective bimodule complexes; §2d, Proposition 2.4 and its
  proof, printed pp. 11–12, prove inverse tensor functors for their particular
  complexes. The authored general result does not rely on that special case.
- Weibel, *An Introduction to Homological Algebra*, §10.6, printed
  pp. 395–396 (especially Lemma 10.6.2 and Exercise 10.6.2), supports the
  total derived tensor and bounded-above quasi-isomorphism context.
- Stacks Project, Differential Graded Algebra §22.33, tag 09LP (Lemmas
  22.33.1 and 22.33.3), provides DG tensor-functor context. Stacks Project,
  More on Algebra §15.60, tag 06XY (Lemmas 15.60.2 and 15.60.7), states that
  K-flat complexes preserve quasi-isomorphisms and that bounded-above
  complexes of flat modules are K-flat. The batch proofs separately verify
  the graded signs and their truncation argument.

## Coverage limitation

This report covers batch 22 and the dependency statements/proofs needed for
its claims. I did not audit other batches or certify the full transitive
dependency graph of every published dependency.
