---
id: thm-smooth-dependence-of-solutions-on-initial-data
kind: theorem
title: "Smooth dependence of solutions on initial data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-c1-dependence-of-solutions-on-initial-data,
       def-variational-equation-along-an-ode-solution,
       lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval,
       prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Theorem 10.7"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $F:D\subseteq\mathbb R\times\mathbb R^n\to\mathbb R^n$ be smooth in the
state variable, and suppose nearby initial states share one compact local time
interval $I$. Then the solution map

$$\Phi:I\times U_0\to\mathbb R^n,\qquad \Phi(t,y)=x(t;y),$$

is smooth in the initial-state variable $y$ on some neighbourhood $U_0$ of the
base point.

## Facts & Assumptions

**Given:** The common local solution map $\Phi(t,y)=x(t;y)$ on a compact time interval $I$.

[L1] The solution map is $C^1$ in the initial data, and the first derivative is given by the variational equation ([[thm-c1-dependence-of-solutions-on-initial-data]]).

[F1] The variational equation is a linear matrix ODE whose coefficients are the state derivatives of the vector field along the base solution ([[def-variational-equation-along-an-ode-solution]]).

[L2] Linear matrix ODEs on a compact interval have unique solutions ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F2] Every solution satisfies the Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the derivative $D_y\Phi(t,y)$ exists and is the solution of the variational equation below. [L1, F1]

$$\partial_t(D_y\Phi)=D_xF(t,\Phi(t,y))\,D_y\Phi,\qquad D_y\Phi(t_0,y)=I_n.$$

Because $F$ is smooth and $\Phi$ is continuous, the coefficient $D_xF(t,\Phi(t,y))$ is as regular in $y$ as $\Phi$ is.

2.1 For each $r\ge1$, let $E_r$ be the finite-dimensional space of $r$-linear maps $(\mathbb R^n)^r\to\mathbb R^n$, with $E_0:=\mathbb R^n$. Repeated differentiation of the ODE or of its Volterra form produces the finite-dimensional jet system below. [F1, F2, step 1.1, algebra]

$$J_r' = G_r(t,J_r)$$

for $J_r=(X_0,\ldots,X_r)\in E_0\times\cdots\times E_r$, whose first components are

$$X_0'=F(t,X_0),\qquad X_1'=D_xF(t,X_0)X_1,$$

and whose higher components have the form $X_m'=D_xF(t,X_0)X_m+P_m(t,X_0,\ldots,X_{m-1})$, where $P_m$ is a universal polynomial expression in derivatives of $F$ and lower jets. For example, $X_2'=D_xF(t,X_0)X_2+D_x^2F(t,X_0)[X_1,X_1]$. Because $F$ is smooth, each $G_r$ is smooth in its state variables.

3.1 Fix $r\ge1$. If $\Phi$ is $C^r$ in $y$, then its jet $J_r(t,y)=(\Phi,D_y\Phi,\ldots,D_y^r\Phi)(t,y)$ is a continuous solution of the system from step 2.1 on the same compact interval $I$, with initial data $X_0(t_0)=y$, $X_1(t_0)=I_n$, and $X_m(t_0)=0$ for $m\ge2$. The highest-jet component is linear in $X_r$ once the lower jets are fixed, so [L2] supplies its unique evolution on $I$. Applying [L1] to this enlarged smooth system shows that $J_r$ depends $C^1$ on the initial value $y$. In particular its first component $\Phi$ is $C^{r+1}$ in $y$. [L1, L2, step 2.1]

4.1 Step 1.1 is the base case $r=1$. Step 3.1 upgrades $C^r$ regularity of $\Phi$ to $C^{r+1}$ for every $r\ge1$, so by induction $\Phi$ is $C^m$ in $y$ for every $m$. Therefore $\Phi$ is smooth in the initial-state variable. [step 1.1, step 3.1]

5.1 Hence the solution map depends smoothly on initial data. [step 4.1] ∎
