---
id: lem-convex-mixture-of-probability-laws
kind: lemma
title: "A convex mixture of probability laws is a probability law"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-probability-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §1"
      url: "https://arxiv.org/pdf/1506.00691"
---

## Statement

Let $(X,\mathcal A)$ be a measurable space, let $P,Q$ be probability measures on it, and let $t\in[0,1]$. The set function $M_t(A)=(1-t)P(A)+tQ(A)$ is a probability measure.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal A)$, probability measures $P,Q$ on it, and $t\in[0,1]$.

[F1] [[def-probability-measure]]: a probability measure is a measure of total mass one.

## Proof

1.1 For each $A\in\mathcal A$, both terms in $M_t(A)$ are nonnegative and finite. Also $M_t(\varnothing)=0$ and $M_t(X)=(1-t)+t=1$, using [F1]. [given, F1, algebra]

2.1 If $(A_j)_{j\ge1}$ are pairwise disjoint, countable additivity of $P,Q$ gives $M_t(\bigcup_j A_j)=(1-t)\sum_jP(A_j)+t\sum_jQ(A_j)=\sum_jM_t(A_j)$. Together with step 1.1, this is a probability measure. [given, F1, step 1.1, algebra] ∎
