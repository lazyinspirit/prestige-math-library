---
id: def-rudin-ordinal-box-space
kind: definition
title: Rudin ordinal box spaces on infinite index sets
status: draft
origin: pipeline
deps: [def-reduced-ordinal-products-and-scales, def-order-topology-on-an-ordinal, def-product-topology, def-axiom-of-choice]
justified_by: [lem-rudin-box-space-basic-neighborhoods-and-p-space]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 1, printed p. 35"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Definition

Assume [[def-axiom-of-choice|AC]]. Fix an infinite $B\subseteq\omega\setminus\{0,1\}$ and put

$$P_B=\prod_{n\in B}(\aleph_n+1)=\{h:\operatorname{dom}h=B,\ h(n)\le\aleph_n\text{ for every }n\in B\}.$$

Each factor is the ordinal interval $[0,\aleph_n]$ with its order topology, as in [[def-order-topology-on-an-ordinal]]. Give $P_B$ the **box topology**: its open sets are unions of boxes $\prod_{n\in B}O_n$ with every $O_n$ open in its factor. The whole product is such a box, and the intersection of two boxes is the box with factors $O_n\cap V_n$, so this prescription defines a topology. In contrast, [[def-product-topology]] restricts a basic box to have only finitely many factors different from the whole factor. No such restriction is imposed here.

The **Rudin space** on $B$ is the subspace

$$X_R(B)=\{h\in P_B:\text{there is }m<\omega\text{ such that }\omega<\operatorname{cf}(h(n))<\aleph_m\text{ for every }n\in B\}.$$

The witness $m$ may depend on the point $h$, but one $m$ must bound the cofinalities of all its coordinates. Both inequalities are strict. The coordinate endpoint $h(n)=\aleph_n$ is allowed when the uniform cofinality condition permits it.

Use pointwise $a<b$ to mean $a(n)<b(n)$ at every coordinate, and define

$$(a,b]_R=\{h\in X_R(B):a(n)<h(n)\le b(n)\text{ for every }n\in B\}.$$

The bounds $a,b$ are members of $P_B$ with $a<b$; they need not belong to $X_R(B)$. These half-open boxes, and in particular $(a,h]_R$ at $h\in X_R(B)$, give the local base proved in [[lem-rudin-box-space-basic-neighborhoods-and-p-space]]. Eventual comparisons remain those of [[def-reduced-ordinal-products-and-scales]]; pointwise and eventual comparisons are distinct conventions throughout.
