---
id: ex-finite-sequences-c00-with-standard-norms
kind: example
title: "The finitely supported sequences form an incomplete normed space with different standard completions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-c0-is-a-banach-space,
       cor-normed-space-completions-are-uniquely-linearly-isometric,
       rem-lp-spaces-are-banach-spaces]
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

Let
$$c_{00}:=\{x=(x_n)_{n\ge 0}: x_n=0 \text{ for all but finitely many } n\}.$$
Then $c_{00}$ is an incomplete normed space for the supremum norm, its
completion for that norm is $c_0$, and for each $1\le p<\infty$ its completion
for the $\ell^p$ norm is $\ell^p$.

## Facts & Assumptions

**Given:** The finitely supported sequence space $c_{00}$ and, for a sequence $x=(x_n)$, its truncations $x^{(N)}:=(x_0,\dots,x_N,0,0,\dots)$.

[L1] The space $c_0$ is Banach for the supremum norm ([[ex-c0-is-a-banach-space]]).

[L2] Any two completions of a normed space are uniquely linearly isometric ([[cor-normed-space-completions-are-uniquely-linearly-isometric]]).

[L3] The classical $L^p$ and hence $\ell^p$ spaces are Banach ([[rem-lp-spaces-are-banach-spaces]]).

## Verification

**Proof technique:** direct.

1.1 If $x\in c_0$, then $x^{(N)}\in c_{00}$ and $\|x-x^{(N)}\|_\infty=\sup_{n>N}|x_n|\to 0$. So $c_{00}$ is dense in $c_0$ for the supremum norm. [L1]

1.2 For $1\le p<\infty$ and $x\in \ell^p$, the truncations satisfy $\|x-x^{(N)}\|_p^p=\sum_{n>N}|x_n|^p\to 0$, so $c_{00}$ is dense in $\ell^p$ for the $\ell^p$ norm. [L3]

2.1 The sequence $u=(1,1/2,1/3,\dots)$ lies in $c_0$ but not in $c_{00}$, while its truncations $u^{(N)}\in c_{00}$ converge to $u$ in the supremum norm by step 1.1. Hence $c_{00}$ is not complete for that norm, and since $c_0$ is Banach by [L1], [L2] identifies the supremum-norm completion of $c_{00}$ with $c_0$. [step 1.1, L1, L2]

3.1 Because $\ell^p$ is Banach by [L3], the uniqueness statement [L2] identifies the $\ell^p$-completion of $c_{00}$ with $\ell^p$. [step 1.2, L2, L3] ∎
