---
id: cor-multivariable-taylor-formula-with-peano-remainder
kind: corollary
title: "Multivariable Taylor formula with $o(\\|h\\|^k)$ remainder"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ck-and-multi-index-notation-in-several-variables, def-multivariable-taylor-polynomial, thm-multivariable-taylor-formula-with-lagrange-remainder]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "MAT237 notes: Taylor's theorem in several variables"
      url: "https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html"
pipeline_run: null
---

## Statement

Let $k\in\mathbb N$ with $k\ge1$, let $V\subseteq\mathbb R^m$ be open and convex, let $a\in V$, and let $f\in C^k(V)$. Then, as $h\to0$ with $a+h\in V$,

$$f(a+h)=T_kf(a;h)+o(\|h\|^k).$$

## Facts & Assumptions

**Given:** The hypotheses of the statement and small $h$ with $a+h\in V$.

[L1] By [[thm-multivariable-taylor-formula-with-lagrange-remainder]], applying the multivariable Lagrange formula with degree $k-1$ gives some $\theta_h\in(0,1)$ such that

$$f(a+h)=T_{k-1}f(a;h)+\sum_{|\alpha|=k}\frac{D^\alpha f(a+\theta_hh)}{\iota(\alpha!)}h^\alpha$$


[L2] For every $|\alpha|=k$, $D^\alpha f$ is continuous at $a$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 Subtract the degree-$k$ Taylor polynomial from the equality of [L1]. The remainder is the following. [L1, algebra]

$$\sum_{|\alpha|=k}\frac{D^\alpha f(a+\theta_hh)-D^\alpha f(a)}{\iota(\alpha!)}h^\alpha.$$

2.1 For $h\ne0$, divide the absolute value in step 1.1 by $\|h\|^k$. Since $|h^\alpha|\le\|h\|^k$, it is bounded by the finite sum of the coefficient differences divided by $\iota(\alpha!)$. As $h\to0$, also $a+\theta_hh\to a$, so every term tends to zero by [L2]. [step 1.1, L2, algebra]

3.1 This proves that the remainder in step 1.1 is $o(\|h\|^k)$, and the subtracted polynomial is $T_kf(a;h)$ by [[def-multivariable-taylor-polynomial]]. [step 2.1] ∎
