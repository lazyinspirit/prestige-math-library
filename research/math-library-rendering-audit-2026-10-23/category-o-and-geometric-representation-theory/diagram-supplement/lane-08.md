# Category O diagram supplement — lane 08

Reviewed all 25 assigned items for warranted missing diagrams and existing diagram mathematics. All current source hashes matched the assignment, and all revision-2 local screenshot receipts and image hashes matched. The 25 items contain no existing TikZ diagrams; no existing diagram mathematics required checking.

## Potential missing diagrams

Both observations are optional editorial candidates, classified uncertain. No mathematical error was observed, and no proof should rely on a diagram.

1. **lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports** — missing-tikz-diagram (uncertain; frozen source lines 41, 61, 63). The proof tracks the same support through a fiber-product square, the diagonal pullback, and a second graph-base-change square. A compact diagram can make the domains, projections, and identification of θ easier to follow.
   - Claim: The support T=A×_M B is identified with F^{-1}(Δ(M)) for F=(q,u), and the proof identifies the supported exchange mate by factoring q through its graph and pulling back to θ:T↪A×B.
   - Diagram: Paired Cartesian squares for diagonal pullback, support embedding, and graph-factorization exchange
   - Draw/check: Draw T=A×_M B with projections a:T→A and b:T→B over q:A→M and u:B→M. Draw F=(q,u):A×B→M×M and Δ:M↪M×M, with θ:T↪A×B identified as the Cartesian pullback F^{-1}(Δ(M)). For the exchange factorization, draw Γ_q:A↪A×M followed by the second projection A×M→M, and the base-change square of Γ_q along id_A×u:A×B→A×M whose pullback is θ. Annotate the induced support maps g_Δ, g_F, and that support remains on T through the exchange-mate comparison.
   - Correctness checks: Check that the first square is Cartesian precisely because F∘θ=Δ∘(q∘a)=Δ∘(u∘b). Check that the graph Γ_q is the pullback of Δ along (q,id_M):A×M→M×M. Check that the pullback of Γ_q along id_A×u is T=A×_M B, with the correct projection maps and θ codomain A×B. Keep the diagram explanatory; do not use it as a proof of the supported orientation, exchange mate, or counit identities.
   - No confirmed error: No diagram or mathematical error is present in the item; this is an optional communication aid for its multi-square support bookkeeping.
   - Frozen source hash: `c6edcd9623f712c144916b751e64d5efdeb1d5cfa3b161e92705024e26878042`
   - Local screenshots: `screenshots/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports--01.png`, `screenshots/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports--02.png`, `screenshots/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports--03.png`
2. **ex-kazhdan-lusztig-bases-for-s-two-and-s-three** — missing-tikz-diagram (uncertain; frozen source lines 45, 55). The example compresses the entire S₃ Bruhat cover structure into a long formula and repeated list of eight pairs. A small Hasse diagram would let readers see and check the cover support at a glance.
   - Claim: The example states that the four Bruhat ranks are {123}, {132,213}, {231,312}, {321}, with every element in one rank below every element in the next, and lists the eight cover pairs; the Kazhdan–Lusztig coefficient μ(y,w) is 1 exactly on those covers.
   - Diagram: Bruhat Hasse diagram for S₃, with permutations in one-line notation
   - Draw/check: Place 123 in rank 0; 132 and 213 in rank 1; 231 and 312 in rank 2; and 321 in rank 3. Draw upward cover arrows 123→132, 123→213; 132→231, 132→312; 213→231, 213→312; 231→321, 312→321. Use the same one-line permutation labels and composition convention stated in the item; optionally mark μ(y,w)=1 on each edge.
   - Correctness checks: Verify each listed arrow is a Bruhat cover under the reduced-subword convention and has inversion-length increase one. Verify the diagram has exactly eight edges and no additional comparabilities are drawn as covers. Check arrow orientation is from lower to higher Bruhat order and that the rank layers match the source.
   - No confirmed error: The source explicitly gives all layers and cover pairs correctly; there is no mathematical error. The diagram would be an optional visualization of the finite example.
   - Frozen source hash: `100e40562d599505eced1b77cdd99b3ccde45ea2340d5adbbed2f08673692a93`
   - Local screenshots: `screenshots/ex-kazhdan-lusztig-bases-for-s-two-and-s-three--01.png`, `screenshots/ex-kazhdan-lusztig-bases-for-s-two-and-s-three--02.png`

## Coverage

All 25 assignment IDs were reviewed. Two items are listed as potential candidates; the other 23 were reviewed with no high-likelihood diagram candidate. No item in this lane contains an existing TikZ diagram.

- `cex-soergel-character-grading-alone-does-not-prove-category-o-koszulity` — reviewed-no-candidate; 0 existing TikZ diagrams
- `def-deformed-tensor-space-for-the-type-a-finite-w-algebra` — reviewed-no-candidate; 0 existing TikZ diagrams
- `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization` — reviewed-no-candidate; 0 existing TikZ diagrams
- `def-parabolic-kazhdan-lusztig-basis-and-polynomials` — reviewed-no-candidate; 0 existing TikZ diagrams
- `def-reduced-soergel-module-and-dominant-lefschetz-operator` — reviewed-no-candidate; 0 existing TikZ diagrams
- `def-the-antidominant-projective-and-the-soergel-functor` — reviewed-no-candidate; 0 existing TikZ diagrams
- `ex-a-block-idempotent-corner-outside-the-stable-range` — reviewed-no-candidate; 0 existing TikZ diagrams
- `ex-kazhdan-lusztig-bases-for-s-two-and-s-three` — candidate; 0 existing TikZ diagrams
- `ex-rational-cherednik-trivial-group-is-the-weyl-algebra` — reviewed-no-candidate; 0 existing TikZ diagrams
- `ex-the-wall-crossing-functor-on-verma-modules-in-rank-one` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports` — candidate; 0 existing TikZ diagrams
- `lem-hodge-riemann-for-large-positive-deformation` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-pa36-ample-translation-splittings` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-pa36-qcoh-filtered-union-and-cech-colimits` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-rational-cherednik-commutator-jacobi-compatibility` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-separated-integral-cosets-give-typed-parabolic-category-equivalences` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-the-local-affine-hecke-socle-argument-for-residue-translations` — reviewed-no-candidate; 0 existing TikZ diagrams
- `lem-verma-sign-sum-over-bruhat-intervals` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-soergels-character-conjecture` — reviewed-no-candidate; 0 existing TikZ diagrams
- `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` — reviewed-no-candidate; 0 existing TikZ diagrams