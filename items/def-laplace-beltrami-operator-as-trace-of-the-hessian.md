---
id: def-laplace-beltrami-operator-as-trace-of-the-hessian
kind: definition
title: Laplace–Beltrami operator as the trace of the Hessian
status: draft
origin: pipeline
deps:
  - prop-gradient-hessian-and-divergence-connection-formulas
  - def-riemannian-divergence
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: the trace-of-Hessian Laplacian used in the distance and volume comparisons"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: the same operator in the Riccati and density arguments"
---

## Definition

Let $(M,g)$ be a Riemannian manifold, possibly with boundary, and let
$f:M\to\mathbb R$ be smooth. At each interior point, the
**Laplace–Beltrami operator** of $g$ is defined by the metric trace of the Hessian,
$$\Delta_gf(p):=\operatorname{tr}_g(\operatorname{Hess}f)_p:=\sum_{i=1}^{n}\operatorname{Hess}f(e_i,e_i),$$
where $n=\dim M$ and $e_1,\dots,e_n$ is any $g_p$-orthonormal basis of $T_pM$; the
trace of a bilinear form with respect to a positive-definite inner product does not
depend on that choice, so $\Delta_gf$ is well-defined and smooth in the interior;
when $f$ is smooth up to the boundary, it has the usual one-sided extension there.
Here
$\operatorname{Hess}f(X,Y)=g(\nabla_X\operatorname{grad}f,Y)$ is the Levi-Civita
Hessian of
[[prop-gradient-hessian-and-divergence-connection-formulas]].

Equivalently, and with the **positive-divergence convention** of this library,
$$\Delta_gf=\operatorname{div}_g(\operatorname{grad}f),$$
where $\operatorname{div}_gX=\operatorname{tr}(v\mapsto\nabla_vX)$ is the Riemannian
divergence of [[def-riemannian-divergence]] as computed in
[[prop-gradient-hessian-and-divergence-connection-formulas]]. The equivalence is the
pointwise computation
$$\sum_i\operatorname{Hess}f(e_i,e_i)=\sum_i g(\nabla_{e_i}\operatorname{grad}f,e_i)=\operatorname{tr}(v\mapsto\nabla_v\operatorname{grad}f),$$
the middle sum being the endomorphism trace of $v\mapsto\nabla_v\operatorname{grad}f$
in the orthonormal basis $(e_i)$, which the same supplier identifies with
$\operatorname{div}_g(\operatorname{grad}f)$; no local coordinates are needed and no
analytic regularity beyond the smoothness of $f$ is used. On a zero-dimensional manifold
both sides are the empty sum $0$, and on a manifold with boundary the operator is defined
at interior points, with the usual one-sided extension at boundary points when $f$ is
smooth up to the boundary.

**This definition is the pointwise geometric operator only.** It records the trace
formula, the divergence form and the sign convention
$\Delta_g=\operatorname{div}_g\circ\operatorname{grad}$ fixed by
[[def-riemannian-divergence]]. It does not assert any analytic conclusion about
harmonic functions on manifolds — no maximum principle, no Harnack inequality, no
boundary-value solvability, no spectral theory, and no Liouville theorem. Those are
separate results with their own hypotheses, and their Euclidean forms are not licensed
on a general Riemannian manifold merely by writing down this definition.
