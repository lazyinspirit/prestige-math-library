---
id: thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup
kind: theorem
title: "Non-elementary hyperbolic groups contain a rank-two free subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-and-non-elementary-hyperbolic-groups, def-rank-of-a-finite-rank-free-group, thm-free-groups-are-torsion-free, thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted, thm-morse-stability-of-quasi-geodesics]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 6.11.1 (S4)"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
    - title: "Ilya Kapovich and Nadia Benakli, Boundaries of hyperbolic groups, Theorem 2.28, Proposition 4.2, and Theorem 4.3"
      url: "https://arxiv.org/abs/math/0202286"
---

## Statement

Every non-elementary hyperbolic group contains a free subgroup of rank $2$.

## Facts & Assumptions

**Given:** A non-elementary hyperbolic group $G$.

[A1] Every non-elementary hyperbolic group contains independent
infinite-order elements $g,h$ with pairwise disjoint attracting and repelling
neighborhoods $U_g^+,U_g^-,U_h^+,U_h^-$. Their boundary actions have
north--south dynamics: for all sufficiently large $N$,
$$g^{\pm N}(\partial G\setminus U_g^{\mp})\subseteq U_g^{\pm},\qquad h^{\pm N}(\partial G\setminus U_h^{\mp})\subseteq U_h^{\pm}.$$
(Kapovich--Benakli, Theorem 2.28, Proposition 4.2, and Theorem 4.3.)

## Proof

**Proof technique:** direct.

1.1 By [A1], choose independent infinite-order elements $g,h \in G$ with disjoint attracting and repelling neighborhoods on the boundary. [given, A1, choose]

2.1 Choose $N$ large enough for all four north--south inclusions in [A1]. Write $D_{g^N}=U_g^+$, $D_{g^{-N}}=U_g^-$, $D_{h^N}=U_h^+$, and $D_{h^{-N}}=U_h^-$. If $w=s_1\cdots s_k$ is a nonempty reduced word in $g^{\pm N},h^{\pm N}$, choose a letter $t$ distinct from both $s_1$ and $s_k^{-1}$ and a point $x\in D_t$. Acting from right to left, [A1] gives successively. [A1, step 1.1, choose]
$$s_j\cdots s_kx\in D_{s_j}\qquad(j=k,k-1,\ldots,1),$$
because reducedness says $s_{j+1}\ne s_j^{-1}$. Thus $wx\in D_{s_1}$, while $x\in D_t$, and these domains are disjoint. Hence $wx\ne x$, so $w$ is not trivial. Therefore $g^N$ and $h^N$ freely generate a free subgroup of rank $2$. [A1, step 1.1, choose, algebra] ∎
