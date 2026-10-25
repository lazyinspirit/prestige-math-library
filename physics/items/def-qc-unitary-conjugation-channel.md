---
id: def-qc-unitary-conjugation-channel
kind: definition
title: "Unitary conjugation map"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-linear-isometry-and-orthogonal-or-unitary-operator, lem-qc-linear-isometry-adjoint-identities]
justified_by: []
dependency_level: 1
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Definition

Let $H,K$ be nonzero finite-dimensional (have finite bases by [[def-dimension]])
complex inner-product spaces of equal
dimension. We call a surjective linear isometry
$U:H\to K$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]) a
**unitary map** between these spaces. By
[[lem-qc-linear-isometry-adjoint-identities]], its adjoint exists uniquely,
$U^\dagger U=I_H$, and $UU^\dagger=I_K$. Define the
**unitary conjugation map**
$$\operatorname{Ad}_U:\mathcal L(H)\to\mathcal L(K),\qquad \operatorname{Ad}_U(X)=UXU^\dagger.$$ 
Here $\mathcal L(H)$ and $\mathcal L(K)$ are the complex-linear endomorphism
spaces ([[def-linear-map]]). It is well-defined because the composition is
$U\circ X\circ U^\dagger:K\to K$, and it is complex-linear in $X$.
