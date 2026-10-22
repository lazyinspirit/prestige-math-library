---
id: lem-odd-khovanov-and-barnatan-localization-foundations
kind: lemma
title: "Odd Khovanov and Bar–Natan LEO foundations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - lem-khovanov-reidemeister-chain-homotopies
  - thm-khovanov-homology-is-an-oriented-link-invariant
  - def-abstract-oriented-knot-cobordism
  - def-smooth-knot-concordance
  - def-countable-choice
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is used for finite diagram and cobordism movies; algebraic edge calculations are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Ozsváth, Jacob Rasmussen, and Zoltán Szabó, Odd Khovanov homology, arXiv:0710.4300"
      url: https://arxiv.org/pdf/0710.4300
      locator: "§§1–3, especially Lemma 1.2 and Propositions 3.1–3.3"
    - title: "Krzysztof K. Putyra, A 2-category of chronological cobordisms and odd Khovanov homology, arXiv:1310.1895"
      url: https://arxiv.org/pdf/1310.1895
      locator: "§§2–3, including chronological edge assignments and cobordism maps"
    - title: "Nathan Dunfield, Robert Lipshitz, and Dirk Schütz, Local equivalence and refinements of Rasmussen's s-invariant, arXiv:2312.09114v3"
      url: https://arxiv.org/pdf/2312.09114v3
      locator: "§§2.1–2.2 and 3.1–3.4, printed pp. 4–13"
    - title: "Robert Lipshitz and Sucharit Sarkar, A mixed invariant of nonorientable surfaces in equivariant Khovanov homology, arXiv:2109.09018v3"
      url: https://arxiv.org/pdf/2109.09018v3
      locator: "Proposition 2.1 and its localized-cube proof"
---

## Statement

Assume the Axiom of Countable Choice. For every finite regular based oriented knot diagram, the odd exterior-algebra cube admits a square-compatible edge assignment and defines a bigraded cochain complex; its mod-2 reduction is chain homotopy equivalent as a marked $\mathbb F_2[X]/(X^2)$-complex to the Bar–Natan complex reduced modulo $(2,h)$. After inverting $h$, the Bar–Natan complex is chain homotopy equivalent to one free rank-one module in cohomological degree $0$ and odd quantum degree over the localized coefficient algebra. Based diagram changes preserve the odd complex up to chain homotopy equivalence, and pointed connected sums give the chain-level tensor product over $\mathbb A=\mathbb Z[X]/(X^2)$ for the odd complex and over $\mathbb R=\mathbb Z[h,X]/(X^2-hX)$ for the Bar–Natan complex, in each case with the quantum shift $\{-1\}$.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|Odd, Bar–Natan and LEO complexes]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Normalized even Khovanov cube]]

[[alg-khovanov-chain-complex-from-diagram|Finite state-cube procedure]]

[Ozsváth–Rasmussen–Szabó, *Odd Khovanov homology* (2007), §§1–3](https://arxiv.org/pdf/0710.4300)

[Putyra, *A 2-category of chronological cobordisms and odd Khovanov homology* (2013), §§2–3](https://arxiv.org/pdf/1310.1895)

[Dunfield–Lipshitz–Schütz, *Local equivalence and refinements of Rasmussen's s-invariant* (2023), §§2.1–3.4](https://arxiv.org/pdf/2312.09114v3)

[Lipshitz–Sarkar, *A mixed invariant of nonorientable surfaces in equivariant Khovanov homology* (2022), Proposition 2.1](https://arxiv.org/pdf/2109.09018v3)

## Facts & Assumptions

**Given:** Countable choice, the finite based diagram, and the coefficient rings and state modules.

[F1] The odd and Bar–Natan state maps, gradings and right marked actions are defined in [[def-odd-khovanov-barnatan-and-leo-triple]].

[F2] Full oriented face prescriptions, constructive integral edge signs and marked vertex-sign comparison are proved in [[lem-odd-cube-oriented-face-parity-and-sign-existence]].

[F3] Complete marked RI/RII contractions and the two-pivot signed RIII common complex are proved in [[lem-odd-marked-reidemeister-i-ii-contractions]] and [[lem-odd-marked-reidemeister-iii-common-complex]].

[F4] The based odd/BN movie maps, their common reduction, and the localized rank-one knot retraction are proved in [[lem-based-odd-barnatan-movie-maps-and-localized-concordances]].

[F5] The fully admissible marked tensor-product isomorphisms are proved in [[lem-pointed-odd-barnatan-tensor-product-over-marked-rings]].

[F6] Integral odd and Bar–Natan pointed spherical recharting isomorphisms, including the complete zero-face cyclic-order calculation and exact common reduction, are proved in [[lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes]].

[F7] Every prescribed based diagram has the explicit protected germ normalization and spherical long endpoint presentation of [[lem-based-planar-diagrams-admit-spherical-long-endpoint-presentations]].

[F8] [[lem-marked-knot-isotopies-admit-protected-reidemeister-movies]] proves relative R-only comparison for common compatible long endpoints, including the actual common puncture/closure endpoint planar isotopies and the relative center–tangent contraction that makes its ambient coordinates identity in both end collars.

[F9] [[lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark]] proves a finite protected marked movie for a collared annulus with a specified proper marked arc, retaining compatible long endpoints and recording all spatial coordinate identifications.

## Proof

**Given:** The hypotheses of the Statement.

1.1 By [F2], choose the full admissible face assignment. The coefficient of every height-two state in the square of the differential is zero, since the two signed saddle composites cancel, including the faces where both composites vanish. The normalized saddle grading is that of [F1]. Each state is a finite free right $\mathbb A$-module: use the basis of exterior products of the augmentation-zero differences $Z_j-Z_p$, followed by the optional marked factor $Z_p$. Thus the actual odd complex exists, with the asserted bigrading and marked action. The construction in [F2] is finite and uses no additional choice. [F1, F2, given, construct]

1.2 Modulo two, send each exterior circle generator to the even $X$-label on that circle. The merge quotient becomes the even product, and multiplication by $C_1-C_2$ becomes the even split map, since all signs disappear. The Bar–Natan formulas of [F1] reduce modulo $(2,h)$ to the same product and split. These identifications also carry appending $Z_p$ to multiplication by the marked $X$. Therefore the comparison is a bigraded marked $\mathbb F_2[X]/(X^2)$-linear chain isomorphism, and in particular a chain homotopy equivalence. [F1, F2, algebra]

1.3 The localized proof in [F4] decomposes the enhanced-state cube into Boolean summands in the basis $A=X,B=h-X$, contracts each non-singleton summand by unit identity pivots, and does so over the marked ring because the marked label is constant on a summand. The two singleton knot states are its orientations, in degree zero and odd quantum parity. The two idempotents $X/h$ and $1-X/h$ identify their span with one regular rank-one localized coefficient module. This supplies the required chain homotopy equivalence, including the module-linearity of its homotopies. [F1, F4, algebra]

1.4 For a planar pointed sum, [F5] gives the right-linear odd map using the reduced decomposition $\Lambda V=\Lambda\ker(\operatorname{aug})\otimes\mathbb A$. On reduced exterior degrees $r_1,r_2$ its formula is $(-1)^{r_1\sigma_2}(u_1\wedge u_2)\otimes a_1a_2$. Its sign is independent of both marked factors, so it is balanced and right-linear; its internal and mixed full face products are verified in [F5]. The BN map is marked multiplication with vertex sign $(-1)^{n_-^{(1)}|v_2|}$, accounting for normalized cochain tensor signs. Both merge two circles into one and have the displayed quantum shift $\{-1\}$. Their reductions agree with the same even marked multiplication. The admissible sign comparison in [F2] transfers this to any admissible representatives. This proves the connected-sum clauses. [F1, F2, F5, algebra, construct]

1.5 **Arbitrary prescribed based endpoints.** For a finite pair of based diagrams first use [F7] with the same local coordinates at their marks: each oriented marked tangent is the positive real axis. After straightening their crossing-free germs, choose one common radius $r$, one $0<\epsilon<\min(r/4,1/4)$ and one $R$ between $B=(1+\epsilon r)/(r-\epsilon)$ and $1/\epsilon$. The same rotation rechart $w=-(1+\overline a z)/(z-a)$, $a=i\epsilon$, then acts on both. Their exterior arcs are literally the same $w(x)$, with the same cut parameters $x=\pm c$, where $c^2=(1-R^2\epsilon^2)/(R^2-\epsilon^2)$. Flatten their height to zero as in [F7]. They have the same oriented geodesic marked germ and the same compatible spatial endpoint model. If puncturing spatially at the mark changes the planar chart, use [F8]'s explicit endpoint comparison: move the pole within the exterior cap, restrict the chart transitions to the common compact tangle disk, extend this compact-disk embedding isotopy to the plane, and use the image of the common closing arc. These are actual planar isotopies to the punctured-and-reclosed diagrams, not a claimed equality of drawings under pole change. All endpoint coordinate identifications are recorded in [F7] and [F8]. [F7, F8, given, construct]

2.1 **Full based diagram invariance.** Suppose the prescribed based diagrams represent isotopic oriented knots. Reparametrize a representing smooth knot isotopy so that its marked source point reaches the specified endpoint marks; an orientation-preserving circle reparametrization can be chosen through rotations in its source parameter and made stationary in end collars. Compose with the explicit endpoint coordinate isotopies from step 1.5. The resulting endpoints have the common long model. By [F8] this isotopy has a finite protected movie containing only R1, R2, R3 and planar isotopies; its relative contraction ensures identity spatial coordinate maps at both ends. No birth, saddle or death is used to infer an odd equivalence. Each R move has the integral marked chain homotopy inverses and homotopies of [F3], and their common even reductions are those of [F4]. The spherical endpoint normalizations have the explicit integral marked isomorphisms and inverse squares of [F6]. Compose these actual maps and their inverses with the planar endpoint isotopies. Thus the original arbitrary prescribed based diagrams have graded marked odd chain homotopy equivalences, with the asserted comparison; the corresponding BN maps are also graded marked chain homotopy equivalences. This handles arbitrary basepoint positions through the geometric endpoint normalization and does not assume a false protected planar comparison between an arbitrary diagram and its exterior rechart. [F3, F4, F6, F8, step 1.5, construct]

3.1 **Finite ordering and sign choices.** A different full admissible assignment changes the odd complex by the vertex-sign marked isomorphism of [F2]; no invariance assertion about all weak square-compatible candidates is needed. Circle reorderings are actual exterior basis changes. Crossing reorderings transport cube coordinates and the full odd edge assignment. On the BN side a transposition of adjacent crossings $i,j$ changes the ordinary cube-sign convention by the vertex factor $(-1)^{v_i v_j}$: on an $i$-edge its ratio is $(-1)^{v_j}$, on a $j$-edge it is $(-1)^{v_i}$, and on all other edges it is one, exactly the change in the number of preceding 1-coordinates. Products of such transpositions handle every finite crossing permutation. The same factors can be used on the transported odd assignment; they preserve its full face products and reduce to one modulo two. Hence ordering changes and the choices in the coherent full admissible family preserve the claimed marked chain-homotopy type and common reduction. [F1, F2, F6, step 2.1, algebra, construct]

4.1 **Concordance consumers with arbitrary endpoints.** For a collared oriented annulus between any prescribed based knot diagrams choose a proper marked arc between its boundary marks, constant on the given end collars; a product parametrization of the annulus gives such an arc by a smooth angular path between the two marks. Normalize the finite endpoint pair by step 1.5 and carry the annulus through those recorded orientation-preserving spatial endpoint identifications, using their isotopies on end collars. It now has compatible common long endpoints. Apply [F9]'s actual relative four-dimensional arc straightening, followed by its protected strip/puncture, finite Morse and relative projection construction. Its coordinates can retain the common endpoint strips: the center–tangent contraction and parameter-dependent velocity extension in [F8] apply to the family of strip intervals along the already monotone marked arc, not just to whole level knots, and give spatial coordinates identity in both end collars. Thus the required supplied protected movie exists for these endpoints. Its odd and BN maps are those of [F4], with degree the annulus Euler characteristic zero and the exact marked mod-two square; [F4] proves that the localized BN composite is a marked-ring homotopy equivalence. Compose with [F6] and the planar endpoint isomorphisms to return to the original prescribed diagrams. Read the annulus backwards for a local map in the other direction. This uses no odd movie-independence assertion and does not require any individual birth or death map to be a localized equivalence. Together with the tensor calculation in step 1.4 and the R-only invariance in step 2.1, it proves every assertion of the Statement in its full arbitrary-based-diagram scope. Countable choice is exactly the retained geometric extension/genericity hypothesis; all new algebraic maps and finite endpoint choices require no additional choice. [F4, F6, F8, F9, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 3.1, construct] ∎
