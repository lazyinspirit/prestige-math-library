---
id: def-linear-multistep-method-consistency-order-and-root-condition
kind: definition
title: "Linear multistep methods, consistency, order, and the root condition"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §§III.6–III.8"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §§6.6 and 6.8"
      url: "https://fncbook.com/multistep/"
dependency_level: 0
---

## Definition

Let $k\ge1$, $d\ge1$, and let $f:U\to\mathbb R^d$ be the right-hand side of a first-order initial-value problem on an open set $U\subseteq\mathbb R\times\mathbb R^d$, using the convention of [[def-first-order-ode-initial-value-problem-and-solution]]. A **constant-step $k$-step linear multistep method** has real coefficients $\alpha_0,\ldots,\alpha_k,\beta_0,\ldots,\beta_k$ with $\alpha_k\ne0$ and advances values by

$$\sum_{j=0}^k\alpha_jY_{n+j}=h\sum_{j=0}^k\beta_j f(t_{n+j},Y_{n+j}),\qquad t_{n+j}=t_n+jh,\quad h>0.$$

Multiplying all coefficients by the same nonzero scalar leaves the method unchanged; one may normalize $\alpha_k=1$. Its **characteristic polynomials** are

$$\rho(\zeta)=\sum_{j=0}^k\alpha_j\zeta^j,\qquad \sigma(\zeta)=\sum_{j=0}^k\beta_j\zeta^j.$$

For an exact solution $y$, the **unscaled local residual** at $t_n$ is

$$\tau_n(h;y)=\sum_{j=0}^k\alpha_jy(t_n+jh)-h\sum_{j=0}^k\beta_jy'(t_n+jh).$$

The method has **order at least $p$**, where $p\ge1$ is an integer, if, for every open $U\subseteq\mathbb R\times\mathbb R^d$, every right-hand side $f:U\to\mathbb R^d$ as above, and every exact solution $y$ of that IVP with $p+1$ continuous derivatives, $\tau_n(h;y)=O(h^{p+1})$ uniformly for admitted starting times in every fixed compact interval on which the indicated derivatives are bounded. It is **consistent** if it has order at least one. Equivalently, with the above coefficient convention, consistency is $\rho(1)=0$ and $\rho'(1)=\sigma(1)$.

The **root condition** is that every complex root of $\rho$ has modulus at most one and every root of modulus one has algebraic multiplicity one. The method is **zero-stable** if for each $T>0$ there is a constant $M_T$ independent of $N$ such that every solution of the homogeneous recurrence $\sum_j\alpha_jY_{n+j}=0$ on the uniform grid $h=T/N$ satisfies

$$\max_{0\le n\le N}\|Y_n\|_\infty\le M_T\max_{0\le j<k}\|Y_j\|_\infty.$$

Here $\|x\|_\infty=\max_{0\le i<d}|x_i|$ for $x\in\mathbb R^d$. The root-condition equivalence for zero-stability is established separately.
