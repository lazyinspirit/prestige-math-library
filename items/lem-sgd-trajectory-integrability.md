---
id: lem-sgd-trajectory-integrability
kind: lemma
title: "Finite-horizon SGD trajectories have integrable objectives"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - lem-l-smoothness-descent-inequality
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, §4.1"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§4.1, Assumption 4.1 and Lemma 4.2 integrability context, PDF pp. 21–24"
    - title: "MIT 6.7220/15.084 Nonlinear Optimization, Lecture 15: Stochastic Gradient Descent"
      url: "https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf"
      locator: "Theorem L15.1 and its conditional smoothness-descent derivation, PDF pp. 3–4"

---

## Statement

Let $d\ge1$, let $(\Omega,\mathcal F,P)$ be a probability space, and let $f:\mathbb R^d\to\mathbb R$ be continuously differentiable with an $L$-Lipschitz gradient for some finite $L\ge0$. Fix an integer $N\ge1$, measurable maps $x_0,G_0,\ldots,G_{N-1}:\Omega\to\mathbb R^d$, and finite real stepsizes $\alpha_0,\ldots,\alpha_{N-1}$. Suppose $\mathbb E\|x_0\|_2^2<\infty$ and $\mathbb E\|G_k\|_2^2<\infty$ for every $k<N$, and define $x_{k+1}=x_k-\alpha_kG_k$. Then every $x_k$ and $\nabla f(x_k)$ for $0\le k\le N$ has finite second moment, and every $f(x_k)$ has finite absolute expectation.

## Facts & Assumptions

**Given:** The probability space, measurable finite-dimensional vector maps, continuously differentiable $f$, finite-horizon update and finite second-moment assumptions in the Statement.

[F1] [[lem-l-smoothness-descent-inequality]]: if $\nabla f$ is $L$-Lipschitz, then $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$ for all $x,y\in\mathbb R^d$.

[F2] [[def-euclidean-inner-product]]: $\|x\|_2^2=\langle x,x\rangle$ on $\mathbb R^d$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ and $\|u+v\|_2\le\|u\|_2+\|v\|_2$.

[F4] [[thm-induction-principle]]: a property true at the first index and inherited by each successor holds at every natural index.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectations of nonnegative measurable functions are their extended integrals; an integrable real random variable has finite absolute integral.

## Proof

1.1 By [F3] and $2ab\le a^2+b^2$, $\|u+v\|_2^2\le2\|u\|_2^2+2\|v\|_2^2$. Thus $\mathbb E\|x_{k+1}\|_2^2\le2\mathbb E\|x_k\|_2^2+2\alpha_k^2\mathbb E\|G_k\|_2^2$ for every $k<N$. The right side is finite whenever $x_k$ has finite second moment, using the expectation convention [F5]. [F2, F3, F5, given, algebra]

2.1 The initial second moment is finite by the Statement, and step 1.1 carries finiteness from $x_k$ to $x_{k+1}$. Finite induction using [F4] therefore gives $\mathbb E\|x_k\|_2^2<\infty$ for all $k\le N$. [F4, F5, step 1.1, given, induction]

3.1 The Lipschitz-gradient condition [F1] and [F3] give $\|\nabla f(x_k)\|_2\le\|\nabla f(0)\|_2+L\|x_k\|_2$, so $\|\nabla f(x_k)\|_2^2\le2\|\nabla f(0)\|_2^2+2L^2\|x_k\|_2^2$. Step 2.1 makes the right side integrable; hence every stated gradient has finite second moment. [F1, F3, F5, step 2.1, given, algebra]

4.1 Apply [F1] to $(0,x_k)$ and $(x_k,0)$. The upper bound gives $f(x_k)\le f(0)+\|\nabla f(0)\|_2\|x_k\|_2+(L/2)\|x_k\|_2^2$. The lower bound and the Lipschitz-gradient condition give $f(x_k)\ge f(0)-\|\nabla f(0)\|_2\|x_k\|_2-(3L/2)\|x_k\|_2^2$. Thus [F3] and $2ab\le a^2+b^2$ imply $|f(x_k)|\le |f(0)|+\frac12\|\nabla f(0)\|_2^2+\left(\frac12+\frac{3L}{2}\right)\|x_k\|_2^2$. The right side has finite expectation by step 2.1, so $\mathbb E|f(x_k)|<\infty$ for every $k\le N$. [F1, F3, F5, step 2.1, given, algebra] ∎

