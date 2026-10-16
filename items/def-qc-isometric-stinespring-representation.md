---
id: def-qc-isometric-stinespring-representation
kind: definition
title: "Isometric Stinespring representation"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-qc-tensor-register-and-permutation, def-qc-partial-trace, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-linear-isometry-and-orthogonal-or-unitary-operator, lem-qc-linear-isometry-adjoint-identities]
justified_by: []
dependency_level: 3
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1–2.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Definition

Let $H$, $K$, and $E$ be finite-dimensional (have finite bases by
[[def-dimension]]) complex inner-product spaces
([[def-real-and-complex-inner-product-space]]), and let
$V:H\to K\otimes E$ be a linear isometry
([[def-linear-isometry-and-orthogonal-or-unitary-operator]]), so
$V^\dagger V=I_H$ by [[lem-qc-linear-isometry-adjoint-identities]]. The map

$$\Phi_V(X):=\operatorname{Tr}_E(VXV^\dagger),\qquad X\in\mathcal L(H),$$

is the **isometric Stinespring form** associated with $V$. An **isometric
Stinespring representation** ([[def-linear-map]]) of
$\Phi:\mathcal L(H)\to\mathcal L(K)$ is such a formula, where
$\operatorname{Tr}_E$ is the finite partial trace
([[def-qc-partial-trace]]) under the tensor convention
[[def-qc-tensor-register-and-permutation]], together with its chosen finite
environment $E$ and isometry $V$. The composition
$V\circ X\circ V^\dagger$ is an endomorphism of $K\otimes E$, and the
partial trace maps it linearly to an endomorphism of $K$. Thus the displayed
formula defines a complex-linear map on the full input operator space. This
definition makes no existence assertion for an arbitrary map.
