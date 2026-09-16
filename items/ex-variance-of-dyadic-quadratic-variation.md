---
id: ex-variance-of-dyadic-quadratic-variation
kind: example
title: "Variance of dyadic quadratic variation"
status: draft
origin: pipeline
deps: [ex-expected-dyadic-quadratic-variation, def-brownian-motion, lem-gaussian-even-moment-bound-for-brownian-increments, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Theorem 2.8.1"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

With the notation of [[ex-expected-dyadic-quadratic-variation]], the dyadic
quadratic sum $Q_n=\sum_{k=1}^{2^n}(B_{kh}-B_{(k-1)h})^2$ over $[0,T]$ has
$$\operatorname{Var}(Q_n)=\frac{2T^2}{2^n},$$
so $Q_n\to T$ in $L^2$ as $n\to\infty$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, $T>0$, $n\ge1$ with $h=T/2^n$ and $\Delta_k=B_{kh}-B_{(k-1)h}$.

[F1] The increments over disjoint intervals are independent with laws $N(0,h)$, and $E(\Delta B)^2=h$, $E(\Delta B)^4=3h^2$ for an increment of length $h$. [[def-brownian-motion]] [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F2] The mean of the dyadic sum is $EQ_n=T$. [[ex-expected-dyadic-quadratic-variation]]

[F3] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 For each $k$, [F1] gives $\operatorname{Var}(\Delta_k^2)=E\Delta_k^4-(E\Delta_k^2)^2=3h^2-h^2=2h^2$. [given, F1]

2.1 The variables $\Delta_k^2$ are functions of increments over disjoint intervals, hence independent by [F1], so the variance of the sum is the sum of the variances: $\operatorname{Var}(Q_n)=\sum_{k=1}^{2^n}2h^2=2^n\cdot2(T/2^n)^2=2T^2/2^n$. [step 1.1, F1]

3.1 Since $EQ_n=T$ by [F2], $E(Q_n-T)^2=\operatorname{Var}(Q_n)=2T^2/2^n\to0$, which is the $L^2$ convergence $Q_n\to T$. [step 2.1, F2]

4.1 The cases are covered: the independence of the squared increments is the only place where the joint law is used; the value $n=1$ is included and gives $\operatorname{Var}(Q_1)=T^2$; the limit is taken as $n\to\infty$ with $T$ fixed and positive; and AC enters only through [F3]. [step 2.1, F3, given] ∎

## Source notes

Lawler, Theorem 2.8.1, obtains the variance of the quadratic sums from the fourth Gaussian moment and the independence of the increments, giving the mean-square convergence used in the dyadic quadratic-variation theorem.
