---
id: alg-qa-finite-abelian-hidden-subgroup-reconstruction
kind: algorithm
title: Finite abelian hidden-subgroup common-kernel reconstruction
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - def-qa-finite-abelian-subgroup-annihilator
  - lem-qa-annihilator-restriction-cut
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Inputs are a finite abelian hidden-subgroup instance with explicit invariant-factor coordinates, a supplied positive integer $M$, and the exact circuits $P_G$, $O_F$, and $Q_G$ with the access, cost, workspace, and full-register action contracts specified in [[alg-qa-finite-abelian-hidden-subgroup-sample]]. If $|G|=1$, output the empty character list, which denotes $G$, and make no oracle calls. Otherwise run the exact Fourier-sample procedure [[alg-qa-finite-abelian-hidden-subgroup-sample]] independently $M$ times, passing those supplied circuits and using fresh registers and a fresh measurement each time. Store the resulting character labels $\mathbf k^{(1)},\ldots,\mathbf k^{(M)}$ and output that list as the implicit common-kernel presentation
$$K=\bigcap_{j=1}^M\ker\chi_{\mathbf k^{(j)}}.$$
Do not convert $K$ to a generating set. The algorithm consumes $M$ as an integer input; the success theorem specifies a choice of $M$ for each confidence target.

## Remarks

The procedure always outputs a finite constraint list, including on a failure event. Its correctness and repetition bound are separate theorems.
