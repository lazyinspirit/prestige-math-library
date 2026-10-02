---
id: cor-lower-positive-sectional-curvature-forces-conjugate-points
kind: corollary
title: Lower positive sectional curvature forces conjugate points
status: published
origin: pipeline
deps:
  - thm-rauch-comparison-theorem-first-form
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - prop-at-a-conjugate-endpoint-the-index-form-is-degenerate
  - def-countable-choice
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-constant-sectional-curvature-and-space-form
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - def-jacobi-field
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-sectional-curvature
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Corollary 25.3.3 and its proof, printed p.189: curvature ≥ κ > 0 forces a conjugate point no later than π/√κ"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Rauch I, printed p.13: the more curved field vanishes no later than the model field"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete Riemannian manifold of dimension $n\ge2$ whose
sectional curvatures are bounded below by $k>0$: every sectional curvature of
every two-plane in every tangent space satisfies $K\ge k$. Let $p\in M$ and
let $\gamma:[0,\infty)\to M$ be a unit-speed geodesic with $\gamma(0)=p$. Then
$\gamma$ has a conjugate point to $p$: the first conjugate instant $\tau$ of
$p$ along $\gamma$ is finite and
$$\tau\le\frac{\pi}{\sqrt k}.$$

No strictness is asserted at the endpoint: $\tau=\pi/\sqrt k$ is possible and
is realized on the round sphere of curvature $k$. Completeness is part of the
hypotheses of the geometric setting of this page; the comparison argument
below uses only the curvature bound and the absence of conjugate points.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the complete $n$-dimensional Riemannian manifold $(M,g)$ with $K\ge k>0$, a point $p\in M$ and a unit-speed geodesic $\gamma:[0,\infty)\to M$ from $p$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried through the curvature and index-form suppliers used below; the Jacobi and parallel initial-value constructions require no choice.

[F1] Rauch comparison, first form ([[thm-rauch-comparison-theorem-first-form]]): for unit-speed geodesics in $n$-dimensional manifolds and normal Jacobi fields $J_1,J_2$ with $J_i(0)=0$ and equal positive initial-derivative norms, if every relevant radial sectional curvature of $M_1$ is at least every such curvature of $M_2$, and $M_1$ has no conjugate point in $(0,T]$, then $|J_1(t)|\le|J_2(t)|$ on $[0,T]$.

[F2] Comparison functions ([[def-comparison-sine-cosine-and-cotangent-functions]], [[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]): $\operatorname{sn}_k''+k\operatorname{sn}_k=0$, $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{sn}_k(t)>0$ for $0<t<\pi/\sqrt k$ and $\operatorname{sn}_k(\pi/\sqrt k)=0$ when $k>0$.

[F3] Constant-curvature model ([[def-constant-sectional-curvature-and-space-form]], [[prop-curvature-tensor-of-constant-sectional-curvature]]): in a manifold of constant sectional curvature $k$ the curvature tensor is $R(X,Y)Z=k\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$, so in particular every radial sectional curvature equals $k$ and $R(X,\dot\gamma)\dot\gamma=k\bigl(X-g(X,\dot\gamma)\dot\gamma\bigr)$.

[F4] Parallel transport ([[thm-existence-and-uniqueness-of-parallel-sections]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]): along a geodesic there is a unique smooth parallel field with prescribed value at one time, and parallel transport is an isometry preserving orthogonality.

[F5] Radial Jacobi data ([[def-radial-jacobi-tensor]], [[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]], [[def-jacobi-field]]): for $w$ in the normal space at $\gamma(0)$ the radial field $J(t)=A(t)w$ is the unique normal Jacobi field with $J(0)=0$, $D_tJ(0)=w$, and $A(t)$ is an isomorphism of normal spaces for every $t>0$ before the first conjugate instant; a Jacobi field with $J(t_0)=0=D_tJ(t_0)$ is identically zero.

[F6] Conjugate points ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]): $\gamma(t_0)$, $t_0>0$, is conjugate to $\gamma(0)$ along $\gamma$ exactly when there is a nonzero Jacobi field along $\gamma|_{[0,t_0]}$ vanishing at both ends; the first conjugate instant is the infimum of such $t_0$.

[F7] Sectional curvature ([[def-sectional-curvature]]): a plane containing $\dot\gamma(t)$ has sectional curvature $\sec$, and $K\ge k$ means $\sec\ge k$ for every plane.

## Proof

**Proof technique:** direct: identify the explicit radial Jacobi field of the constant-curvature model, whose norm is $\operatorname{sn}_k$ and which vanishes at $\pi/\sqrt k$, and compare any radial field of $M$ with it through Rauch's first form; the model's zero forces a conjugate point.

1.1 The model radial field. [F2, F3, F4, given]
Let $M^n_k$ be the complete, simply connected space form of constant curvature $k$, let $\tilde\gamma$ be a unit-speed geodesic in $M^n_k$ and let $w\in T_{\tilde\gamma(0)}M^n_k$ satisfy $|w|=1$ and $w\perp\tilde\gamma'(0)$; write $\Phi_t$ for parallel transport along $\tilde\gamma$ and $$J_k(t):=\operatorname{sn}_k(t)\,\Phi_tw.$$ Then $D_tJ_k=\operatorname{sn}_k'\Phi_tw$ and $D_t^2J_k=\operatorname{sn}_k''\Phi_tw=-k\operatorname{sn}_k\Phi_tw$, while by [F3] and the normality of $J_k$ (preserved by parallel transport [F4]) $$R\bigl(J_k,\tilde\gamma'\bigr)\tilde\gamma' =k\bigl(g(\tilde\gamma',\tilde\gamma')J_k-g(J_k,\tilde\gamma') \tilde\gamma'\bigr)=kJ_k .$$ Hence $D_t^2J_k+R(J_k,\tilde\gamma')\tilde\gamma'=0$: the field is a normal Jacobi field with $$J_k(0)=0,\qquad D_tJ_k(0)=w,\qquad |J_k(t)|=\operatorname{sn}_k(t)\quad(0\le t\le\pi/\sqrt k),$$ and by [F2] it satisfies $J_k(t)\ne0$ for $0<t<\pi/\sqrt k$ and $J_k(\pi/\sqrt k)=0$. [F2, F3, F4, given]

2.1 Rauch comparison and the conjugate point. [F1, F5, F6, F7, step 1.1, given]
Let $T_k:=\pi/\sqrt k$ and suppose, for contradiction, that no $t\in(0,T_k]$ is a conjugate instant of $p$ along $\gamma$. Choose a unit normal vector $w_1\in\{\dot\gamma(0)\}^{\perp}$, which exists because $n\ge2$, and let $J_1(t):=A(t)w_1$ be the radial Jacobi field with $J_1(0)=0$ and $|D_tJ_1(0)|=1$ [F5]. By the supposition and [F5], $A(t)$ is invertible for $0<t\le T_k$, so $J_1(t)\ne0$ there; in particular $D_tJ_1(0)=w_1\ne0$, so $J_1$ is not the zero field [F5]. Apply Rauch's first form [F1] with $$M_1:=M,\quad \gamma_1:=\gamma,\quad J_1 \quad\text{and}\quad M_2:=M^n_k,\quad \gamma_2:=\tilde\gamma,\quad J_2:=J_k,$$ the model field of step 1.1: both fields vanish at $0$ and have initial derivative norm $1$. Hypothesis 1 of [F1] holds because every radial sectional curvature of $M$ is at least $k$ by [F7] while every radial sectional curvature of the model equals $k$ by [F3]; hypothesis 2 holds by the contradiction supposition. The conclusion is $$|J_1(T_k)|\le|J_2(T_k)|=|\operatorname{sn}_k(T_k)|=0,$$ so $J_1(T_k)=0$. Thus the nonzero Jacobi field $J_1$ vanishes at $t=0$ and $t=T_k$, that is, $T_k$ is a conjugate instant of $p$ along $\gamma$ [F6], contradicting the supposition. Therefore some $t\in(0,T_k]$ is a conjugate instant, and the first conjugate instant $\tau$ satisfies $\tau\le T_k$. The proof uses only the hypothetical field and the single model field fixed in step 1.1, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [F1, F5, F6, F7, step 1.1, given] ∎

## Source locator

Datar Corollary 25.3.3 with its proof (printed p.189) obtains the conjugate point bound $\le\pi/\sqrt\kappa$ under $\sec\ge\kappa>0$ exactly as the contrapositive argument above: if no conjugate point occurred up to $\pi/\sqrt\kappa$, the comparison with the spherical radial field $\operatorname{sn}_\kappa$ would force the actual field to vanish there. Eschenburg §3 (printed p.13) contains the same content as the strict specialisation of `Rauch I`; the proof here uses the in-run Rauch first form and the published model-function and space-form suppliers.
