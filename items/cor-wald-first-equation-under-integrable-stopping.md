---
id: cor-wald-first-equation-under-integrable-stopping
kind: corollary
title: Wald first equation under integrable stopping
status: draft
origin: pipeline
deps: [lem-equivalent-event-tests-for-a-discrete-stopping-time, def-identically-distributed-and-iid-random-variables, thm-grouping-independent-sigma-algebras, thm-factorization-of-expectations-for-independent-variables, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., Wald's equation in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Let $X_1,X_2,\ldots$ be iid integrable real random variables with mean $\mu$, let $\mathcal F_n=\sigma(X_1,\ldots,X_n)$, and let $\tau$ be an $(\mathcal F_n)$-stopping time with $\mathbb E\tau<\infty$. Then $\sum_{k=1}^\tau X_k$ is integrable and
$$\mathbb E\sum_{k=1}^\tau X_k=\mu\mathbb E\tau.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-equivalent-event-tests-for-a-discrete-stopping-time]] gives $\{\tau\ge k\}\in\mathcal F_{k-1}$.

[F2] [[def-identically-distributed-and-iid-random-variables]] and [[thm-grouping-independent-sigma-algebras]] make $X_k$ independent of $\mathcal F_{k-1}$.

[F3] [[thm-factorization-of-expectations-for-independent-variables]] factors the tail-event products.

[F4] [[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]], and [[thm-linearity-of-the-lebesgue-integral-on-l-one]] justify the infinite sums.

## Proof

1.1 Pointwise, $$\sum_{k=1}^\tau X_k=\sum_{k\ge1}X_k1_{\{\tau\ge k\}}, \qquad \tau=\sum_{k\ge1}1_{\{\tau\ge k\}}.$$ The first identity is understood through finite partial sums; the integrability calculation below shows that $\tau=\infty$ is null. [F1]

2.1 By F1, F2, F3, $$\mathbb E[|X_k|1_{\{\tau\ge k\}}] =\mathbb E|X_1|\,\mathbb P(\tau\ge k).$$ MCT applied to the nonnegative partial sums and to the second identity in step 1.1 gives $$\mathbb E\sum_{k\ge1}|X_k|1_{\{\tau\ge k\}} =\mathbb E|X_1|\sum_{k\ge1}\mathbb P(\tau\ge k) =\mathbb E|X_1|\,\mathbb E\tau<\infty.$$ Thus the stopped series is absolutely integrable and $\tau<\infty$ almost surely. [F2, F3, F4]

3.1 The signed partial sums are dominated by the integrable absolute series in step 2.1. DCT and finite linearity therefore give $$\mathbb E\sum_{k=1}^\tau X_k =\sum_{k\ge1}\mathbb E[X_k1_{\{\tau\ge k\}}] =\sum_{k\ge1}\mu\mathbb P(\tau\ge k) =\mu\mathbb E\tau,$$ where F3 gives the middle factorization. This argument is choice-free: the given iid sequence and stopping time supply all indexed objects, and no conditional-expectation version is chosen. [F3, F4, step 1.1, step 2.1] ∎