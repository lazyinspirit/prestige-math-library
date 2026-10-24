---
id: lem-qc-disjoint-fault-location-events-are-independent
kind: lemma
title: "Disjoint Fault-Location Events Are Independent"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-noise-channel-model
  - def-qc-fault-location-path-and-rectangle
  - def-independent-families-of-event-classes
dependency_level: 11
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
---

## Statement

In the independent local fault model, events determined by pairwise disjoint finite sets of location fault indicators are mutually independent. In particular, bad-rectangle events determined only by the faults in pairwise disjoint child rectangles are independent.

## Facts & Assumptions


**Given:** A finite set of independent Bernoulli fault indicators indexed by $L$, and pairwise disjoint subsets $L_1,\ldots,L_s\subseteq L$. For each $j$, let $E_j$ be an event determined only by the indicators indexed by $L_j$. Prove that $E_1,\ldots,E_s$ are independent.

[F1] [[def-qc-noise-channel-model]]: A fault pattern $F$ has probability $\eta^{|F|}(1-\eta)^{|L\setminus F|}$.

[F2] [[def-qc-fault-location-path-and-rectangle]]: Distinct child rectangles used in the ordinary recursion have pairwise disjoint elementary-location sets.

[F3] [[def-independent-families-of-event-classes]]: For distinct event classes, every finite intersection of chosen events has probability equal to the product of their probabilities.

## Proof

1.1 For each $j$, let $X_j=\{0,1\}^{L_j}$ be the finite set of fault-indicator patterns on $L_j$, and let $A_j\subseteq X_j$ be the patterns that realize $E_j$. The event $E_j$ is the disjoint union of the pattern events $\{X|_{L_j}=x_j\}$ over $x_j\in A_j$. [given, F1, F2]

1.2 For any tuple $x_j\in A_j$, the joint pattern event fixes one bit at each location in $\bigcup_jL_j$. The product fault law [F1] gives its probability as the product of the one-location bit probabilities; this is the finite-intersection condition in [F3]. [F1, F3]

2.1 Summing over the finite Cartesian product $A_1\times\cdots\times A_s$ and distributing finite sums gives $\mathbb P(\bigcap_{j=1}^sE_j)=\sum_{x_1\in A_1,\ldots,x_s\in A_s}\prod_{j=1}^s\mathbb P(X|_{L_j}=x_j)=\prod_{j=1}^s\sum_{x_j\in A_j}\mathbb P(X|_{L_j}=x_j)=\prod_{j=1}^s\mathbb P(E_j)$. Thus $E_1,\ldots,E_s$ are mutually independent. [step 1.1, step 1.2, algebra] ∎

