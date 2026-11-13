---
id: lem-author-cc4f5d837ae1-uniform-squared-row-control
title: Uniform squared-row control including dense graphs
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-cc4f5d837ae1-uniform-centered-normalization
  - prop-expander-prereq-degree-chernoff-union
dependency_roles:
  lem-author-cc4f5d837ae1-uniform-centered-normalization: mathematical-premise
  prop-expander-prereq-degree-chernoff-union: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
---

## Statement

In the setting of [[lem-author-cc4f5d837ae1-uniform-centered-normalization]], fix $0<\delta\le1$. On the event $|d(i)-\mu|<\delta\mu$ for all vertices, the squared row norm $r^2=\max_i\sum_j|H_{ij}|^2$ is at most $1+\delta$. If $g>3/\delta^2$, the probability of the complement of this event tends to zero uniformly over $g\log n\le np\le n$.

## Facts & Assumptions

[F1] The centered matrix and parameter range are [[lem-author-cc4f5d837ae1-uniform-centered-normalization]].

[F2] The exact-mean Chernoff union estimate, translated to center $np$, and its uniform logarithmic-density consequence are [[prop-expander-prereq-degree-chernoff-union]].

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove all stated conclusions.

1.1 For every row, direct expansion of its Bernoulli values gives $\sum_j|H_{ij}|^2=[(1-2p)d(i)+(n-1)p^2]/\mu$. If $p\le1/2$, its value on the good event is at most $(1-2p)(1+\delta)+p\le1+\delta$. If $p>1/2$, use the lower degree bound instead: its value is at most $(1-2p)(1-\delta)+p=1-p+(2p-1)\delta\le1+\delta$. These calculations include $p=1$; the row itself is then zero. [F1, given, algebra]

2.1 Write $p=\gamma\log n/n$ with $\gamma=np/\log n\ge g$. Supplier [F2] bounds the bad event by $2n^{1-\gamma a_n}$, where $a_n=(n\delta-1)^2/(3n(n-1))\to\delta^2/3$. For fixed $g>3/\delta^2$, choose $b>1$ with $ga_n\ge b$ eventually. The bound is then at most $2n^{1-b}$ independently of $p$. Combine this with step 1.1. [F1, F2, step 1.1, algebra] ∎
