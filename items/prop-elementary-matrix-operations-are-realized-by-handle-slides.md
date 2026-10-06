---
id: prop-elementary-matrix-operations-are-realized-by-handle-slides
kind: proposition
title: "Elementary matrix operations are realized by handle slides"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-attaching-belt-intersection-matrix-of-adjacent-index-handles, lem-handle-slides-preserve-the-relative-diffeomorphism-type, lem-handle-slides-act-by-elementary-basis-change-on-handle-chains, thm-oriented-intersection-number-is-homotopy-invariant, def-countable-choice, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-global-sphere-degree-is-the-sum-of-local-degrees, lem-transverse-complementary-spheres-have-product-charts]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.5 and §5.5, printed pp. 147-151 (handle addition realizes column operations; the row operations are used in the h-cobordism proof)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Isotopy Lemma 1.8 and the reduction lemmas of Ch. 1 §1.1, printed pp. 5-7"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be the attaching-belt intersection matrix of an index-ordered presentation with $1\le k\le n-2$. (i) If $e_{j'}$ is slid over $e_j$ with core-basis change $c_{j'}'=c_{j'}+\varepsilon c_j$, $\varepsilon\in\{+1,-1\}$, then the new matrix is obtained by $C_j\mapsto C_j-\varepsilon C_{j'}$, all other columns unchanged. The unchanged column $j'$ is the slid handle's own column: belt coordinates transform by the inverse dual basis change. (ii) If in addition $k+1\le n-2$ and the $(k+1)$-handle $g_{i'}$ is replaced by its slide over $g_i$, then the new matrix is obtained by the elementary row operation $R_{i'}\mapsto R_{i'}\pm R_i$, all other rows unchanged. (iii) Reorienting the core of a handle or its cocore multiplies the corresponding row or column by $-1$. Consequently handle slides together with the orientation conventions realize the elementary row and column operations on the matrix; this proposition does not assert that an arbitrary matrix can be reduced to normal form by slides, which is the content of the later Whitney-trick and h-cobordism pages.

## Facts & Assumptions

**Given:** The attaching-belt intersection matrix $M$ of an index-ordered presentation with $1\le k\le n-2$, a $k$-handle $e_j$ and its slide $e_{j'}$ over $e_j$, and, in the row case, a $(k+1)$-handle $g_i$ and a slide $g_{i'}$ over $g_i$.

[F1] [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]: $M_{ij}=I(A_i,B_j)$ is the oriented, respectively mod-2, intersection number of the attaching sphere of the $(k+1)$-handle $g_i$ with the belt sphere of the $k$-handle $e_j$ in the middle boundary.

[F2] [[lem-handle-slides-act-by-elementary-basis-change-on-handle-chains]]: assume $\mathrm{AC}_\omega$; under the disk-push diffeomorphism together with its specified lower-stage homotopy, the slid core satisfies $[C_{j'}]'=[C_{j'}]\pm[C_j]$, and correspondingly for a slid $(k+1)$-handle.

[F3] [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; the slide changes the presentation but not the relative diffeomorphism type, and the diffeomorphism is supported near the two handles and the band.


[F6] [[thm-cellular-boundary-is-the-incidence-degree-matrix]]: a cellular boundary coefficient is the degree of the attaching sphere followed by the collapse to the target cell sphere. [[thm-global-sphere-degree-is-the-sum-of-local-degrees]]: for a map of $k$-spheres with finite fibre, $k\ge1$, the degree is the sum of the local degrees in that fibre. [[lem-transverse-complementary-spheres-have-product-charts]] supplies product charts at each attaching-belt crossing.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through [F2] and [F3].

## Proof

**Proof technique:** direct.

1.1 Identify the handle-chain coefficient with the intersection count, rather than assuming homology bilinearity. Contract the lower stage and the disk-normal directions of the $k$-handles to obtain the relative cell model of [F2]. For the coefficient of an upper attaching sphere $A_i$ on core $c_j$, collapse every other cell, obtaining a continuous map $A_i\cong S^k\to D^k/S^{k-1}\cong S^k$. In the outgoing product $D^k\times S^{n-k-1}$ of the $j$th handle it is projection to the core coordinate modulo its boundary; it is the basepoint off that region. The fibre over the core centre is exactly $A_i\cap B_j$. The product chart in [F6] shows that each local degree is the corresponding intersection sign, with core generators oriented dually to the belt orientations (a common dimension-dependent convention sign has no effect on the transformations below). By the local-degree sum and cellular coefficient formula in [F6], $M_{ij}$ is the coefficient of the upper handle boundary at $c_j$. The same collapse with mod-two coefficients counts the preimages without signs. [F1, F2, F6, given, construct]

2.1 Write that boundary as $\sum_r M_{ir}c_r$. Under the lower slide, [F2] gives $c_{j'}'=c_{j'}+\varepsilon c_j$ and $c_j'=c_j$, with the other basis vectors fixed; use the comparison of [F3] to transport the upper attaching data. Substitution of $c_{j'}=c_{j'}'-\varepsilon c_j'$ gives the new coefficients $M_{ij}'=M_{ij}-\varepsilon M_{ij'}$ and $M_{ij'}'=M_{ij'}$, all others unchanged. Thus the operation is $C_j\mapsto C_j-\varepsilon C_{j'}$. It is the inverse dual change, rather than the core change applied directly to belt spheres. [F1, F2, F3, F5, step 1.1, algebra]

2.2 For an upper slide the target core basis stays fixed while [F2] replaces the upper core by $d_{i'}'=d_{i'}+\varepsilon d_i$. Its boundary is $\partial d_{i'}+\varepsilon\partial d_i$, so step 1.1 gives $R_{i'}\mapsto R_{i'}+\varepsilon R_i$, with the other rows unchanged. This slide is in the printed range $k+1\le n-2$. [F1, F2, F3, step 1.1, algebra]

3.1 Reversing an upper core orientation reverses its attaching-sphere orientation and hence its row; reversing a lower cocore orientation reverses its belt-sphere orientation and hence its column. These changes are $-1$ multiplications by the local sign convention of [F1]. Over $\mathbb Z_2$ signs disappear. Together with steps 2.1–2.2 this realizes the elementary additions and sign changes in the stated ranges; it does not turn an algebraic unit into a single geometric intersection. [F1, step 2.1, step 2.2, algebra] ∎
