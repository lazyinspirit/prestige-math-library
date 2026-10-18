---
id: def-qc-trace-distance
kind: definition
title: "Trace Distance"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: ["def-qc-trace-norm", "def-qc-density-operator"]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.1.1–3.1.2, trace distance and state distinguishability."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.2, PDF pp.39–41; raw trace norm and optimal-measurement discussion"
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $\rho,\sigma$ be density operators on $H$ (nonnegative operators of trace one; [[def-qc-density-operator]]). Their **trace distance** is
$$D(\rho,\sigma):=\tfrac12\|\rho-\sigma\|_1,$$
where $\|\cdot\|_1$ is the trace norm ([[def-qc-trace-norm]]). The factor $1/2$ is part of this state-distance convention. The diamond norm below is an unhalved norm on maps.
