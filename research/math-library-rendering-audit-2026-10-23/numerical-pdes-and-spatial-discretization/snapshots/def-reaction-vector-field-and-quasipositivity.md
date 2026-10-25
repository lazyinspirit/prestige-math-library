---
id: def-reaction-vector-field-and-quasipositivity
kind: definition
title: Reaction vector fields and quasi-positivity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§0, printed p. 1: concentrations of several species and a coupled reaction vector; §4, printed pp. 26–27: the boundary sign criterion for positivity of a locally Lipschitz semidiscrete ODE."
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§§10.6–10.7, PDF pp. 149–151: scalar and vector reaction-diffusion formulations and the Jacobian linearization at a homogeneous equilibrium."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $F:U\to\mathbb R^m$ be locally Lipschitz. Write $F_i$ for its $i$th component. The autonomous reaction equation is $z'(t)=F(z(t))$. The field is **quasi-positive** on $U\cap[0,\infty)^m$ if, for every $i$ and every $z\in U\cap[0,\infty)^m$ with $z_i=0$, one has $F_i(z)\ge0$. This condition concerns only the coordinate faces of the nonnegative orthant.

For a rectangle $R=\prod_{i=1}^m[a_i,b_i]\subset U$ with $a_i<b_i$, the field is **inward-pointing on $R$** if $F_i(z)\ge0$ whenever $z\in R$ and $z_i=a_i$, and $F_i(z)\le0$ whenever $z\in R$ and $z_i=b_i$. If $a_i=0$ for every $i$, quasi-positivity supplies the lower-face half of this condition, but the upper-face inequalities remain separate hypotheses. Neither boundary condition by itself asserts that a numerical update preserves $R$.

For smoothness-dependent results below, $F\in C^4(U,\mathbb R^m)$ will be stated explicitly. No smoothness beyond local Lipschitz continuity is built into this definition.
