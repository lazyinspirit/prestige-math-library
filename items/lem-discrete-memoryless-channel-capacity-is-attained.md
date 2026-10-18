---
id: lem-discrete-memoryless-channel-capacity-is-attained
kind: lemma
title: "Finite DMC information capacity is attained"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-discrete-memoryless-channel-information-capacity, def-discrete-memoryless-channel, def-finite-probability-vector, def-it-finite-mutual-information, def-it-finite-conditional-entropy, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-natural-logarithm, thm-it-finite-entropy-chain-rule, thm-logarithm-slower-than-every-positive-power, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; compactness is applied to a finite-dimensional simplex."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §§19.1–19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.2, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

For every finite DMC $W$, the supremum $C(W)$ is a maximum: there is an input probability vector $P_X^*$ such that $I(P_X^*;W)=C(W)$.

## Facts & Assumptions

**Given:** A finite DMC $W$ with finite nonempty input alphabet $\mathcal X$ and output alphabet $\mathcal Y$.

[F1] [[def-discrete-memoryless-channel-information-capacity]]: $C(W)=\sup_{P_X} I(P_X;W)$ over probability vectors on $\mathcal X$.

[F2] [[def-it-finite-mutual-information]] and [[thm-it-finite-entropy-chain-rule]]: for the induced finite joint law, $I(X;Y)=H(Y)-H(Y\mid X)$.

[F3] [[def-it-finite-conditional-entropy]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(Y\mid X)=\sum_xP_X(x)H(W(\cdot\mid x))$ and $H(q)=-\sum_y q_y\ln q_y$, with $0\ln0=0$.

[F4] [[thm-logarithm-slower-than-every-positive-power]]: $\ln s/s\to0$ as $s\to+\infty$, so $-t\ln t\to0$ as $t\downarrow0$.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous real function on a nonempty closed bounded subset of finite-dimensional Euclidean space attains a maximum.

## Proof

1.1 For an input law $P_X$, let $Q_{P_X}=P_XW$. By [F2] and [F3], $I(P_X;W)=H(Q_{P_X})-\sum_xP_X(x)H(W(\cdot\mid x))$. The second term is linear in $P_X$. [F1, F2, F3, given, algebra]

2.1 The scalar summand $-t\ln t$, extended by $0$ at $t=0$, is continuous on $[0,1]$ by [F4]. Each coordinate of $Q_{P_X}$ is linear in $P_X$, so the finite sum $H(Q_{P_X})$ is continuous on the input simplex. Therefore $P_X\mapsto I(P_X;W)$ is continuous. [F3, F4, step 1.1, algebra]

3.1 The input simplex is nonempty because $\mathcal X$ is nonempty; it is closed and bounded in $\mathbb R^{|\mathcal X|}$. By [F5], the continuous mutual-information function attains a maximum at some $P_X^*$. Its maximum equals the supremum in [F1], proving $I(P_X^*;W)=C(W)$. [F1, step 2.1, F5, choose] ∎
