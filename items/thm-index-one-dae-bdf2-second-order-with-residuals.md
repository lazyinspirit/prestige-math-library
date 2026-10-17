---
id: thm-index-one-dae-bdf2-second-order-with-residuals
title: "Coupled constant-step BDF2 is second order for a regular index-one DAE"
kind: theorem
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-index-one-dae-bdf2-stepper
  - alg-index-one-dae-backward-euler-stepper
  - lem-index-one-dae-bdf2-local-branch
  - lem-index-one-dae-backward-euler-local-branch
  - lem-index-one-dae-algebraic-residual-to-state-error
  - thm-index-one-dae-implicit-function-reduction
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - lem-variable-step-bdf2-interpolation-and-local-defect
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
      locator: "§VI.1, printed pp. 374–375: reduction to an ODE on the index-one branch; this item supplies its own constant-step BDF2 residual and stability proof."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.4"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 172–174: BDF for index-one DAEs, consistent starts, and algebraic residual sensitivity."
---

## Statement

For the semi-explicit DAE with $x\in\mathbb R^d$, $z\in\mathbb R^m$, and $d,m\ge1$, let $x'=F(t,x)$ be the reduced ODE from [[thm-index-one-dae-implicit-function-reduction]] on $[0,T]$, with exact solution $\bar x\in C^3$. Assume $F$ is Lipschitz in $x$ on a common compact tube with constant $L$, $\psi$ is Lipschitz in $x$ there with constant $L_\psi$, $f$ is Lipschitz in $z$ with constant $L_z$, and the residual lemma's hypotheses hold uniformly on this tube: common $\gamma>0$, $\Lambda\ge0$, and $\rho>0$ in its lower singular-value and Jacobian-Lipschitz bounds, with $\rho\le\gamma/(\sqrt m\,\Lambda)$ when $\Lambda>0$. Every numerical algebraic candidate lies in its corresponding branch ball. Use a constant grid $t_n=nh$, $h=T/N$, $T>0$, and $N\ge2$. Suppose the two starting pairs satisfy

$$
\|X_j-\bar x(t_j)\|_2\le C_sh^2,\qquad \|g(t_j,X_j,Z_j)\|_2\le C_{a,s}h^2,\qquad j=0,1.
$$

For each $2\le n\le N$, suppose the constant-step BDF2 derivative and algebraic residuals satisfy

$$
r^d_n=\frac{3X_n-4X_{n-1}+X_{n-2}}{2h}-f(t_n,X_n,Z_n),\quad r^a_n=g(t_n,X_n,Z_n),\quad \|r^d_n\|_2\le C_dh^2,\quad \|r^a_n\|_2\le C_ah^2.
$$

Then, for all sufficiently small $h$, a constant $C$ independent of $h$ satisfies

$$
\max_{0\le n\le N}\Bigl(\|X_n-\bar x(t_n)\|_2+\|Z_n-\psi(t_n,\bar x(t_n))\|_2\Bigr)\le Ch^2.
$$

The starter hypothesis holds, in particular, for an exact consistent $X_0,Z_0$ and one backward-Euler startup from $X_0$ with derivative residual $O(h)$ and algebraic residual $O(h^2)$. The error theorem is conditional on the residual bounds and selected branch; it does not assert that a finite Newton budget meets them.

## Facts & Assumptions

**Given:** A $C^3$ reduced solution on a compact tube, a selected $C^2$ index-one branch, the Lipschitz bounds, a constant grid, the starting-pair bounds, the BDF2 residuals, and the residual branch hypotheses in the Statement.

[F1] [[thm-index-one-dae-implicit-function-reduction]]: the reduced field is $F(t,x)=f(t,x,\psi(t,x))$, and the DAE algebraic variable is $\psi(t,x)$.

[F2] [[lem-index-one-dae-algebraic-residual-to-state-error]]: inside its branch ball, algebraic residual $r^a$ gives $\|Z-\psi(t,X)\|_2\le(2/\gamma)\|r^a\|_2$.

[F3] [[alg-index-one-dae-bdf2-stepper]]: the coupled differential residual is $r^d_n=(3X_n-4X_{n-1}+X_{n-2})/(2h)-f(t_n,X_n,Z_n)$. Its coefficients are the constant-step case $r_n=1$ of [[alg-variable-step-bdf2-with-selected-implicit-branch]]; on the exact selected branch, [F1] gives $f(t_n,X_n,\psi(t_n,X_n))=F(t_n,X_n)$.

[F4] [[lem-variable-step-bdf2-interpolation-and-local-defect]]: for $C^3$ exact solutions and constant adjacent-step ratio $1$, the unscaled exact BDF2 residual is $O(h^3)$.

[F5] [[lem-discrete-one-step-error-recurrence-bound]]: a recurrence $E_n\le(1+L_0h)E_{n-1}+C_1h^3$ with $E_1=O(h^2)$ on a finite uniform interval has $\max_n E_n=O(h^2)$.

[F6] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: Taylor expansion with bounded third derivative gives the stated cubic local BDF2 residual.

[A1] All exact and numerical states, algebraic residual candidates, and selected roots lie in the common compact tube and branch balls of the Statement, with the same $\gamma,\Lambda,\rho$ at every step.



## Proof

1.1 Write $\bar x_n=\bar x(t_n)$, $\bar z_n=\psi(t_n,\bar x_n)$, and $e_n=X_n-\bar x_n$. By [F2], $\|Z_n-\psi(t_n,X_n)\|_2\le(2C_a/\gamma)h^2$. Thus, with $\delta_n=f(t_n,X_n,Z_n)-F(t_n,X_n)$, the $z$-Lipschitz bound gives $\|\delta_n\|_2\le(2L_zC_a/\gamma)h^2$. [A1, F1, F2, algebra]

1.2 Put $\tau_n=(3\bar x_n-4\bar x_{n-1}+\bar x_{n-2})/(2h)-F(t_n,\bar x_n)$. By [F4], setting the adjacent-step ratio to $1$ gives an unscaled residual of size $O(h^3)$; division by $2h$ yields $\|\tau_n\|_2\le C_\tau h^2$. This also follows by applying [F6] componentwise to the exact solution through degree two. [A1, F4, F6]

2.1 By [F3] and step 1.1, the numerical recurrence is $(3X_n-4X_{n-1}+X_{n-2})/(2h)=F(t_n,X_n)+\delta_n+r^d_n$, while the exact defect definition gives the same formula with $X$ replaced by $\bar x$ and an added $\tau_n$. With $d_n=e_n-e_{n-1}$ and $w_n=\delta_n+r^d_n-\tau_n$, subtraction gives $3d_n-d_{n-1}=2h(F(t_n,X_n)-F(t_n,\bar x_n)+w_n)$, where $\|w_n\|_2\le q_n:=\|r^d_n\|_2+\|\delta_n\|_2+\|\tau_n\|_2$. The Lipschitz bound and $\|e_n\|_2\le\|e_{n-1}\|_2+\|d_n\|_2$ imply $(3-2hL)\|d_n\|_2\le\|d_{n-1}\|_2+2hL\|e_{n-1}\|_2+2hq_n$. For $hL\le3/4$, division by $3-2hL\ge3/2$ yields $\|d_n\|_2\le(2/3)\|d_{n-1}\|_2+(4/3)hL\|e_{n-1}\|_2+(4/3)hq_n$. [A1, F3, step 1.1, step 1.2, algebra]

3.1 Set $E_n=\|e_n\|_2+2\|d_n\|_2$. Using $e_n=e_{n-1}+d_n$ and the last inequality of step 2.1 gives $E_n\le(1+4Lh)\|e_{n-1}\|_2+2\|d_{n-1}\|_2+4hq_n\le(1+4Lh)E_{n-1}+4hq_n$. Steps 1.1 and 1.2 and the residual assumptions imply $q_n\le C_qh^2$, so $E_n\le(1+4Lh)E_{n-1}+4C_qh^3$. [step 2.1, step 1.1, step 1.2, algebra]

4.1 The starting-pair bounds give $E_1\le\|e_1\|_2+2\|e_1-e_0\|_2=O(h^2)$. Apply [F5] to the $N-1$ steps from index $1$ to $N$, whose interval length is $(N-1)h\le T$. This yields $\max_{1\le n\le N}E_n=O(h^2)$; the starting-pair bound also gives $\|e_0\|_2=O(h^2)$, so $\max_{0\le n\le N}\|e_n\|_2=O(h^2)$. [F5, step 3.1, given]

5.1 The residual estimate [F2] and the Lipschitz bound on $\psi$ give $\|Z_n-\bar z_n\|_2\le\|Z_n-\psi(t_n,X_n)\|_2+L_\psi\|e_n\|_2=O(h^2)$ for every $n$, including $n=0,1$ by the starter assumptions. [A1, F1, F2, step 4.1, algebra]

6.1 To verify the stated backward-Euler startup option, let $X_0=\bar x_0$. Its exact-start BE defect satisfies $\tau_1^{\rm BE}=(\bar x_1-\bar x_0)/h-F(t_1,\bar x_1)=O(h)$ by [F6]. The BE residual equation and Lipschitz bound then give $(1-hL)\|X_1-\bar x_1\|_2\le h(\|r^d_1\|_2+\|\delta_1\|_2+\|\tau_1^{\rm BE}\|_2)=O(h^2)$, since $r^d_1=O(h)$ and $r^a_1=O(h^2)$ imply $\delta_1=O(h^2)$ by [F2]. For $hL\le1/2$, this yields $\|X_1-\bar x_1\|_2=O(h^2)$; [F2] and $r^a_1=O(h^2)$ then give $\|Z_1-\bar z_1\|_2=O(h^2)$. [A1, F1, F2, F6, algebra] ∎
