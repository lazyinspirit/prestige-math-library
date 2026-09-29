---
id: def-cut-point-and-cut-locus-of-a-point
kind: definition
title: Cut point and cut locus of a point
status: published
origin: pipeline
deps:
  - def-cut-time-in-a-unit-tangent-direction
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
---

## Definition

Assume countable choice as carried through the declared dependencies. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold and
$p\in M$. Write
$$S_pM=\{v\in T_pM:|v|_g=1\}.$$
For each $v\in S_pM$, let $c_p(v)$ be the cut time from
[[def-cut-time-in-a-unit-tangent-direction]] and put
$\gamma_v(t)=\exp_p(tv)$. When $c_p(v)<\infty$, the point
$$q=\gamma_v(c_p(v))=\exp_p(c_p(v)v)$$
is the **cut point of $p$ along $\gamma_v$**. The **cut locus of $p$** is
$$\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<\infty\}.$$

This is the finite-supremum definition used by Lee, Chapter 10, in the section
“Geodesics Do Not Minimize Past Conjugate Points” (PDF label P206, printed
p.190). The endpoint is indeed the last minimizing point on its specified
ray: [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]] gives
minimization at a finite cut time and initial-interval behavior. If $c_p(v)$ is
finite, every $0\le t<c_p(v)$ is also minimizing: the supremum property gives
a minimizing time larger than $t$, and initial-interval behavior then applies.
No $t>c_p(v)$ is minimizing, since $c_p(v)$ is an upper bound for the
minimizing times. If $c_p(v)=+\infty$, every finite radial segment minimizes
and this direction contributes no point to $\operatorname{Cut}(p)$.

If $M$ is empty there is no base point $p$, so there is no set $\operatorname{Cut}(p)$
to evaluate. In dimension zero, $S_pM=\varnothing$ and hence
$\operatorname{Cut}(p)=\varnothing$. In dimension one, the two unit tangent
directions at each point are handled separately by the same formula. The
definition retains the declared $\mathrm{AC}_\omega$ assumption; forming this
set makes no simultaneous choice of directions and adds no further choice
principle.
