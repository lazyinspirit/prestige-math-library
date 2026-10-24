---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-cost-constrained-dmc-mutual-information-under-average-cost.json
  precheck: pass
id: lem-cost-constrained-dmc-mutual-information-under-average-cost
kind: lemma
title: An average-cost DMC block input has mutual information at most $n C_I(\Gamma)$
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-cost-constrained-dmc-code-and-capacity, def-discrete-memoryless-channel, def-discrete-memoryless-channel-information-capacity, def-finite-dmc-cost-model, def-finite-probability-vector, def-it-finite-conditional-entropy, def-it-finite-mutual-information, lem-cost-constrained-dmc-information-capacity-properties, lem-jensen-for-integrable-cost-random-variable, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; this is a finite-alphabet entropy argument.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $X^n=(X_1,\ldots,X_n)$ be any random input to a finite DMC $W$ and let the output follow the memoryless product channel. If $\frac1n\sum_{t=1}^n\mathbb E c(X_t)\le\Gamma$ for a feasible budget $\Gamma$, then
$$I(X^n;Y^n)\le n C_I(\Gamma),$$
where $C_I$ is defined in [[def-cost-constrained-dmc-code-and-capacity]].

## Facts & Assumptions

**Given:** A finite DMC with finite letter cost, a feasible budget, and a possibly dependent block input satisfying the stated expected average cost constraint.

[F1] [[thm-it-finite-entropy-chain-rule]]: finite joint entropy and mutual information satisfy the chain rules.

[F2] [[def-it-finite-mutual-information]] and [[def-it-finite-conditional-entropy]]: $I(X;Y)=H(Y)-H(Y\mid X)$ for finite variables.

[F3] [[def-finite-dmc-cost-model]], [[def-cost-constrained-dmc-code-and-capacity]], [[def-discrete-memoryless-channel-information-capacity]], and [[def-finite-probability-vector]]: $C_I(\gamma)=\sup_{P_X:\,\mathbb E c(X)\le\gamma}I(P_X;W)$ for every feasible $\gamma$.

[F4] [[lem-cost-constrained-dmc-information-capacity-properties]]: $C_I$ is nondecreasing and concave on $[c_{\min},\infty)$.

[F5] [[def-discrete-memoryless-channel]]: conditioned on $X^n$, the output coordinates have product law $\prod_t W(y_t\mid X_t)$.

[F6] [[lem-jensen-for-integrable-cost-random-variable]]: an integrable cost variable in $[c_{\min},\infty)$ can be passed through a finite concave function by Jensen's inequality.

[F7] [[thm-it-finite-kl-nonnegative-equality]]: finite mutual information is nonnegative because it is a KL divergence.

## Proof

1.1 By [F1], $H(Y^n)=\sum_tH(Y_t\mid Y^{t-1})$. For each $t$, the difference $H(Y_t)-H(Y_t\mid Y^{t-1})=I(Y_t;Y^{t-1})$ is nonnegative by [F7], so $H(Y^n)\le\sum_tH(Y_t)$. The product channel [F5] and the chain rule give $H(Y^n\mid X^n)=\sum_tH(Y_t\mid X_t)$. Subtracting and using [F2] yields $I(X^n;Y^n)\le\sum_{t=1}^n I(X_t;Y_t)$. [F1, F2, F5, F7, given, algebra]

1.2 Put $\gamma_t=\mathbb E c(X_t)\ge c_{\min}$. By [F3], $I(X_t;Y_t)\le C_I(\gamma_t)$. Apply [F4] and [F6] to the uniform random variable taking values $\gamma_1,\ldots,\gamma_n$; this gives $\sum_t C_I(\gamma_t)\le n C_I(n^{-1}\sum_t\gamma_t)\le nC_I(\Gamma)$. [F3, F4, F6, given, algebra]

2.1 Combining steps 1.1 and 1.2 proves the claimed block bound. [step 1.1, step 1.2, algebra] ∎
