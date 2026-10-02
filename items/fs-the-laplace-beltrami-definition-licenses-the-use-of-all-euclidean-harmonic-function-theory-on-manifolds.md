---
id: fs-the-laplace-beltrami-definition-licenses-the-use-of-all-euclidean-harmonic-function-theory-on-manifolds
kind: false-statement
title: The laplace beltrami definition licenses the use of all euclidean harmonic function theory on manifolds
status: draft
origin: pipeline
deps:
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - thm-riemannian-divergence-theorem
  - def-countable-choice
  - prop-gradient-hessian-and-divergence-connection-formulas
  - def-riemannian-gradient
  - def-riemannian-divergence
  - def-riemannian-volume-density
  - def-laplacian-of-a-c2-function
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-euclidean-spheres-are-path-connected
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: Laplace comparison and the role of curvature/compactness hypotheses"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: geometric hypotheses versus formal definition"
---

## Statement

**False claim:** once the Laplace–Beltrami operator has been *defined* by
$\Delta_g=\operatorname{div}_g\operatorname{grad}$, every statement of Euclidean
harmonic-function theory — existence of nonconstant harmonic functions, the
maximum principle, Liouville theorems, boundary-value solvability and the rest —
holds verbatim on every Riemannian manifold, with no further geometric,
compactness or boundary hypothesis.

## Facts & Assumptions

**Given:** The Laplace–Beltrami operator of [[def-laplace-beltrami-operator-as-trace-of-the-hessian]], the Euclidean Laplacian of [[def-laplacian-of-a-c2-function]], the round sphere, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the divergence-theorem and integration suppliers used below; the computations select nothing.

[F1] On a Riemannian manifold without boundary the Laplace–Beltrami operator satisfies $\Delta_gf=\operatorname{div}_g(\operatorname{grad}f)$ and the product identity $\operatorname{div}_g(f\operatorname{grad}f)=f\Delta_gf+|\operatorname{grad}f|_g^2$, because the divergence is the metric trace of $X\mapsto\nabla_X$ and $\nabla(f\operatorname{grad}f)=f\nabla\operatorname{grad}f+ df\otimes\operatorname{grad}f$ ([[def-laplace-beltrami-operator-as-trace-of-the-hessian]], [[prop-gradient-hessian-and-divergence-connection-formulas]], [[def-riemannian-divergence]], [[def-riemannian-gradient]]).

[F2] On an oriented Riemannian manifold with boundary, for a smooth compactly supported vector field $X$, the divergence theorem reads $\int_M(\operatorname{div}_gX)\operatorname{vol}_g= \int_{\partial M}g(X,\nu)\operatorname{vol}_{\partial g}$; on a boundaryless manifold the boundary integral is empty and the identity is $\int_M\operatorname{div}_gX\,\operatorname{vol}_g=0$ ([[thm-riemannian-divergence-theorem]]). On a compact manifold every smooth vector field has compact support. The Riemannian volume is the Radon measure of the Riemannian density ([[def-riemannian-volume-density]], [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]), and this positive smooth density assigns positive measure to every nonempty
open set under [A1]
([[cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls]]).

[F3] The round sphere $S^n\subseteq\mathbb R^{n+1}$, $n\ge2$, with the induced metric is a compact, connected, boundaryless Riemannian manifold of positive constant sectional curvature ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[cor-euclidean-spheres-are-path-connected]]).

[F4] On $\mathbb R^n$ the Euclidean Laplacian is $\Delta f=\sum_{i=1}^n\partial_i^2f$ ([[def-laplacian-of-a-c2-function]]). In particular the coordinate function $f(x)=x^1$ has $\Delta f=0$ and is not constant.

## Refutation

1.1 The Euclidean theory has nonconstant harmonic functions. [F4, given]
On $\mathbb R^n$ the function $f(x^1,\dots,x^n)=x^1$ satisfies $\partial_1^2f=0$ and $\partial_i^2f=0$ for $i\ge2$, so $\Delta f=0$ by [F4]; since $f$ is not constant, Euclidean harmonic-function theory contains the conclusion "there exists a nonconstant harmonic function". [F4, given]

2.1 On the round sphere every harmonic function is constant. [F1, F2, F3, step 1.1]
Let $\varphi$ be a smooth function on the compact connected boundaryless round sphere $(S^n,g)$ with $\Delta_g\varphi=0$. Orient $S^n$ by its outward unit normal; $X=\varphi\operatorname{grad}\varphi$ is smooth and compactly supported because $S^n$ is compact. By [F1], $$\operatorname{div}_g\bigl(\varphi\operatorname{grad}\varphi\bigr)=|\operatorname{grad}\varphi|_g^2+\varphi\Delta_g\varphi=|\operatorname{grad}\varphi|_g^2.$$ Since $\partial S^n=\varnothing$, the divergence theorem [F2] gives $$\int_{S^n}|\operatorname{grad}\varphi|_g^2\,\operatorname{vol}_g=0,$$ If the continuous nonnegative integrand were positive at a point, it would
be at least some $\varepsilon>0$ on a nonempty open neighbourhood $O$.
By [F2], $\operatorname{vol}_g(O)>0$, whence the integral would be at least
$\varepsilon\operatorname{vol}_g(O)>0$, a contradiction. Thus
$\operatorname{grad}\varphi=0$ everywhere. The defining identity
$d\varphi(V)=g(\operatorname{grad}\varphi,V)$ makes $d\varphi=0$; in each
connected coordinate ball the one-variable zero-derivative argument along
line segments makes $\varphi$ constant. Hence $\varphi$ is locally constant
and, on connected $S^n$, constant. [F1, F2, F3, step 1.1]

3.1 The Euclidean conclusion fails unchanged on a Riemannian manifold. [F3, step 2.1]
The conclusion of step 1.1 — existence of a nonconstant harmonic function — is false on the round sphere of step 2.1, a perfectly standard Riemannian manifold on which the Laplace–Beltrami operator is defined exactly as in [F1]. The reasons are geometric and analytic, not definitional: compactness and the absence of boundary turn the integration-by-parts identity of step 2.1 into a rigidity statement, while on noncompact Euclidean space the same operator admits the linear harmonic functions of step 1.1. The display $\Delta_g=\operatorname{div}_g\operatorname{grad}$ therefore does not license Euclidean harmonic-function theory unchanged; every such theorem needs its own hypotheses (compactness, boundary, completeness, curvature, growth), which is precisely what the Laplace comparison theorems of this page supply in the geometric setting. The functions, the sphere and the integration are all explicit, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [F3, step 2.1] ∎
