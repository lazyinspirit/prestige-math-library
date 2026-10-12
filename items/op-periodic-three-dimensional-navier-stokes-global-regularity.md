---
id: op-periodic-three-dimensional-navier-stokes-global-regularity
kind: open-problem
title: "Global smoothness of periodic three-dimensional Navier–Stokes solutions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-function-on-a-relatively-open-subset-of-a-half-space, def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles L. Fefferman, Existence and Smoothness of the Navier–Stokes Equation, formulation (B) and errata"
      url: "https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf"
    - title: "Clay Mathematics Institute, Navier–Stokes Equation problem status"
      url: "https://www.claymath.org/millennium/Navier-Stokes-Equation/"
    - title: "Clay Mathematics Institute, Navier–Stokes announcement, 11 September 2026"
      url: "https://www.claymath.org/news/navier-stokes-announcement/"
---

## Open problem

Fix a viscosity $\nu>0$. Let $u_0:\mathbb R^3\to\mathbb R^3$ be smooth, divergence-free, and periodic with period one in each spatial coordinate: $u_0(x+e_j)=u_0(x)$ for the standard coordinate vectors $e_j$, $j=1,2,3$. Periodic functions here can equivalently be viewed on the quotient $\mathbb R^3/\mathbb Z^3$, where points differing by an integer vector are identified.

Does every such $u_0$ admit a velocity $u:\mathbb R^3\times[0,\infty)\to\mathbb R^3$ and pressure $p:\mathbb R^3\times[0,\infty)\to\mathbb R$, both smooth up to $t=0$ and periodic in each spatial coordinate, satisfying the unforced incompressible system for every $t\ge0$?

$$\partial_tu+(u\cdot\nabla)u=\nu\Delta u-\nabla p,\qquad \operatorname{div}u=0,\qquad u(x,0)=u_0(x).$$

Smoothness up to the time boundary uses local smooth extension as in [[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]. At a fixed time, divergence and the gradient have the coordinate meanings of [[def-divergence-and-curl-of-a-c1-vector-field]]; the Laplacian is componentwise as in [[def-laplacian-of-a-c2-function]]. Explicitly, $((u\cdot\nabla)u)_i=\sum_{j=1}^3u_j\partial_{x_j}u_i$ and $(\Delta u)_i=\sum_{j=1}^3\partial_{x_j}^2u_i$. This is Fefferman's periodic global-smoothness formulation (B), including spatial periodicity of the pressure specified by the errata. It does not assert global regularity as a fact.

## Status

Status checked against the cited official records on 12 October 2026: Clay's problem page labels the problem **Active**. Its 11 September 2026 announcement describes an apparent settlement and an evaluation process that is deliberately unhurried. That announcement is a status report, not a proof of the formulation above; this library accepts no solution or proof premise from it. The present item records the unresolved/pending question and must be revisited if authoritative acceptance changes its status.

The equations themselves are a mathematical formulation. Established local, small-data, two-dimensional, weak-solution, or partial-regularity results require separate precise result items and proofs. A numerical computation or a theorem about a discretization does not settle this question. No item may use this open problem in `deps`, `justified_by`, or as a proof premise.
