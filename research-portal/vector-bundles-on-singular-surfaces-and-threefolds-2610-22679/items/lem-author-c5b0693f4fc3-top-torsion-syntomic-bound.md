---
id: lem-author-c5b0693f4fc3-top-torsion-syntomic-bound
kind: lemma
title: Affine characteristic-p syntomic amplitude without regularity
status: published
domain: mathematics
deps:
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
dependency_roles:
  thm-author-c5b0693f4fc3-top-torsion-em-syntomic: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
For every $\mathbb F_p$-algebra $A$ and $j\geq0$, $H^i(\mathbb F_p(j)_{\rm syn}(A))=0$ for $i>j+1$. In particular its degree-five group vanishes when $j=3$.

## Facts & Assumptions
[F1] [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]] supplies EM Lemma 4.16 and its notation $L^a_{A/\mathbb F_p}=L\Lambda^aL_{A/\mathbb F_p}$. These derived exterior-power complexes lie in $D^{\leq0}$; they are computed by a simplicial polynomial resolution with ordinary differential forms in degree zero.

## Proof
**Given:** Any $\mathbb F_p$-algebra $A$, with no smoothness, reducedness or finite-type hypothesis.

**Goal:** Establish the stated upper bound.

1.1 In [F1] the first block of graded pieces is $L^a[-a-1]$ for $0\leq a\leq j$ and the second block is $L^a[-a]$ for $0\leq a\leq j$. A complex in $D^{\leq0}$ shifted by $-b$ lies in $D^{\leq b}$. Every listed piece therefore lies in $D^{\leq j+1}$. [F1]

2.1 The filtration is finite, starts at zero, and ends at the syntomic complex. The cohomology exact sequence for each successive extension shows inductively that the entire complex lies in $D^{\leq j+1}$. For $j=3$, $5>4$, yielding the assertion. [F1, step 1.1] ∎
