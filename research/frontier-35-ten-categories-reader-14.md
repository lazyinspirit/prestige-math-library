# Step 5a reader report — batch 14

Run: `frontier-35-ten-categories`  
Role: reader  
Review date: 2026-09-26

## Scope and opened inventory

Read the batch manifest `research/frontier-35-ten-categories-batch-14.pages.json`, the four listed pages, all 26 assigned item files, and the current statement/definition sections of all 39 published dependencies directly referenced by those items. The batch items were in-flight at review time. Direct published dependency closure reached the following files:

`cor-equalizers-are-monic-and-coequalizers-are-epic`; `def-abelian-category`; `def-additive-category`; `def-additive-functor`; `def-algebra-over-a-commutative-ring`; `def-bimodule`; `def-chain-complex-in-an-abelian-category`; `def-chain-homotopy`; `def-contractible-complex`; `def-cycle-and-boundary-subobjects-of-a-complex`; `def-direct-sum-of-a-family-of-modules`; `def-generated-cyclic-finitely-generated-and-free-modules`; `def-graded-ring-and-graded-module`; `def-homology-object-of-a-chain-complex`; `def-homotopy-category-of-chain-complexes`; `def-homotopy-classes-of-chain-maps`; `def-kernels-and-cokernels-as-equalizers-and-coequalizers`; `def-left-and-right-flat-modules-over-an-arbitrary-ring`; `def-module-homomorphism-kernel-image-and-cokernel`; `def-projective-object`; `def-tensor-product-of-modules-by-generators-and-relations`; `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`; `lem-the-boundary-subobject-factors-through-the-cycle-subobject`; `prop-an-additive-functor-preserves-zero-morphisms`; `thm-a-chain-map-induces-a-well-defined-map-on-homology`; `thm-a-direct-summand-of-a-projective-is-projective`; `thm-an-additive-functor-preserves-finite-biproducts`; `thm-associativity-of-balanced-tensor-products`; `thm-bimodule-actions-induced-on-tensor-products`; `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication`; `thm-first-isomorphism-theorem-modules`; `thm-homology-is-an-additive-functor`; `thm-module-kernel-image-and-injectivity`; `thm-quotient-module-universal-property`; `thm-the-category-of-complexes-in-an-additive-category-is-additive`; `thm-unit-isomorphisms-for-module-tensor-products`; `thm-universal-property-of-free-modules`; `thm-universal-property-of-module-direct-sums`; `thm-universal-property-of-module-tensor-products`.

### Page A: `library/homological-algebra/graded-bimodules-and-tensor-functors.md`

Items opened:

- `def-graded-ring-module-bimodule-and-internal-shift`
- `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`
- `def-graded-balanced-tensor-product-and-homogeneous-hom`
- `lem-graded-balanced-tensor-and-shift-isomorphisms`
- `def-finitely-generated-graded-projective-module`
- `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`
- `thm-bimodule-tensor-exactness-and-projective-preservation`
- `thm-graded-bimodule-tensor-hom-adjunction`
- `prop-restriction-and-extension-of-scalars-on-graded-module-categories`

### Page B: `library/homological-algebra/graded-bimodules-and-tensor-functors-examples.md`

Items opened:

- `ex-internal-shift-versus-a-change-of-degree`
- `ex-right-flat-bimodule-with-nonprojective-output`
- `ex-left-projective-bimodule-with-nonexact-tensor`

### Page A: `library/homological-algebra/homological-gaussian-elimination.md`

Items opened:

- `def-complex-homotopy-and-contractibility-in-an-additive-category`
- `def-invertible-differential-block-and-schur-complement-reduction`
- `lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block`
- `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`
- `prop-homological-gaussian-elimination-gives-a-strong-deformation-retract`
- `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology`
- `thm-finite-iterated-homological-gaussian-elimination`
- `prop-additive-functors-preserve-chosen-homological-gaussian-cancellations`
- `prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits`

### Page B: `library/homological-algebra/homological-gaussian-elimination-examples.md`

Items opened:

- `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign`
- `ex-neighbouring-differentials-after-a-gaussian-basis-change`
- `ex-two-finite-cancellation-orders-and-their-composite-retracts`
- `cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled`
- `cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps`

## Repairs made

1. In `items/def-graded-balanced-tensor-product-and-homogeneous-hom.md`, replaced the incorrect grading argument for the tensor quotient. The old argument graded a free abelian group on all pairs by only its homogeneous pairs and treated arbitrary balancing relations as homogeneous. The repaired construction first uses the canonical decomposition `M ⊗_Z N ≅ ⊕_{i,j}(M_i ⊗_Z N_j)`, assigns each summand total degree `i+j`, expands each balancing relation into its homogeneous component relations, and then grades the quotient by total degree. Also corrected the strict-containment witness for `HOM_A(P,Q)`: with the stated shift convention it uses `P=⊕_j A{-j}`, so the chosen generators have degree `-j` and the displayed maps have degree `3j`.

   Updated the corresponding contract in `research/frontier-35-ten-categories-batch-14.proof-contracts.json`: added the `graded-total-degree-quotient` derivation and corrected the zero/nonempty-choice boundary evidence.

2. In `items/cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps.md`, corrected the counterexample proof's differentials and checks. For `Y` and `K` with differential `1_k`, the direct-sum complex `X=Y⊕K` has differential `1_{k^2}`; the next differential is zero because the complex is two-term. The proof now checks the off-diagonal maps against these actual differentials and obtains zero individual transfers but identity transfer for the composite.

   Updated contract derivations 1.1 and 1.2 and the degenerate-boundary evidence in `research/frontier-35-ten-categories-batch-14.proof-contracts.json` to match the two-term differential and map checks.

3. In `library/homological-algebra/homological-gaussian-elimination.md`, narrowed the A-page sentence from “different valid choices give homotopy equivalent but not equal reductions” to “different valid choices give homotopy equivalent reductions, which need not be equal.” This removes the overstrong assertion that the reductions are always unequal.

4. In `items/thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules.md`, removed the Weibel §3.2 citation as support for the finite graded-projective summand characterization. The cited section treats flatness (including projectives being flat), not this graded characterization; the item has its own direct proof of the characterization. No mathematical statement was changed.

No `verification.judge` record was present in the modified item carriers.

## Validation

Ran reflow and precheck for each changed item as required:

- `def-graded-balanced-tensor-product-and-homogeneous-hom`: reflow exited successfully with no further rewrite; precheck exited successfully (`0 checked, 0 failing — all clean`).
- `cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps`: reflow and precheck exited successfully; precheck reported `PASS direct`.
- `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`: reflow and precheck exited successfully; precheck reported `PASS direct`.

## Source checks

- Alexander Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras*, [§2.2, printed pp. 6–7](https://arxiv.org/pdf/0909.4844), PDF lines about 255–305: graded modules, shifts, and homogeneous maps.
- Mikhail Khovanov and Paul Seidel, *Quivers, Floer Cohomology, and Braid Group Actions*, [§2a, author p. 8, and §2b, author p. 9](https://arxiv.org/pdf/math/0006056), PDF lines 371–386 and 417–436: graded module/map conventions, shifts, projectives, and exactness/projective preservation for tensor functors.
- Stacks Project, Algebra, [§10.56, tag 00JL](https://stacks.math.columbia.edu/tag/00JL), HTML lines 17–23: graded modules, twists, and graded Hom; and [§10.12, tag 00CV](https://stacks.math.columbia.edu/tag/00CV), Definition 10.12.2, Lemmas 10.12.3 and 10.12.5–10.12.8, Remark 10.12.11, and Example 10.12.12: the tensor quotient and its universal properties.
- Charles Weibel, *An Introduction to Homological Algebra*, [chapter 1, §§1.1, 1.2, 1.4](https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf), PDF from line 508 onward: chain and homotopy conventions. [§3.2, Definition 3.2.1, printed pp. 68–69, PDF pp. 2–3](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf) concerns flatness and projectives being flat; it does not support the finite graded-projective characterization, so that citation was removed.
- Dror Bar-Natan, *Fast Khovanov Homology Computations*, [§4, Lemma 4.2, printed p. 5 (PDF p. 4)](https://www.math.toronto.edu/~drorbn/papers/FastKh/FastKh.pdf): minus Schur-complement formula and contractible summand.
- David Clark, Scott Morrison, and Kevin Walker, *Fixing the Functoriality of Khovanov Homology*, [Appendix A.1, Lemmas A.1–A.2, printed pp. 1562–1563](https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf): additive-category cancellation and the two-pivot elimination configuration.

## Remaining uneditable finding

`items/thm-the-category-of-complexes-in-an-additive-category-is-additive.md:29` is a published dependency and contains raw `\mathbb Z` outside math delimiters in the statement. This is an ill-formed markup defect; the intended meaning is clear, so it is nonfatal. The assigned consumer whose dependency closure reaches it is `def-complex-homotopy-and-contractibility-in-an-additive-category` (direct dependency). It was not edited because published content is outside this reader's edit scope.

## Page verdicts and limitation

- `graded-bimodules-and-tensor-functors` (A): **PASS after repair.** The graded tensor quotient argument and the finite graded-projective citation were repaired; the graded adjunction, tensor exactness/projective preservation, and scalar-change claims were checked against their stated hypotheses.
- `graded-bimodules-and-tensor-functors-examples` (B): **PASS.** The shift example and the flatness/projectivity separation examples have the stated distinctions and computations; no remaining defect found.
- `homological-gaussian-elimination` (A): **PASS after repair.** The reduction-comparison sentence is now properly qualified; the cancellation formulas, retract, homotopy, homology, iteration, functoriality, and transfer claims were checked with their stated hypotheses and sign conventions.
- `homological-gaussian-elimination-examples` (B): **PASS after repair.** The transfer counterexample's differential checks were corrected; the unit-pivot sign, neighboring maps, finite cancellation orders, and nonunit counterexample were checked.

Limitation: I checked all assigned pages and items, plus the statement/definition sections of the 39 direct published dependencies needed for the claims. I did not exhaustively re-prove every published dependency proof or recursively inspect every deeper transitive published dependency. No mathematical uncertainty blocking the assigned review remains.
