---
id: cor-uniform-descent-angle-implies-gradient-vanishing
kind: corollary
title: "A uniform descent angle makes the Wolfe gradient norms vanish"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-zoutendijk-summability-for-wolfe-steps
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.2, consequences (3.16)–(3.18) of Theorem 3.2, printed pp. 39–40 / PDF pp. 57–58."
---

## Statement

Under the hypotheses of [[thm-zoutendijk-summability-for-wolfe-steps]], suppose
there is a constant $\delta>0$ such that $\cos\theta_k\ge\delta$ for every
$k$. Then $\|\nabla f(x_k)\|_2\to0$. This is convergence of gradient norms
to zero; it does not assert convergence of $(x_k)$ or that a limit point is a
minimizer.

## Facts & Assumptions

**Given:** The hypotheses and angle convention of
[[thm-zoutendijk-summability-for-wolfe-steps]], and $\delta>0$ with
$\cos\theta_k\ge\delta$ for all $k$.

[F1] [[thm-zoutendijk-summability-for-wolfe-steps]]: the nonnegative series $\sum_{k\ge0}\cos^2\theta_k\|\nabla f(x_k)\|_2^2$ is finite.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 Since $\cos^2\theta_k\ge\delta^2$, [F1] implies $\sum_{k\ge0}\|\nabla f(x_k)\|_2^2\le\delta^{-2}\sum_{k\ge0}\cos^2\theta_k\|\nabla f(x_k)\|_2^2<\infty$. [given, F1, algebra]

2.1 Fix any $\varepsilon>0$. There can be only finitely many $k$ with $\|\nabla f(x_k)\|_2\ge\varepsilon$, since $N$ such indices would contribute at least $N\varepsilon^2$ to the finite series in step 1.1, for every $N$. Thus the gradient norms are eventually below each positive $\varepsilon$, which is exactly $\|\nabla f(x_k)\|_2\to0$. [step 1.1, choose, algebra] ∎
