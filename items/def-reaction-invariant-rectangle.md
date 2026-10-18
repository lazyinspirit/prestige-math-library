---
id: def-reaction-invariant-rectangle
kind: definition
title: Inward reaction rectangles
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [def-reaction-vector-field-and-quasipositivity]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§4, printed pp. 26–27: inward signs on the boundary of the nonnegative orthant for a positive ODE flow. A bounded rectangle additionally requires upper-face signs, stated here."
verification:
  precheck: n/a
---

## Definition

Let $F:U\to\mathbb R^m$ be locally Lipschitz, and let $R=\prod_{i=1}^m[a_i,b_i]\subset U$ with finite $a_i<b_i$. The rectangle is **reaction-inward** if, for every $i$, $F_i(z)\ge0$ on the lower face $z_i=a_i$ and $F_i(z)\le0$ on the upper face $z_i=b_i$, with all other coordinates in their intervals. It is **reaction-invariant** if the solution map $\Phi_F^t$ is defined for all $t\ge0$ on $R$ and $\Phi_F^t(R)\subseteq R$ for every $t\ge0$.

For a rectangle with $a_i=0$ for all $i$, quasi-positivity from [[def-reaction-vector-field-and-quasipositivity]] implies the lower-face condition. That condition tests only points in $R$ and does not imply quasi-positivity on all of $U\cap[0,\infty)^m$. The upper-face condition is independent and must be checked separately. The inward-sign condition is a hypothesis, not by definition an invariance theorem.
