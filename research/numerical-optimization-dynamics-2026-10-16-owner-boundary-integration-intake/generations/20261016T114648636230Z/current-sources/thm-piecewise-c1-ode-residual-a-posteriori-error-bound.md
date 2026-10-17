---
id: thm-piecewise-c1-ode-residual-a-posteriori-error-bound
kind: theorem
title: "Choice-free residual error bound for piecewise-C1 ODE reconstructions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-algebra-of-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-ftc-first-part
  - thm-derivative-of-an-inverse
  - thm-of-square-roots
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Donald Estep, A Posteriori Error Bounds and Global Error Control for Approximation of Ordinary Differential Equations, SIAM Journal on Numerical Analysis 32 (1995)"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0732001"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Statement

Let $d\ge1$ and $a<T$, let $D\subseteq\mathbb R\times\mathbb R^d$ be open, let $f:D\to\mathbb R^d$ be continuous, and let $y$ be an exact solution of $y'=f(t,y)$ on $[a,T]$. Let $U:[a,T]\to\mathbb R^d$ be continuous and $C^1$ on each member of a finite partition (continuously differentiable on each closed panel, with one-sided endpoint derivatives), with graph in $D$. Let $\ell,\rho:[a,T]\to[0,\infty)$ be continuous on each partition interval, with one-sided endpoint values, and suppose on every open panel
$$\langle U-y,f(t,U)-f(t,y)\rangle\le\ell(t)\|U-y\|_2^2,\qquad \|U'(t)-f(t,U(t))\|_2\le\rho(t).$$
Then for every $t\in[a,T]$,
$$\|U(t)-y(t)\|_2\le e^{\int_a^t\ell(v)\,dv}\|U(a)-y(a)\|_2+\int_a^t e^{\int_s^t\ell(v)\,dv}\rho(s)\,ds.$$
The proof uses only finite-piece ordinary calculus and no choice axiom. The general absolutely continuous case is treated separately.

## Facts & Assumptions

**Given:** The exact solution, reconstruction, finite partition, nonnegative piecewise-continuous coefficient and residual envelope in the Statement.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact solution is differentiable and satisfies $y'=f(t,y)$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean inner product satisfies Cauchy–Schwarz and its norm is nonnegative.

[F3] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: the chain and product rules apply to differentiable functions.

[F4] [[thm-derivative-of-exponential]]: $e^x$ is positive and has derivative $e^x$.

[F5] [[thm-ftc-first-part]]: a continuous function has an antiderivative given by its integral, and the integral of its derivative recovers endpoint increments.

[F6] [[thm-of-square-roots]], [[thm-algebra-of-derivatives]], and [[thm-derivative-of-an-inverse]]: the positive square root on $(0,\infty)$ is the inverse of $x\mapsto x^2$ on $(0,\infty)$ and has derivative $1/(2\sqrt{x})$ there.

[F7] [[def-euclidean-inner-product]]: the Euclidean inner product is symmetric and bilinear, and $\|e\|_2^2=\langle e,e\rangle$.

## Proof

1.1 On one open partition panel put $e=U-y$, $q_\varepsilon=(\|e\|_2^2+\varepsilon^2)^{1/2}$ for $\varepsilon>0$, and $r=U'-f(t,U)$. The functions are $C^1$ there, so [F3], [F6], and [F7] give $q_\varepsilon'=\langle e,e'\rangle/q_\varepsilon$. Since $e'=r+f(t,U)-f(t,y)$, the hypotheses and [F2] yield $q_\varepsilon'\le\ell\frac{\|e\|_2^2}{q_\varepsilon}+\rho\frac{\|e\|_2}{q_\varepsilon}\le\ell q_\varepsilon+\rho$, using $\ell\ge0$, $\|e\|_2\le q_\varepsilon$, and $\|e\|_2^2\le q_\varepsilon^2$. [given, F1, F2, F3, F6, F7, algebra]

2.1 Let $\Lambda(t)=\int_a^t\ell(v)\,dv$ and multiply the differential inequality by $e^{-\Lambda(t)}$. On each panel, [F3]–[F5] give $(e^{-\Lambda}q_\varepsilon)'\le e^{-\Lambda}\rho$. Integrate on each full or partial panel and add the finitely many inequalities; continuity at the partition nodes cancels the intermediate endpoint terms. This gives $q_\varepsilon(t)\le e^{\Lambda(t)}q_\varepsilon(a)+\int_a^t e^{\Lambda(t)-\Lambda(s)}\rho(s)\,ds$. [F3, F4, F5, step 1.1, algebra]

3.1 Let $\varepsilon\downarrow0$. Since $q_\varepsilon(t)\to\|U(t)-y(t)\|_2$ and $q_\varepsilon(a)\to\|U(a)-y(a)\|_2$, while the integral term is independent of $\varepsilon$, the inequality in step 2.1 passes to the limit. Replacing $\Lambda(t)-\Lambda(s)$ by $\int_s^t\ell(v)\,dv$ gives the claimed estimate. [step 2.1, algebra] ∎
