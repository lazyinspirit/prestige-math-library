---
id: alg-qa-34-error-budget-allocation
kind: algorithm
title: Allocate local error budgets through a pipeline
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-end-to-end-error-contract
  - def-qa-34-output-and-cost-types
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

**Inputs:** a finite list of $L$ stage compilers $C_1,\ldots,C_L$, each accepting a rational local precision and, when it uses randomized verification, a rational local failure budget; rational targets $0<\varepsilon,\delta<1$; and declared stage input/output interfaces $T_0,\ldots,T_L$, including encodings or register spaces. Stage $j$ must accept $T_{j-1}$ and return $T_j$ at every admissible budget, so adjacent interfaces match. For a channel pipeline these are the matching spaces and channel interfaces of [[def-qa-34-end-to-end-error-contract]]. Each compiler is assumed to terminate with an implemented stage, its output type, and its actual cost record under [[def-qa-34-output-and-cost-types]]. The sequential pipeline is run under the same declared cost-accounting model.

**Output:** a pipeline from $T_0$ to $T_L$, together with the budget lists and cost records below. If $L=0$, a single interface $T_0$ is supplied; return its identity procedure, empty budget lists, no stage records, and an auxiliary record charging any identity-interface and allocator work. If $L\ge1$, set $\varepsilon_j=\varepsilon/L$ and $\delta_j=\delta/L$ for each $j$. For $j=1,\ldots,L$ in order, invoke $C_j(\varepsilon_j,\delta_j)$ once when stage $j$ uses randomized verification, and otherwise invoke $C_j(\varepsilon_j)$ once and mark its failure coordinate not applicable. Retain each returned implementation, output type, and actual stage cost record, then compose the stages chronologically. Record shared input/preprocessing, allocation arithmetic, and any interstage wiring, control, postprocessing, or final-output costs in a separate auxiliary record, counting each operation once. Return the composed implementation, local budget lists, per-stage records, and auxiliary record. The correctness theorem gives an additive resource bound from these records under its explicit accounting assumptions; a requested precision alone does not determine an implementation or its cost.

The correctness claim is separate: [[thm-qa-34-error-budget-allocation-correctness]] proves the global channel and failure bounds and composes the recorded cost coordinates under explicit stage and pipeline accounting assumptions. This algorithm does not create implementations or amplify a compiler's error; each compiler's correctness method and cost remain part of its own guarantee.
