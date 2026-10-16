---
id: lem-qa-17-stochastic-l2-contraction
kind: lemma
title: "Finite stationary Markov operators contract in weighted L2"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-17-finite-reversible-chain
  - def-inner-product-space
  - def-inner-product-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Let $(X,P,\pi)$ be a finite reversible chain and let $f:X\to\mathbb C$. Define $\|f\|_{2,\pi}^2:=\sum_x\pi_x|f_x|^2$ and $(Pf)_x:=\sum_yP_{xy}f_y$. Then

$$\|Pf\|_{2,\pi}^2\le\|f\|_{2,\pi}^2,$$

so $P$ is a contraction on the finite weighted inner-product space $L^2(X,\pi)$. Detailed balance is not needed for this inequality beyond the stated stationary-law hypotheses.

## Facts & Assumptions

**Given:** A finite reversible chain $(X,P,\pi)$, where $\pi_x>0$, $\sum_x\pi_x=1$, $\pi P=\pi$, and $P_{xy}\ge0$ with $\sum_yP_{xy}=1$, and a function $f:X\to\mathbb C$.

[F1] [[def-qa-17-finite-reversible-chain]]: $P$ is row-stochastic and $\pi P=\pi$ with every $\pi_x>0$.

## Proof

1.1 For each $x$, set $m_x:=\sum_yP_{xy}f_y$. Expanding the nonnegative sum gives $\sum_yP_{xy}|f_y-m_x|^2=\sum_yP_{xy}|f_y|^2-|m_x|^2\ge0$, because the row weights sum to one. Thus $|m_x|^2\le\sum_yP_{xy}|f_y|^2$. [given, F1, algebra]

2.1 Multiply the inequality in step 1.1 by $\pi_x$ and sum over $x$. All sums are finite, so reindexing gives $\sum_x\pi_x|m_x|^2\le\sum_y(\sum_x\pi_xP_{xy})|f_y|^2=\sum_y\pi_y|f_y|^2$ by stationarity. [F1, step 1.1, algebra]

3.1 The left and right sides in step 2.1 are $\|Pf\|_{2,\pi}^2$ and $\|f\|_{2,\pi}^2$ by definition; taking nonnegative square roots proves the contraction claim. Positivity of every $\pi_x$ makes the weighted form positive definite. [F1, step 2.1, algebra] ∎
