---
id: def-qc-fidelity
kind: definition
title: "Fidelity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: ["def-non-negative-and-positive-operator", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "def-qc-trace-norm", "def-qc-density-operator"]
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
      locator: "§3.2.1–3.2.3, root-fidelity convention and purification characterization."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.1–2, PDF pp.36–40; complete cross-read qc_r2 ledger, summary/corroboration only"
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $\rho,\sigma$ be density operators on $H$ (nonnegative operators of trace one; [[def-qc-density-operator]]). Their **root fidelity** is
$$F(\rho,\sigma):=\|\sqrt\rho\,\sqrt\sigma\|_1,$$
where $\sqrt\rho$ and $\sqrt\sigma$ are the unique non-negative square roots and $\|\cdot\|_1$ is the finite-dimensional trace norm ([[def-qc-trace-norm]]). This library uses root fidelity; the squared quantity $F(\rho,\sigma)^2$ is called squared fidelity.

## Remarks

The alternative formula $F(\rho,\sigma)=\operatorname{tr}\sqrt{\sqrt\rho\,\sigma\,\sqrt\rho}$ is proved in [[lem-qc-fidelity-root-formula-equivalence]]. Preskill uses the squared-fidelity convention; when using that source, its quantity is $F^2$ here.
