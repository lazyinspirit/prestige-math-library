---
id: thm-finite-union-bound
kind: theorem
title: "The finite union bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-probability-basic-laws, thm-finite-additivity-of-probability]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Lemma 1.1.3"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For every finite family of events $A_0,\ldots,A_{n-1}$,
$$\mathbb P\!\left(\bigcup_{i<n}A_i\right)\le\sum_{i<n}\mathbb P(A_i).$$
For $n=0$ both sides are $0$.

## Facts & Assumptions

**Given:** A finite probability space and events $A_0,\ldots,A_{n-1}$.

[L1] Probability is monotone under inclusion ([[lem-finite-probability-basic-laws]]).

[L2] Probability is additive on finite pairwise-disjoint families ([[thm-finite-additivity-of-probability]]).

## Proof

**Proof technique:** direct.

1.1 For $i<n$, put $B_i=A_i\setminus\bigcup_{j<i}A_j$. Then the $B_i$ are pairwise disjoint, $B_i\subseteq A_i$, and $\bigcup_{i<n}B_i=\bigcup_{i<n}A_i$. [construct]

2.1 Hence $\mathbb P(\bigcup_{i<n}A_i)=\sum_{i<n}\mathbb P(B_i)\le\sum_{i<n}\mathbb P(A_i)$. [step 1.1, L1, L2, algebra]

3.1 For $n=0$ step 2.1 reads $0\le0$, and for $n=1$ it is equality. [step 2.1] ∎
