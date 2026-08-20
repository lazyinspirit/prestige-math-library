---
id: thm-classical-weierstrass-series-converges-uniformly
kind: theorem
title: "The classical Weierstrass series converges uniformly to a continuous function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-classical-weierstrass-function,
       thm-weierstrass-m-test-for-function-series,
       thm-uniform-limit-continuous-real-functions, thm-geometric-series,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous,
       thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: true
short: "$W_{a,b}$ converges uniformly"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis, Theorem 9.22 and Example 9.24"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, Theorem 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Statement

Let $0<a<1$ and let $b>1$ be an odd integer, and let $W_{a,b}$ be the series of
[[def-classical-weierstrass-function]]. The series defining $W_{a,b}$ converges absolutely at every real point and uniformly on $\mathbb R$.

Its sum $W_{a,b}:\mathbb R\to\mathbb R$ is continuous. If

$$S_N(x):=\sum_{n=0}^{N}a^n\cos(b^n\pi x),$$

then the partial sums converge uniformly to $W_{a,b}$ on $\mathbb R$.

## Facts & Assumptions

**Given:** Parameters $0<a<1$ and an odd integer $b>1$, with summands $f_n(x):=a^n\cos(b^n\pi x)$ and partial sums $S_N$.

[L1] For every real $x$, $|\cos x|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] If $|r|<1$, then the series $\sum_{k=0}^{\infty}r^k$ converges ([[thm-geometric-series]]).

[L3] If $|f_k(x)|\le M_k$ for all $k$ and $x$, where the nonnegative scalar series $\sum M_k$ converges, then $\sum f_k(x)$ converges absolutely at every $x$ and the function series converges uniformly ([[thm-weierstrass-m-test-for-function-series]]).

[L4] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$ ([[thm-sine-and-cosine-derivatives]]).

[L5] A differentiable real function is continuous at every point where it is differentiable ([[cor-differentiable-implies-continuous]]).

[L6] Sums and scalar multiples of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], claim 1).

[L7] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L8] A uniform limit of continuous real-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L9] Every polynomial function is continuous ([[thm-algebra-of-continuous-functions]], claim 5).

## Proof

**Proof technique:** direct.

1.1 For every $n\in\mathbb N$ and $x\in\mathbb R$, $|f_n(x)|=a^n|\cos(b^n\pi x)|\le a^n$. [given, L1, algebra]

1.2 Since $0<a<1$, the majorant series $\sum_{n=0}^{\infty}a^n$ converges, including its first term $a^0=1$. [given, L2]

1.3 Cosine is continuous by [L4] and [L5]; the map $x\mapsto b^n\pi x$ is a polynomial and hence continuous by [L9], so each $f_n$ is continuous by [L7], and every finite partial sum $S_N$ is continuous by [L6]. [L4, L5, L6, L7, L9]

2.1 Applying [L3] to steps 1.1 and 1.2 proves absolute convergence at every real point and uniform convergence of the partial sums to $W_{a,b}$ on $\mathbb R$. [step 1.1, step 1.2, L3]

3.1 The functions $S_N$ are continuous by step 1.3 and converge uniformly by step 2.1, so [L8] makes their sum $W_{a,b}$ continuous. [step 1.3, step 2.1, L8] ∎
