---
id: def-qc-projective-measurement
kind: definition
title: "Finite projective measurements"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-non-negative-and-positive-operator, def-qc-density-operator, def-dimension, def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, def-vector-space-of-linear-maps, prop-linear-maps-form-a-vector-space, lem-composition-and-identity-linear-maps]
justified_by: [thm-qc-projective-measurement-outcome-law]
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $\Omega$ be a finite nonempty outcome set ([[def-dimension]], [[def-real-and-complex-inner-product-space]]). Its **endomorphisms** are its complex-linear maps $H\to H$ ([[def-vector-space-of-linear-maps]]); for an endomorphism $P$, $P^*$ denotes its adjoint, which exists uniquely in finite dimension ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]). A **finite projective measurement** on $H$ with outcomes $\Omega$ is a family $(P_a)_{a\in\Omega}$ of endomorphisms such that

$$P_a^*=P_a,\qquad P_a^2=P_a,\qquad P_aP_b=0\ (a\ne b),\qquad \sum_{a\in\Omega}P_a=I_H.$$

The products above are compositions, the sum is pointwise addition of endomorphisms, and $I_H$ is the identity map; these operations preserve linear maps ([[prop-linear-maps-form-a-vector-space]], [[lem-composition-and-identity-linear-maps]]). The projections $P_a=0$ are permitted. For a density operator $\rho$ on $H$ (nonnegative and trace one, [[def-qc-density-operator]]), the associated outcome weights are $p_\rho(a)=\operatorname{tr}(\rho P_a)$; their nonnegativity and normalization are proved in [[thm-qc-projective-measurement-outcome-law]].
