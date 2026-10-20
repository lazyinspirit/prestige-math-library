---
id: thm-smooth-bounded-below-gd-stationarity
kind: theorem
title: "Gradient descent has vanishing gradients when the objective is bounded below along its iterates"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - alg-gradient-descent
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - lem-l-smoothness-descent-inequality
  - thm-of-archimedean
  - thm-reals-cauchy-complete
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "MIT 6.7220/15.084 Nonlinear Optimization, Lecture 12: Gradient Descent and Descent Lemmas"
      url: "https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec12.pdf"
      locator: "Definition L12.1, Theorems L12.1, L12.3–L12.4; Lecture 12, §§L12.1–L12.2.2, PDF pp. 1–4"
    - title: "Saeed Ghadimi and Guanghui Lan, Stochastic First- and Zeroth-Order Methods for Nonconvex Stochastic Programming"
      url: "https://arxiv.org/pdf/1309.5549"
      locator: "§1 and §2.1, Assumption A1, randomized stochastic gradient method, Theorem 2.1(a), and proof equations (1.6), (2.2), (2.8)–(2.11); PDF pp. 1–7"
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§4.1, Assumption 4.1, equation (4.3), Lemma 4.2 and its proof; PDF pp. 21–24"
---

## Statement

Let $n\ge1$, let $F:\mathbb R^n\to\mathbb R$ be continuously Fréchet differentiable, and let $L>0$ satisfy
$$\|\nabla F(x)-\nabla F(y)\|_2\le L\|x-y\|_2\qquad(x,y\in\mathbb R^n).$$
Choose $w_0\in\mathbb R^n$, a fixed step $0<\alpha\le1/L$, and a real $\underline F$ such that the fixed-step gradient-descent sequence $w_{t+1}=w_t-\alpha\nabla F(w_t)$ satisfies $F(w_t)\ge\underline F$ for every $t\ge0$. Then, for every integer $T\ge1$, the following bounds hold:

- $\sum_{t=0}^{T-1}\|\nabla F(w_t)\|_2^2\le\frac{2}{\alpha}\bigl(F(w_0)-\underline F\bigr)$;
- $\min_{0\le t<T}\|\nabla F(w_t)\|_2^2\le\frac{2\bigl(F(w_0)-\underline F\bigr)}{\alpha T}$.

Moreover, $\|\nabla F(w_t)\|_2\to0$ as $t\to\infty$. The lower bound is required only along this sequence; the conclusion is stationarity, not convergence of the iterates or attainment of a local or global minimum.

## Statement references

[MIT 6.7220/15.084, Lecture 12: Gradient Descent and Descent Lemmas](https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec12.pdf)

[Ghadimi and Lan, Stochastic First- and Zeroth-Order Methods for Nonconvex Stochastic Programming](https://arxiv.org/pdf/1309.5549)

[Bottou, Curtis, and Nocedal, Optimization Methods for Large-Scale Machine Learning](https://arxiv.org/pdf/1606.04838)

## Facts & Assumptions

**Given:** The $C^1$ objective $F$, its global $L$-Lipschitz gradient, $L>0$, the initial point $w_0$, the fixed step $0<\alpha\le1/L$, the recursively defined sequence, and the lower bound $\underline F$ along that sequence.

[F1] [[alg-gradient-descent]]: the fixed-step update map is $x\mapsto x-t_k\nabla f(x)$; at a stationary point its value is $x$.

[F2] [[def-total-derivative-in-euclidean-space]]: total differentiability at a point means a linear first-order approximation with a remainder bounded by $\varepsilon\|h\|_2$ for every $\varepsilon>0$ and all sufficiently small admissible increments; here $C^1$ means this derivative exists everywhere and varies continuously.

[F3] [[lem-l-smoothness-descent-inequality]]: if $f:\mathbb R^n\to\mathbb R$ is continuously differentiable and its gradient is $L$-Lipschitz, then $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+\frac L2\|y-x\|_2^2$ for all $x,y\in\mathbb R^n$.

[F4] [[def-jacobian-matrix-and-gradient]]: for scalar-valued $F$, $\nabla F(x)$ is the vector of its coordinate partial derivatives.

[F5] [[def-euclidean-inner-product]]: $\langle u,v\rangle=\sum_{k<n}u_kv_k$ and $\|u\|_2^2=\langle u,u\rangle$ on $\mathbb R^n$.

[F6] [[thm-of-archimedean]]: in any complete ordered field $K$, for every $c\in K$ there is a canonical natural number $q\ge1$ with $c<q\cdot1_K$.

[F7] [[thm-reals-cauchy-complete]]: with its usual order and field structure, the canonical real field $\mathbb R$ is a complete totally ordered field, hence a complete ordered field to which [F6] applies.

## Proof

1.1 Fix $t\ge0$ and put $g_t=\nabla F(w_t)$. The coordinate gradient is as in [F4], and [F1] gives $w_{t+1}=w_t-\alpha g_t$. [given, F1, F4]

1.2 Apply [F3] at $x=w_t$, $y=w_{t+1}$; the continuously differentiable hypothesis is specified by [F2], and [F5] gives the Euclidean inner-product and norm identity. Thus $F(w_{t+1})\le F(w_t)-\alpha\|g_t\|_2^2+\frac{L\alpha^2}{2}\|g_t\|_2^2\le F(w_t)-\frac{\alpha}{2}\|g_t\|_2^2$, because $L\alpha\le1$. [given, F2, F3, F5, algebra]

2.1 Sum the inequality in step 1.2 for $t=0,\ldots,T-1$; consecutive objective terms cancel, so $\frac{\alpha}{2}\sum_{t=0}^{T-1}\|\nabla F(w_t)\|_2^2\le F(w_0)-F(w_T)\le F(w_0)-\underline F$. This proves the finite-sum bound for every $T\ge1$. [given, step 1.2, algebra]

3.1 If the gradient norms did not tend to zero, some $\varepsilon>0$ would satisfy $\|\nabla F(w_t)\|_2\ge\varepsilon$ at infinitely many indices. The bound $2(F(w_0)-\underline F)/(\alpha\varepsilon^2)$ is real; by [F7], $\mathbb R$ is a complete ordered field, so [F6] supplies a canonical natural $q$ larger than it. The infinite set of such indices contains $q$ distinct indices; take $T$ larger than all of them. Step 2.1 then gives $q\varepsilon^2\le2(F(w_0)-\underline F)/\alpha$, a contradiction. Thus $\|\nabla F(w_t)\|_2\to0$; the finite selection of indices uses no choice axiom. [given, F6, F7, step 2.1, assume-hyp, choose, algebra]

4.1 For each $T\ge1$, $T\min_{0\le t<T}\|\nabla F(w_t)\|_2^2\le\sum_{t=0}^{T-1}\|\nabla F(w_t)\|_2^2$. Step 2.1 therefore gives the stated finite-horizon minimum-gradient bound. [step 2.1, algebra] ∎
