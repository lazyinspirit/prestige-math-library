---
id: thm-sqp-augmented-lagrangian-local-convergence
kind: theorem
title: "Augmented-Lagrangian multipliers converge locally with summable inner residuals"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sqp-augmented-lagrangian-equality-and-inequality
  - def-inequality-constrained-program-and-kkt-geometry
  - alg-sqp-augmented-lagrangian-multiplier-method
  - thm-euclidean-implicit-function-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Dimitri P. Bertsekas, Constrained Optimization and Lagrange Multiplier Methods"
      url: https://www.mit.edu/~dimitrib/Constrained-Opt.pdf
      locator: "Chapter 2 §§2.2.2 and 2.2.4, printed pp. 107–112 and 115–121; local augmented-Lagrangian minima, multiplier convergence, and the need to remain on the local minimizer branch."
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 17 §17.4, printed pp. 511–521 / PDF pp. 529–539."
---

## Statement

Let $x_*$ be a KKT point of a $C^2$ program with active inequality set
$I=I(x_*)$, multiplier $\mu_*=(\nu_*,\lambda_{*,I})$, and active
constraint vector $c=(h,g_I)$, with $r=\dim c$. Assume LICQ, strict complementarity
$\lambda_{*,i}>0$ for $i\in I$, and the second-order sufficient condition
$d^TH_*d>0$ for every nonzero $d\in\ker A_*$, where
$A_*=Dc(x_*)$ and $H_*=\nabla^2_{xx}L(x_*,\mu_*)$.

For all sufficiently large fixed $\rho$, the PHR augmented-Lagrangian
multiplier update has a local contraction when each inner minimization is
solved exactly. When $r>0$, the same local multiplier convergence holds for inner
points $\widehat x_k$ with stationarity residuals
$\epsilon_k=\|\nabla_x\mathcal L_\rho(\widehat x_k,\nu_k,\lambda_k)\|_2$
whose sum is sufficiently small, provided each point stays in the local
strongly convex branch. More precisely, there are local radii $\delta_\mu$
and $d_x>0$, a strong-convexity constant $\alpha>0$, and a contraction
factor $q<1$ such that convergence holds whenever
$$\|\mu_0-\mu_*\|_2\le\delta_\mu/2,\qquad \sum_{k=0}^\infty\epsilon_k\le \min\left\{\alpha d_x,\frac{(1-q)\delta_\mu}{2C}\right\},$$
where $C=\rho L_c/\alpha$ and $L_c$ is a Lipschitz constant for $c$ on
the local primal neighborhood. Inactive multipliers are initialized at
zero. If $c$ has zero components, the multiplier update is absent and the
bound involving $C$ is omitted; sufficiently local inner points with
summable residuals converge to $x_*$ by strong convexity.

This is a limit theorem for an infinite sequence of successful inner
returns. The contraction estimates apply to any successful prefix of the
finite-budget procedure; the limit conclusion applies only to an infinite
continuation whose calls continue to return within their finite inner caps.
For that procedure, the residual sequence in this theorem is the reported
$\widehat\epsilon_k$; its input tolerances must be chosen so these reports
satisfy the displayed summability bound.

## Facts & Assumptions

**Given:** The $C^2$ program, KKT pair, LICQ, strict complementarity,
positive curvature on $\ker A_*$, fixed $\rho$, and summable inner residuals.

[F1] [[def-inequality-constrained-program-and-kkt-geometry]] defines
LICQ, KKT stationarity, and the $g\le0$, $\lambda\ge0$ convention.

[F2] [[def-sqp-augmented-lagrangian-equality-and-inequality]] defines the
PHR Lagrangian and projected multiplier update.

[F3] [[thm-euclidean-implicit-function-theorem]] gives a local $C^1$
solution branch for a $C^1$ equation with invertible derivative and the
derivative formula for that branch.

[F4] [[alg-sqp-augmented-lagrangian-multiplier-method]] uses the displayed
inner stationarity residual and projected multiplier update, with finite
inner and outer caps and explicit exhaustion/failure returns.

[A1] LICQ holds; every active inequality multiplier is strictly positive;
the Lagrangian Hessian is positive definite on $\ker A_*$; inactive
multipliers start at zero; and inner points stay in a neighborhood where
the PHR branches used below remain fixed.

[A2] Every inner call in the sequence under consideration returns
successfully within its finite cap with the stated residual; an
inner-budget-exhausted or inner-failure status ends the finite procedure and
is not a convergence step.

## Proof

1.1 Write $A=A_*$, $H=H_*$ and $r=\dim c$. Strict complementarity and continuity give a neighborhood in which every active inequality satisfies $\lambda_i+\rho g_i(x)>0$ and every inactive inequality, whose multiplier is initialized at zero, satisfies $\lambda_j+\rho g_j(x)<0$. On this branch, [F2] reduces the $x$-dependent augmented Lagrangian to $$\Phi_\rho(x,\mu)=f(x)+\mu^Tc(x)+\frac\rho2\|c(x)\|_2^2,$$ where $\mu=(\nu,\lambda_I)$. Its gradient vanishes at $(x_*,\mu_*)$. [given, F1, F2, algebra, algebra]

1.2 The $x$-Hessian at the base point is $W_\rho=H+\rho A^TA$. If $r=0$, the assumed condition says $H\succ0$. For $r>0$, choose orthonormal matrices $Z,Y$ spanning $\ker A$ and its orthogonal complement, respectively; then $C_0=AY$ is invertible. In this basis the tangent block is $H_T=Z^THZ\succ0$ when its dimension is positive, the cross blocks are those of $H$, and the normal block is $Y^THY+\rho C_0^TC_0$. Its Schur complement over the tangent block is $D+\rho C_0^TC_0$, where $D=Y^THY-Y^THZ H_T^{-1}Z^THY$; if the tangent block is empty, take $D=Y^THY$. Since $C_0^TC_0\succ0$, this Schur complement is positive definite for sufficiently large $\rho$. Hence $W_\rho\succ0$. [given, algebra, choose]

2.1 If $r>0$, apply [F3] to $G(x,\mu)=\nabla_x\Phi_\rho(x,\mu)=0$. Its $x$ derivative is $W_\rho$, which is invertible by step 1.2, and its $\mu$ derivative is $A^T$. Therefore there is a local $C^1$ branch $x(\mu)$ with $x(\mu_*)=x_*$ and $$Dx(\mu_*)=-W_\rho^{-1}A^T.$$ If $r=0$, the empty-multiplier branch consists of the local minimizer $x_*$. By continuity of the Hessian, after shrinking to a convex neighborhood $\Phi_\rho(\cdot,\mu)$ is uniformly strongly convex there; its stationary branch point is its unique local minimizer. [F3, step 1.2, algebra]

3.1 For $r>0$, the exact multiplier map is $T(\mu)=\mu+\rho c(x(\mu))$, so $$DT(\mu_*)=I-\rho A W_\rho^{-1}A^T.$$ In the orthonormal coordinates of step 1.2, block elimination gives $A W_\rho^{-1}A^T=C_0(D+\rho C_0^TC_0)^{-1}C_0^T$ $=(\rho I+E)^{-1}$, where $E=C_0^{-T}DC_0^{-1}$ is symmetric. Thus $DT(\mu_*)=E(\rho I+E)^{-1}$. Its eigenvalues are $e_i/(\rho+e_i)$, which have absolute value less than $1$ for all sufficiently large $\rho$. Continuity of $DT$ then gives a closed multiplier ball on which $T$ is a contraction with some factor $q<1$. For $r=0$ the multiplier update is absent. [step 1.2, step 2.1, algebra]

4.1 Let $\widehat x_k$ be an inner point in the selected branch with residual at most $\epsilon_k$, and let $x(\mu_k)$ be the exact branch minimizer. Strong convexity with constant $\alpha$ gives $$\alpha\|\widehat x_k-x(\mu_k)\|_2^2\le \langle\nabla\Phi_\rho(\widehat x_k,\mu_k)- \nabla\Phi_\rho(x(\mu_k),\mu_k),\widehat x_k-x(\mu_k)\rangle \le\epsilon_k\|\widehat x_k-x(\mu_k)\|_2.$$ After cancellation (with the zero-distance case immediate), $\|\widehat x_k-x(\mu_k)\|_2\le\epsilon_k/\alpha$. The multiplier update is on the same PHR branch, so its difference from $T(\mu_k)$ has norm at most $\rho L_c\epsilon_k/\alpha=C\epsilon_k$. Hence $$\|\mu_{k+1}-\mu_*\|_2\le q\|\mu_k-\mu_*\|_2+C\epsilon_k.$$ The stated sum bound keeps this recurrence inside the multiplier ball and keeps every inner point within the primal branch tube. [A1, A2, F2, F4, step 2.1, step 3.1, algebra]

5.1 Iterating the inequality gives $$\|\mu_k-\mu_*\|_2\le q^k\|\mu_0-\mu_*\|_2+ C\sum_{j=0}^{k-1}q^{k-1-j}\epsilon_j.$$ The first term tends to zero. For the sum, any fixed finite prefix tends to zero as $k\to\infty$, while the remaining tail is bounded by $C\sum_{j\ge J}\epsilon_j$, which tends to zero as $J\to\infty$. Therefore $\mu_k\to\mu_*$. Also $\epsilon_k\to0$ because it is summable, so step 4.1 gives $\widehat x_k-x(\mu_k)\to0$ and continuity gives $\widehat x_k\to x_*$. When $r=0$, step 1.2 gives a strongly convex local objective and the same residual estimate directly yields $\widehat x_k\to x_*$. [given, A1, A2, step 4.1, algebra]

6.1 The hypotheses and local restrictions used above are exactly the regularity, branch, residual, and successful-inner-call conditions in the Statement and [A2]. This proves the limit claim for the successful update sequence; a finite dispatch may return a cap or failure status first and no global convergence is asserted. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
