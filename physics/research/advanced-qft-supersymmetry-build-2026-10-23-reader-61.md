# Step 3a reader report — batch 61

## Scope and inventory

Reviewed the two assigned pages and all nine assigned item bodies independently of their authors. The assigned items are mathematical localization results; no physics or empirical premise is used.

Pages opened:

- `library/quantum-field-theory-mathematics/qftx-noncompact-equivariant-borel-moore-localization.md` — draft A page, `library: mathematics`, `page_layout: compact-v1`, empty body.
- `library/quantum-field-theory-mathematics/qftx-noncompact-equivariant-borel-moore-localization-examples.md` — draft B page, `library: mathematics`, `page_layout: compact-v1`, empty body.

Assigned items opened in supplier-before-consumer order:

1. `def-qftx-localized-equivariant-borel-moore-data`
2. `lem-qftx-eigenfunction-open-bm-annihilation`
3. `lem-qftx-fixed-embedding-bm-euler-self-intersection`
4. `thm-qftx-finite-affine-atlas-bm-concentration`
5. `def-qftx-proper-fixed-locus-localized-pushforward`
6. `thm-qftx-proper-fixed-locus-noncompact-localization`
7. `ex-qftx-nonproper-fixed-locus-excluded`
8. `ex-qftx-localized-bm-affine-plane`
9. `ex-qftx-localized-bm-proper-fixed-component`

Direct dependency carriers opened as mathematical context:

- Published: `def-equivariant-borel-moore-homology-and-correspondence-convolution`, `thm-constructible-six-functors-proper-base-change-and-verdier-duality`, `def-axiom-of-choice`, `def-euler-class-by-zero-section-pullback-of-the-thom-class`, `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`, `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`, `lem-multiplicative-type-groups-are-linearly-reductive`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`, and `thm-external-product-and-whitney-sum-formulas-for-thom-classes`.
- Current-run draft: `lem-qftx-rational-torus-classifying-space-cohomology`, `lem-qftx-module-localization-preserves-exactness`, `lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent`, and `lem-qftx-borel-base-is-paracompact-of-cw-type`.

## Mathematical review

The localized-data definition correctly identifies the torus as `(GL_1)^r`, fixes the right associated-line convention, uses the normalized Borel–Moore grading, and constructs the character multiplicative set from nonzero linear forms in the polynomial ring. The rational torus classifying-space supplier establishes the required character weights and coefficient ring.

The eigenfunction argument correctly trivializes the associated character line on `D(f)` using the nowhere-zero equivariant section `[e,x] ↦ [e,f(x)]`. Its original proof then applied the Borel–Moore definition to every invariant open `V ⊂ D(f)` without establishing that `V` met that definition’s finite invariant affine-cover hypothesis. I repaired step 1.1 with a local argument: the coordinate ring of the affine torus variety `D(f)` is character-graded; the invariant closed complement has a homogeneous ideal; nonvanishing homogeneous components give invariant affine principal neighborhoods; noetherianity gives a finite subcover. The unchanged trivialization argument now applies on every stated `V`. This was proof-only; the public statement and dependency interface did not change.

The fixed-embedding lemma’s weight decomposition, complex Thom orientation, self-intersection identity, and Euler-unit argument are consistent with its hypotheses. For a compact connected fixed component, the restriction of the Euler class to `BT × {x}` is the product of the nontrivial character classes. The remaining difference lies in the positive-degree cohomology ideal of the compact component, which is nilpotent; the stated finite geometric series therefore gives the localized inverse.

The finite-atlas concentration proof covers the complement of the fixed locus by finitely many eigenfunction principal opens, uses the finite open-cover resolution and exact localization, then applies the closed/open Borel–Moore sequence. The intrinsic pushforward is well-defined by the resulting localized isomorphism and the proper fixed-locus trace. In the main formula, applying `i_a^!` to `i_*β = α ∩ [X]_T` gives `e_T(ν_a) ∩ β_a = i_a^*α ∩ [F_a]_T`; invertibility on each proper fixed component yields the reciprocal-Euler expression with degree `2d-q`.

All three examples were checked directly. The affine-plane example has fixed locus `{0}` and tangent weights `χ_1,χ_2`, giving `1/(u_1u_2)`. The `P^1 × C` example has proper fixed locus `P^1 × {0}`, normal character `χ`, and the point Gysin class integrates to `1`, giving `1/u`. The trivial-action example proves nonproperness by a closed subset whose base change projection has nonclosed image, and correctly makes no value claim for the proper-trace construction.

The sole TikZ diagram is the fixed-locus square in the main theorem’s Remarks. Its horizontal arrows are the inclusions, its vertical arrows are the restrictions of `f`, and the square commutes. The proof does not rely on the diagram. No other assigned diagrams require review.

## Source review

- Edidin–Graham, [*Localization in Equivariant Intersection Theory and the Bott Residue Formula*](https://arxiv.org/pdf/alg-geom/9508001), Section 3, Proposition 3 and Theorem 1: for split tori and rational equivariant Chow groups, the complement vanishing and localization exact sequence give the fixed-inclusion isomorphism. Section 4, Proposition 4 and Theorem 2 give the nonzero-normal-weight Euler invertibility and reciprocal-normal-class formula for smooth varieties. The paper is a Chow-theory source and describes Borel–Moore homology as the topological analogue with a similar proof; it does not itself state the exact normalized Borel–Moore formulation used here. The assigned Borel–Moore claims are established by the local proofs and their named suppliers.
- Ginzburg, [*Geometric Methods in the Representation Theory of Hecke Algebras and Quantum Groups*](https://arxiv.org/pdf/math/9802004), Section 1, printed pp. 4–6: proper maps induce Borel–Moore pushforwards; closed/open pairs have the long exact sequence; complex varieties have Borel–Moore fundamental classes. These are the source claims used in the examples and trace discussion.

## Edit and checks

- Edited only `items/lem-qftx-eigenfunction-open-bm-annihilation.md`, step 1.1, to prove the finite invariant affine-cover property for each allowed `V`. Evidence is the character grading on `O(D(f))`, homogeneity of the ideal of the invariant complement, and quasi-compactness of an open subset of a noetherian affine variety.
- Updated the corresponding `step-1-1` derivation in `research/advanced-qft-supersymmetry-build-2026-10-23-proof-contracts.json`. The item had no `verification.judge` record to remove.
- Required reflow: unchanged. Required precheck: PASS, direct proof strategy. Required final proof-layout: 1 item, 3 steps, 0 defects.

## Uneditable findings and page verdicts

Six published direct dependencies have complete Definitions/Statements interrupted by inline wikilinks, with no immediately following corresponding references section. They are recorded as `ill-formed` published-dependency findings in `research/advanced-qft-supersymmetry-build-2026-10-23-reader-findings-61.json`; their assigned consumers and exact locations are listed there. I did not edit published dependencies.

- `qftx-noncompact-equivariant-borel-moore-localization` (A page): **pass after the proof repair**, with the six assigned items reviewed and no page body summary. The published-dependency editorial findings remain routed for owner disposition.
- `qftx-noncompact-equivariant-borel-moore-localization-examples` (B page): **pass**; all three examples were reviewed, and the page body is correctly empty.

No blocker remains in the assigned arguments after the repair. Coverage limitation: the full transitive `deps` closure contains 3,645 items; I opened all assigned carriers, all 14 direct dependency carriers, and the cited source sections needed for these arguments, but did not audit that entire transitive closure. No broader dependency-closure coverage is claimed.
