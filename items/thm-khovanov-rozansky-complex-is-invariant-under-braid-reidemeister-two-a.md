---
id: thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a
kind: theorem
title: "Invariance under the braid-like Reidemeister IIa move"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-chi-zero-and-chi-one-wide-edge-morphisms, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 2, subsection 5, Proposition 6, Figures 15-16, printed pp. 21-24; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), Proposition 2, printed pp. 1397-1398"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Statement

Let $D_1,D_2$ be the two oriented diagrams of the braid-like Reidemeister IIa
move of Khovanov-Rozansky II, Figure 15 (the move available inside braid
diagrams), with potential $w=a(x_1+x_2-x_3-x_4)$. Then
$C(D_1)\cong C(D_2)$ in $K(\mathrm{hmf}_w)$; in particular there is no grading
shift, and the trigraded cohomology of a braid diagram is unchanged by an IIa
move. The same holds for the mirror-image move with the orientations reversed
and $w$ replaced by its negative.

Caveat: only the braid-like IIa move is claimed. The IIb move is neither used
nor claimed on this page; the source states (printed p. 9) that it did not
prove IIb invariance and does not need it for braid closures.

## Facts & Assumptions

**Given:** the two diagrams $D_1,D_2$ of Figure 15, the four resolutions $\Gamma_{00},\Gamma_{10},\Gamma_{01},\Gamma_{11}$ of $D_1$ with $\Gamma_{01}$ the resolution of $D_2$, their Koszul matrices over $R=\mathbb Q[a,x_1,x_2,x_3,x_4,x_5,x_6]$, and the maps $f_1\colon C(\Gamma_{00})\to C(\Gamma_{10})$, $f_2\colon C(\Gamma_{10})\to C(\Gamma_{11})$ of the resolution cube.

[F1] $C(D)$ is the tensor product of the crossing complexes and arc factors; it is an object of $K(\mathrm{hmf}_w)$ with $w=a(x_1+x_2-x_3-x_4)$ for the diagrams of Figure 15, and $C(D_2)\cong C(\Gamma_{01})$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).

[F2] The morphisms $\chi_0,\chi_1$ of the crossing complexes are the flip morphisms in the Koszul forms of the resolutions; the differential of a resolution cube is a sum of such morphisms, and the element $\mathrm{Id}\otimes\psi(y)$ acts by the identity on the first term and by multiplication by $y$ on the middle term ([[def-chi-zero-and-chi-one-wide-edge-morphisms]]).

[F3] Elementary row operations are isomorphisms of factorizations; a row $(0,y-\mu)$ with $y$ internal may be deleted with $y\mapsto\mu$ substituted in all remaining rows, yielding a chain homotopy equivalent factorization over the smaller ring ([[lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]]).

## Proof

**Proof technique:** direct computation in Koszul form; the resolution cube is reduced by row operations and two variable exclusions until the two factors of the differential become split isomorphisms.

1.1 *The splitting criterion.* The four resolution corners form a complex with $C(\Gamma_{00})$ in degree $-1$, $C(\Gamma_{10})\oplus C(\Gamma_{01})$ in degree $0$ and $C(\Gamma_{11})$ in degree $1$, with the shifts supplied by the crossing cones. Suppose $f_1$ identifies $C(\Gamma_{00})$ with a summand $I$ of $C(\Gamma_{10})=I\oplus M$, and $f_2|_M:M\to C(\Gamma_{11})$ is invertible. Elementary changes of coordinates first cancel the block $C(\Gamma_{00})\to I$ and then the block $M\to C(\Gamma_{11})$. For an invertible block $\varphi$, subtracting its other row and column entries using $\varphi^{-1}$ makes the differential block diagonal; the surviving block is the Schur complement. The equation $d^2=0$ makes adjacent components to the canceled pair zero in these coordinates, so its identity pair is contractible. Here the sole final term is $C(\Gamma_{01})$ in degree $0$, and it has zero differential; off-diagonal cube maps introduce no further term. Thus the two invertible blocks suffice to prove $C(D_1)\simeq C(\Gamma_{01})=C(D_2)$. [F1, algebra]

1.2 *Koszul form of the diagram and its first reduction.* In the standard Koszul bases the three factorizations have four rows: $C(\Gamma_{00})$ has rows $(a,x_1+x_2-x_5-x_6)$, $(0,x_2-x_6)$, $(a,x_5+x_6-x_3-x_4)$, $(0,(x_6-x_4)(x_3-x_6))$; $C(\Gamma_{10})$ has the same rows with second row $(0,(x_2-x_6)(x_5-x_2))$; $C(\Gamma_{11})$ has the same rows as $C(\Gamma_{10})$ with last row $(0,x_6-x_4)$; the maps are $f_1=\mathrm{Id}\otimes\psi'(x_5-x_2)\otimes\mathrm{Id}\otimes\mathrm{Id}$ and $f_2=\mathrm{Id}\otimes\mathrm{Id}\otimes\mathrm{Id}\otimes\psi(x_3-x_6)$. Apply the row operation $[13]_1$ to all three matrices simultaneously: the first rows become $(a,x_1+x_2-x_3-x_4)$ and the third rows $(0,x_5+x_6-x_3-x_4)$ in all three; the common third rows can be deleted and the internal variable $x_5$ excluded by $x_5\mapsto x_3+x_4-x_6$. The diagram becomes the tensor product of the row $(a,x_1+x_2-x_3-x_4)$ with the diagram of two-row matrices $[x_2-x_6\,,\,(x_6-x_4)(x_3-x_6)]\xrightarrow{g_1}[(x_2-x_6)(x_3+x_4-x_6-x_2)\,,\,(x_6-x_4)(x_3-x_6)]\xrightarrow{g_2}[(x_2-x_6)(x_3+x_4-x_6-x_2)\,,\,x_6-x_4]$ over $R'[x_6]$, $R'=\mathbb Q[a,x_1,x_2,x_3,x_4]$, where $g_1=\psi'(x_3+x_4-x_6-x_2)\otimes\mathrm{Id}$ and $g_2=\mathrm{Id}\otimes\psi(x_3-x_6)$; each step is an isomorphism or a chain homotopy equivalence by [F2]. [F1, F2, F3, algebra]

2.1 *Quadratic polynomial division.* Put $v=x_6$, $Q(v)=(v-x_4)(x_3-v)$ and $S=R'[v]$. Its leading coefficient is the unit $-1$, so polynomial division gives an $R'$-module decomposition $S=Q S\oplus(R'1\oplus R'v)$. In the zero-first-entry Koszul row $(0,Q)$, multiplication by $Q$ maps the odd copy of $S$ isomorphically to $QS$ in the even copy. Cancel these pairs over $R'$; the surviving even copy is $S/(Q)$, free over $R'$ on $1,v$. In tensoring this row with another zero-first-entry row $(0,f)$, the same cancellation gives the surviving differential induced by $f$ on $S/(Q)$: the quotient map commutes with multiplication by $f$, and the invertible $Q$ block removes all its complementary components by the elementary Schur-complement calculation of step 1.1. Apply this simultaneously to the first two factorizations and their coefficient maps. The third bottom row $(0,v-x_4)$ reduces by the linear exclusion lemma [F3] to evaluation $v=x_4$. The reduced diagram thus has first differential multiplication by $x_2-v$ on $R'1\oplus R'v$, second differential multiplication by $(x_2-x_4)(x_3-x_2)$ on that same rank-two module, and third differential multiplication by this last element on $R'$. Its vertical maps are $1$ and $x_3+x_4-v-x_2$ on the respective components of $g_1$, and evaluation $v=x_4$ on both components of $g_2$. The quadratic reduction is polynomial division, rather than an application of the linear exclusion clause. [F2, F3, step 1.1, step 1.2, algebra]

3.1 *Splitting the reduced diagram.* In the reduced diagram the first factorization has a contractible summand $R'\xrightarrow{1}R'(x_2-x_6)$, whose removal leaves the rank-one row $R'(x_6+x_2-x_3-x_4)\xrightarrow{(x_2-x_4)(x_2-x_3)}R'$; the middle factorization is the direct sum of the two factorizations $R'\xrightarrow{(x_2-x_4)(x_3-x_2)}R'$ and $R'(x_6+x_2-x_3-x_4)\xrightarrow{(x_2-x_4)(x_3-x_2)}R'(x_6+x_2-x_3-x_4)$, isomorphic to the first up to a grading shift; and the third factorization is the rank-one row over $R'$ with differential $(x_2-x_4)(x_3-x_2)$. The map $g_1$ takes the reduced first factorization isomorphically onto the second summand of the middle factorization, and $g_2$ restricts to an isomorphism from the first summand of the middle factorization onto the third factorization; thus $f_1$ is an isomorphism onto a direct summand and $f_2$ restricts to an isomorphism from a complement, as required by step 1.1, so $C(D_1)$ is isomorphic in $K(\mathrm{hmf}_w)$ to the direct sum of two contractible complexes and $C(\Gamma_{01})\cong C(D_2)$. Every map in the computation is homogeneous of bidegree $(0,0)$ between the shifted rows, so no grading shift occurs. [F1, step 1.1, step 2.1]

4.1 *Conclusion and mirror image.* Steps 1.2-3.1 verify the splitting criterion of step 1.1 for the pair of Figure 15, giving $C(D_1)\cong C(D_2)$ in $K(\mathrm{hmf}_w)$ with no shift of the trigrading, hence an isomorphism of trigraded cohomology for the two braid-like IIa diagrams. The mirror-image move is the same computation with the signs of all potentials reversed and the roles of the two sides exchanged, which leaves the conclusion unchanged; both diagrams have potential $w$ in Figure 15 and potential $-w$ after all orientations are reversed, and no step of the argument uses the Axiom of Choice. [F1, F2, step 3.1] ∎
