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

**Given:** A probability space $(\Omega,\mathcal F,\mathbb P)$ and events $A_0,\ldots,A_{n-1}\in\mathcal F$, where $n\ge0$ is an integer.

[L1] A probability measure is a measure on its event sigma-algebra, with total mass one ([[def-probability-measure]]).

[L2] If $\mu$ is a measure and $B\subseteq A$ are measurable, then $\mu(B)\le\mu(A)$ ([[prop-measure-monotonicity]]).

[L3] A measure assigns zero to the empty set and is countably additive on pairwise-disjoint measurable sequences ([[def-measure]]).

[L4] A sigma-algebra is an algebra of subsets, so it contains the empty set and is closed under finite unions and differences ([[def-sigma-algebra]]).

## Proof

**Proof technique:** disjointify the finite family and apply general measure additivity and monotonicity.

1.1 For $i<n$, put $B_i=A_i\setminus\bigcup_{j<i}A_j$. By [L4], every $B_i$ is measurable. They are pairwise disjoint and satisfy $B_i\subseteq A_i$. Their union equals $\bigcup_{i<n}A_i$: a point in the latter has a least index $i<n$ at which it belongs to $A_i$, and then belongs to $B_i$; the reverse inclusion follows from $B_i\subseteq A_i$. [given, L4, construct]

2.1 By [L1], $\mathbb P$ is a measure. Extend the disjoint family by $B_i=\varnothing$ for $i\ge n$. Countable additivity and $\mathbb P(\varnothing)=0$ from [L3] give $\mathbb P(\bigcup_{i<n}A_i)=\sum_{i<n}\mathbb P(B_i)$. By [L2], each $\mathbb P(B_i)\le\mathbb P(A_i)$, so summing these finitely many inequalities proves $\mathbb P(\bigcup_{i<n}A_i)\le\sum_{i<n}\mathbb P(A_i)$. [step 1.1, L1, L2, L3, algebra]

3.1 If $n=0$, the union is empty and the sum is the empty sum, so both sides are $0$ by [L3]. If $n=1$, the bound is the equality $\mathbb P(A_0)=\mathbb P(A_0)$. These arguments impose no finiteness assumption on $\Omega$. [step 2.1, L3] ∎
