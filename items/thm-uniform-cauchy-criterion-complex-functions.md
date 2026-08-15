---
id: thm-uniform-cauchy-criterion-complex-functions
kind: theorem
title: "A sequence of complex-valued functions converges uniformly if and only if it is uniformly Cauchy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-convergence-of-complex-valued-functions, thm-complex-plane-is-complete, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and $f_n:X\to\mathbb C$. Then $(f_n)$ converges uniformly on $X$ if and only if it is uniformly Cauchy ([[def-uniform-convergence-of-complex-valued-functions]]). This includes $X=\varnothing$.

## Facts & Assumptions

**Given:** A set $X$ and functions $f_n:X\to\mathbb C$.

[L1] The complex plane is complete ([[thm-complex-plane-is-complete]]).

[L2] For complex numbers, $|z+w|\le |z|+|w|$ and $|z|=0$ if and only if $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $f_n\to f$ uniformly, then for $\varepsilon>0$ choose $N$ with $|f_n(x)-f(x)|<\varepsilon/2$ for every $n\ge N$ and $x\in X$; for $m,n\ge N$, [L2] gives $|f_m(x)-f_n(x)|<\varepsilon$, so $(f_n)$ is uniformly Cauchy. [L2]

1.2 Conversely, suppose $(f_n)$ is uniformly Cauchy. For each $x\in X$, the sequence $(f_n(x))$ is Cauchy and hence has a limit $f(x)\in\mathbb C$ by [L1]; this defines $f:X\to\mathbb C$, including the unique empty function when $X=\varnothing$. [L1, choose]

2.1 Given $\varepsilon>0$, choose $N$ such that $|f_m(x)-f_n(x)|<\varepsilon/2$ for all $m,n\ge N$ and $x\in X$. Fixing $n\ge N$ and passing $m\to\infty$ in the continuous modulus gives $|f(x)-f_n(x)|\le\varepsilon/2<\varepsilon$ for every $x$, so $f_n\to f$ uniformly. [step 1.2, L2] ∎
