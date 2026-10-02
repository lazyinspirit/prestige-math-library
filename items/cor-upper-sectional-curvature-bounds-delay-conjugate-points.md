---
id: cor-upper-sectional-curvature-bounds-delay-conjugate-points
kind: corollary
title: Upper sectional curvature bounds delay conjugate points
status: published
origin: pipeline
deps:
  - thm-rauch-comparison-theorem-first-form
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-constant-sectional-curvature-and-space-form
  - prop-curvature-tensor-of-constant-sectional-curvature
  - prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - def-jacobi-field
  - def-riemann-curvature-four-tensor
  - def-sectional-curvature
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n
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
      locator: "§25.2 and §26.2, printed pp.185–188, 195–197: the conjugate point comparison theorem and Rauch's theorem"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Rauch I, printed p.13: the model is the more curved side, so its field vanishes first"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete Riemannian manifold of dimension $n\ge2$ whose
sectional curvatures are bounded above by $k$: every sectional curvature of
every two-plane satisfies $K\le k$. Let $\gamma:[0,\infty)\to M$ be a
unit-speed geodesic and $p:=\gamma(0)$. Then:

1. if $k>0$, no $t\in(0,\pi/\sqrt k)$ is a conjugate instant of $p$ along
   $\gamma$;
2. if $k\le0$, no $t>0$ is a conjugate instant of $p$ along $\gamma$.

Equivalently: the first conjugate instant, when finite, is at least
$\pi/\sqrt k$ in the positive case, and no conjugate instant exists at all
when $k\le0$. No claim is made at the spherical endpoint $t=\pi/\sqrt k$ when
$k>0$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the complete $n$-dimensional Riemannian manifold $(M,g)$ with $K\le k$, and a unit-speed geodesic $\gamma$. No conjugate instant is assumed; one is derived to fail to occur in the stated ranges.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Conjugate points ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]): a point $\gamma(t_0)$, $t_0>0$, is conjugate to $\gamma(0)$ along $\gamma$ exactly when some nonzero Jacobi field along $\gamma|_{[0,t_0]}$ vanishes at both endpoints.

[F2] Jacobi fields ([[def-jacobi-field]], [[prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity]], [[thm-algebraic-symmetries-of-the-riemann-tensor]], [[def-riemann-curvature-four-tensor]]): a Jacobi field satisfies $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$; the Riemann tensor is skew in its last two arguments, $Rm(X,Y,Z,W)=-Rm(X,Y,W,Z)$; and the scalar $a(t):=g(J(t),\dot\gamma(t))$ of an arbitrary Jacobi field obeys $a''(t)=-Rm(J,\dot\gamma,\dot\gamma,\dot\gamma)=0$, so that the tangential field $a\dot\gamma$ is an affine multiple of the velocity.

[F3] Rauch comparison, first form ([[thm-rauch-comparison-theorem-first-form]]): with its two hypotheses (pointwise radial curvature comparison and no conjugate point of the first manifold in $(0,T]$), normal Jacobi fields $J_1,J_2$ with $J_i(0)=0$ and equal positive initial-derivative norms satisfy $|J_1(t)|\le|J_2(t)|$ on $[0,T]$.

[F4] Model data ([[def-comparison-sine-cosine-and-cotangent-functions]], [[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-constant-sectional-curvature-and-space-form]], [[prop-curvature-tensor-of-constant-sectional-curvature]]): the space form $M^n_k$ has constant curvature $k$, its radial normal Jacobi field with initial derivative $w$ is $\operatorname{sn}_k(t)\Phi_tw$ with norm $|\operatorname{sn}_k(t)|\,|w|$, and $\operatorname{sn}_k(t)>0$ for $0<t<\pi/\sqrt k$ when $k>0$ and for all $t>0$ when $k\le0$.

[F5] Parallel transport and the dimension of the Jacobi solution space ([[thm-existence-and-uniqueness-of-parallel-sections]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]], [[cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n]]): parallel frames may be prescribed at one time and are isometric, and the Jacobi fields along a fixed geodesic form a vector space of dimension $2n$, so every Jacobi field is determined by $J(t_0)$ and $D_tJ(t_0)$.

[F6] Sectional curvature ([[def-sectional-curvature]]): the radial sectional curvatures of $M$ are its sectional curvatures of planes containing $\dot\gamma$, and $K\le k$ bounds all of them above by $k$.

## Proof

**Proof technique:** direct: normalize a hypothetical vanishing Jacobi field to a normal radial field, then apply Rauch's first form with the constant-curvature model as the more curved manifold, so that its strictly positive model field must dominate the vanishing actual field.

1.1 A conjugate field may be taken normal and radial. [F1, F2, F5, given]
Suppose $\gamma(t_0)$ is conjugate to $p=\gamma(0)$ for some $t_0>0$. By [F1] there is a nonzero Jacobi field $J$ along $\gamma$ with $J(0)=J(t_0)=0$. Its tangential scalar $a(t):=g(J(t),\dot\gamma(t))$ satisfies, by the Jacobi equation and the skew-symmetry of the curvature tensor in the last two slots, $$a''(t)=g(D_t^2J,\dot\gamma(t)) =-g\bigl(R(J,\dot\gamma)\dot\gamma,\dot\gamma\bigr) =-Rm(J,\dot\gamma,\dot\gamma,\dot\gamma)=0,$$ the term $g(D_tJ,D_t\dot\gamma)$ being absent because $\dot\gamma$ is parallel. Hence $a$ is affine, and $a(0)=g(J(0),\dot\gamma(0))=0$ and $a(t_0)=g(J(t_0),\dot\gamma(t_0))=0$ force $a\equiv0$: the field $J$ is normal [F2]. Since $J\ne0$ and $J(0)=0$, its initial derivative $u:=D_tJ(0)$ is nonzero; otherwise $J$ would vanish identically [F5]. Thus $|D_tJ(0)|=a_0>0$ and, by [F5], $J$ is the radial normal Jacobi field generated by $u$. [F1, F2, F5, given]

2.1 Comparison with the constant-curvature model. [F3, F4, F5, F6, step 1.1, given]
Keep the hypothetical conjugate time $t_0$ of step 1.1 and put $T:=t_0$; when $k>0$ we are treating only $t_0<\pi/\sqrt k$, and when $k\le0$ there is no restriction on $T$. Let $M^n_k$ be the space form of constant curvature $k$, let $\tilde\gamma$ be a unit-speed geodesic in it and let $$J_k(t):=\operatorname{sn}_k(t)\,\Phi_tw,\qquad |w|=a_0,$$ be the model radial field with the same initial-derivative norm as $J$ [F4]. In the model, the normal radial Jacobi tensor is $\operatorname{sn}_k(t)$ times the parallel identification: it solves $Y''=-kY$, $Y(0)=0$, $Y'(0)=\operatorname{id}$ in a parallel orthonormal normal frame, and so does $\operatorname{sn}_k\operatorname{id}$ by [F4], whence the two agree by uniqueness of the linear initial-value problem; therefore the model has no conjugate point along $\tilde\gamma$ in $(0,T]$, because for $k>0$ one has $T=t_0<\pi/\sqrt k$ with $\operatorname{sn}_k>0$ on $(0,\pi/\sqrt k)$, and for $k\le0$ one has $\operatorname{sn}_k>0$ on all of $(0,T]$ [F4, F5]. Apply Rauch's first form [F3] with $M_1:=M^n_k$, $\gamma_1:=\tilde\gamma$, $J_1:=J_k$ and $M_2:=M$, $\gamma_2:=\gamma$, $J_2:=J$: both fields vanish at $0$ and have initial-derivative norm $a_0>0$, the pointwise curvature hypothesis holds because every radial curvature of the model is $k$ while every radial curvature of $M$ is at most $k$ [F4, F6], and the model has no conjugate point in $(0,T]$ as just noted. The conclusion gives $$a_0\operatorname{sn}_k(t)=|J_k(t)|\le|J(t)|\qquad(0\le t\le T).$$ At $t=T=t_0$ the right-hand side vanishes, while the left-hand side is $a_0\operatorname{sn}_k(t_0)>0$: for $k>0$ this uses $t_0<\pi/\sqrt k$ and for $k\le0$ the positivity of $\operatorname{sn}_k$ at every positive time [F4]. This is a contradiction. Hence no conjugate instant lies in $(0,\pi/\sqrt k)$ when $k>0$, and none lies at any positive time when $k\le0$. All data are those of the hypothetical conjugate pair and of one model geodesic, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [F3, F4, F5, F6, step 1.1, given] ∎

## Source locator

Datar §25.2 proves the conjugate point comparison theorem by exactly this transfer: the model field $\operatorname{sn}_\kappa$ dominates when its curvature is larger, so no actual conjugate point can precede the model's first zero; the statement is used in §25.3 (printed pp.188–189) in the $\sec\le\kappa$ form. Eschenburg §3 (`Rauch I`, printed p.13) states the same fact as "$\|J_1\|\le\|J_2\|$ up to the first zero of $J_1$" for the more curved side. The proof above is carried out from the in-run Rauch first form and the published model suppliers.
