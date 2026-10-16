---
id: thm-qa-30-qaoa-expectation-bound
kind: theorem
title: "QAOA objective is an expected feasible score only"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-30-qaoa-circuit-and-objective
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
    - title: "Edward Farhi, Jeffrey Goldstone, and Sam Gutmann, A Quantum Approximate Optimization Algorithm (arXiv:1411.4028v1)"
      url: "https://arxiv.org/pdf/1411.4028"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For the finite graph and circuit of [[def-qa-30-qaoa-circuit-and-objective]], the QAOA objective lies between the minimum and maximum feasible cut sizes, and each computational-basis measurement returns a feasible cut. This expected-value statement alone implies no universal approximation ratio, global optimizer, or advantage guarantee.

## Facts & Assumptions

**Given:** A finite computational-basis measurement distribution and the cut-size observable.

[F1] [[def-qa-30-qaoa-circuit-and-objective]]: the objective is the expectation of the cut-size operator and measured strings are cuts.

[F2] [[thm-qc-projective-measurement-outcome-law]]: each finite projective outcome has its Born probability, and these probabilities sum to one.

## Proof

**Proof technique:** direct.

1.1 Write $q_x$ for the probability of bitstring $x$. By [F2], $q_x\ge0$ and $\sum_xq_x=1$. By [F1], every value $C_G(x)$ is a feasible cut size and lies in $[C_{\min},C_{\max}]$. [given, F1, F2]

2.1 Multiply the pointwise inequalities by $q_x$ and sum over the finite bitstring set. This gives $C_{\min}\le\sum_xq_xC_G(x)\le C_{\max}$; [F1] identifies the middle term with the QAOA objective. The argument supplies no positive ratio when $C_{\max}=0$ and no optimization conclusion. [given, F1, step 1.1, algebra] ∎
