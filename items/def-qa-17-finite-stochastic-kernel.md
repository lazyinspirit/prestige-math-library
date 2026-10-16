---
id: def-qa-17-finite-stochastic-kernel
kind: definition
title: "Finite row-stochastic kernel"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
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

A **finite row-stochastic kernel** is a finite set $X$ and a matrix $P=(P_{xy})_{x,y\in X}$ with $P_{xy}\in[0,1]$ and

$$\sum_{y\in X}P_{xy}=1\qquad(x\in X).$$

The row convention is $P_{xy}=\Pr(Y=y\mid X=x)$: distributions are row vectors and one transition sends $\mu$ to $\mu P$. If $X=\varnothing$, the row conditions are vacuous and there is no probability distribution on $X$. No stationary distribution, reversibility, irreducibility, aperiodicity, or efficient circuit access is part of this definition.
