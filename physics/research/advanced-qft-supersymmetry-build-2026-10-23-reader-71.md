# Step 3a reader report — batch 71

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader (`reader-71`)  
Scope: batch 71 only

## Opened inventory

Assigned pages:

- `qftx-equivariant-symbol-index`
- `qftx-equivariant-symbol-index-examples`

Assigned items:

- `def-equivariant-compact-symbol-k-theory`
- `lem-equivariant-symbol-chern-character-pushforward`
- `ex-equivariant-symbol-index-at-a-point`
- `lem-equivariant-symbol-fixed-inclusion-localization`
- `lem-equivariant-symbol-index-comparison`

Direct suppliers opened for `lem-equivariant-symbol-chern-character-pushforward`:

- `def-equivariant-compact-symbol-k-theory`
- `thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero`
- `lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`
- `thm-complex-spinc-thom-orientation`
- `thm-homotopy-invariance-of-vector-bundle-pullback`
- `thm-complex-splitting-principle-with-integral-injective-pullback`
- `thm-first-chern-class-classifies-complex-line-bundles`
- `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`
- `thm-thom-isomorphism-for-oriented-vector-bundles`
- `thm-external-product-and-whitney-sum-formulas-for-thom-classes`
- `lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice`
- `def-relative-fundamental-class-and-boundary-orientation`
- `def-axiom-of-choice`

Direct suppliers opened for `lem-equivariant-symbol-fixed-inclusion-localization`:

- `def-equivariant-compact-symbol-k-theory`
- `def-axiom-of-choice`
- `lem-qftx-compact-torus-equivariant-slice-neighborhoods`
- `thm-fundamental-product-theorem-for-complex-k-theory`
- `lem-normalized-clutching-data-for-bundles-over-x-times-s-two`
- `lem-uniform-laurent-approximation-through-bundle-automorphisms`
- `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization`
- `lem-polynomial-clutching-families-stabilize-to-linear-clutching`
- `lem-linear-clutching-splits-into-eigenbundles`

Direct suppliers opened for `lem-equivariant-symbol-index-comparison`:

- `def-equivariant-compact-symbol-k-theory`
- `lem-equivariant-controlled-symbol-realization`
- `lem-equivariant-associated-symbol-product-index`
- `lem-equivariant-compact-bott-index-normalization`
- `lem-qftx-compact-torus-equivariant-slice-neighborhoods`
- `thm-complex-bott-periodicity`
- `def-axiom-of-choice`

The example uses the assigned definition as its only direct supplier. I also opened the relevant transitive interfaces `def-chern-character-of-a-complex-vector-bundle`, `lem-qftx-compact-torus-fixed-locus-normal-weights`, and `lem-equivariant-finite-chart-symbol-calculus`.

Opened all ten A-page prerequisite pages named in the manifest: `chern-and-pontryagin-classes-by-splitting-and-complexification`, `complex-topological-k-theory-and-bott-periodicity`, `exotic-smooth-structures-and-milnor-spheres`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `orientations-poincare-lefschetz-and-alexander-duality`, `qftx-borel-localization`, `qftx-equivariant-pseudodifferential-calculus`, `real-clifford-modules-ko-and-abs-orientations`, `relations-functions-and-quotients`, and `topological-vector-bundles-and-grassmannian-classification`.

The batch notes and manifest were treated as navigation/evidence, not as verdicts. The source items and their current statements were checked directly.

## Mathematical review

- `def-equivariant-compact-symbol-k-theory`: the triple presentation, suspension convention, representation action, principal-symbol convention, and exterior-algebra Koszul class are explicit. The optional analytic-index clause uses “Fredholm” without defining its criterion or identifying the earlier finite-chart Fredholm definition. This is finding 1 below.
- `lem-equivariant-symbol-chern-character-pushforward`: the orientation, Bott sign, normal correction, trace weighting, and conditional fixed-component formula are stated precisely. The item correctly does not assert K-localization or analytic/topological index equality. The statement applies the ordinary Chern character to bundles over a compact smooth manifold and uses the relative character on a cotangent disk pair; the earlier Chern-character definition is stated for finite CW complexes, and the statement does not define the extension through finite CW models. This is finding 2 below.
- `ex-equivariant-symbol-index-at-a-point`: the zero differential has cohomology representations `C_0 ⊕ C_1` and `C_2`; the virtual character is `1+z-z^2`. Ellipticity is vacuous on the zero cotangent space and the rank-zero normal factor is 1. The calculation is correct and does not use a general index theorem.
- `lem-equivariant-symbol-fixed-inclusion-localization`: the proof treats compact-support equivariant bundle K-theory, not Borel cohomology, and proves the localized restriction and self-intersection/reconstruction identities from its stated clutching, exactness, slice, and Bott arguments. The determinant is nonzero because the fixed-locus normal has no `g`-fixed vector. I found no additional defect.
- `lem-equivariant-symbol-index-comparison`: the proof derives the index homomorphism, normal Gysin compatibility, ordinary pushforward, and character evaluation from the controlled and product-index suppliers and the orthogonal Bott normalization. It explicitly stops short of the global analytic/topological index theorem. I found no additional defect.

## Source checks

- Segal, *Equivariant K-theory*, Proposition 4.1, printed pp. 143–145 (PDF pp. 16–17), gives the representation-ring-localized restriction theorem and the slice/finite-cover proof. Propositions 2.4, 2.6, and 2.9, printed pp. 134–137, cover equivariant bundle complements, exactness, and excision. The assigned fixed-inclusion item supplies its own specialized proof. [Numdam full text](https://www.numdam.org/item/PMIHES_1968__34__129_0.pdf)
- Gilkey, *Invariance Theory, the Heat Equation, and the Atiyah-Singer Index Theorem*, §4.4, Theorem 4.4.6, printed pp. 275–276, uses the cotangent symplectic orientation `dx_1∧dξ_1∧…` and displays the dimension sign. This is an APS twisted-index formula and supports the convention comparison only. [PDF](https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf)
- Heitsch, *The Lefschetz Principle, Fixed Point Theory, and Index Theory*, Theorem 2.1, PDF pp. 5–6, displays the `(-1)^n` sign. Its introduction says the index-theorem proofs are outlined, so it is used only as an independent convention check. [PDF](https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf)
- The cited Atiyah–Singer I paper was identified through the Annals record and its linked PDF, but the PDF text was not available to the browser extractor; the item’s local argument and inspected supplier interfaces, not an unverified reading of that paper, support the review conclusions. [Annals record](https://annals.math.princeton.edu/1968/87-3/p05)

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `qftx-equivariant-symbol-index` | Pass with item findings | Draft mathematics page; inventory and ten `requires` entries agree with the manifest; `library: mathematics`; empty body and `page_layout: compact-v1`. |
| `qftx-equivariant-symbol-index-examples` | Pass | Draft companion page; its single example inventory, `requires` edge to the A page, and companion identity agree with the manifest; `library: mathematics`; empty body and `page_layout: compact-v1`. |

No TikZ or tikzcd diagrams occur in either assigned page or any assigned item.

## Uneditable findings

1. `def-equivariant-compact-symbol-k-theory`, in `## Definition`, analytic-index paragraph: “Fredholm” is used without the finite-kernel, closed-range, finite-cokernel condition or an identified earlier definition. The item’s declared dependency is only the Axiom of Choice. A downstream supplier cannot substitute for a definition that this item uses.
2. `lem-equivariant-symbol-chern-character-pushforward`, in `## Statement`, first paragraph: `ch(V_λ)` and the relative `ch_c` are used on `F` and `T*F`. The exact earlier Chern-character definition is for finite CW complexes/pairs. The item has finite-CW-model suppliers, but does not define the transport to these spaces or state the independence from the chosen model.

Both are read-only defects in assigned items and remain for owner disposition. No item or page was edited. No proof-layout, precheck, or render validation was run because this assignment is read-only and no carrier changed.

## Blocker and coverage limits

There is no operational blocker. I read the complete assigned carriers, their direct item suppliers, and the page prerequisites listed above. I did not independently audit every transitive supplier of the published mathematical items. The Atiyah–Singer I PDF text could not be retrieved through the browser extractor; I have not claimed to have read its complete argument.
