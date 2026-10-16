---
id: alg-qa-34-error-budget-allocation
kind: algorithm
title: Allocate local error budgets through a pipeline
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
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

**Inputs:** a finite list of $L$ stage compilers $C_1,\ldots,C_L$, each accepting a rational local precision and, when it uses randomized verification, a rational local failure budget; rational targets $0<\varepsilon,\delta<1$. The compilers return implemented stages with the channel and failure interfaces declared in [[def-qa-34-end-to-end-error-contract]].

If $L=0$, return the empty composition and empty budget lists. If $L\ge1$, set $\varepsilon_j=\varepsilon/L$ and $\delta_j=\delta/L$ for each $j$. For a stage with randomized verification, invoke $C_j(\varepsilon_j,\delta_j)$ once; for a deterministic stage invoke $C_j(\varepsilon_j)$ once and mark its failure coordinate not applicable. Retain each circuit, output type, and actual cost record, then compose the stages chronologically. No total cost bound is returned unless supplied for the individual compilers; the cost record is the list of the actual stage costs plus the allocation arithmetic.

The correctness claim is separate: [[thm-qa-34-error-budget-allocation-correctness]] proves the global channel and failure bounds. This algorithm does not create implementations, amplify a compiler's error, or turn a precision request into a free compiler; each compiler's correctness method and cost remain part of its own guarantee.
