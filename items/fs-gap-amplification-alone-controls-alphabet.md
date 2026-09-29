---
id: fs-gap-amplification-alone-controls-alphabet
kind: false-statement
title: "False: graph powering alone keeps the alphabet fixed"
status: draft
origin: pipeline
deps:
  - def-constraint-graph-powering
  - def-constraint-graph-and-labeling-value
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: counterexample
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

False claim: the local-view graph-powering step used for gap amplification keeps
the input alphabet unchanged for every graph and every positive powering
parameter.

## Facts & Assumptions

[F1] In the published powering convention, the view alphabet has cardinality
$|\Sigma_t|=|\Sigma|^{(2d)^R}$, where $R=t+\lceil\sqrt t\rceil$.
([[def-constraint-graph-powering]])

[F2] A loop contributes two incidence slots and is tested on the diagonal pair
$(a,a)$. ([[def-constraint-graph-and-labeling-value]])

## Refutation

**Given:** A binary constraint graph has finite nonempty alphabet and each of
its loop relations is tested on its single vertex label.

1.1 Take one vertex $v$, alphabet $\Sigma=\{0,1\}$, and two loop edges $e_0,e_1$ with relations $\{(0,0)\}$ and $\{(1,1)\}$. Label $0$ passes $e_0$ and fails $e_1$; label $1$ passes $e_1$ and fails $e_0$. These are all labels, so every labeling violates exactly one of the two edges and $\operatorname{UNSAT}(G)=1/2$. Each loop contributes two incidence slots, hence $d=4$. [F2, given]

2.1 Set the positive powering parameter to $t=1$. Then $R=1+\lceil\sqrt1\rceil=2$ and $2d=8$, so there are $8^2=64$ length-two patterns. By [F1], the full view alphabet has size $|\Sigma_1|=2^{64}\ne2$. This one graph and positive parameter refute the universal fixed-alphabet claim; the example does not assert that every powered instance has a larger alphabet. [F1, step 1.1, algebra] ∎
