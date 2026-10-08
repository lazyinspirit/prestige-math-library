# Reader 8 — batch 8

Run: `frontier-43-complex-representation-15`. Independent Step 5a review; no judgment or certification.

## Checkpoint

Opened both assigned pages, all 19 current item carriers, and the 76 direct dependency statements/definitions. Reviewed all numbered arguments of the assigned items. The LR theorem was initially opened as a route overview before its suppliers; substantive verification then proceeded from dependency statements to consumers. No rendered evidence bundle was located. Contracts were read and citation quotes compared with current source sections; whitespace/capitalization differences do not change the cited mathematics.

Confirmed defects at first checkpoint: LR steps 1.3–1.4 rely on external, undefined raising/rectification correspondence; replaced with a local signature cancellation proof. Outer-ring and outer-LR steps 1.1 apply a point-label bijection to group-valued induced-function arguments; repaired using the conjugation group isomorphism. Hopf and S32-example step 1.1 each reversed the direction of their group isomorphism in one sentence; both are corrected.

Published-dependency concern resolved: the unrestricted function model differs from tensor induction at infinite index, but this is an explicit convention, not a defect. Etingof et al., Definition 4.28 and Remark 4.29 in Chapter 4 §4.8 use unrestricted covariant functions and identify them with Hom_H(k[G],V). Inversion of arguments gives exactly the library covariance and action. The local tensor-model Remark already limits its identification to finite index. No finding remains.

Source consulted: van Leeuwen, https://arxiv.org/pdf/math/9908099, complete §§3.1–3.2 (printed pp. 15–17), including Proposition 3.2.1 and its proof, for signature changes preserving semistandard skew tableaux; also opened §2.5, Theorem 3.3.1 with complete proof and Corollary 3.3.4 while assessing the original correspondence claim. The final replacement uses only the locally proved signature lemma and determinant cancellation, without rectification.

## Assigned inventory

- `items/def-graded-bialgebra-and-hopf-algebra.md`
- `items/lem-character-ring-of-a-direct-product-is-the-tensor-product.md`
- `items/lem-induction-is-invariant-under-conjugation-of-subgroup-and-representation.md`
- `items/lem-induction-commutes-with-an-external-tensor-factor.md`
- `items/thm-littlewood-richardson-schur-product-expansion.md`
- `items/thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring.md`
- `items/def-restriction-coproduct-on-the-graded-symmetric-group-character-ring.md`
- `items/lem-connected-graded-bialgebra-has-a-recursive-antipode.md`
- `items/thm-outer-littlewood-richardson-rule.md`
- `items/prop-restriction-coproduct-is-schur-skewing.md`
- `items/cor-outer-pieri-rules-for-trivial-and-sign-factors.md`
- `items/cor-littlewood-richardson-coefficients-have-conjugation-symmetry.md`
- `items/def-skew-multiplicity-module-over-c.md`
- `items/thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c.md`
- `items/thm-outer-induction-and-restriction-form-a-graded-hopf-algebra.md`
- `items/ex-outer-product-s32-with-s2.md`
- `items/ex-littlewood-richardson-coefficient-greater-than-one-for-outer-induction.md`
- `items/cex-outer-multiplicity-is-not-the-semistandard-tableau-count.md`
- `items/ex-restriction-coproduct-for-s-three-one.md`

## Opened page inventory and verdicts

- `library/special-topics-in-representation-theory/outer-products-skew-specht-modules-and-littlewood-richardson.md` (A): no remaining assigned mathematical defect after the repairs below. Its summaries describe the actual induction/restriction structures and the complex multiplicity-space model. The proved module is the stated Hom-space over C; no general-field skew-polytabloid filtration is asserted.
- `library/special-topics-in-representation-theory/outer-products-skew-specht-modules-and-littlewood-richardson-examples.md` (B): no remaining defect found in its prose or four examples after the assigned-item corrections below. The partition lists, LR-valid placements and all stated dimensions agree with direct enumeration and the removable-corner recurrence. B prose was read only.

Neither page was edited. These are reader verdicts, not judge stamps or publication decisions.

## Repairs and mathematical evidence

1. `thm-littlewood-richardson-schur-product-expansion`, original Proof 1.3–1.4: fatal unlicensed inference. The normal-form correspondence, its inverse, tableau closure and confluence were imported from a source without local definitions or proofs; none of the declared suppliers proved them. The unchanged LR claim now has a local signed-determinant proof. Final steps 1.2 and 2.1 define parenthesis signatures and prove raising/lowering preserve semistandard skew tableaux; step 2.2 expands the transposed Jacobi–Trudi determinant; step 3.1 cancels nonlattice signed pairs using the earliest failing prefix and proves that the operation is an involution; step 4.1 identifies the survivors; steps 5.1–6.1 prove the product/skew equivalence by Hall adjointness. The Jacobi–Trudi dependency was added, its full item opened, and the unused Kostka change-of-basis dependency removed. The original Statement, including its source links, is preserved. The proof strategy and facts/contracts now describe cancellation, with high risk retained for the new combinatorial route. The cited van Leeuwen Proposition 3.2.1 supplies authoritative corroboration for the local tableau-closure lemma, not an external proof substitute.

2. `thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring`, Proof 1.1: ill-formed displayed construction. The original composition `F ∘ beta` applied a map between label sets to an induced function whose domain is a group. The corrected construction uses `c_t(sigma)=beta_t sigma beta_t^{-1}` on groups, specifies the subgroup pullback and transported module action, and explicitly checks covariance and equivariance. The Statement is unchanged.

3. `thm-outer-littlewood-richardson-rule`, Proof 1.1: the same ill-formed point-map composition, repaired using the group conjugation isomorphism and explicit induced-function pullback. Relabeling stabilizers and polytabloids also identifies the Specht actions. Its Statement and decomposition are unchanged. Its van Leeuwen locator now points to the actual signature argument on printed pp. 15–17 rather than the obsolete Robinson route with an incomplete pp. 14–19 locator (the Robinson inverse is on p. 20).

4. `thm-outer-induction-and-restriction-form-a-graded-hopf-algebra`, Proof 1.1 final block-direction sentence: false direction in an otherwise correctly defined map. The isomorphism `c_t` goes from zero-based to one-based groups; its inverse carries one-based blocks back to zero-based blocks. Corrected that sentence. The Mackey matrix representatives, four intersection factors, coproduct product terms, diagonal tableau split and antipode calculation were independently checked and did not need mathematical changes.

5. `ex-outer-product-s32-with-s2`, Proof 1.1 block-direction sentence: the same reversed direction, corrected to use `c_t^{-1}`. The six containing partitions, five horizontal strips, standard-tableau recurrence and dimension 105 were checked directly and are unchanged.

6. `prop-restriction-coproduct-is-schur-skewing`, van Leeuwen source locator: corrected the obsolete correspondence locator to the signature sections actually used by the repaired LR supplier, printed pp. 15–17. Its Frobenius-reciprocity proof and Statement are unchanged.

Affected entries in `research/frontier-43-complex-representation-15-batch-8.proof-contracts.json` were regenerated from the current facts and proof steps, and the LR boundary evidence was rewritten to remove the obsolete normal-form/confluence assertions. None of the six edited item carriers contained a `verification.judge` record to remove. No judgment, audit stamp, self-certification, manifest change, plan edit or proposed withdrawal was made.

## Resolved source uncertainty and uneditable defects

No uneditable finding remains. An initial concern about `def-induced-r-linear-g-module-by-h-covariant-functions` was resolved by reading its cited [Etingof source](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf), Chapter 4 §4.8, Definition 4.28, Remark 4.29 and the complete action verification (PDF pp. 8–9). It defines unrestricted functions with `f(hx)=h f(x)` and right-translation action; `F(x)=f(x^{-1})` gives the library's convention exactly. At infinite index this convention differs from tensor induction, as the library's tensor-model Remark already explicitly explains; all assigned applications have finite index. The terminology alone is therefore not a defect.

The [van Leeuwen source](https://arxiv.org/pdf/math/9908099), printed pp. 15–17, Definition 3.1.1, Proposition 3.1.2 and Proposition 3.2.1 with its complete proof, was read for the signature lemma. Source passages on the original Robinson route were also opened as recorded in the checkpoint, but the final proof does not depend on that route.

## Validation

- Reflow was run on all six changed paths; it made no changes.
- Precheck passed on all six changed paths. Its first LR run requested canonical phase renumbering; that was adopted, including all references and contract entries, and LR precheck then passed.
- `node tools/proof-contract.mjs research/frontier-43-complex-representation-15-batch-8.proof-contracts.json --strict` covered all 19 assigned entries: 0 errors, 0 warnings, 19/19 checked. A stale downstream quote caused by temporarily removing a Statement citation was resolved by preserving the original LR Statement and refreshing the affected contracts.
- The six-file renderer check passed: every math span parsed under real KaTeX and every frontmatter block parsed under the renderer's YAML parser.
- Final batched `node tools/proof-layout.mjs` covered all six changed paths after the final item edits and reflow: 6 items, 46 steps, 0 defects. The paths were `items/thm-littlewood-richardson-schur-product-expansion.md`, `items/thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring.md`, `items/thm-outer-littlewood-richardson-rule.md`, `items/thm-outer-induction-and-restriction-form-a-graded-hopf-algebra.md`, `items/ex-outer-product-s32-with-s2.md` and `items/prop-restriction-coproduct-is-schur-skewing.md`, supplied together in one command.
- A bounded independent enumeration tested all outer partitions of size at most 7 with skew size at most 5 and alphabet `{1,2,3}`: 3,440 semistandard tableaux and 1,819 signed determinant pairs. It checked tableau closure for each raising/lowering move, inverse operations, preservation of the first failing prefix, the cancellation involution and equality of signed counts with LR counts. All passed. This finite computation supplements the general proof.

## Dependency inventory and coverage limits

Opened the following 77 external supplier item sections (the original 76 direct suppliers plus the added Jacobi–Trudi theorem). Definition/Remark sections were read for the constructions, and Statement sections for the licensed prerequisite conclusions. In addition, complete proofs were read for the Schur orthonormal basis, Kostka change of basis, skew Jacobi–Trudi/tableau expansion, stable generator theorem, stable monomial basis and Jacobi–Trudi identities. This is not an exhaustive re-audit of every transitive published supplier or every bibliography source. Preliminary route exploration opened some consumers before supplier verification was complete; claim verification and repairs then used the supplier statements before the affected consumers. No rendered evidence bundle was found, so the current Markdown carriers were used directly. There is no remaining mathematical blocker identified for this batch.

- `items/cor-dimension-of-an-induced-finite-dimensional-representation.md`
- `items/cor-distinct-specht-modules-are-inequivalent.md`
- `items/cor-frobenius-reciprocity-for-complex-characters.md`
- `items/cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product.md`
- `items/cor-tensor-products-of-finite-free-modules-and-dimension.md`
- `items/def-algebra-over-a-commutative-ring.md`
- `items/def-bimodule.md`
- `items/def-character-of-a-complex-representation.md`
- `items/def-column-antisymmetrizer-polytabloid-and-specht-module.md`
- `items/def-conjugate-representation-and-conjugate-character.md`
- `items/def-external-direct-product-of-groups.md`
- `items/def-finite-dimensional-representation-of-a-group-over-a-field.md`
- `items/def-finite-symmetric-group-and-permutation-notation.md`
- `items/def-frobenius-characteristic-map.md`
- `items/def-graded-ordinary-representation-ring-of-symmetric-groups.md`
- `items/def-graded-ring-and-graded-module.md`
- `items/def-group-homomorphism.md`
- `items/def-group-ring.md`
- `items/def-hall-inner-product-on-symmetric-functions.md`
- `items/def-hom-groups-and-induced-hom-maps.md`
- `items/def-induced-character-of-a-complex-representation.md`
- `items/def-induced-r-linear-g-module-by-h-covariant-functions.md`
- `items/def-littlewood-richardson-tableau-and-coefficient.md`
- `items/def-monomial-symmetric-polynomials.md`
- `items/def-outer-induction-product-for-symmetric-group-characters.md`
- `items/def-partition-young-diagram-and-conjugate-partition.md`
- `items/def-power-sum-and-complete-homogeneous-symmetric-polynomials.md`
- `items/def-row-and-column-stabilizers-of-a-tableau.md`
- `items/def-semistandard-tableau-and-kostka-number.md`
- `items/def-sign-representation-and-restriction-of-a-representation.md`
- `items/def-skew-diagram-and-semistandard-skew-tableau.md`
- `items/def-skew-schur-function-by-hall-adjointness.md`
- `items/def-stable-graded-ring-of-symmetric-functions.md`
- `items/def-stable-schur-function-by-bialternants.md`
- `items/def-standard-inner-product-on-complex-class-functions.md`
- `items/def-subgroup.md`
- `items/def-tensor-product-of-complex-representations.md`
- `items/def-tensor-product-of-modules-by-generators-and-relations.md`
- `items/def-trivial-regular-and-permutation-representations.md`
- `items/def-virtual-character-and-character-ring-of-a-finite-group.md`
- `items/def-young-subgroup-tabloid-and-permutation-module.md`
- `items/def-young-tableau-standard-tableau-and-shape.md`
- `items/lem-frobenius-characteristic-is-an-isometry.md`
- `items/lem-frobenius-characteristic-preserves-outer-products.md`
- `items/lem-kostka-change-of-basis-is-dominance-unitriangular.md`
- `items/prop-elementary-and-complete-generating-series-identity.md`
- `items/prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra.md`
- `items/prop-omega-conjugates-schur-functions.md`
- `items/rem-induced-representation-agrees-with-the-tensor-product-model.md`
- `items/thm-associativity-of-balanced-tensor-products.md`
- `items/thm-character-inner-product-computes-intertwiner-dimension.md`
- `items/thm-characters-of-direct-sums-tensor-products-and-duals.md`
- `items/thm-complex-irreducibles-of-symmetric-groups-are-specht-modules.md`
- `items/thm-complex-representations-are-determined-by-their-characters.md`
- `items/thm-complex-specht-modules-are-irreducible.md`
- `items/thm-elementary-and-complete-families-freely-generate-the-stable-ring.md`
- `items/thm-external-direct-product-is-a-group.md`
- `items/thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism.md`
- `items/thm-frobenius-characteristic-sends-specht-characters-to-schur-functions.md`
- `items/thm-gallagher-correspondence-for-an-extendible-character.md`
- `items/thm-group-actions-and-group-ring-modules-correspond.md`
- `items/thm-group-ring-is-a-unital-algebra-with-basis-g.md`
- `items/thm-hom-tensor-adjunction-for-modules.md`
- `items/thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions.md`
- `items/thm-jacobi-trudi-and-dual-jacobi-trudi-identities.md`
- `items/thm-mackey-double-coset-formula-for-restricting-an-induced-character.md`
- `items/thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order.md`
- `items/thm-monomial-symmetric-functions-form-the-integral-stable-basis.md`
- `items/thm-schur-functions-form-an-orthonormal-integral-basis.md`
- `items/thm-sign-is-a-homomorphism.md`
- `items/thm-skew-jacobi-trudi-and-tableau-expansion.md`
- `items/thm-standard-polytabloid-basis.md`
- `items/thm-symmetry-and-associativity-over-a-commutative-ring.md`
- `items/thm-tensor-product-basis-from-bases.md`
- `items/thm-tensor-product-of-algebras-over-a-commutative-ring.md`
- `items/thm-transitivity-of-induction-for-finite-groups.md`
- `items/thm-universal-property-of-module-tensor-products.md`
