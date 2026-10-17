---
id: lem-transverse-hyperplane-selects-unique-local-branch-point
kind: lemma
title: "A transverse predictor hyperplane selects one nearby point of a regular branch"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-newton-leibniz-with-interior-derivative
  - thm-monotonicity-of-the-integral
  - thm-intermediate-value
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 2, §§2.1–2.2, printed pp. 7–16: local regular solution curves and tangent-plane continuation"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§7.1, printed pp. 92–94: local pseudo-arclength hyperplane correction through regular and fold points"
---

## Statement

Let $c:[-\delta,\delta]\to U\subseteq\mathbb R^{n+1}$ be a unit-speed
reparameterization of the unique locally normalized solution curve supplied
by [[lem-regular-curve-chart-and-pseudo-arclength-predictor-defect]], with
$c(0)=z_0$. Let $\tau\in\mathbb R^{n+1}$ be a unit vector, let
$0<r_-,r_+\le\delta$, and suppose that for some $\kappa>0$,
$$\tau^Tc'(s)\ge\kappa\qquad(-r_-\le s\le r_+).$$
Let $z_p\in\mathbb R^{n+1}$ satisfy
$$d:=\tau^T(z_p-z_0),\qquad 0\le d\le\kappa r_+.$$
Then there is exactly one $s_*\in[-r_-,r_+]$ such that
$$\tau^T(c(s_*)-z_p)=0.$$
Thus the predictor hyperplane has exactly one intersection with this
local branch segment containing its basepoint. The statement is local to
the supplied chart.

## Facts & Assumptions

**Given:** The chart $c$, $z_0$, unit normal $\tau$, $r_-$, $r_+$,
$\kappa$, and $z_p$ with the conditions in the Statement.

[F1] [[lem-regular-curve-chart-and-pseudo-arclength-predictor-defect]]:
$c$ is a $C^1$ unit-speed reparameterization of the unique local solution
curve on an interval containing $[-r_-,r_+]$.

[F2] [[thm-chain-rule-for-total-derivatives]]: the derivative of a linear
functional composed with a differentiable curve is the functional applied to
the curve derivative.

[F3] [[thm-continuous-implies-integrable]] and
[[thm-newton-leibniz-with-interior-derivative]]: a $C^1$ scalar function's
increment on a compact interval is the integral of its derivative.

[F4] [[thm-monotonicity-of-the-integral]]: an integrable function bounded
below by $\kappa$ on an interval of length $\ell$ has integral at least
$\kappa\ell$.

[F5] [[thm-intermediate-value]]: a continuous real function takes every
value between its endpoint values.

## Proof

**Given:** The chart and inequalities in the Statement.

1.1 Define $g(s):=\tau^T(c(s)-z_p)$ on $[-r_-,r_+]$. By [F2], $g'(s)=\tau^Tc'(s)\ge\kappa$. The fundamental theorem in [F3] therefore gives $g(r_+)-g(0)=\int_0^{r_+}g'(u)\,du\ge\kappa r_+$ by [F4]. Since $g(0)=-d$ and $d\le\kappa r_+$, we have $g(0)\le0$ and $g(r_+)\ge0$. If $d=0$, then $s_*=0$ is a zero; if $d>0$, the intermediate value theorem [F5] gives $s_*\in(0,r_+]$ with $g(s_*)=0$. [F1, F2, F3, F4, F5, given, algebra]

2.1 If $-r_-\le s_1<s_2\le r_+$, [F2]–[F4] give $$g(s_2)-g(s_1)=\int_{s_1}^{s_2}g'(u)\,du\ge\kappa(s_2-s_1)>0.$$ Thus $g$ is strictly increasing, so it has at most one zero on $[-r_-,r_+]$. The zero found in step 1.1 is therefore unique. [F2, F3, F4, step 1.1, algebra] ∎
