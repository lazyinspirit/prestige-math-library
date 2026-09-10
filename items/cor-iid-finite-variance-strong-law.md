---
id: cor-iid-finite-variance-strong-law
kind: corollary
title: Iid finite variance strong law
deps: ["def-identically-distributed-and-iid-random-variables", "cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

IID square-integrable real variables satisfy $S_n/n\to\mathbb EX_1$ almost surely.

## Facts & Assumptions

[F1] [[def-identically-distributed-and-iid-random-variables]]: Let $(X_i)_{i\in I}$ be random elements with the same measurable target $(E,\mathcal E)$. They are **identically distributed** if $\mathbb P(X_i\in B)=\mathbb P(X_j\in B)$ for all $i,j\in I$ and $B\in\mathcal E$, that is, their laws in def-law-or-distribution-of-a-random-element agree. They are **independent and identically distributed (IID)** if, in addition, the whole family is independent in def-independent-random-elements. Independence means mutual independence, not merely pairwise independence. No moment assumption is part of either definition. The empty family satisfies these universal conditions vacuously.

[F2] [[cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances]]: Independent square-integrable real $(X_n)_{n\ge1}$ with $C=\sup_n\operatorname{Var}(X_n)<\infty$ satisfy $(S_n-\mathbb ES_n)/n\to0$ almost surely.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 By F1, every coordinate has the same law and the whole family is independent. Integrating $x$ and $x^2$ against that common law gives common finite mean $\mu$ and common variance $v$. In particular $\sup_n\operatorname{Var}(X_n)=v<\infty$. [F1]

2.1 Apply F2 using step 1.1. Its centered sum is $S_n-n\mu$, so adding $\mu$ gives the claimed limit. [F2, step 1.1] ∎
