---
id: lem-a-generic-projection-can-preserve-properness
kind: lemma
title: "A generic projection can preserve properness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-secant-and-tangent-direction-maps-of-an-euclidean-embedding,
       lem-a-generic-linear-projection-preserves-injectivity-and-immersion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 6.14"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let
$$
F=(g,\rho):M\to\mathbb R^N\times\mathbb R
$$
be a smooth embedding such that $g(M)$ is bounded and $\rho$ is proper. If a
unit vector $u\in S^N$ is not parallel to the last-coordinate axis and lies
outside the secant and tangent direction images of $F$, then the orthogonal
projection $P_u\circ F$ is a proper injective immersion.

## Facts & Assumptions

**Given:** A smooth embedding $F=(g,\rho):M\to\mathbb R^N\times\mathbb R$ with $g(M)$ bounded and $\rho$ proper.

[F1] The secant and tangent direction maps record exactly the projection directions that can destroy injectivity or immersion ([[def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]], [[lem-a-generic-linear-projection-preserves-injectivity-and-immersion]]).

## Proof
**Proof technique:** direct.

1.1 The injectivity and immersion assertions follow exactly as in the generic-projection lemma recorded in [F1]: since $u$ is not a secant direction, distinct points cannot collapse under $P_u$, and since $u$ is not a tangent direction, no nonzero tangent vector lies in the kernel of $d(P_u\circ F)$. [F1, given]

1.2 Let $e=(0,1)$ be the last-coordinate unit vector and put $e':=P_u(e)$. The hypothesis that $u$ is not parallel to $e$ is exactly $e'\ne0$. Decompose $u^\perp=\mathbb Re'\oplus(e')^\perp$. Since $$P_u(F(p))=P_u(g(p),0)+\rho(p)e',$$ its $(e')^\perp$-component is bounded. Its scalar component along $e'/\|e'\|$ is $$\rho'(p)=\|e'\|\rho(p)+b(p),$$ where $b$ is bounded. [given, construct, algebra]

2.1 The function $\rho'$ is proper. Indeed, if $J\subseteq\mathbb R$ is compact and $|b|\le B$, then $\rho'(p)\in J$ forces $\rho(p)$ into a bounded closed interval because $\|e'\|>0$. Thus $(\rho')^{-1}(J)$ is a closed subset of the inverse image under the proper map $\rho$ of a compact interval. [step 1.2, given]

3.1 If $K\subseteq u^\perp$ is compact, its image under the linear coordinate along $e'$ is compact. Hence $(P_u\circ F)^{-1}(K)$ is a closed subset of the compact set $(\rho')^{-1}(\operatorname{pr}_{e'}K)$ and is compact. Therefore $P_u\circ F$ is proper. Together with step 1.1, it is a proper injective immersion. [step 1.1, step 2.1] ∎
