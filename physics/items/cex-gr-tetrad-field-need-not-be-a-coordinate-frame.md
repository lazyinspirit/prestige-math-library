---
id: cex-gr-tetrad-field-need-not-be-a-coordinate-frame
kind: counterexample
title: "A tetrad field that is not the coordinate frame of any chart"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-shearing-congruence-tetrad-and-adapted-chart, def-gr-local-frame-and-tetrad-fields]
dependency_roles:
  ex-gr-shearing-congruence-tetrad-and-adapted-chart: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'tetrads and non-coordinate bases', printed pp. 88-91 (PDF pp. 95-98)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 8 'Vector Fields': Lie brackets and the commuting of coordinate vector fields, printed pp. 185-189"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "every smooth future-directed tetrad field on a nonempty
open subset of flat Lorentzian four-space is the coordinate frame of some
smooth chart" ([[def-gr-local-frame-and-tetrad-fields]]).

## Facts & Assumptions

**Given:** The shearing congruence example on the open set $W=\{|\lambda x^1|<1/2\}\subseteq\mathbb R^4$ with its future-directed tetrad field $E=(E_0,E_1,E_2,E_3)$.

[L1] On $W$ the tuple $(E_0,E_1,E_2,E_3)$ with $E_0=\gamma(\partial_0+\Omega\partial_2)$, $E_1=\partial_1$, $E_2=\gamma(\Omega\partial_0+\partial_2)$, $E_3=\partial_3$, $\Omega=\lambda x^1$, $\gamma=(1-\Omega^2)^{-1/2}$, is a smooth future-directed tetrad field, and $[E_0,E_1]=-\gamma'\partial_0-(\gamma\Omega)'\partial_2$ with $\gamma'=\gamma^3\lambda^2x^1$, nonzero at every point of $W$ with $x^1\neq0$ ([[ex-gr-shearing-congruence-tetrad-and-adapted-chart]]).

[L2] The coordinate frame $(\partial_{v^0},\partial_{v^1},\partial_{v^2},\partial_{v^3})$ of a smooth chart has pairwise commuting members: $[\partial_{v^a},\partial_{v^b}]=0$ for all $a,b$; consequently a frame field with a nonvanishing bracket is not the coordinate frame of any chart ([[def-gr-local-frame-and-tetrad-fields]]).

## Counterexample

1.1 By [L1], $E$ is a smooth future-directed tetrad field on the nonempty open subset $W$ of flat Lorentzian four-space, and $[E_0,E_1]=-\gamma'\partial_0-(\gamma\Omega)'\partial_2$ with $\gamma'=\gamma^3\lambda^2x^1$. At every point of $W$ with $x^1\neq0$ we have $\gamma'\neq0$, so the coefficient of $\partial_0$ in $[E_0,E_1]$ is nonzero and $[E_0,E_1]\neq0$ there; such points exist in $W$. [L1, algebra]

2.1 Suppose, for contradiction, that $E$ were the coordinate frame of a smooth chart $(V,v)$ on some open subset of $W$: that is, $E_a=\partial_{v^a}$ on the chart domain for $a=0,1,2,3$. Then by [L2] we would have $[E_a,E_b]=[\partial_{v^a},\partial_{v^b}]=0$ for all $a,b$, contradicting step 1.1: every nonempty open chart domain $V\subseteq W$ contains a point with $x^1\neq0$, since the hyperplane $\{x^1=0\}$ has empty interior in $\mathbb R^4$, and the bracket is nonzero at that point. Hence no such chart exists, and the displayed general statement is refuted. [step 1.1, L2] ∎

## Remarks

This counterexample uses the necessary commutation condition to refute the
universal claim; it makes no assertion about the sufficiency of that condition. The companion example
[[ex-gr-shearing-congruence-tetrad-and-adapted-chart]] exhibits an adapted
chart for the same congruence, so "adapted chart" and "coordinate frame equal
to the tetrad" are different requirements.
