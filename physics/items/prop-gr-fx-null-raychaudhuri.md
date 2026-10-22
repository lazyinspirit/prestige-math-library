---
id: prop-gr-fx-null-raychaudhuri
kind: proposition
title: "Null Raychaudhuri and focal-point bound"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "Conditional mathematical deduction from the stated Ricci inequality; no energy condition or Einstein equation is inferred."
deps:
  - def-gr-fx-null-screen-geometry
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - thm-gr-curvature-algebraic-symmetries
  - def-countable-choice
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§5.5-5.8 and 6.2"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§5.4-5.5 and 8.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice for the Lorentzian supplier conventions. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold, let $S$ be a smooth spacelike two-surface, and let $F:U\times J\to M$ be a smooth null geodesic hypersurface congruence from an open section $U\subseteq S$, as defined in [[def-gr-fx-null-screen-geometry]]. Write $\ell=\partial_\lambda F$ and fix $p\in U$. Before the first focal instant let $A_\lambda:T_pS\to\mathscr S_{F(p,\lambda)}$ be the screen Jacobi map, $B=A'A^{-1}$ the optical endomorphism, $\theta=\operatorname{tr}B$ its expansion, and $\sigma=B-\frac12\theta\,\mathrm{id}$ its shear. Let $\operatorname{Ric}$ be the Ricci tensor in [[def-gr-curvature-tensor-and-derived-tensors]]. Then, along the generator $\gamma(\lambda)=F(p,\lambda)$ and before the first focal instant,
$$\frac{d\theta}{d\lambda}=-\frac{\theta^2}{2}-|\sigma|_{\bar q}^2-\operatorname{Ric}(\ell,\ell).$$
If $\operatorname{Ric}(\ell,\ell)\ge0$ along the generator and $\theta(0)<0$, then a first focal instant occurs by affine parameter
$$\lambda_*=\frac{2}{|\theta(0)|},$$
provided the smooth congruence and generator are defined through $\lambda_*$. Here a focal instant means that the screen Jacobi map loses rank; the conclusion is local along this generator and asserts no curvature singularity.

## Statement references

[[def-gr-fx-null-screen-geometry]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; the smooth null congruence and its affine parameter; $\operatorname{Ric}(\ell,\ell)\ge0$ on the comparison interval; and $\theta(0)<0$.

[F1] The screen $\mathscr S=\ell^\perp/\mathbb R\ell$ has a positive metric; $A_\lambda$ is the screen Jacobi map, $B=A'A^{-1}$ is self-adjoint before its first focal instant, $\theta=\operatorname{tr}B$, and $\sigma=B-\frac12\theta\,\mathrm{id}$ ([[def-gr-fx-null-screen-geometry]]).

[F2] The curvature operator is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, its Jacobi equation is $D_\ell^2J=R(\ell,J)\ell$, and $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$ ([[def-gr-curvature-tensor-and-derived-tensors]]).

[F3] A geodesic variation field satisfies the Jacobi equation; along a geodesic the Jacobi equation has a unique solution for prescribed value and derivative ([[thm-gr-jacobi-equation-and-geodesic-deviation]]).

[F4] The lowered curvature is antisymmetric in its first pair and in its last pair of indices ([[thm-gr-curvature-algebraic-symmetries]]); the Ricci tensor is the contraction specified in [F2].

[A1] $\operatorname{Ric}(\ell,\ell)\ge0$ throughout the generator segment under consideration; this is an explicit mathematical curvature hypothesis, not an energy condition unless a separate field equation is adopted.

[A2] $\theta(0)<0$ and the congruence remains defined up to the comparison parameter if no focal instant has already occurred.

[A3] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle assumed for the time-oriented Lorentzian input ([[def-countable-choice]]); no arbitrary-index Choice principle is used.

## Proof

**Given:** [F1]-[F4] and [A1]-[A3].

1.1 For each $X\in T_pS$, the variation field $J_X(\lambda)=dF_{(p,\lambda)}(X,0)$ is a Jacobi field by [F3]. Its screen class satisfies the screen Jacobi equation
$$A_\lambda''+\mathcal R_\ell A_\lambda=0,\qquad \mathcal R_\ell[X]:=[R(X,\ell)\ell],$$
because [F2]-[F4] give $D_\ell^2J_X=R(\ell,J_X)\ell=-R(J_X,\ell)\ell$. The screen projection is well-defined since changing $J_X$ by a multiple of $\ell$ changes $R(J_X,\ell)\ell$ by zero. Before the first focal instant $A_\lambda$ is invertible, so differentiating $B=A'A^{-1}$ gives
$$B' = A''A^{-1}-A'A^{-1}A'A^{-1}=-\mathcal R_\ell-B^2.$$
[F1, F2, F3, F4, given, algebra]

2.1 The null hypersurface normal makes $B$ self-adjoint by [F1]. In two screen dimensions write $B=\frac{\theta}{2}\mathrm{id}+\sigma$; then $\operatorname{tr}\sigma=0$ and
$$\operatorname{tr}(B^2)=\frac{\theta^2}{2}+\operatorname{tr}(\sigma^2)=\frac{\theta^2}{2}+|\sigma|_{\bar q}^2.$$
The last equality holds because $\sigma$ is self-adjoint on the positive screen. [F1, step 1.1, algebra]

2.2 At any point choose the local pair supplied by [F1] and set $n:=k/2$, so $g(\ell,n)=-1$; complete it by a $\bar q$-orthonormal screen basis $E_1,E_2$. In this basis the inverse metric is
$$g^{-1}=-\ell\otimes n-n\otimes\ell+E_1\otimes E_1+E_2\otimes E_2.$$
Contracting the curvature in [F2], the two null-pair terms in $\operatorname{Ric}(\ell,\ell)$ have repeated first or last slots and vanish by [F4], leaving
$$\operatorname{Ric}(\ell,\ell)=\sum_{A=1}^2g(R(E_A,\ell)\ell,E_A)=\operatorname{tr}\mathcal R_\ell.$$
[F1, F2, F4, step 1.1, construct, algebra]

3.1 Taking the trace of the Riccati equation in step 1.1 and substituting steps 2.1 and 2.2 yields
$$\theta'=-\operatorname{tr}(B^2)-\operatorname{tr}\mathcal R_\ell=-\frac{\theta^2}{2}-|\sigma|_{\bar q}^2-\operatorname{Ric}(\ell,\ell),$$
which is the stated evolution equation. [step 1.1, step 2.1, step 2.2, algebra]

4.1 Put $\lambda_*=2/|\theta(0)|$. While no focal instant has occurred, $A_\lambda$ is invertible and $B,\theta$ are smooth. By [A1], [A2] and step 3.1, $\theta'\le-\theta^2/2<0$ whenever $\theta<0$, so $\theta$ remains negative. Therefore
$$\left(\frac1\theta\right)'=-\frac{\theta'}{\theta^2}\ge\frac12.$$
If no focal instant occurred on $[0,\lambda_*]$, then $\theta(\lambda_*)$ would be finite and negative, so $1/\theta(\lambda_*)<0$. Integrating the inequality instead gives
$$\frac1{\theta(\lambda_*)}\ge\frac1{\theta(0)}+\frac{\lambda_*}{2}=0,$$
a contradiction. Thus the screen Jacobi map loses rank at some $\lambda_f\le\lambda_*$, which is the claimed focal instant. [A1, A2, A3, step 3.1, algebra] ∎

## Remarks

The conclusion is a conditional geometric deduction from the Ricci inequality and the specified congruence. It does not derive $\operatorname{Ric}(\ell,\ell)\ge0$ from matter assumptions, invoke an Einstein equation, or infer a spacetime singularity from a focal point.
