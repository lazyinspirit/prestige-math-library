---
id: thm-two-block-admm-residual-objective-and-dual-convergence
kind: theorem
title: "Two-block ADMM residual, objective and dual sequence convergence"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
axiom_base: "No additional axiom; the cited finite-dimensional Bolzano–Weierstrass result is choice-free."
deps:
  - alg-two-block-admm-scaled
  - def-saddle-point-for-convex-concave-lagrangian
  - lem-two-block-admm-energy-and-objective-estimates
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - lem-fenchel-conjugate-is-proper-closed-convex
  - lem-fenchel-young-equality-characterizes-subgradients
  - lem-admm-exact-subproblem-optimality-relations
  - cor-bolzano-weierstrass-in-rn
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3.2 and Appendix A"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
---

## Statement

Use the equality-constrained problem and exact recurrence of
[[alg-two-block-admm-scaled]]. Suppose $f,g$ are proper closed convex, a
Lagrangian saddle point $(x_*,z_*,y_*)$ exists, $\rho>0$, and every outer
subproblem is attained exactly. Write $p_*=f(x_*)+g(z_*)$. Then
$$r^k\to0,\qquad f(x^k)+g(z^k)\to p_*,\qquad y^k\to\bar y$$
for some dual optimum $\bar y$ of
$d(y)=\inf_{x,z}\mathcal L((x,z),y)$. The theorem does not assert convergence
of $x^k$ or $z^k$.

## Facts & Assumptions

**Given:** The stated finite-dimensional problem, one saddle point, $\rho>0$, and an exact attained ADMM sequence.

[A1] A saddle point exists, $\rho>0$, and every ADMM subproblem is attained exactly.


[F1] [[alg-two-block-admm-scaled]]: the exact recurrence, residual $r^k$, unscaled dual $y^k=\rho u^k$, and Lagrangian $\mathcal L((x,z),y)$.

[F2] [[def-saddle-point-for-convex-concave-lagrangian]]: $\mathcal L((x_*,z_*),y)\le p_*\le\mathcal L((x,z),y_*)$ for all $x,z,y$.

[F3] [[lem-two-block-admm-energy-and-objective-estimates]]: from $k\ge1$, the energy descends by $\rho(\|r^{k+1}\|^2+\|L\Delta z^{k+1}\|^2)$ and the two one-sided objective estimates hold.

[F4] [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]]: $f^*(s)=\sup_x(\langle s,x\rangle-f(x))$ and likewise for $g^*$.

[F5] [[lem-fenchel-conjugate-is-proper-closed-convex]]: the conjugate of a proper closed convex function is proper, closed and convex, in particular it never takes $-\infty$.

[F6] [[lem-fenchel-young-equality-characterizes-subgradients]]: $f(x)+f^*(s)=\langle s,x\rangle$ iff $s\in\partial f(x)$ with the required finite values.

[F7] [[cor-bolzano-weierstrass-in-rn]]: for a positive dimension, every bounded sequence in that finite-dimensional Euclidean space has a convergent subsequence.

[F8] [[lem-admm-exact-subproblem-optimality-relations]]: each exact sweep has the stated $f$- and $g$-subgradient inclusions.

[F9] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle v,w\rangle|\le\|v\|_2\|w\|_2$.

[F10] [[def-euclidean-inner-product]]: $\mathbb R^0$ consists of the single zero vector.

## Proof


1.1 The left saddle inequality forces $Kx_*+Lz_*=c$: otherwise taking $y=y_*+t(Kx_*+Lz_*-c)$ and letting $t\to+\infty$ contradicts its finite upper bound. The right saddle inequality then says every feasible pair has objective at least $p_*$, so $(x_*,z_*)$ is primal optimal. For every $y$, the dual value $d(y)$ is at most $\mathcal L((x_*,z_*),y)=p_*$. At $y_*$, the right saddle inequality gives $d(y_*)\ge p_*$; hence $d(y_*)=p_*$ and $y_*$ is dual optimal. [A1, F1, F2, given, contradiction]

1.2 The subgradient inequalities underlying [F3] imply, for every fixed $x,z$ and every sweep, $$f(x)+g(z)+\langle y^{k+1},Kx+Lz-c\rangle\ge p_{k+1}+\langle y^{k+1},r^{k+1}\rangle+\rho\langle L\Delta z^{k+1},Kx-Kx^{k+1}\rangle.$$ Indeed, apply the $f$- and $g$-subgradient inclusions [F8] at the new iterates, use their defining inequalities, add them, and substitute $Kx^{k+1}+Lz^{k+1}-c=r^{k+1}$. [A1, F1, F3, F8, algebra]

2.1 Fixing $z=z_*$ and then $x=x_*$ in the right saddle inequality gives $-K^*y_*\in\partial f(x_*)$ and $-L^*y_*\in\partial g(z_*)$. By [F6], $f(x_*)+f^*(-K^*y_*)=-\langle y_*,Kx_*\rangle,\qquad g(z_*)+g^*(-L^*y_*)=-\langle y_*,Lz_*\rangle.$ Each component infimum is below a finite value because $f,g$ are proper, so neither equals $+\infty$. If both are finite, choosing independent points within any $\epsilon>0$ of them proves that the joint infimum is their sum; if either is $-\infty$, fixing a finite competitor in the other block and sending the first block value down shows the joint infimum is $-\infty$. Thus separating the $x$ and $z$ infima and using [F4] gives the extended-real identity $$d(y)=-f^*(-K^*y)-g^*(-L^*y)-\langle y,c\rangle.$$ The terms are well-defined because [F5] excludes $-\infty$ conjugate values. Substituting the two equalities and feasibility into the formula gives $d(y_*)=p_*$. The dual solution set $Y_*:=\{y:d(y)=p_*\}$ is nonempty. Weak duality gives $d(y)\le p_*$, so $y\in Y_*$ iff $\mathcal L((x,z),y)\ge p_*$ for every $x,z$. Each finite-valued pair $(x,z)$ imposes a closed affine half-space in $y$; an infinite-valued pair imposes no restriction. Thus $Y_*$ is closed and convex as an intersection of closed convex sets. [A1, F1, F2, F4, F5, F6, step 1.1, algebra, algebra]

2.2 Sum the descent inequality [F3] from $k=1$ to $N$. Since $V^{N+1}\ge0$, $$\sum_{k=1}^N\bigl(\|r^{k+1}\|_2^2+\|L\Delta z^{k+1}\|_2^2\bigr)\le V^1/\rho.$$ Each nonnegative term of a convergent bounded partial sum tends to zero, so $r^k\to0$ and $L\Delta z^k\to0$. The energy bound also makes $y^k$ and $L(z^k-z_*)$ bounded. [A1, F3, step 1.1, algebra]

3.1 The objective estimates [F3] now force convergence. In the upper estimate, $\langle y^{k+1},r^{k+1}\rangle\to0$ by boundedness and residual convergence; both terms paired with $L\Delta z^{k+1}$ tend to zero because $r^{k+1}\to0$ and $L(z^{k+1}-z_*)$ is bounded. The lower estimate $p_*-p_{k+1}\le\langle y_*,r^{k+1}\rangle$ also tends to zero. Hence $p_{k+1}\to p_*$. [A1, F3, F9, step 2.2, algebra]

4.1 Along any convergent subsequence $y^{k_j+1}\to\bar y$, the quantities $Kx^{k_j+1}=c-Lz^{k_j+1}+r^{k_j+1}$ are bounded by step 2.2. Taking limits in step 1.2, using steps 2.2 and 3.1, gives $$f(x)+g(z)+\langle\bar y,Kx+Lz-c\rangle\ge p_*\qquad\text{for all }x,z.$$ Since the primal optimizer is feasible, $d(\bar y)\ge p_*$, while weak duality from step 1.1 gives $d(\bar y)\le p_*$. Thus every dual cluster point belongs to $Y_*$. The inequality at the fixed primal optimizer also makes it a saddle point with $\bar y$. [A1, F1, F2, step 1.1, step 2.2, step 3.1, step 1.2, algebra]

5.1 If $p=0$, then $\mathbb R^p=\{0\}$ by [F10], so $y^k=0$ for every $k$; step 2.1 shows this unique dual vector is optimal, and dual convergence follows. Assume henceforth $p\ge1$. Boundedness from step 2.2 and [F7] give at least one dual cluster point. Let $y_1,y_2\in Y_*$ be any two cluster points. Each pairs with the same primal optimizer to form a saddle point, so [F3] makes both energy sequences $$V^k(y_i)=\rho^{-1}\|y^k-y_i\|_2^2+\rho\|L(z^k-z_*)\|_2^2\quad(i=1,2)$$ nonincreasing from $k=1$ and bounded below; each therefore converges. Expanding the two squared norms gives $V^k(y_1)-V^k(y_2)=\frac2\rho\langle y^k,y_2-y_1\rangle+\frac{\|y_1\|_2^2-\|y_2\|_2^2}{\rho},$ so $\langle y^k,y_2-y_1\rangle$ converges. Along subsequences tending to $y_1$ and $y_2$ the limits are equal, so $\langle y_1-y_2,y_2-y_1\rangle=-\|y_1-y_2\|_2^2=0$ and $y_1=y_2$. [A1, F3, F7, F10, step 2.1, step 2.2, step 4.1, algebra]

6.1 In the remaining case $p\ge1$, there is exactly one cluster point. If the bounded sequence $y^k$ did not converge to it, some subsequence would stay a fixed positive distance away; [F7] would give a convergent subsubsequence with a different cluster point, a contradiction. Therefore the whole unscaled dual sequence converges to a point of $Y_*$. No convergence of primal iterates was used. [A1, F7, step 5.1, contradiction] ∎
