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

## Proof

**Given:** The hypotheses of the Statement.

1.1 By [F2], choose the full admissible face assignment. The coefficient of every height-two state in the square of the differential is zero, since the two signed saddle composites cancel, including the faces where both composites vanish. The normalized saddle grading is that of [F1]. Each state is a finite free right $\mathbb A$-module: use the basis of exterior products of the augmentation-zero differences $Z_j-Z_p$, followed by the optional marked factor $Z_p$. Thus the actual odd complex exists, with the asserted bigrading and marked action. The construction in [F2] is finite and uses no additional choice. [F1, F2, given, construct]

1.2 Modulo two, send each exterior circle generator to the even $X$-label on that circle. The merge quotient becomes the even product, and multiplication by $C_1-C_2$ becomes the even split map, since all signs disappear. The Bar–Natan formulas of [F1] reduce modulo $(2,h)$ to the same product and split. These identifications also carry appending $Z_p$ to multiplication by the marked $X$. Therefore the comparison is a bigraded marked $\mathbb F_2[X]/(X^2)$-linear chain isomorphism, and in particular a chain homotopy equivalence. [F1, F2, algebra]

1.3 The localized proof in [F4] decomposes the enhanced-state cube into Boolean summands in the basis $A=X,B=h-X$, contracts each non-singleton summand by unit identity pivots, and does so over the marked ring because the marked label is constant on a summand. The two singleton knot states are its orientations, in degree zero and odd quantum parity. The two idempotents $X/h$ and $1-X/h$ identify their span with one regular rank-one localized coefficient module. This supplies the required chain homotopy equivalence, including the module-linearity of its homotopies. [F1, F4, algebra]

1.4 For a planar pointed sum, [F5] gives the right-linear odd map using the reduced decomposition $\Lambda V=\Lambda\ker(\operatorname{aug})\otimes\mathbb A$. On reduced exterior degrees $r_1,r_2$ its formula is $(-1)^{r_1\sigma_2}(u_1\wedge u_2)\otimes a_1a_2$. Its sign is independent of both marked factors, so it is balanced and right-linear; its internal and mixed full face products are verified in [F5]. The BN map is marked multiplication with vertex sign $(-1)^{n_-^{(1)}|v_2|}$, accounting for normalized cochain tensor signs. Both merge two circles into one and have the displayed quantum shift $\{-1\}$. Their reductions agree with the same even marked multiplication. The admissible sign comparison in [F2] transfers this to any admissible representatives. This proves the connected-sum clauses. [F1, F2, F5, algebra, construct]

2.1 By [F3], each based RI, RII or RIII change has normalized integral marked chain homotopy inverses and homotopies. Their construction checks the full face prescriptions on the RIII residual complex even when saddle composites vanish. Finite compositions are therefore equivalences. Their mod-two matrices are the same even matrices by [F3] and [F4]. A different admissible assignment changes the complex by the vertex-sign marked isomorphism of [F2]; circle reorderings are exterior basis changes, and crossing reorderings transport cube coordinates and edge signs. Consequently all these based diagram changes preserve the asserted chain-homotopy type and comparison. [F2, F3, F4, step 1.1, step 1.2, algebra, construct]

3.1 For use by concordance consumers, [F4] additionally supplies module-linear odd and BN maps for any supplied finite based movie, with the exact common mod-two square; on a connected concordance the localized BN composite is a homotopy equivalence. This is a statement about that supplied movie, and requires no odd movie-independence theorem. The geometric existence of such a marked movie remains a separate supplier. The preceding steps establish every algebraic assertion in the Statement without invoking that geometric existence or an unproved external result. [F4, step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, algebra] ∎
