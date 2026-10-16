---
id: cex-qa-17-nonreversible-discriminant
kind: counterexample
title: "A stationary directed cycle is not similar to its discriminant"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-17-finite-stochastic-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-reversible-measure-and-detailed-balance
  - thm-qa-17-discriminant-self-adjoint
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §§18.2–18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement refuted

For every finite row-stochastic kernel with a strictly positive stationary distribution, the discriminant equals the stationary similarity transform $\operatorname{diag}(\sqrt\pi)P\operatorname{diag}(1/\sqrt\pi)$, even when detailed balance fails.

## Facts & Assumptions

**Given:** A finite row-stochastic kernel, a stationary probability vector, and the discriminant defined by [[def-qa-17-szegedy-transition-isometry]].

[F1] [[def-qa-17-finite-stochastic-kernel]]: each row of $P$ is nonnegative and sums to one.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is stationary exactly when $\pi P=\pi$.

[F3] [[def-reversible-measure-and-detailed-balance]]: reversibility requires $\pi_xP_{xy}=\pi_yP_{yx}$ for every pair.

[F4] [[thm-qa-17-discriminant-self-adjoint]]: $D_{xy}=\sqrt{P_{xy}P_{yx}}$.

## Counterexample

Take $X=\{0,1,2\}$ with indices modulo $3$ and $P_{xy}=1$ exactly when $y=x+1\pmod 3$, with all other entries zero. Let $\pi=(1/3,1/3,1/3)$.

1.1 Every row of $P$ has one entry equal to $1$, and each column also has one such entry, so $P$ is row-stochastic and $\pi P=\pi$. [F1, F2, given]

2.1 Detailed balance fails at $(x,y)=(0,1)$ because $\pi_0P_{01}=1/3$ but $\pi_1P_{10}=0$. Thus the chain is stationary but not reversible. [F3, step 1.1, algebra]

3.1 No pair of distinct states has transitions in both directions, and all diagonal entries are zero, so $P_{xy}P_{yx}=0$ for every $x,y$ and [F4] gives $D=0$. Since the stationary vector is uniform, its diagonal similarity transform is $\operatorname{diag}(\sqrt\pi)P\operatorname{diag}(1/\sqrt\pi)=P\ne0$. The claimed identity fails. [F1, F2, F4, step 1.1, algebra] ∎
