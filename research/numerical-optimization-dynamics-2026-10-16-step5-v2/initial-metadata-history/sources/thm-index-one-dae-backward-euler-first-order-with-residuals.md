---
id: thm-index-one-dae-backward-euler-first-order-with-residuals
title: "Coupled backward Euler is first order for a regular index-one DAE"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-index-one-dae-backward-euler-stepper
  - lem-index-one-dae-backward-euler-local-branch
  - lem-index-one-dae-algebraic-residual-to-state-error
  - thm-index-one-dae-implicit-function-reduction
  - def-backward-euler-step-equation
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 379–381: state-space reduction and implicit index-one equations."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §§10.2–10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 168–170: backward Euler for DAEs and index-one branch reduction."
---

## Statement

For the semi-explicit DAE with $x\in\mathbb R^d$, $z\in\mathbb R^m$, and $d,m\ge1$, let $x'=F(t,x)$ be the reduced ODE from [[thm-index-one-dae-implicit-function-reduction]] on $[0,T]$, with exact solution $\bar x\in C^2$. Suppose all exact and numerical states lie in a common compact branch tube, $F$ is Lipschitz in $x$ there with constant $L$, $\psi$ is Lipschitz in $x$ with constant $L_\psi$, and $f$ is Lipschitz in $z$ with constant $L_z$. Assume the residual lemma's hypotheses hold uniformly on this tube: there are common $\gamma>0$, $\Lambda\ge0$, and $\rho>0$ for its lower singular-value and Jacobian-Lipschitz bounds at every base point, with $\rho\le\gamma/(\sqrt m\,\Lambda)$ when $\Lambda>0$; all numerical algebraic candidates lie in the corresponding balls $B(\psi(t_n,X_n),\rho)$. Use a uniform grid $t_n=nh$, $h=T/N$, $T>0$, and $N\ge1$. Assume the starting pair also lies in its branch ball and

$$
\|X_0-\bar x(0)\|_2\le C_0h,\qquad \|g(0,X_0,Z_0)\|_2\le C_{a,0}h.
$$

For each $1\le n\le N$, suppose $(X_n,Z_n)$ lies in the branch ball and its coupled backward-Euler residuals satisfy

$$
r^d_n=\frac{X_n-X_{n-1}}h-f(t_n,X_n,Z_n),\quad r^a_n=g(t_n,X_n,Z_n),\quad \|r^d_n\|_2\le C_dh,\quad \|r^a_n\|_2\le C_ah.
$$

Then a constant $C$, independent of $h$, satisfies

$$
\max_{0\le n\le N}\Bigl(\|X_n-\bar x(t_n)\|_2+\|Z_n-\psi(t_n,\bar x(t_n))\|_2\Bigr)\le Ch
$$

for all sufficiently small $h$. This is a conditional accuracy result for accepted residuals; the finite-budget solver may return a failure status.

## Facts & Assumptions

**Given:** The regular index-one DAE, a selected $C^2$ branch, a $C^2$ reduced solution on a compact tube, the Lipschitz bounds, and the stated initial and step residual bounds.

[F1] [[thm-index-one-dae-implicit-function-reduction]]: $F(t,x)=f(t,x,\psi(t,x))$, and the DAE solution has $z(t)=\psi(t,x(t))$.

[F2] [[lem-index-one-dae-algebraic-residual-to-state-error]]: inside its branch ball, $\|Z-\psi(t,X)\|_2\le (2/\gamma)\|g(t,X,Z)\|_2$.

[F3] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^2$ function on a convex interval has its first-order Taylor expansion with a quadratic remainder.

[F4] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_0=O(h)$ and $e_n\le(1+L_0h)e_{n-1}+C_1h^2$ on a uniform finite interval, then $\max_n e_n=O(h)$.

[F5] [[def-backward-euler-step-equation]] defines the ODE backward-Euler endpoint equation. [[alg-index-one-dae-backward-euler-stepper]] defines the coupled derivative residual $r^d_n=(X_n-X_{n-1})/h-f(t_n,X_n,Z_n)$ and algebraic residual $r^a_n=g(t_n,X_n,Z_n)$; accepted candidates need not have zero residuals.

[A1] All residuals and states satisfy the common-tube and branch-ball assumptions in the Statement, with the same $\gamma,\Lambda,\rho$ at every step.



## Proof

1.1 Write $\bar x_n=\bar x(t_n)$ and $\bar z_n=\psi(t_n,\bar x_n)$. By [F2], the algebraic residual at each step gives $\|Z_n-\psi(t_n,X_n)\|_2\le(2C_a/\gamma)h$. The initial pair similarly satisfies $\|Z_0-\psi(0,X_0)\|_2\le(2C_{a,0}/\gamma)h$. [A1, F2, algebra]

1.2 Taylor's formula [F3] applied to the $C^2$ exact solution at $t_n$ gives $\tau_n:=(\bar x_n-\bar x_{n-1})/h-F(t_n,\bar x_n)$ with $\|\tau_n\|_2\le C_\tau h$; one constant $C_\tau$ works because $\bar x''$ is bounded on the compact interval. [A1, F1, F3]

2.1 Put $\delta_n=f(t_n,X_n,Z_n)-F(t_n,X_n)$. By [F1] and the $L_z$-Lipschitz bound in $z$, $\|\delta_n\|_2\le L_z\|Z_n-\psi(t_n,X_n)\|_2\le(2L_zC_a/\gamma)h$. The corresponding initial algebraic estimate will be used only for the final $Z_0$ bound. [F1, step 1.1, A1, algebra]

3.1 Let $e_n=X_n-\bar x_n$. Subtracting the exact residual identity in step 1.2 from the derivative residual identity in the Statement, using the convention [F5], gives $(e_n-e_{n-1})/h=F(t_n,X_n)-F(t_n,\bar x_n)+\delta_n+r^d_n-\tau_n$. The Lipschitz bounds and triangle inequality imply $(1-hL)\|e_n\|_2\le\|e_{n-1}\|_2+h(\|r^d_n\|_2+\|\delta_n\|_2+\|\tau_n\|_2)$. For $hL\le1/2$, $1/(1-hL)\le1+2Lh$ and $1/(1-hL)\le2$, so the Statement's residual bounds and step 2.1 give $\|e_n\|_2\le(1+2Lh)\|e_{n-1}\|_2+C_2h^2$ with $C_2$ independent of $n,h$. [A1, F1, F5, step 2.1, step 1.2, algebra]

4.1 Apply [F4] to the recurrence in step 3.1 and the initial bound $\|e_0\|_2\le C_0h$. It gives $\max_n\|e_n\|_2\le C_3h$. [F4, step 3.1, A1]

5.1 For every $n$, the triangle inequality and the Lipschitz bound on $\psi$ give $\|Z_n-\bar z_n\|_2\le\|Z_n-\psi(t_n,X_n)\|_2+L_\psi\|e_n\|_2$. Step 1.1 bounds the first term by a constant times $h$, and step 4.1 bounds the second. The same argument with the initial residual bound handles $n=0$; hence both state components satisfy the stated $O(h)$ bound. [A1, F1, step 1.1, step 4.1, algebra] ∎
