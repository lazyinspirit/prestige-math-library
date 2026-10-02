---
id: lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian
kind: lemma
title: Logarithmic derivative of the radial volume jacobian is the distance laplacian
status: published
origin: pipeline
deps:
  - def-radial-volume-jacobian
  - def-radial-riccati-operator
  - prop-hessian-of-distance-in-terms-of-radial-jacobi-fields
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - thm-determinant-differential-and-jacobis-formula
  - def-countable-choice
  - def-cut-time-in-a-unit-tangent-direction
  - def-riemannian-distance-on-a-connected-manifold
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
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
      locator: "§§27.2 and 28.1, pp.200–209: the logarithmic derivative of the volume element and the distance Laplacian"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: trace of the Riccati solution and the mean curvature of distance spheres"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of dimension
$n\ge2$, let $p\in M$ and let $v\in S_pM$ be a unit tangent vector with cut
time $c_p(v)$. For every $t$ with $0<t<c_p(v)$,
$$\frac{d}{dt}\log J_p(t,v)=\operatorname{tr}S_v(t) =\Delta_g r_p\bigl(\exp_p(tv)\bigr),$$
where $J_p(t,v)$ is the radial volume Jacobian of
[[def-radial-volume-jacobian]], $S_v(t)$ is the radial Riccati operator of
[[def-radial-riccati-operator]] along $\gamma_v$, and
$r_p(x)=d_g(p,x)$ is the distance from $p$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], a complete connected
boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$, a point
$p\in M$, a unit vector $v\in S_pM$ with cut time $c_p(v)$, the radial geodesic
$\gamma_v(t)=\exp_p(tv)$, the radial Jacobi tensor $A_v$ with parallel-frame
matrix $\bar A_v$, the radial volume Jacobian $J_p(t,v)$ and the Riccati
operator $S_v(t)$, and the distance function $r_p$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the cut-time, geodesic and exponential
interfaces of [[def-cut-time-in-a-unit-tangent-direction]] and
[[def-radial-volume-jacobian]].

[F1] Radial volume Jacobian: $J_p(t,v)=\det\bar A_v(t)>0$ for
$0<t<c_p(v)$, the determinant being taken in a compatible oriented
orthonormal frame; $\bar A_v$ is smooth there, and $\bar A_v(t)$ is invertible
because its determinant is nonzero
([[def-radial-volume-jacobian]],
[[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]]).

[F2] Riccati operator: on the interval where it is defined,
$S_v(t)=\bar A_v'(t)\bar A_v(t)^{-1}$, equivalently the endomorphism
$D_tA_v\circ A_v^{-1}$ of the normal space at time $t$, transported back to
$N_0$ by parallel transport; its trace is therefore independent of which of
these two representations is used ([[def-radial-riccati-operator]]).

[F3] Hessian of the distance: with $q=\gamma_v(t)$, $0<t<c_p(v)$, the distance
function $r_p$ is smooth near $q$, and for every $X\in T_qM$ orthogonal to
$T=\dot\gamma_v(t)$ the Levi-Civita Hessian satisfies
$(\nabla^2r_p)_q(X,Y)=g_q(D_tJ_X(t),Y)$, where $J_X$ is the normal Jacobi field
along $\gamma_v$ with $J_X(0)=0$ and $J_X(t)=X$; moreover
$(\nabla^2r_p)_q(T,\cdot)=0$ and on $T^{\perp}$ the shape endomorphism
$S=\nabla\operatorname{grad}r_p$ is $D_tJ(t)\circ J(t)^{-1}$
([[prop-hessian-of-distance-in-terms-of-radial-jacobi-fields]]).

[F4] Laplace–Beltrami operator: for smooth $f$,
$\Delta_gf(p)=\operatorname{tr}_g(\operatorname{Hess}f)_p
=\sum_i\operatorname{Hess}f(e_i,e_i)$ in any orthonormal basis
([[def-laplace-beltrami-operator-as-trace-of-the-hessian]]).

[F5] Jacobi's formula: for a differentiable family of invertible matrices
$A(t)$, $\frac{d}{dt}\det A(t)=\det A(t)\operatorname{tr}(A(t)^{-1}A'(t))$,
the differential of the determinant being
$D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$
([[thm-determinant-differential-and-jacobis-formula]]).

## Proof

**Proof technique:** direct: differentiate the determinant of the radial
Jacobi matrix with Jacobi's formula, identify the trace of $\bar A'\bar A^{-1}$
with the trace of the shape operator of the distance sphere, and use that the
Laplace–Beltrami operator is the trace of the Hessian.

1.1 The logarithmic derivative of the radial volume Jacobian is the trace of $S_v$. [F1, F2, F5]
On $0<t<c_p(v)$ the matrix family $\bar A_v$ is smooth and invertible by [F1].
Jacobi's formula of [F5], applied to $A(t)=\bar A_v(t)$ and divided by the
nonvanishing determinant, gives
$$\frac{d}{dt}\log J_p(t,v) =\frac{1}{\det\bar A_v(t)}\frac{d}{dt}\det\bar A_v(t) =\operatorname{tr}\bigl(\bar A_v(t)^{-1}\bar A_v'(t)\bigr).$$
The trace is invariant under cyclic permutation of a product, so
$\operatorname{tr}(\bar A_v^{-1}\bar A_v')
=\operatorname{tr}(\bar A_v'\bar A_v^{-1})
=\operatorname{tr}S_v(t)$ by the definition of the Riccati operator in [F2].
[F1, F2, F5]

2.1 The trace of the Hessian of the distance equals the trace of $S_v$. [F2, F3, step 1.1]
Put $q=\gamma_v(t)$ with $0<t<c_p(v)$ and $T=\dot\gamma_v(t)$. Choose an
orthonormal basis of $T_qM$ consisting of $T$ together with an orthonormal basis
$e_1,\dots,e_{n-1}$ of $T^{\perp}$. By [F3] the Hessian entries in the radial
direction vanish, $(\nabla^2r_p)_q(T,\cdot)=0$, and on $T^{\perp}$ the
endomorphism representing the Hessian is
$D_tJ(t)\circ J(t)^{-1}$. In the parallel frame of [F2] this endomorphism is
exactly $S_v(t)$, and conjugation by the isometry $P_t$ preserves the trace,
so
$$\operatorname{tr}_g(\operatorname{Hess}r_p)_q =\sum_{i=1}^{n-1}g_q\bigl(D_tJ_{e_i}(t),e_i\bigr) =\operatorname{tr}S_v(t).$$
[F2, F3, step 1.1]

3.1 Conclusion. [F4, step 1.1, step 2.1]
By [F4] the Laplace–Beltrami operator of $r_p$ at $q$ is the trace of the
Hessian, and by step 2.1 this trace equals $\operatorname{tr}S_v(t)$; by
step 1.1 the logarithmic derivative of $J_p(t,v)$ equals the same trace.
Therefore
$$\frac{d}{dt}\log J_p(t,v)=\operatorname{tr}S_v(t) =\Delta_g r_p\bigl(\exp_p(tv)\bigr)$$
for every $0<t<c_p(v)$. [F4, step 1.1, step 2.1]

4.1 Boundary cases. [F1, F2, F3, step 1.1, step 2.1, step 3.1]
The identity is asserted on the open interval $0<t<c_p(v)$: at $t=0$ the
Jacobian vanishes, $\log J_p$ is not defined at $0$ and $r_p$ is not
differentiable at $p$; at $t=c_p(v)$ (when the cut time is finite and attained)
the distance function need not be smooth, and [F3] does not apply. If
$c_p(v)=+\infty$ the identity holds on all of $(0,\infty)$. In dimension
$n=2$ the normal space is one-dimensional, $S_v(t)$ is a scalar and
$\operatorname{tr}S_v(t)$ is that scalar; the argument above already covers
this case because the basis $e_1,\dots,e_{n-1}$ then has one element. The
statement is for unit $v$; for a general $w\ne0$ one applies it to $v=w/|w|$
and the affine reparametrization $t\mapsto|w|t$, while $w=0$ has no radial
direction. No choice beyond the inherited [A1] is used. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎

## Source locator

Datar §27.2 and §28.1, pp.200–209, and Eschenburg §4–5, pp.15–20, derive the
identity $\frac{d}{dt}\log J=\operatorname{tr}S=\Delta r$ for the radial
jacobian before the cut locus. The proof above is assembled from the in-run
radial Jacobian, Riccati and Hessian items and Jacobi's formula.
