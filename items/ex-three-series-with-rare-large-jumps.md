---
id: ex-three-series-with-rare-large-jumps
title: "The three series impose separate conditions"
kind: example
status: published
origin: pipeline
deps: ["thm-kolmogorov-three-series-theorem", "cor-second-borel-cantelli-lemma-under-pairwise-independence", "thm-p-series-real-exponents", "cor-coordinate-random-elements-on-a-countable-product-are-independent", "thm-countable-product-of-probability-spaces"]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Theorem 3.12, pp. 66\u201368, direct specializations"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
    - title: "Example 2.5.7, p. 85, variance obstruction"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Compute all three numerical series for each case, including the cutoff endpoint. BC2 or three-series gives failure of convergence. These are direct diagnostic instances of the exact theorem."
---

## Example

Assume countable choice and dependent choice. At cutoff $A=1$, each of the following independent-sequence constructions violates exactly one of the three-series conditions:

1. For $n\ge2$, let $X_n=2$ with probability $1/n$ and $X_n=0$ otherwise; set $X_1=0$. Only the large-jump probability series diverges.
2. Let $X_n=1/n$ deterministically. Only the truncated mean series diverges.
3. Let $X_n=\epsilon_n/\sqrt n$ for independent fair signs. Only the truncated variance series diverges.

None of these series converges almost surely.

## Facts & Assumptions

[F1] [[thm-kolmogorov-three-series-theorem]]: Let $(X_n)_{n\ge1}$ be independent real random variables and fix $A>0$. Put $Y_n=X_n\mathbf1_{\{|X_n|\le A\}}$. Then $\sum_nX_n$ converges almost surely if and only if all three conditions hold: $\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\mathbb EY_n\text{ converges in }\mathbb R,\qquad \sum_n\operatorname{Var}(Y_n)<\infty.$ The conditions hold for some $A>0$ if and only if they hold for every $A>0$. No moment assumption is imposed on the untruncated variables.

[F2] [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]: Let $(A_n)_{n\in\mathbb N}$ be pairwise independent events with $\sum_{n=0}^\infty \mathbb P(A_n)=+\infty.$ Then $\mathbb P(A_n\ \mathrm{i.o.})=1.$

[F3] [[thm-p-series-real-exponents]]: For every real $p$, $\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$

[F4] [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]: Under the measure of thm-countable-product-of-probability-spaces, the coordinate maps $X_n(x)=x_n$ have laws $\mu_n$ and are independent.

[F5] [[thm-countable-product-of-probability-spaces]]: Assume countable choice and dependent choice. For probability spaces $(E_n,\mathcal E_n,\mu_n)_{n\in\mathbb N}$ there is a unique probability measure $\mu$ on $\mathcal C_{\mathbb N}$ such that, for every finite $F$, its $F$-coordinate marginal is $\bigotimes_{n\in F}\mu_n$.

## Verification

**Given:** The construction and assumptions above.

1.1 Under countable choice and dependent choice, the countable product of the stated finite probability spaces constructs the first and third independent sequences; deterministic coordinates construct the second. In the first construction the zero truncations at $1$ are all zero, so their mean and variance series vanish, but $\sum_{n\ge2}\mathbb P(|X_n|>1)=\sum_{n\ge2}1/n=\infty$. The second Borel–Cantelli lemma gives infinitely many terms equal to $2$ almost surely; hence the terms fail to tend to zero. [F5, F4, F3, F2, given]

1.2 For the second construction, every term is retained at $A=1$, its variance is zero, and there are no large jumps. Its truncated mean series is $\sum_n1/n=\infty$. Thus exactly the mean condition fails and its deterministic partial sums diverge. [F3, given, algebra]

2.1 For the third construction every term, including $n=1$, is retained, there are no large jumps, and the means vanish. Its variance series is $\sum_n1/n=\infty$. The three-series theorem rules out almost-sure convergence. Each construction therefore isolates exactly the claimed failed condition. [F3, F1, given, algebra] ∎
