---
id: def-free-presentation-lyndon-bar-bicomplex-and-edge-maps
kind: definition
title: "The free-presentation Lyndon bar bicomplex"
status: published
origin: pipeline
deps: [lem-diagonal-bar-coinvariants-compute-group-homology, lem-bar-first-integral-homology-is-the-abelianization, lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex, def-group-presentation]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

Let $1\to R\to F\xrightarrow{\pi}G\to1$ be a free presentation (here R denotes the normal subgroup, not a ring). Under the DC and supplied-resolution homology convention put $C_q=(\overline B_q(F))_R$, a left $\mathbb ZG$-module, and
$$D_{pq}=\overline B_p^{\rm right}(G)\otimes_{\mathbb ZG}C_q,\qquad h=d_B\otimes1,\quad v=(-1)^p1\otimes d_C.$$
Then $E^2_{pq}=H_p(G;H_q(R;\mathbb Z))$ for the p-filtration, and $H_*(\operatorname{Tot}D)=H_*(F;\mathbb Z)$. The degree-one edge maps are the homomorphism $R/[F,R]\to F_{\rm ab}$ induced by the subgroup inclusion $R\hookrightarrow F$ and the quotient homomorphism $F_{\rm ab}\to G_{\rm ab}$.

## Facts & Assumptions

**Given:** The free presentation and DC with supplied homology resolutions; normalized bars carry the vertex-deletion differential.

[F1] Normalized right bars and finite augmented tensor comparisons compute homology ([[lem-diagonal-bar-coinvariants-compute-group-homology]]).

[F2] H1 is naturally abelianization and conjugation coinvariants are R/[F,R] ([[lem-bar-first-integral-homology-is-the-abelianization]]).

[F3] The anticommuting total complex has the displayed low-degree filtration maps ([[lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex]]).

[F4] A presentation gives a free group with its normal relation subgroup and quotient ([[def-group-presentation]]).

## Proof

1.1 Normality of R makes left F-translation on R-orbits factor through G. A nondegenerate F-tuple has a unique form $f_0(1,a_1,\ldots,a_q)$; hence its R-orbit is specified by $\pi(f_0)$ and the relative tuple $(1,a_1,\ldots,a_q)$. Thus $C_q$ is canonically free over $\mathbb ZG$ on these relative tuples. Both differentials are well-defined, square to zero, and anticommute because the vertical sign changes when p decreases. [F1, F4, given, algebra]

2.1 To identify $H_q(C)$ without choosing a transversal of R in F, note that the permutation module on any free R-set is tensor-exact. Each element of a tensor product has finite support in the orbit set. On the union of those finitely many orbits choose one representative per orbit; there it is a finite sum of regular free modules. Coordinate lifting proves exactness on that summand, and projection onto it shows injectivity is tested there too. Thus tensoring with the restriction of each $\overline B_q(F)$ preserves exactness even without selecting representatives of all orbits at once. The augmented complex $\overline B(F)\to\mathbb Z$ is exact also after restriction to R. Form $\overline B^{\rm right}(R)\otimes_{\mathbb ZR}\overline B(F)$. Its exact augmented rows and columns give, by the finite elimination in F1, $H_*(C)\cong H_*(R;\mathbb Z)$. Applying the same comparison to $\overline B(R)\to\overline B(F)$ shows that the isomorphism is induced by the literal inclusion of R-tuples. [F1, step 1.1, algebra]

3.1 For f in F, the maps on R-vertices $r\mapsto fr$ and $r\mapsto frf^{-1}$ into F are equivariant for the same conjugated R-action. The alternating prism between them, $\sum_i(-1)^i(fr_0,\ldots,fr_i,fr_if^{-1},\ldots,fr_nf^{-1})$, has boundary equal to their difference: off-switch faces cancel in pairs and the two surviving switch endpoints are the two maps. It preserves normalized degeneracies and descends to R-coinvariants. Hence the action on $H_q(C)$ induced by left f is conjugation by f on $H_q(R;\mathbb Z)$. Elements of R already act trivially on C, so this is the stated G-action. [step 2.1, algebra]

4.1 For fixed q, the horizontal complex $\overline B^{\rm right}(G)\otimes C_q$ has zero positive homology since C_q is free; its zero homology is $(C_q)_G=(\overline B_q(F))_F$. The augmentation to this column induces a total homology isomorphism by the finite row elimination of F1. For fixed p, the first factor is free, so vertical homology is $\overline B_p^{\rm right}(G)\otimes H_q(C)$ (the sign does not change kernels or images). Taking horizontal homology and using step 3.1 gives exactly the asserted E2 terms. Thus the total computes $H_*(F;\mathbb Z)$, and F3 applies. [F1, F3, step 1.1, step 3.1, algebra]

5.1 The map from $E^2_{01}$ to total H1 sends the bar cycle $(1,r)$, r in R, to $y=(1)\otimes[(1,r)]_R\in D_{01}$. The horizontal augmentation sends this to $[(1,r)]_F$, which represents r in $F_{\rm ab}$. F2 identifies its domain with R/[F,R], so this edge is the homomorphism induced by the subgroup inclusion $R\hookrightarrow F$; it is not asserted to be injective. [F2, F3, step 4.1, algebra]

6.1 For arbitrary f in F put $g=\pi(f)$ and $y=(1)\otimes[(1,f)]_R\in D_{01}$, $x=(1,g^{-1})\otimes[(1)]_R\in D_{10}$. Balancing uses $(g^{-1})=(1)\cdot g$, so $hx=(1)\otimes([f]_R-[1]_R)=vy$. Thus y-x is a total cycle whose horizontal augmentation represents [f]. The vertical augmentation sends it to $-[(1,g^{-1})]$, representing $-[g^{-1}]=[g]$ in $G_{\rm ab}$. Since the [f] generate H1, the other edge is exactly the quotient map. If g=1 then x is degenerate and zero, consistent with step 5.1. [F2, F3, step 4.1, step 5.1, algebra]

7.1 Group maps of presentations act vertexwise on bars and on R-orbits, commuting with all augmentations and component maps. The constructed homology and E2 identifications, including the edge maps, are therefore natural. Empty X, trivial R, and trivial G cause no failure in the formulas; when G=1 all horizontal positive bars vanish. [step 2.1, step 4.1, step 5.1, step 6.1, algebra] ∎
