---
id: ex-qa-34-three-stage-budget
kind: example
title: A three-stage precision budget
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-34-error-budget-allocation
  - thm-qa-34-channel-hybrid-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Example

Take three stage compilers and a global normalized diamond-error target $\varepsilon=3/100$. Assume each compiler returns a channel whose local normalized diamond error is at most the precision budget it receives. The allocation procedure passes $1/100$ to each compiler. The example tracks the resulting end-to-end channel error; it makes no claim about the compilers' resource costs beyond recording them.

## Facts & Assumptions

**Given:** Three matching pairs of ideal and implemented finite-dimensional channels, global target $\varepsilon=3/100$, and the stated local compiler guarantee.

[F1] [[alg-qa-34-error-budget-allocation]]: for $L\ge1$, the allocated local precision is $\varepsilon_j=\varepsilon/L$.

[F2] [[thm-qa-34-channel-hybrid-bound]]: the normalized diamond error of a finite channel composition is at most the sum of its local normalized errors.

## Verification


1.1 With $L=3$, the allocator sets $\varepsilon_j=(3/100)/3=1/100$ for each $j\in\{1,2,3\}$. [given, F1, algebra]

2.1 Each local error is therefore at most $1/100$. Applying [F2], the composed channel error is at most $1/100+1/100+1/100=3/100=\varepsilon$. [given, step 1.1, F2, algebra] ∎
