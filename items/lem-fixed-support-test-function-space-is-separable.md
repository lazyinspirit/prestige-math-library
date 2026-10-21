---
id: lem-fixed-support-test-function-space-is-separable
kind: lemma
title: "A fixed-support smooth test-function space is separable"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-fixed-support-test-function-frechet-space
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - lem-taylor-lagrange-remainder-from-mean-value
  - cor-weierstrass-approximation-on-a-closed-interval
  - lem-fundamental-theorem-and-integration-by-parts
  - cor-archimedean-reciprocal
  - thm-of-archimedean
  - lem-extreme-value-theorem-from-compactness
  - lem-derivative-algebra-and-chain-rules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, fixed-support test-function topology"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
---

## Statement

Let $I=[a,b]$ with $a<b$. Let $D_I$ be the real-valued smooth functions $\varphi:\mathbb R\to\mathbb R$ that vanish outside $I$, with seminorms

$$p_M(\varphi)=\max_{0\le j\le M}\sup_{x\in I}|\varphi^{(j)}(x)|,\qquad M\in\mathbb N_0,$$

and metric

$$d(\varphi,\psi)=\sum_{M=0}^{\infty}2^{-M-1}\min(1,p_M(\varphi-\psi)).$$

Then $D_I$ is separable in this metric.

## Statement references

[Dyatlov, Lecture Notes for 18.155, fixed-support test-function spaces](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf)

## Facts & Assumptions

**Given:** A nondegenerate compact interval $I=[a,b]$.

[F1] The fixed-support test-function space has the derivative seminorms and metric displayed in the Statement ([[def-fixed-support-test-function-frechet-space]]).

[F2] The function $\theta(t)=q(t)/(q(t)+q(1-t))$, where $q(t)=e^{-1/t}$ for $t>0$ and $q(t)=0$ for $t\le0$, is smooth, equals zero on $t\le0$, and equals one on $t\ge1$; its flatness at the endpoints follows from the explicit construction ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]], proof step 2.1).

[F3] Every continuous real function on $I$ is uniformly approximated by real polynomials ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[F4] Taylor's formula with a Lagrange remainder bounds a smooth function whose first $N$ endpoint derivatives vanish by a constant times the $N$th power of the distance to that endpoint ([[lem-taylor-lagrange-remainder-from-mean-value]]).

[F5] For a continuously differentiable real function on an interval, the integral of its derivative equals the endpoint difference ([[lem-fundamental-theorem-and-integration-by-parts]]).

[F6] For every $\varepsilon>0$ there is an integer $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[F7] A continuous real function on a compact interval is bounded ([[lem-extreme-value-theorem-from-compactness]]); the chain and product rules hold ([[lem-derivative-algebra-and-chain-rules]]).

[F8] The natural numbers are unbounded in $\mathbb R$, so integers $n$ above the fixed cutoff can tend to infinity ([[thm-of-archimedean]]).

## Proof

1.1 For each integer $n>2/(b-a)$ define $\chi_n(x)=\theta(n(x-a))\theta(n(b-x))$; such integers exist by [F6], and can tend to infinity by [F8]. By [F2], $\chi_n$ is smooth, vanishes off $I$, and equals one on $[a+1/n,b-1/n]$. Every derivative of $\theta$ is continuous and vanishes outside $[0,1]$ in positive order, so [F7] bounds it on $[0,1]$; repeated chain and product rules [F7] bound $\chi_n^{(j)}$ by a constant times $n^j$. For every $\varphi\in D_I$, all derivatives of its zero extension vanish at $a$ and $b$. Fix $M$. Taylor's formula [F4] gives, for every $N\ge1$ and each $0\le r\le M$, bounds $|\varphi^{(r)}(x)|\le C_{r,N}|x-a|^N$ near $a$ and $|\varphi^{(r)}(x)|\le C'_{r,N}|b-x|^N$ near $b$. Applying the product rule on the two boundary strips, and taking $N>M$, shows $p_M(\varphi-\chi_n\varphi)\to0$. [given, F1, F2, F4, F6, F7, F8, algebra]

1.2 Fix $n$ and $M$. By [F3], choose a real polynomial $p$ uniformly approximating $\varphi^{(M)}$ on $I$, and integrate it $M$ times while matching the values $\varphi^{(j)}(a)$ for $0\le j<M$ to obtain a polynomial $q_0$. Put $e=\varphi-q_0$. Then $e^{(M)}=\varphi^{(M)}-p$ and $e^{(j)}(a)=0$ for $j<M$. Repeated application of [F5], inducting downward from $j=M-1$, gives $$\sup_I|e^{(j)}|\le (b-a)^{M-j}\sup_I|e^{(M)}|\qquad(0\le j<M);$$ for $j=M$ the error is just $\sup_I|e^{(M)}|$. Thus sufficiently accurate approximation at order $M$ makes every derivative through order $M$ uniformly close. Approximating the finitely many coefficients of $q_0$ by rational numbers gives $q\in\mathbb Q[x]$ with the same approximation to any prescribed tolerance. Since the finitely many derivatives of $\chi_n$ are bounded on $I$, the product rule makes $p_M(\chi_n(q-\varphi))$ arbitrarily small. Thus $\chi_nq\in D_I$ approximates $\chi_n\varphi$ in $p_M$. [F2, F3, F5, algebra, choose]

2.1 The set $\{\chi_nq:n\in\mathbb N,\ n>2/(b-a),\ q\in\mathbb Q[x]\}$ is countable. Given a metric neighborhood of $\varphi\in D_I$, the summable metric weights reduce it to finitely many seminorms, bounded by $p_M$ for the largest index. Choose $n$ in step 1.1 so that $p_M(\varphi-\chi_n\varphi)$ is less than half the target tolerance, then choose $q$ in step 1.2 so that $p_M(\chi_n\varphi-\chi_nq)$ is less than the other half. The triangle inequality places $\chi_nq$ in the neighborhood. Hence this countable set is dense. [step 1.1, step 1.2, F1, choose] ∎
