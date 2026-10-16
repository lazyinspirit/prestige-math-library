---
id: def-qc-ensemble-and-purification
kind: definition
title: Ensemble and purification
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: [def-qc-density-operator, def-qc-dirac-notation-conversion, def-qc-tensor-register-and-permutation, def-qc-partial-trace]
justified_by: [thm-qc-ensemble-barycenter-is-density, thm-qc-purification-existence-and-unitary-equivalence]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2–2.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §§15.1 and 18.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

Let $H$ be a nonzero finite-dimensional complex-inner-product space. A **finite ensemble of density operators** on $H$ is a positive integer $n$, weights $p_1,\ldots,p_n\ge0$ with $\sum_{a=1}^np_a=1$, and density operators $\rho_1,\ldots,\rho_n$ on $H$. Its **barycenter** is $\bar\rho=\sum_{a=1}^np_a\rho_a$. A zero-weight component still names a density operator but contributes zero to the barycenter.

Let $K$ be any finite-dimensional complex-inner-product space. A **purification** of a density operator $\rho$ on $H$ is a unit vector $\Psi\in H\otimes K$ such that

$$\operatorname{Tr}_K(|\Psi\rangle\langle\Psi|)=\rho.$$

The tensor factors are ordered $H$ then $K$. Tensor products, outer products and partial trace have the conventions of [[def-qc-tensor-register-and-permutation]], [[def-qc-dirac-notation-conversion]] and [[def-qc-partial-trace]]. The auxiliary space may be any finite dimension that supports such a unit vector.
