---
id: alg-qa-29-amplitude-counting-consumer
kind: algorithm
title: "Quantum counting as an expectation special case"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - thm-qa-29-counting-is-indicator-expectation
  - def-qa-29-expectation-estimation-task
  - alg-qa-13-counting-from-amplitude-estimation
  - thm-qa-13-counting-error-guarantee
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Section 4"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 19.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: n/a
---

## Definition

**Input.** A Boolean domain $X=\{0,1\}^n$ with $N=2^n$, a predicate $f:X\to\{0,1\}$, a phase-register size $M=2^m$ for an integer $m\ge2$ (so $M\ge4$), and the uniform coherent access and controlled membership reflection required by [[alg-qa-13-counting-from-amplitude-estimation]]. Let $S=\{x:f(x)=1\}$.

Use the unchanged QA13 counting estimator [[alg-qa-13-counting-from-amplitude-estimation]] with this $M$ and its supplied access model, and return its exact algebraic fraction estimate $\widetilde\mu=\widetilde t/N=\sin^2(\pi y/M)$ for the expectation task. Its real-valued count estimate $\widetilde t=N\widetilde\mu$ may also be reported, with count and expectation outputs explicitly distinguished. Do not round to an integer unless that additional postprocessing and its cost are explicitly requested. By [[thm-qa-29-counting-is-indicator-expectation]], this is the QA29 expectation task for the uniform law and observable $g=\mathbf 1_S$; the applicable count guarantee is [[thm-qa-13-counting-error-guarantee]], whose phase-size hypothesis $M\ge4$ is met. Divide its count-error radius by $N$ for the expectation-error radius, with the same success event and probability. This item defines no second amplitude-estimation or counting routine.
