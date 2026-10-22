---
id: def-ip-sobolev-spaces-on-compact-riemannian-domain
kind: definition
title: "Sobolev spaces on a compact Riemannian domain with boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-sobolev-space-wkp-and-its-norm
  - def-fractional-slobodeckij-space-on-euclidean-space
  - def-smooth-partition-of-unity-on-a-manifold-with-boundary
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - def-countable-choice
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 4.2, definitions and properties of Sobolev spaces on Euclidean domains and boundaries."
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "Section 1, notation for standard L2-based Sobolev spaces and compactly supported functions."
---

## Definition

Assume Countable Choice.

Let $n=\dim M\geq0$ and let $(M,g)$ be a compact smooth Riemannian manifold with smooth boundary, with no orientability assumption. Fix a finite smooth atlas of interior and boundary charts and a smooth partition of unity subordinate to it. If $n=0$, define every $H^k(M)$ to be the space of scalar-valued functions on the finite set $M$ with the counting-measure $\ell^2$ norm. For $n\geq1$ and an integer $k\geq0$, define $H^k(M)$ as the completion of $C^\infty(M)$ in the sum of the Euclidean $W^{k,2}$ norms of the localized coordinate representatives; derivatives in a boundary chart are taken on the corresponding half-space. Define $H_0^1(M)$ as the closure of $C_c^\infty(M^\circ)$ in $H^1(M)$. If $\partial M=\varnothing$, set $H^{1/2}(\partial M)=\{0\}$. If $n=1$, set $H^{1/2}(\partial M)=\mathbb K^{\partial M}$ with its counting-measure $\ell^2$ norm, where $\mathbb K$ is the scalar field. For $n\geq2$, define $H^{1/2}(\partial M)$ by the fixed finite boundary atlas and partition of unity, using the Euclidean fractional Slobodeckij space $W^{1/2,2}(\mathbb R^{n-1})$ for each localized representative. For real scalars, define $H^{-1/2}(\partial M)$ as the continuous linear dual of $H^{1/2}(\partial M)$. For complex scalars, define it as the continuous conjugate-linear dual: its pairing with $h\in H^{1/2}(\partial M)$ is linear in the dual element and conjugate-linear in $h$, using the Riemannian boundary density. These are the fixed-atlas norms used on this page; no atlas-independence assertion is part of this definition.

## Definition references

[[def-riemannian-metric-and-riemannian-manifold|Riemannian manifold and volume density]]

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary|Smooth charts on a manifold with boundary]]

[[def-sobolev-space-wkp-and-its-norm|Euclidean integer-order Sobolev norms]]

[[def-fractional-slobodeckij-space-on-euclidean-space|Euclidean fractional Sobolev spaces]]

[[def-smooth-partition-of-unity-on-a-manifold-with-boundary|Smooth partition of unity]]

[[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary|Existence of finite subordinate partitions]]

