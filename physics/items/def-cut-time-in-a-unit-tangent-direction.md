---
id: def-cut-time-in-a-unit-tangent-direction
kind: definition
title: Cut time in a unit tangent direction
status: published
origin: pipeline
deps:
  - thm-hopf-rinow
  - cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing
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
    - title: Ved Datar, Lectures on Riemannian Geometry (2025), Lectures 21–24
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

Assume countable choice, as in [[def-countable-choice]]. Let $(M,g)$ be a
complete, connected, boundaryless Riemannian manifold, let $p\in M$, and let
$v\in T_pM$ be a unit vector. Hopf–Rinow
([[thm-hopf-rinow]]) makes the radial geodesic
$\gamma_v(t)=\exp_p(tv)$ defined for every $t\in\mathbb R$. Its **cut time** is
$$
c_p(v):=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty].
$$
We write $c(v)$ when $p$ is fixed. The set in the supremum is nonempty:
[[cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing]] gives
equality for every sufficiently small $t>0$. The value $+\infty$ is allowed
when every positive radial segment minimizes. This definition alone does not
assert that a finite supremum is attained.

For a zero-dimensional manifold the unit sphere in each tangent space is empty,
so there are no directions on which to evaluate $c_p$. In dimension one the
two unit directions, when present, are treated separately by the same formula.
The only choice assumption here is the declared $\mathrm{AC}_\omega$ carried
by the cited global and local geodesic results; fixing one $p$ and $v$ makes no
use of a choice function on a family of directions and does not invoke full
AC.
