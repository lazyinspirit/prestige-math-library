---
id: thm-qa-34-error-budget-allocation-correctness
kind: theorem
title: Allocated local errors meet the global budget
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-34-error-budget-allocation
  - thm-qa-34-channel-hybrid-bound
  - thm-qa-34-adaptive-failure-union-bound
  - def-qa-34-end-to-end-error-contract
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Suppose $L\ge1$ stage compilers called by [[alg-qa-34-error-budget-allocation]] return implemented channels with local normalized diamond errors at most $\varepsilon/L$ and, for every successful history reaching stage $j$, conditional failure probability at most $\delta/L$. Then the final channel error is at most $\varepsilon$ and the probability of any stage failure is at most $\delta$. No independence between stage failures is assumed. The theorem makes no complexity claim beyond charging the actual compiler and execution costs recorded by the algorithm.

## Facts & Assumptions

**Given:** The compilers and local guarantees in the Statement, with rational $0<\varepsilon,\delta<1$.

[F1] [[alg-qa-34-error-budget-allocation]]: for $L\ge1$ it assigns $\varepsilon_j=\varepsilon/L$ and $\delta_j=\delta/L$ to every stage and calls each compiler once.

[F2] [[thm-qa-34-channel-hybrid-bound]]: the final normalized channel error is at most the sum of local normalized channel errors.

[F3] [[thm-qa-34-adaptive-failure-union-bound]]: conditional failure bounds $\delta_j$ after every successful history imply total failure at most $\sum_j\delta_j$, without independence.

## Proof



1.1 By [F1], each stage error is at most $\varepsilon/L$, so the sum of the $L$ local errors is at most $L(\varepsilon/L)=\varepsilon$. [given, F1, algebra]

2.1 Apply [F2] to those $L$ stage channels and use step 1.1; the final normalized diamond error is at most $\varepsilon$. [step 1.1, F2]

3.1 By [F1], each stage has conditional failure bound $\delta/L$. Apply [F3] to the finite execution history to obtain total failure at most $L(\delta/L)=\delta$. [given, F1, F3, algebra] ∎
