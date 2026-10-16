---
id: def-qa-34-heralded-verification-contract
kind: definition
title: Heralded success and conditional verification contract
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qc-quantum-acceptance-probability
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - def-qc-density-operator
  - def-qa-34-output-and-cost-types
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Definition

A **heralded procedure** has an explicit finite outcome set containing success and failure, a success probability $p_s$, and a declared output type. For an input density operator $\rho$ as in [[def-qc-density-operator]], its success branch is the subnormalized state $\mathcal I_s(\rho)$ of the instrument [[def-qc-instrument-and-conditional-state]], with $p_s=\operatorname{tr}(\mathcal I_s(\rho))$. If $p_s>0$, its conditional output state is $\rho_s=\mathcal I_s(\rho)/p_s$; if $p_s=0$, no normalized conditional state is assigned and the branch is denoted $\bot$. The outcome law is specified by the instrument and the POVM conventions of [[def-qc-povm-and-outcome-law]].

The contract states separately (i) the success probability, (ii) the guarantee conditional on success, (iii) any unconditional guarantee including failure, and (iv) the cost of verification and of outputting or recording the success flag. An acceptance probability from [[def-qc-quantum-acceptance-probability]] is not itself a conditional-state guarantee. A claim about a quantum state output uses the type and cost distinctions in [[def-qa-34-output-and-cost-types]].
