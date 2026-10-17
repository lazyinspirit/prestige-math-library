---
id: thm-parabolic-fem-semidiscrete-existence-energy
kind: theorem
title: Well-posedness and energy stability of the semidiscrete FEM system
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - lem-parabolic-zero-boundary-sobolev-space-is-separable
  - thm-parabolic-finite-dimensional-measurable-ode
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-broken-and-conforming-polynomial-spaces
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - def-countable-choice
  - def-matching-affine-simplicial-meshes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.1, PDF pp. 104–105: spatial method of lines and the resulting mass/stiffness ODE."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§2.1, pp. 3–4: semidiscrete Galerkin spaces and their mass-matrix ODE."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $d\ge2$ and let $\Omega\subset\mathbb R^d$ be a bounded
polyhedral open set, let $\mathcal T_h$ be a finite matching affine
simplicial mesh of $\Omega$, and choose $k\in\mathbb N_0$. Let
$V=W^{1,2}_0(\Omega;\mathbb R)$ with its $W^{1,2}$ norm,
$H=L^2(\Omega;\mathbb R)$, and let $V^*$ be the continuous dual of $V$;
these spaces form the separable real evolution triple proved in
[[lem-parabolic-zero-boundary-sobolev-space-is-separable]]. Let $V_h$ be the
scalar degree-at-most-$k$ conforming polynomial subspace on $\mathcal T_h$
whose polynomial traces vanish on every boundary facet, as defined by
[[def-broken-and-conforming-polynomial-spaces]]. Suppose the real bilinear
form $a(t;\cdot,\cdot)$ on $V$ is scalar measurable and there is one null
set outside which it is bounded by $M$ and coercive by $\alpha>0$ on $V$.
Let $f\in L^2(0,T;V^*)$ and $u_h^0\in V_h$. Then there is a unique
$u_h\in H^1(0,T;V_h)$ with $u_h(0)=u_h^0$ satisfying
$$((u_h)'(t),v_h)_H+a(t;u_h(t),v_h)=\langle f(t),v_h\rangle_{V^*,V} \qquad(v_h\in V_h)$$
for almost every $t$. For every $t\in[0,T]$,
$$\|u_h(t)\|_H^2+\alpha\int_0^t\|u_h(s)\|_V^2\,ds \le\|u_h^0\|_H^2+\alpha^{-1}\int_0^t\|f(s)\|_{V^*}^2\,ds.$$

## Facts & Assumptions

**Given:** Countable Choice, a bounded polyhedral open set, a finite matching
affine mesh and its scalar zero-boundary conforming polynomial space, the
$W^{1,2}$-norm evolution triple, the uniformly bounded/coercive measurable
form, $f\in L^2(0,T;V^*)$, and $u_h^0\in V_h$.

[F1] On a finite matching affine mesh, the zero-boundary conforming
polynomial space from [[def-matching-affine-simplicial-meshes]] is a
finite-dimensional algebraic subspace of the broken polynomial product
([[def-broken-and-conforming-polynomial-spaces]]).

[F2] If its polynomial traces vanish on boundary facets and match on interior
facets, that subspace lies in $W^{1,2}_0(\Omega)$; this is a closed subspace
of the ambient evolution space under the present identification
([[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F3] On any finite-dimensional $V_h\subset V$, the measurable-coefficient
Galerkin ODE has a unique absolutely continuous solution and the displayed
energy estimate ([[thm-parabolic-finite-dimensional-measurable-ode]]).

[F4] For bounded polyhedral $\Omega$, $V=W^{1,2}_0(\Omega;\mathbb R)$ with
the $W^{1,2}$ norm and $H=L^2(\Omega;\mathbb R)$ form a separable real
evolution triple ([[lem-parabolic-zero-boundary-sobolev-space-is-separable]]).

[A1] Countable Choice is assumed by the zero-boundary Sobolev supplier
([[def-countable-choice]]).

## Proof

1.1 By [F1], $V_h$ is finite-dimensional. Its zero-boundary trace condition and [F2] give $V_h\subset V$, while [F4] verifies that the stated $V,H,V^*$ are a separable evolution triple. Countable Choice is retained exactly as in [A1]. [F1, F2, F4, A1, given]

2.1 Restriction of each $F(t)\in V^*$ to $V_h$ is a bounded functional, and the restriction map $V^*\to V_h^*$ is continuous. Thus the restricted load is strongly measurable and square-integrable. Apply [F3] to this $V_h$ and the restricted form/load. It gives a unique $u_h$ satisfying the stated semidiscrete equation and energy estimate. [F3, step 1.1, given] ∎
