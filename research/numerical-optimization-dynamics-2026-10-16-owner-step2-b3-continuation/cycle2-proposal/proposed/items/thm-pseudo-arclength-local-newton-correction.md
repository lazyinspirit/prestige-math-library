---
id: thm-pseudo-arclength-local-newton-correction
kind: theorem
title: "A transverse pseudo-arclength section has a locally quadratic Newton corrector"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
  - lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
  - lem-transverse-hyperplane-selects-unique-local-branch-point
  - thm-augmented-residual-contraction-certificate
  - alg-finite-budget-newton-for-vector-residuals
  - thm-updated-jacobian-newton-local-quadratic-convergence
  - def-rank-and-nullity
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-total-derivative-in-euclidean-space
  - thm-chain-rule-for-total-derivatives
  - lem-finite-budget-newton-work-and-status
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 3, §§3.1–3.3, printed pp. 17–21: local predictor-corrector and pseudo-arclength Newton systems"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§7.1, printed pp. 92–94: bordered local pseudo-arclength corrector at a fold"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^{n+1}$ be open, and let
$F:U\to\mathbb R^n$ be $C^2$. Suppose $z_*\in U$ satisfies $F(z_*)=0$ and
$A:=DF(z_*)$ has rank $n$. Let $t\in\ker A$ be a unit vector, let
$\tau\in\mathbb R^{n+1}$ be a unit vector with
$|\tau^Tt|\ge c$ for some $0<c\le1$, and let $z_p$ satisfy
$\tau^T(z_*-z_p)=0$. Define
$$G(z):=\bigl(F(z),\tau^T(z-z_p)\bigr).$$
Let $K_A\ge0$ satisfy
$$\|(A|_{t^\perp})^{-1}u\|_2\le K_A\|u\|_2\qquad(u\in\mathbb R^n),$$
and set
$$\beta_*:=\sqrt{K_A^2(1+c^{-1})^2+c^{-2}}.$$
The derivative $DG(z_*)$ is invertible and
$\|DG(z_*)^{-1}\|_{\rm op}\le\beta_*$. There is a local regular
unit-speed solution-curve chart through $z_*$, and after shrinking it, the
hyperplane $\tau^T(z-z_p)=0$ has exactly one intersection with that chart.

Suppose also that for some $R>0$ and $L\ge0$ the closed ball
$\overline B_2(z_*,R)$ lies in $U$ and
$$\|DF(u)-DF(v)\|_{\rm op}\le L\|u-v\|_2 \qquad(u,v\in\overline B_2(z_*,R)).$$
Then there are $\rho\in(0,R]$ and $K>0$ such that each exact-Jacobian
Newton update for $G$ started in $\overline B_2(z_*,\rho)$ is defined,
remains in that ball, and satisfies
$$\|z_{k+1}-z_*\|_2\le C\|z_k-z_*\|_2^2,\qquad C:=KL/2,$$
where $C\rho\le1/2$ (if $L=0$, any sufficiently small $\rho$ works).
Continuing the exact recurrence indefinitely gives convergence to $z_*$;
a finite update budget may stop first, and its `root` status means only that
the residual tolerance was met. Separately, whenever the hypotheses of
[[thm-augmented-residual-contraction-certificate]] hold for $G$ on a proposed
closed ball, that theorem certifies exactly one zero there and its stated
residual-to-root error bound. These conclusions are local and imply no
global branch-completeness claim.

## Facts & Assumptions

**Given:** $n,U,F,z_*,A,t,\tau,z_p,K_A,c,R,L$ and the hypotheses in the
Statement.

[F1] [[lem-regular-curve-chart-and-pseudo-arclength-predictor-defect]]:
at a root where $DF$ has rank $n$, a unit kernel vector determines a unique
locally normalized solution curve, which has a $C^1$ unit-speed
reparameterization $c(s)$ with $c(0)=z_*$ and $c'(0)=t$; every sufficiently
nearby solution lies on this curve.

[F2] [[lem-transverse-hyperplane-selects-unique-local-branch-point]]: if
$\tau^Tc'(s)\ge\kappa>0$ on a short two-sided chart interval and the signed
predictor offset lies between $0$ and $\kappa$ times its forward length, the
hyperplane intersects that entire local branch segment exactly once.

[F3] [[lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound]]:
for rank-$n$ $A$ with unit kernel $t$, the matrix
$\begin{bmatrix}A\\\tau^T\end{bmatrix}$ is invertible when
$|\tau^Tt|\ge c>0$ and its inverse norm is at most
$\sqrt{K_A^2(1+c^{-1})^2+c^{-2}}$.

[F4] [[thm-updated-jacobian-newton-local-quadratic-convergence]]: if a
$C^2$ square residual has an exact zero with invertible Jacobian and a
Lipschitz Jacobian on a closed ball, there is a smaller invariant ball on
which every exact Newton update is defined and satisfies the quadratic
error recurrence; an infinite recurrence converges, while finite-budget
`root` status records only a residual tolerance.

[F5] [[alg-finite-budget-newton-for-vector-residuals]] specifies the residual,
trial-domain, singularity and budget branches. Its correction-call bound is
proved in [[lem-finite-budget-newton-work-and-status]]; budget exhaustion may
precede tolerance attainment.

[F6] [[thm-augmented-residual-contraction-certificate]]: under its certified
residual/Jacobian error, inverse, Lipschitz and strict contraction
hypotheses, a square residual has exactly one zero in the proposed ball and
the distance from its center is at most $\beta\rho_g/(1-q)$, where
$\rho_g$ is its certified residual upper bound.

[F7] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composite
is the composition of derivatives.

[F8] [[def-ck-euclidean-maps-and-diffeomorphisms]]: $C^2$ means each
component has continuous coordinate partial derivatives through order two.

[F9] [[def-total-derivative-in-euclidean-space]]: $DF(z)$ is the linear map
in the first-order approximation $F(z+h)=F(z)+DF(z)h+o(\|h\|_2)$.

[F10] [[def-rank-and-nullity]]: rank of a map with finite-dimensional domain
is the dimension of its image.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Apply [F1] to obtain a $C^1$ unit-speed branch chart $c(s)$ with $c(0)=z_*$ and $c'(0)=t$. Set $\widetilde\tau:=\tau$ if $\tau^Tt>0$ and $\widetilde\tau:=-\tau$ if $\tau^Tt<0$; it is a unit vector, its hyperplane is unchanged, and $\widetilde\tau^Tc'(0)=|\tau^Tt|\ge c$. By continuity of $c'$, shrink the chart to $[-r,r]$ so that $\widetilde\tau^Tc'(s)\ge c/2$. For $g(s):=\widetilde\tau^T(c(s)-z_p)$ the offset in [F2] is zero because $z_*$ lies on the hyperplane. The $d=0$ case of [F2] gives exactly one intersection on this chart segment, at $s=0$. [F1, F2, F8, F9, F10, given, choose]

1.2 By [F7], the derivative of $G$ at $z_*$ is the bordered matrix $$DG(z_*)=\begin{bmatrix}A\\\tau^T\end{bmatrix}.$$ The rank, kernel, angle and complement-inverse hypotheses let [F3] give its invertibility and the stated bound $\beta_*$. [F3, F7, F9, F10, given, algebra]

2.1 The last component of $G$ is affine, so for $u,v$ in the ball, $$\|DG(u)-DG(v)\|_{\rm op} =\left\|\begin{bmatrix}DF(u)-DF(v)\\0\end{bmatrix}\right\|_{\rm op} \le L\|u-v\|_2.$$ Also $G(z_*)=0$ by $F(z_*)=0$ and the section equation. Apply [F4] to the square map $G$ on this ball. It supplies a smaller radius $\rho$, a uniform inverse bound $K$, and the quadratic estimate with $C=KL/2$; its induction also ensures every attempted update stays in the invariant ball. [F4, F8, F9, F10, given, step 1.2, algebra]

3.1 The finite procedure in [F5] uses exactly these updates and its own residual, domain, singularity and budget checks. Hence any update it attempts from the invariant ball has the bound of step 2.1; if it stops for the iteration budget before reaching tolerance, no exact-zero conclusion follows. For a separately supplied approximate residual/Jacobian tuple satisfying [F6], that certificate gives the stated unique local zero and error bound for this same augmented map $G$. [F5, F6, step 2.1, given] ∎
