---
id: ex-cb-of-a-space-is-banach
kind: example
title: "$C_b(X)$ is Banach for the supremum norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, thm-uniform-limit-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Example

Let $X$ be a nonempty topological space, and let $C_b(X)$ be the space of bounded
continuous scalar-valued functions on $X$ with norm
$$\|f\|_\infty:=\sup_{x\in X}|f(x)|.$$
Then $C_b(X)$ is a Banach space.

## Facts & Assumptions

**Given:** A nonempty topological space $X$ and a Cauchy sequence $(f_m)$ in $C_b(X)$ for the supremum norm.

[L1] Uniform limits of continuous functions are continuous ([[thm-uniform-limit-theorem]]).

[L2] A Banach space is a normed space complete for its norm metric ([[def-banach-space]]).

## Verification

**Proof technique:** direct.

1.1 For each $x\in X$, the scalar sequence $(f_m(x))_m$ is Cauchy because $|f_m(x)-f_\ell(x)|\le \|f_m-f_\ell\|_\infty$. Define $f(x):=\lim_m f_m(x)$. [given, construct]

2.1 Choose $M$ with $\|f_m-f_\ell\|_\infty<1$ for $m,\ell\ge M$. Fixing $\ell=M$ and letting $m\to\infty$ pointwise gives $|f(x)|\le \|f_M\|_\infty+1$ for every $x$, so $f$ is bounded. [step 1.1, given]

2.2 Given $\varepsilon>0$, choose $M$ with $\|f_m-f_\ell\|_\infty<\varepsilon$ for $m,\ell\ge M$. Letting $\ell\to\infty$ pointwise yields $\|f_m-f\|_\infty\le \varepsilon$ for $m\ge M$. Thus $f_m\to f$ uniformly, and [L1] makes $f$ continuous. [step 1.1, given, L1]

3.1 So every supremum-norm Cauchy sequence in $C_b(X)$ converges in $C_b(X)$, and [L2] shows that $C_b(X)$ is Banach. [step 2.1, step 2.2, L2] ∎
