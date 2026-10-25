---
id: def-qc-kraus-representation
kind: definition
title: "Finite Kraus representation"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension]
justified_by: []
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.2.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Definition

Let $H$ and $K$ be finite-dimensional (have finite bases by [[def-dimension]])
complex inner-product spaces ([[def-real-and-complex-inner-product-space]]),
with the root convention that
each inner product is linear in its first argument. Write $\mathcal L(H)$ for
the complex-linear endomorphisms of $H$ and $\mathcal L(H,K)$ for the
complex-linear maps from $H$ to $K$ ([[def-linear-map]]). A **finite Kraus
representation** of a complex-linear map
$\Phi:\mathcal L(H)\to\mathcal L(K)$ is a finite family
$(K_a)_{a\in A}\subseteq\mathcal L(H,K)$ such that

$$\Phi(X)=\sum_{a\in A}K_a X K_a^\dagger\qquad\text{for every }X\in\mathcal L(H),$$

where $K_a^\dagger:K\to H$ is the adjoint
([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]), which exists
uniquely in finite dimensions ([[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).
The composition $K_a\circ X\circ K_a^\dagger$ maps $K$ to $K$, so the sum
defines an output endomorphism for each input endomorphism $X$. The index set
$A$ may be empty; its sum is then the zero map. Zero operators are allowed in
a nonempty family.
