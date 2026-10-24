# Scheme Theory lane 05 rendering review

## Scope and coverage

Reviewed all 110 assigned published items from the frozen Markdown snapshots and matching local HTML. Verified all snapshot, HTML, and receipt-listed PNG hashes. Individually opened all 245 receipt-listed PNG tiles with `tools.view_image` at original resolution. All receipt hashes matched; receipt metrics report 0 KaTeX errors, 0 diagram failures, and 0 existing TikZ figures. Item and publication statuses were preserved.

The exact per-item and per-tile SHA256/view attestations are in [lane-05.json](lane-05.json).

## Findings

1. **Title math is plain text** — [thm-abstract-residue-exists-unique](snapshots/thm-abstract-residue-exists-unique.md), line 4. The h1 displays `res_V: Omega^1_{K/k} -> k` literally. Put the title formula in math delimiters.

2. **Raw proof-ending command** — [lem-very-ample-implies-ample](snapshots/lem-very-ample-implies-ample.md), line 85. The final screenshot shows a literal `\qed`; use a renderer-supported end marker.

3. **Awkward display-math wrap** — [lem-section-zero-if-all-germs-zero](snapshots/lem-section-zero-if-all-germs-zero.md), line 27. The equivalence breaks after `s_x =`, separating the equation from `0`; align or split it intentionally.

## High-likelihood missing diagram candidate

[lem-koszul-structure-of-the-abelian-sheaf-tensor-product](snapshots/lem-koszul-structure-of-the-abelian-sheaf-tensor-product.md), lines 54–61 and 77–82, names the associator pentagon, unit triangle, braiding hexagon, and symmetry involution for sheaf tensor products and repeats the coherence claims for total complexes. Commutative coherence diagrams would make the compared composites explicit: the associator routes from `(((F⊗G)⊗H)⊗K)` to `F⊗(G⊗(H⊗K))`; `(id⊗λ)∘α = ρ⊗id`; and the two hexagon routes built from `α` and `σ`. Include the corresponding total-complex diagrams using `A` and Koszul symmetry `S`.

## Exact item and tile coverage

| Item ID | Receipt-listed PNG tiles |
|---|---:|
| cex-blowup-arbitrary-base-change-failure | 2 |
| cex-degree-zero-line-bundle-no-section | 3 |
| cex-fixed-affine-cover-nonseparated-intersections | 3 |
| cex-inseparable-map-riemann-hurwitz-naive-fails | 3 |
| cex-presheaf-bounded-continuous-functions-not-sheaf | 1 |
| cex-quotient-stack-need-not-be-a-scheme | 2 |
| cex-weil-divisor-not-cartier-singular-cone | 5 |
| cor-blowup-unique-up-to-unique-isomorphism | 1 |
| cor-doubled-origin-not-separated | 2 |
| cor-intermediate-cohomology-o-d-projective-space-vanishes | 1 |
| cor-projective-embedding-every-smooth-proper-curve | 3 |
| cor-top-cohomology-projective-space-o-d | 2 |
| def-affine-overlap-separation-condition | 1 |
| def-associated-sheaf-graded-module-proj | 2 |
| def-cartier-divisor | 1 |
| def-commutative-hopf-algebra-over-a-field | 1 |
| def-degree-divisor-proper-curve | 1 |
| def-divisor-smooth-proper-curve | 2 |
| def-exact-sequence-sheaves | 1 |
| def-flasque-sheaf | 1 |
| def-generic-point-irreducible-closed-subset | 1 |
| def-godement-resolution | 1 |
| def-index-speciality-divisor | 2 |
| def-kahler-differentials-algebra | 1 |
| def-locally-noetherian-and-noetherian-scheme | 1 |
| def-morphism-representable-by-algebraic-spaces | 1 |
| def-picard-group-scheme | 2 |
| def-projective-bundle-scheme | 2 |
| def-quasi-compact-and-quasi-separated-morphism | 1 |
| def-rational-section-line-bundle | 1 |
| def-representable-morphism-of-presheaves | 1 |
| def-scheme-theoretic-image | 1 |
| def-sheaf-relative-differentials | 2 |
| def-smooth-morphism-schemes | 1 |
| def-support-module-sheaf | 1 |
| def-variety-scheme-theoretic | 1 |
| ex-associated-sheaf-quotient-module | 2 |
| ex-cech-cocycle-projective-line-o-minus-two | 3 |
| ex-differentials-dual-numbers | 2 |
| ex-dualizing-and-closed-support-shifts-on-the-complex-line | 2 |
| ex-family-xy-equals-t-flat-not-smooth-at-node | 3 |
| ex-full-rr-projective-line | 3 |
| ex-hilbert-polynomial-of-finite-points-on-p1 | 1 |
| ex-mayer-vietoris-projective-line-cover-preview | 3 |
| ex-principal-divisor-degree-zero-p1 | 4 |
| ex-projective-zero-space-cohomology | 3 |
| ex-riemann-hurwitz-double-cover | 7 |
| ex-skyscraper-sheaf-acyclic | 2 |
| ex-tangent-vectors-affine-space-dual-numbers | 2 |
| lem-abstract-residue-trace-under-finite-free-extension | 4 |
| lem-affine-blowup-chart-universal-property | 1 |
| lem-affine-morphism-separated | 2 |
| lem-associated-sheaf-restriction-affine-open | 2 |
| lem-base-flat-syzygies-and-fibrewise-resolution-exactness | 1 |
| lem-blowup-power-of-ideal-same | 2 |
| lem-cech-differential-squares-zero | 1 |
| lem-closed-immersion-preserves-sheaf-cohomology | 4 |
| lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward | 6 |
| lem-cotangent-complex-h0-and-polynomial-case | 2 |
| lem-derived-colimit-coefficient-and-category-change | 2 |
| lem-differentials-diagonal-ideal-square | 2 |
| lem-effective-divisors-sections-mod-scalars | 3 |
| lem-eventual-global-generation-coherent-twists | 3 |
| lem-fibre-dimension-upper-semicont-proper | 3 |
| lem-filtered-colimit-flat-fp-sheaf-stage | 2 |
| lem-finite-morphism-affine | 4 |
| lem-fixed-base-simplicial-cotangent-represents-derived-derivations | 2 |
| lem-flatness-affine-local-source-target | 2 |
| lem-free-fibre-flat-module-free-noetherian-target | 1 |
| lem-graded-section-module-finite-projective | 4 |
| lem-hilbert-noetherian-base-fixed-polarization | 2 |
| lem-hilbert-uniform-sections-after-flat-pullback | 2 |
| lem-injective-sheaves-flasque | 2 |
| lem-koszul-structure-of-the-abelian-sheaf-tensor-product | 4 |
| lem-locally-constant-functions-form-a-sheaf | 2 |
| lem-noetherian-open-subsets-are-quasi-compact | 1 |
| lem-plane-curve-multiplicity-transform-chart | 2 |
| lem-proj-prime-localization-correspondence | 3 |
| lem-projective-space-action-from-linear-representation | 2 |
| lem-proper-flat-fp-cohomology-perfect-complex | 5 |
| lem-quasi-compact-immersion-boundary-specialization | 2 |
| lem-relative-algebraic-constants-fg-field-finite | 3 |
| lem-residue-pairing-functorial-line-bundle | 4 |
| lem-section-zero-if-all-germs-zero | 1 |
| lem-sheaf-condition-check-on-basis | 1 |
| lem-spectrum-localization-open-immersion | 1 |
| lem-support-dimension-preserved-field-extension | 3 |
| lem-two-open-cover-cech-complex | 2 |
| lem-very-ample-implies-ample | 3 |
| rem-flatness-is-not-constant-fibre-isomorphism | 1 |
| rem-resolution-higher-dimension-not-claimed | 1 |
| thm-abstract-residue-exists-unique | 3 |
| thm-affine-quasi-coherent-equivalence | 4 |
| thm-blowup-base-change-flat | 2 |
| thm-cartier-divisors-mod-principal-to-picard | 4 |
| thm-closed-subschemes-projective-space-homogeneous-ideals | 3 |
| thm-conormal-sequence-closed-immersion | 3 |
| thm-effective-cartier-divisor-closed-immersion | 3 |
| thm-extension-by-zero-adjunction-exactness | 1 |
| thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation | 1 |
| thm-gluing-sheaves | 1 |
| thm-jacobian-criterion-smooth-morphism | 2 |
| thm-mayer-vietoris-sheaf-cohomology | 3 |
| thm-plane-curve-arithmetic-genus | 3 |
| thm-proper-pushforward-coherent | 8 |
| thm-reduction-universal-property | 1 |
| thm-separatedness-gluing-overlap-criterion | 2 |
| thm-sheafification-preserves-stalks | 1 |
| thm-structure-sheaf-affine-scheme | 1 |
| thm-verdier-duality-on-oriented-stratified-complex-varieties | 4 |
