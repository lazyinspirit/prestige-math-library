---
id: thm-periodic-midpoint-collocation-error-budget
kind: theorem
title: "Periodic midpoint collocation has an explicit local second-order error budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-phase-bordered-multiple-shooting-and-midpoint-collocation
  - def-phase-bordered-periodic-orbit-bvp
  - lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse
  - lem-midpoint-bvp-discrete-linearized-inverse
  - def-midpoint-collocation-residual-for-bvps
  - thm-euclidean-space-complete
  - thm-banach-fixed-point
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
  - thm-chain-rule-for-total-derivatives
  - thm-ftc-second-part
  - thm-norm-inequality-for-the-vector-valued-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

Consider the augmented phase-fixed BVP of [[def-phase-bordered-periodic-orbit-bvp]] on $[0,1]$, with exact solution $u_*\in C^3$, field $\widetilde f$, and affine boundary map $B$. Put
$$M_2=\|u_*''\|_\infty,\quad M_3=\|u_*'''\|_\infty,\quad L_f=\sup\|D\widetilde f\|_2,\quad C_0=M_3/24+L_fM_2/8.$$
Let $G_h$ be the normalized midpoint residual on a uniform mesh and $Y^*$ the samples of $u_*$. Suppose that for all $0<h\le h_0$, $J_h=DG_h(Y^*)$ is invertible with $\|J_h^{-1}\|_{\infty\to\infty}\le K$, and on a fixed-radius ball of radius $r$ about $Y^*$ the maps $DG_h$ are $L_G$-Lipschitz in the block maximum norm. Assume $2KL_Gr\le1/2$, $KC_0h^2\le r/2$, and $2K^2L_GC_0h^2\le1/2$. Then $G_h$ has a unique zero $Y_h$ in that ball. Every candidate $Y$ in the ball satisfying $\|G_h(Y)\|_\infty\le\varepsilon$ obeys
$$
\|P_hY-u_*\|_\infty\le 4K\varepsilon+\left(2KC_0+\frac{M_2}{8}\right)h^2,
$$
where $P_h$ is linear interpolation of the node values. Thus the residual and discretization constants are explicit in the supplied derivative and inverse bounds. For the augmented state, the estimate includes both the orbit coordinates and the period coordinate.

## Facts & Assumptions

**Given:** The exact augmented solution, uniform mesh, normalized midpoint residual, bounds $M_2,M_3,L_f,K,L_G$, and the stated radius and mesh inequalities.

[F1] The midpoint residual has rows $(u_{i+1}-u_i)/h-\widetilde f((u_i+u_{i+1})/2)$ and the phase-periodic boundary row ([[def-midpoint-collocation-residual-for-bvps]], [[def-phase-bordered-multiple-shooting-and-midpoint-collocation]]).

[F2] For a BVP with a boundedly invertible continuous linearization, its sampled midpoint Jacobian has a uniform inverse bound ([[lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse]], [[lem-midpoint-bvp-discrete-linearized-inverse]]); here the explicit $K$ is assumed as a supplied upper bound for those discrete inverses.

[F3] A contraction of a nonempty complete metric space into itself has a unique fixed point ([[thm-banach-fixed-point]]). The closed ball in the node space is complete: a block-maximum Cauchy sequence is Cauchy in each of its finitely many Euclidean blocks, each block converges by [[thm-euclidean-space-complete]], and the finite maximum of the block errors tends to zero; closedness keeps the limit in the ball.

[F4] Taylor's formula along a segment bounds the stated $C^2$ and $C^3$ remainders ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]).

[F5] If $\|J^{-1}(A-J)\|\le1/2$, the perturbed operator is invertible with inverse norm at most $2\|J^{-1}\|$ ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[F6] The chain rule differentiates a composition of totally differentiable maps ([[thm-chain-rule-for-total-derivatives]]).

[F7] The fundamental theorem of calculus applies coordinatewise to a continuously differentiable vector curve, and the norm of a Euclidean vector-valued integral is at most the integral of the norm ([[thm-ftc-second-part]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

## Proof
1.1 On a mesh cell centered at $m_i$, write $s=t-m_i$. Taylor's formula gives $u_*'(m_i+s)=u_*'(m_i)+s u_*''(m_i)+r(s)$ with $\|r(s)\|_2\le M_3s^2/2$. Averaging over the symmetric interval cancels the odd term and gives $\|(u_*(t_{i+1})-u_*(t_i))/h-u_*'(m_i)\|_2\le M_3h^2/24$. The average endpoint state differs from $u_*(m_i)$ by at most $M_2h^2/8$, so the Lipschitz bound $L_f$ gives $\|G_h(Y^*)\|_\infty\le C_0h^2$; the boundary residual is exactly zero. These are uniform cellwise bounds, hence independent of the number of cells. [F1, F4, given, algebra]

2.1 Define $T_h(Y)=Y-J_h^{-1}G_h(Y)$. The Jacobian Lipschitz bound gives $\|T_h(Y)-T_h(Z)\|_\infty\le KL_Gr\|Y-Z\|_\infty\le\frac14\|Y-Z\|_\infty$ on the ball. Also $\|T_h(Y^*)-Y^*\|_\infty\le KC_0h^2\le r/2$, so $T_h$ maps the ball into itself. By [F3], it has a unique fixed point $Y_h$, and invertibility of $J_h$ makes fixed points exactly the zeros of $G_h$. The fixed-point equation also gives $\|Y_h-Y^*\|_\infty\le KC_0h^2/(1-1/4)\le2KC_0h^2$. [F2, F3, step 1.1, given]

3.1 The perturbation bound $\|DG_h(Y_h)-J_h\|\le L_G\|Y_h-Y^*\|$ implies $\|J_h^{-1}(DG_h(Y_h)-J_h)\|\le2K^2L_GC_0h^2\le1/2$. The small-perturbation inverse bound [F5] therefore gives $DG_h(Y_h)^{-1}$ with norm at most $2K$. [F5, step 2.1, given]

4.1 Put $\delta=Y-Y_h$ and define $R(t)=G_h(Y_h+t\delta)-G_h(Y_h)-tDG_h(Y_h)\delta$ for $0\le t\le1$. The segment lies in the ball. By the chain rule [F6], $R\prime(t)=(DG_h(Y_h+t\delta)-DG_h(Y_h))\delta$, so the Lipschitz bound gives $\|R\prime(t)\|_\infty\le L_Gt\|\delta\|_\infty^2$. For each Euclidean block index $j$, [F7] gives $\|R_j(1)\|_2\le\int_0^1\|R_j\prime(t)\|_2dt\le\int_0^1\|R\prime(t)\|_\infty dt$; taking the finite maximum over $j$ gives $\|R(1)\|_\infty\le\int_0^1\|R\prime(t)\|_\infty dt\le(L_G/2)\|\delta\|_\infty^2$. Thus $G_h(Y)=DG_h(Y_h)(Y-Y_h)+R(1)$ with this remainder bound. Since both vectors lie in the radius-$r$ ball, $\|Y-Y_h\|_\infty\le2r$, and $2KL_Gr\le1/2$ yields $\|Y-Y_h\|_\infty\le2K\varepsilon+\frac12\|Y-Y_h\|_\infty$. Hence $\|Y-Y_h\|_\infty\le4K\varepsilon$. [F6, F7, step 3.1, given, algebra]

5.1 Linear interpolation is a convex combination of adjacent node values, so $\|P_h(Y-Y_h)\|_\infty\le\|Y-Y_h\|_\infty$. The exact curve differs from its own linear interpolant by at most $M_2h^2/8$ on each cell, by [F4]. The sample error of $Y_h$ is at most $2KC_0h^2$ by step 2.1. Adding these three bounds proves the displayed estimate. [F4, step 2.1, step 4.1, given, algebra] ∎
