---
id: thm-discrete-memoryless-channel-alphabet-scoped-strong-converse
kind: theorem
title: "Strong converse for finite-alphabet DMCs"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-discrete-memoryless-channel-information-capacity, lem-discrete-memoryless-channel-capacity-is-attained, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, lem-discrete-memoryless-channel-information-density-concentration]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses finite decoding regions and finite probability sums."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "MIT 6.441 Information Theory, Lecture 8, maximizing capacity"
      url: "https://web.mit.edu/6.441/spring05/lectures/6441Lecture8.pdf"
---

## Statement

Let $W$ be a finite DMC with finite nonempty input and output alphabets and no input-cost constraint. For any sequence of length-$n$ codes with $\liminf_{n\to\infty}n^{-1}\ln M_n>C(W)$, the average success probability tends to zero; hence both average and maximal error tend to one.

## Facts & Assumptions

**Given:** A finite DMC $W$ and a sequence of deterministic length-$n$ codes with $M_n$ messages.

[F1] [[lem-discrete-memoryless-channel-capacity-is-attained]] and [[lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound]]: a maximizing input law $P_X^*$ exists, and for $Q^*:=P_X^*W$ every row is supported on $Q^*$ with $D(W(\cdot\mid x)\|Q^*)\le C(W)$.

[F2] [[lem-discrete-memoryless-channel-information-density-concentration]]: for every fixed $\eta>0$, uniformly over input words $x^n$, the probability under $W^n(\cdot\mid x^n)$ that $\ln(W^n(Y^n\mid x^n)/(Q^*)^n(Y^n))>n(C(W)+\eta)$ is at most $V/(n\eta^2)$.

[F3] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: the decoder regions $D_m:=\{y^n:d(y^n)=m\}$ are pairwise disjoint, and average success is $M_n^{-1}\sum_m W^n(D_m\mid e(m))$.

## Proof

1.1 By [F1] choose a maximizing input law $P_X^*$ and set $Q^*:=P_X^*W$. Fix a blocklength $n$, a codeword $x_m^n=e(m)$, and a threshold $\tau$. Split $D_m$ within the support of $W^n(\cdot\mid x_m^n)$ into outputs where $\ln(W^n(y^n\mid x_m^n)/(Q^*)^n(y^n))>\tau$ and the supported complement. The first part has channel probability at most the threshold-tail probability in [F2]. On the supported complement, $W^n(y^n\mid x_m^n)\le e^\tau(Q^*)^n(y^n)$ by the likelihood ratio; outside the support, $W^n(y^n\mid x_m^n)=0$, so the same inequality holds there. Hence the remaining channel probability is at most $e^\tau(Q^*)^n(D_m)$. [F1, F2, F3, given, algebra]

2.1 Average the bound in step 1.1 over messages. The tail term is at most $V/(n\eta^2)$ uniformly by [F2]. Pairwise disjointness from [F3] gives $\sum_m(Q^*)^n(D_m)\le1$, so average success is at most $V/(n\eta^2)+e^\tau/M_n$. [F2, F3, step 1.1, algebra]

3.1 Choose $\eta>0$ such that eventually $n^{-1}\ln M_n\ge C(W)+2\eta$, which is possible by the strict liminf hypothesis. Set $\tau=n(C(W)+\eta)$. Then $e^\tau/M_n\le e^{-n\eta}$, and step 2.1 bounds success by $V/(n\eta^2)+e^{-n\eta}\to0$. Thus average error tends to one. Since maximal error is at least average error, it too tends to one. [F3, step 2.1, given, choose, algebra] ∎
