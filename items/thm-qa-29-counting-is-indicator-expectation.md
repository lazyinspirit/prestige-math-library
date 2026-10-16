---
id: thm-qa-29-counting-is-indicator-expectation
kind: theorem
title: "Uniform counting is finite indicator expectation"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-29-expectation-estimation-task
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the sample space and all sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Section 4"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 19.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: n/a
---

## Statement

Let $X$ be a finite nonempty set with $p_x=1/|X|$ for each $x$, let $S\subseteq X$, and define $g(x)=1$ for $x\in S$ and $g(x)=0$ otherwise. Then the expectation task for $(X,p,g)$ has target
$$\mu=\mathbb E[g]=\frac{|S|}{|X|}.$$

## Facts & Assumptions

**Given:** The finite nonempty set $X$, its uniform probability law, and the indicator function $g=\mathbf 1_S$ of a subset $S$.

[F1] [[def-qa-29-expectation-estimation-task]]: the target is the weighted finite sum $\sum_{x\in X}p_xg(x)$.

[F2] [[def-finite-probability-space-and-event]]: an event probability is the sum of the weights of its outcomes.

[F3] [[def-expectation-on-a-finite-probability-space]]: expectation is the finite weighted sum over outcomes.

## Proof

1.1 For the uniform law, $p_x=1/|X|$ for every $x\in X$. By [F1], $\mu=\sum_{x\in X}|X|^{-1}\mathbf 1_S(x)$. [given, F1, algebra]

2.1 The summand is $|X|^{-1}$ exactly for $x\in S$ and zero otherwise. The sum therefore has $|S|$ equal terms, so $\mu=|S|/|X|$. By [F2]–[F3] this is also $\Pr(S)$. [given, F2, F3, step 1.1, algebra] ∎
