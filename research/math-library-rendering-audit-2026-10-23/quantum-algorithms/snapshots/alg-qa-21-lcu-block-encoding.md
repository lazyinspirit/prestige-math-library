---
id: alg-qa-21-lcu-block-encoding
kind: algorithm
title: LCU block encoding
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-21-lcu-input-and-access-model
  - def-qc-dirac-notation-conversion
justified_by: []
axiom_use: None; the procedure uses only finite supplied unitary access.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.11)–(28.20), printed pp.141–142."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Method 2 and Eq. (9.3), printed pp.73–74."
---

## Definition

**Input:** An LCU representation and complete PREPARE and SELECT access from [[def-qa-21-lcu-input-and-access-model]], including their stated work-register and padded-index behavior. The access record must explicitly supply PREPARE$^\dagger$ and its cost; an input without that inverse access is inadmissible.

**Procedure:** On the coefficient/work ancillas and system, apply PREPARE, then SELECT, then the supplied PREPARE$^\dagger$. Return the complete unitary $W=P^\dagger S_{\rm sel}P$. Charge the three calls at their declared costs. No measurement or deterministic state-output guarantee is part of this procedure.
