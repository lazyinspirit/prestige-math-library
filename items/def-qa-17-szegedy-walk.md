---
id: def-qa-17-szegedy-walk
kind: definition
title: "Szegedy reflection walk and its two-reflection square"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-17-szegedy-transition-isometry
  - def-qc-reflection
  - def-qa-17-finite-stochastic-kernel
justified_by:
  - lem-qa-17-walk-reflection-unitarity
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
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §§18.2–18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

For the finite row-stochastic kernel and row-preparation map of [[def-qa-17-szegedy-transition-isometry]], let $\Pi:=TT^*$, the orthogonal projection onto $\operatorname{ran}(T)$, and choose the reflection sign

$$R_A:=2\Pi-I.$$

With $S$ the two-register swap, define the one-reflection Szegedy step and its square by

$$U:=S R_A,\qquad W:=U^2=(S R_A S)R_A=(2S\Pi S-I)(2\Pi-I).$$

Products act right to left. This fixes $U$ and $W$ as different operators. Algebraically, if $Uv=\mu v$, then $Wv=\mu^2v$ on the same vector. The other common reflection sign is $I-2\Pi=-R_A$ and is not interchangeable inside a controlled operation.
