---
id: def-qa-17-finite-reversible-chain
kind: definition
title: "Finite reversible Markov chain with positive stationary law"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-17-finite-stochastic-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-reversible-measure-and-detailed-balance
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

A **finite reversible Markov chain** is a finite row-stochastic kernel $(X,P)$ together with a supplied probability vector $\pi=(\pi_x)_{x\in X}$ such that $\pi_x>0$ for every $x$, $\sum_x\pi_x=1$, $\pi P=\pi$, and

$$\pi_xP_{xy}=\pi_yP_{yx}\qquad(x,y\in X).$$

The stationary law and detailed balance are explicit input hypotheses; the definition does not invoke a theorem that produces a stationary law. No irreducibility or aperiodicity is assumed. In particular, a periodic reversible chain is included.
