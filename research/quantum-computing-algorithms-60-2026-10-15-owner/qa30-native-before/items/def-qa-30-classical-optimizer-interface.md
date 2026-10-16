---
id: def-qa-30-classical-optimizer-interface
kind: definition
title: "Classical optimizer interface for hybrid algorithms"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-30-variational-quantum-algorithm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
    - title: "https://arxiv.org/pdf/1809.00643v4"
      url: "https://arxiv.org/pdf/1809.00643"
verification:
  precheck: n/a
---

## Definition

A **classical optimizer interface** for a hybrid algorithm is a finite classical procedure that receives a specified set of finite-precision estimates of an objective $C(\theta)$ or its derivatives, chooses the next parameter query, and terminates under a stated stopping rule with a declared output. Its interface records query precision, output encoding, classical operation/bit costs, initialization, and stopping behavior. Any convergence or sample-complexity theorem must separately state and prove assumptions such as convexity, smoothness, parameter-domain geometry, bounded noise, and initialization. A generic VQA objective is not assumed convex, and the existence of an optimizer interface supplies no rate.

This is an abstract contract: it does not select gradient descent, certify a global minimum, or provide an optimization oracle without an explicit finite procedure.
