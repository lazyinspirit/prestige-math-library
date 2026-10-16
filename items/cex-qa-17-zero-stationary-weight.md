---
id: cex-qa-17-zero-stationary-weight
kind: counterexample
title: "A zero stationary weight makes the full-state similarity undefined"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-17-finite-stochastic-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-qa-17-szegedy-transition-isometry
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement refuted

For every finite chain and every stationary probability vector $\pi$, including one with zero coordinates, the full-state matrix $\operatorname{diag}(\sqrt\pi)P\operatorname{diag}(1/\sqrt\pi)$ is defined and equals the discriminant.

## Facts & Assumptions

**Given:** A finite row-stochastic kernel $P$ and a stationary probability vector $\pi$, as defined by [[def-qa-17-finite-stochastic-kernel]] and [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

[F1] [[def-qa-17-finite-stochastic-kernel]]: each row of $P$ has nonnegative entries summing to one.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: on a finite state space, stationarity is $\pi(y)=\sum_x\pi(x)P_{xy}$.

[F3] [[def-qa-17-szegedy-transition-isometry]]: the discriminant is the endomorphism $D:=T^*ST$.

## Counterexample

Take $X=\{0,1\}$,

$$P=\begin{pmatrix}1&0\\1&0\end{pmatrix},\qquad \pi=(1,0).$$

1.1 Each row of $P$ is a probability vector, and $\pi P=(1,0)=\pi$, so $\pi$ is stationary. [F1, F2, given, algebra]

1.2 The second coordinate has $\pi_1=0$, so the diagonal matrix $\operatorname{diag}(1/\sqrt{\pi_0},1/\sqrt{\pi_1})$ is undefined over $\mathbb R$; hence the proposed full-state similarity matrix is not defined. [given, algebra]

2.1 The proposed assertion identifies the full-state expression with the discriminant $D$ of [F3] and requires the displayed matrix to be defined for every stationary probability vector. Step 1.2 shows it is undefined for this valid stationary vector, so the universal assertion is false. A restriction to the positive support is a different statement. [F3, given, step 1.1, step 1.2] ∎
