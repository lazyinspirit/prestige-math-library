---
title: The vertex fundamental groupoid of a sphere is thin
status: published
research_item: lem-author-d4ce11000001-sphere-vertex-groupoid
dependency_level: 25
---

## Prerequisites

- [lem-author-d4ce11000001-directed-bigon-sphere](item-lem-author-d4ce11000001-directed-bigon-sphere)
- [lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere)
- [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)
- [math:def-subcategory-and-full-subcategory](https://alphabetamath.cc/item/def-subcategory-and-full-subcategory)
- [math:thm-seifert-van-kampen](https://alphabetamath.cc/item/thm-seifert-van-kampen)
- [math:thm-stereographic-projection-riemann-sphere-homeomorphism](https://alphabetamath.cc/item/thm-stereographic-projection-riemann-sphere-homeomorphism)


## Statement

For the doubled spherical complex $K$ and its set $V$ of 32 chamber vertices, the full subgroupoid $\Pi_1(K;V)$ of the fundamental groupoid on $V$ has exactly one morphism between every ordered pair of vertices. Every directed crossing edge represents that unique morphism between its endpoints, and its reverse crossing represents the inverse.

## Statement references

[lem-author-d4ce11000001-directed-bigon-sphere](item-lem-author-d4ce11000001-directed-bigon-sphere)

[lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere)

[math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space)

[math:def-subcategory-and-full-subcategory](https://alphabetamath.cc/item/def-subcategory-and-full-subcategory)

[math:thm-seifert-van-kampen](https://alphabetamath.cc/item/thm-seifert-van-kampen)

[math:thm-stereographic-projection-riemann-sphere-homeomorphism](https://alphabetamath.cc/item/thm-stereographic-projection-riemann-sphere-homeomorphism)

## Facts & Assumptions

[F1] [lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere) identifies the dual vertices with the 32 chambers. [lem-author-d4ce11000001-directed-bigon-sphere](item-lem-author-d4ce11000001-directed-bigon-sphere) preserves these vertices when doubling the edges and gives a homeomorphism $K\cong S^2$.

[F2] [math:def-fundamental-groupoid-of-a-space](https://alphabetamath.cc/item/def-fundamental-groupoid-of-a-space) defines arrows as endpoint-fixed path-homotopy classes, composition by concatenation, and inverses by path reversal, with the groupoid laws. By [math:def-subcategory-and-full-subcategory](https://alphabetamath.cc/item/def-subcategory-and-full-subcategory), the full subcategory on $V$ retains every ambient morphism between its objects; these inherited inverses make it a groupoid.

[F3] [math:thm-stereographic-projection-riemann-sphere-homeomorphism](https://alphabetamath.cc/item/thm-stereographic-projection-riemann-sphere-homeomorphism) gives the homeomorphism $\Pi:S^2\setminus\{N\}\to\mathbb C$, where $N=(0,0,1)$ and $\Pi(x,y,t)=(x+iy)/(1-t)$. [math:thm-seifert-van-kampen](https://alphabetamath.cc/item/thm-seifert-van-kampen) identifies the fundamental group of a union of two open path-connected sets with path-connected overlap, based in that overlap, with the pushout of the two fundamental groups over the overlap group.

## Proof

**Given:** The data in the Statement and the exact supplier facts above.

**Goal:** Establish the Statement.

1.1 Put $S=(0,0,-1)$, $U_N=S^2\setminus\{N\}$ and $U_S=S^2\setminus\{S\}$. The chart in [F3] identifies $U_N$ with $\mathbb C\cong\mathbb R^2$. The reflection $r(x,y,t)=(x,y,-t)$ is a continuous self-inverse map of the sphere and interchanges $N$ and $S$, so $\Pi\circ r$ identifies $U_S$ with the same plane. Both sets are open, path-connected and have trivial fundamental group: in either chart, the homotopy $(t,u)\mapsto(1-u)\alpha(t)+u\alpha(0)$ contracts any based loop while fixing its basepoint. Their overlap is identified by $\Pi$ with $\mathbb C\setminus\{0\}$, since $\Pi(S)=0$; this is path-connected, as any two nonzero points can be joined by two line segments through a point outside their two real lines through zero. The two charts cover the sphere and have nonempty overlap, so the sphere is path-connected. Choose $x_0\in U_N\cap U_S$. Van Kampen gives $\pi_1(S^2,x_0)$ as the pushout of two trivial groups over the overlap group. This pushout is trivial: any compatible pair of homomorphisms from the two trivial factors to a group has a unique factorization through the trivial group. [F3]

2.1 Fix a homeomorphism $h:K\to S^2$ from [F1]. Composing paths and endpoint-fixed homotopies with $h$ and $h^{-1}$ gives inverse functors on the fundamental groupoids in [F2]. Thus $K$ is path-connected and its loop classes at $a_0=h^{-1}(x_0)$ are trivial by step 1.1. For any $A\in K$, choose a path $p:a_0\to A$. If $\lambda$ is a loop at $A$, then $p*\lambda*\bar p$ is a loop at $a_0$ and has the identity class. Cancellation using the groupoid laws in [F2] gives $[\lambda]=[c_A]$. Consequently all loop classes at every point of $K$ are trivial. [F1, F2, step 1.1]

3.1 For any $A,B\in V$ and paths $\alpha,\beta:A\to B$, the loop $\alpha*\bar\beta$ is null-homotopic by step 2.1. In the composition convention of [F2], this says $[\beta]^{-1}\circ[\alpha]=1_A$, hence $[\alpha]=[\beta]$. A path exists by path-connectedness, so every ambient hom-set between these vertices is a singleton. The full subgroupoid retains exactly these hom-sets. Each directed crossing edge is such a path, so it represents the unique morphism between its endpoints. The opposite crossing is a distinct one-cell, but its class equals the inverse class because the hom-set in the reverse direction is also a singleton. This proves the Statement. [F1, F2, step 2.1] ∎
