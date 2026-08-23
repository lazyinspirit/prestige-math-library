---
id: thm-lagrange-multipliers-for-regular-level-set-constraints
kind: theorem
title: 'Lagrange multipliers for a regular vector-valued level-set constraint'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space, thm-differential-rank-is-lower-semicontinuous, def-regular-critical-points-values-and-level-sets, lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple, thm-parametrized-constraint-necessary-condition, thm-gradient-represents-directional-derivatives-and-steepest-ascent, def-jacobian-matrix-and-gradient, def-euclidean-local-extrema-and-critical-points]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 2.8'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.8.html'
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Lagrange multipliers discussion'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^m$ be open, let $f:U\to\mathbb R$ and $G:U\to\mathbb R^q$ be $C^1$, and suppose $a$ is a local maximum or minimum of $f$ subject to $G(x)=c$. If $DG(a)$ is surjective, then there is a unique $\lambda\in\mathbb R^q$ such that
$$Df(a)v=\langle\lambda,DG(a)v\rangle\quad(v\in\mathbb R^m),$$
or equivalently
$$\nabla f(a)=DG(a)^{\mathsf T}\lambda.$$
This is a necessary condition, not a sufficient condition for a constrained extremum.

## Facts & Assumptions

**Given:** The maps $f,G$, the regular constrained point $a$, and $c=G(a)$.

[L1] If $c$ is a regular value of a $C^1$ map on an open set, then at every point $a$ of its fibre a vector lies in the tangent space exactly when it is the velocity at zero of a $C^1$ curve through $a$ inside that fibre ([[thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space]]).

[L4] For a $C^1$ map the locus where the derivative has rank at least $r$ is open, so the submersion locus is open ([[thm-differential-rank-is-lower-semicontinuous]]); a value is regular when every point of its fibre is a submersion point ([[def-regular-critical-points-values-and-level-sets]]).

[L2] A local extremum is defined by the objective inequality on a neighbourhood, and if a differentiable function restricted to a differentiable curve has a local extremum, then its derivative along the curve is zero ([[def-euclidean-local-extrema-and-critical-points]], [[thm-parametrized-constraint-necessary-condition]]).

[L3] A linear functional vanishing on the kernel of a surjection is a unique transpose multiple; $Df(a)v=\langle\nabla f(a),v\rangle$ ([[lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple]], [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]], [[def-jacobian-matrix-and-gradient]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] the set $W$ of points of $U$ at which $DG$ is surjective is open, and $a\in W$; on $W$ every point of every fibre is a submersion point, so $c$ is a regular value of $G|_W$ and $a$ is a local extremum of $f$ subject to $G|_W=c$. Fix $v\in\ker DG(a)$. By [L1] applied to $G|_W$, choose a level-set curve $\gamma$ with $\gamma(0)=a$ and $\gamma'(0)=v$ inside $G|_W^{-1}(c)\subseteq G^{-1}(c)$. The constrained local extremum condition in [L2] makes $f\circ\gamma$ locally extremal at $0$. [given, L1, L2, L4, choose]

2.1 By [L2], $Df(a)v=0$. Since $v$ was arbitrary, the functional $Df(a)$ vanishes on $\ker DG(a)$. [step 1.1, L2]

3.1 Apply [L3] to the surjection $DG(a)$. It gives a unique $\lambda$ with $Df(a)v=\langle\lambda,DG(a)v\rangle$ for all $v$, and the gradient representation turns this equality of functionals into $\nabla f(a)=DG(a)^{\mathsf T}\lambda$. [step 2.1, L3]

4.1 The argument derives the multiplier equation from a constrained extremum and makes no converse assertion, as claimed. [step 3.1] ∎
