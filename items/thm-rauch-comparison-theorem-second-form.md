---
id: thm-rauch-comparison-theorem-second-form
kind: theorem
title: Rauch comparison theorem second form
status: published
origin: pipeline
deps:
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - lem-riccati-comparison-for-scalar-initial-shape
  - def-sectional-curvature
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-countable-choice
  - def-radial-jacobi-tensor
  - def-jacobi-field
  - thm-radial-riccati-equation
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-constant-sectional-curvature-and-space-form
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-riemann-curvature-four-tensor
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
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Rauch II, printed p.13, with Theorem 3.1, printed pp.11–12: matched scalar initial shape and comparison with the model field"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2, 28.1, printed pp.191–197, 205–209: Jacobi tensors, Riccati operators and their comparison"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a Riemannian manifold of dimension $n\ge2$, let $T>0$ and
$\gamma:[0,T]\to M$ be a unit-speed geodesic, and let $J\ne0$ be a normal Jacobi field
along $\gamma$ whose initial data have **scalar shape**:
$$D_tJ(0)=\lambda\,J(0)\qquad\text{for some }\lambda\in\mathbb R .$$
Let $Y$ be the normal Jacobi tensor with $Y(0)=\operatorname{id}$ and
$Y'(0)=\lambda\operatorname{id}$, that is, $Y(t)w$ is the normal Jacobi field
with value $w$ and covariant derivative $\lambda w$ at $t=0$, and let
$t_f\in(0,T]\cup\{+\infty\}$ be the first singular time of $Y$ in $[0,T]$,
with $t_f=+\infty$ if none occurs; this is the **first focal time** of the
scalar initial shape on this segment. Suppose every sectional
curvature of $M$ in a plane containing $\dot\gamma(t)$ is at least $k$, for
every time under consideration. Let $M_k$ be the simply connected space form
of constant sectional curvature $k$, let $\gamma_k$ be a unit-speed geodesic
in $M_k$, and choose a linear isometry
$\iota:T_{\gamma(0)}M\to T_{\gamma_k(0)}M_k$ carrying
$\dot\gamma(0)$ to $\dot\gamma_k(0)$. Put $u:=J(0)$ and $u_k:=\iota u$;
let $\Phi$ be parallel transport along $\gamma_k$ and set
$$J_k(t):=f_k(t)\,\Phi_tu_k,\qquad f_k:=\operatorname{cs}_k+\lambda\operatorname{sn}_k.$$
Then:

1. $f_k(t)>0$ for every $t\in[0,T]$ with $t<t_f$, so the model field $J_k$
   does not vanish before $t_f$ on this segment;
2. $|J(t)|\le|J_k(t)|$ for every $t\in[0,T]$ with $t<t_f$, and the inequality
   extends to $t=t_f$ by continuity when $t_f\le T$.

The comparison makes no claim beyond $t_f$: the tensor $Y$ is singular there,
and the fact that this particular field $J$ may remain nonzero does not extend
the estimate.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the manifold $(M,g)$ of dimension $n\ge2$, $T>0$ and the unit-speed geodesic $\gamma:[0,T]\to M$, the nonzero normal Jacobi field $J$ with $D_tJ(0)=\lambda J(0)$, the normal Jacobi tensor $Y$ with $Y(0)=\operatorname{id}$, $Y'(0)=\lambda\operatorname{id}$, its first singular time $t_f$ on $[0,T]$, and the constant-curvature-$k$ model with field $J_k=f_k\Phi u_k$ under the isometry $\iota$ of the statement.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the sectional-curvature, constant-curvature and full
curvature-symmetry interfaces. The Jacobi-field and parallel initial-value
suppliers require no choice; the local matrix argument adds none.

[F1] Riccati comparison for scalar initial shape ([[lem-riccati-comparison-for-scalar-initial-shape]]): for a finite-dimensional real inner product space $E$, continuous self-adjoint families $R_1\ge R_2$ and $C^2$ solutions $Y_i$ of $Y_i''+R_iY_i=0$ with $Y_i(0)=\operatorname{id}$, $Y_i'(0)=\lambda\operatorname{id}$, the operators $S_i=Y_i'Y_i^{-1}$ satisfy $S_1\le S_2$ before the first singularity of $Y_1$; if $R_2=k\operatorname{id}$ and $f=\operatorname{cs}_k+ \lambda\operatorname{sn}_k$, then $Y_2=f\operatorname{id}$, $f>0$ on $[0,t_1)$ and $|Y_1(t)w|\le f(t)|w|$ for all $w\in E$ and $0<t<t_1$.

[F2] Radial Jacobi data ([[def-radial-jacobi-tensor]], [[thm-radial-riccati-equation]], [[def-jacobi-field]]): in the parallel trivialization of the normal bundle along $\gamma$ the normal Jacobi fields with normal initial data satisfy the matrix equation $y''+R_\gamma y=0$, where the curvature symmetries of
[[thm-algebraic-symmetries-of-the-riemann-tensor]], under [A1], make
$R_\gamma(t)$ the self-adjoint endomorphism $w\mapsto P_t^{-1}\bigl(R(P_tw,\dot\gamma(t))\dot\gamma(t)\bigr)$ of the normal space at $\gamma(0)$. The radial Jacobi tensor $A$ has $A(0)=0$, $D_tA(0)=\operatorname{id}$ and generates the fields with $J(0)=0$.

[F3] Curvature form of the hypothesis ([[def-sectional-curvature]], [[def-riemann-curvature-four-tensor]]): for $w$ normal to $\dot\gamma(t)$, $\langle R_\gamma(t)w,w\rangle =\operatorname{Rm}(w,\dot\gamma,\dot\gamma,w)=\sec(w\wedge\dot\gamma)|w|^2$, so "every radial sectional curvature is at least $k$" is exactly the Loewner bound $R_\gamma(t)\ge k\operatorname{id}$ on the normal space.

[F4] Existence, uniqueness and linearity ([[def-jacobi-field]], [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]): for prescribed $J(t_0)$, $D_tJ(t_0)$ there is exactly one Jacobi field along $\gamma$; consequently the map $w\mapsto Y(t)w$ is linear, the tensor $Y$ is the solution of the matrix initial value problem of [F1] with $R_1=R_\gamma$ on the normal space $N=\{\dot\gamma(0)\}^{\perp}$.

[F5] Parallel transport ([[thm-existence-and-uniqueness-of-parallel-sections]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]): parallel transport is an isometry and $\Phi_tu$ is the unique parallel field with value $u$ at $0$.

[F6] Model functions and model space ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-comparison-sine-cosine-and-cotangent-functions]], [[def-constant-sectional-curvature-and-space-form]], [[prop-curvature-tensor-of-constant-sectional-curvature]]): on the space form of constant curvature $k$ the curvature tensor is $R(X,Y)Z=k(g(Y,Z)X-g(X,Z)Y)$; and $\operatorname{sn}_k''+k\operatorname{sn}_k=0$, $\operatorname{cs}_k''+k\operatorname{cs}_k=0$, with $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$.

## Proof

**Proof technique:** direct: transport the given field to the normal space at $\gamma(0)$, exhibit the tensor equation $y''+R_\gamma y=0$ with initial data $\operatorname{id},\lambda\operatorname{id}$, and apply the in-run Riccati comparison for scalar initial shape against the scalar model $f_k$.

1.1 The tensor equation of the given field. [F2, F3, F4, F5, given]
Let $N:=\{\dot\gamma(0)\}^{\perp}$ and, for each $t$, identify $N_t:=\{\dot\gamma(t)\}^{\perp}$ with $N$ by parallel transport $P_t$ [F5]. By [F2] the transported field $y_u(t):=P_t^{-1}J(t)$ satisfies $y_u''+R_\gamma y_u=0$ with $R_\gamma(t)$ self-adjoint, and by the initial condition $$y_u(0)=J(0)=u,\qquad y_u'(0)=D_tJ(0)=\lambda u .$$ By [F3], the hypothesis of the theorem says $$R_\gamma(t)\ge k\operatorname{id}_N$$ for every $t$ under consideration, in the Loewner order. By [F4] the prescription $Y(t)w:=P_t^{-1}J_w(t)$, where $J_w$ is the normal Jacobi field with value $w$ and derivative $\lambda w$ at $0$ defines a $C^2$ endomorphism-valued solution of the same matrix initial value problem, with $$Y(0)=\operatorname{id}_N,\qquad Y'(0)=\lambda\operatorname{id}_N,$$ and $y_u(t)=Y(t)u$; in particular $|J(t)|=|Y(t)u|$ for all $t$, because parallel transport is an isometry [F5]. Moreover $Y(t)$ is singular exactly when some nonzero field of this scalar initial shape vanishes at $t$, so $t_f$ is the first positive singular time of $Y$; and $u=J(0)\ne0$, since $u=0$ would give $D_tJ(0)=\lambda u=0$ and hence $J\equiv0$ by [F4]. [F2, F3, F4, F5, given]

1.2 The model field. [F5, F6, given]
Let $f_k=\operatorname{cs}_k+\lambda\operatorname{sn}_k$. By [F6], $f_k''+kf_k=0$, $f_k(0)=1$, $f_k'(0)=\lambda$. Put $u_k:=\iota u$ as in the statement. On the space form $M_k$, $J_k(t):=f_k(t)\Phi_tu_k$ satisfies $$D_tJ_k=f_k'\Phi_tu_k,\qquad D_t^2J_k=f_k''\Phi_tu_k=-kf_k\Phi_tu_k=-kJ_k,$$ and by the constant-curvature tensor identity of [F6] together with the normality of $J_k$ (preserved by the isometric parallel transport [F5]), $$R(J_k,\dot\gamma_k)\dot\gamma_k =k\bigl(g(\dot\gamma_k,\dot\gamma_k)J_k-g(J_k,\dot\gamma_k)\dot\gamma_k\bigr) =kJ_k .$$ Hence $D_t^2J_k+R(J_k,\dot\gamma_k)\dot\gamma_k=0$: the field $J_k$ is a normal Jacobi field with $$J_k(0)=u_k,\qquad D_tJ_k(0)=\lambda u_k,\qquad |J_k(t)|=|f_k(t)|\,|u|,$$ since $\iota$ and parallel transport are isometries. [F5, F6, given]

2.1 Riccati comparison with the scalar model. [F1, step 1.1, step 1.2, given]
Apply the Riccati comparison for scalar initial shape [F1] with $$E:=N,\qquad R_1:=R_\gamma\ge k\operatorname{id}_N=:R_2,\qquad Y_1:=Y,\qquad Y_2:=f_k\operatorname{id}_N .$$ By step 1.1 the family $Y_1$ is a $C^2$ solution of $Y_1''+R_1Y_1=0$ with the initial data $\operatorname{id}_N,\lambda\operatorname{id}_N$; by step 1.2 the family $Y_2=f_k\operatorname{id}_N$ is a $C^2$ solution of $Y_2''+kY_2=0$ with the same initial data; and the curvature families are continuous, self-adjoint and ordered by step 1.1 and [F1]. The lemma gives that the first singular time $t_2$ of $Y_2$ satisfies $t_2\ge t_1=t_f$ (that is, $f_k>0$ on $[0,t_f)$, since $Y_2=f_k\operatorname{id}_N$ is singular exactly at the zeros of $f_k$ and $f_k(0)=1$), and that $$|Y(t)u|\le f_k(t)|u|\qquad(0\le t\le T,\ t<t_f).$$ [F1, step 1.1, step 1.2, given]

3.1 The norm comparison. [step 1.1, step 1.2, step 2.1, given]
For $0\le t\le T$ with $t<t_f$, steps 1.1, 1.2 and 2.1 combine to $$|J(t)|=|Y(t)u|\le f_k(t)|u|=|J_k(t)|,$$ because $f_k(t)>0$ there. If $t_f\le T$, both sides depend continuously on $t$, so the inequality passes to the limit $t\uparrow t_f$; this covers in particular the case that the model field itself vanishes at $t_f$. No comparison is asserted at or beyond $t_f$: the tensor $Y$ is singular at $t_f$, the logarithmic and matrix arguments underlying [F1] stop there, and a particular solution $J(t)$ may remain nonzero without extending the estimate. The value $\lambda=0$ (purely `parallel' initial shape) and the case $n=2$ (one-dimensional normal space) are included; the initial vector $u$ is nonzero as shown in step 1.1. Every field used here is fixed by the initial data and the comparison invokes only the suppliers named above, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [step 1.1, step 1.2, step 2.1, given] ∎

## Source locator

Eschenburg §3 states `Rauch II` (printed p.13) as: solutions of $J_i''+R_iJ_i=0$ with $J_i'(0)=0$, equal initial norms and $\lambda_-(R_1)\ge\lambda_+(R_2)$ satisfy $\|J_1\|\le\|J_2\|$ up to the first zero of $J_1$; this is the $\lambda=0$ case of the statement above, and the general scalar shape $\lambda$ is the matched-asymptotic case explained in the same section before Remark 3.2. The in-run [[lem-riccati-comparison-for-scalar-initial-shape]] supplies the matrix comparison; the published model functions supply $f_k$ and its positivity interval.
