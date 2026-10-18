---
id: def-qc-completely-positive-map
kind: definition
title: "Completely positive maps"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-non-negative-and-positive-operator, lem-qc-finite-ancilla-amplification-is-block-map, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, def-dimension, def-real-and-complex-inner-product-space, def-linear-map, def-vector-space-of-linear-maps, prop-linear-maps-form-a-vector-space]
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1 and Theorem 2.22"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.2.6"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $H$ and $K$ be finite-dimensional complex inner-product spaces and write $\mathcal L(H)$ and $\mathcal L(K)$ for their vector spaces of complex-linear endomorphisms with pointwise operations ([[def-dimension]], [[def-real-and-complex-inner-product-space]], [[def-vector-space-of-linear-maps]], [[prop-linear-maps-form-a-vector-space]]). Let $\Phi:\mathcal L(H)\to\mathcal L(K)$ be complex-linear. For each integer $r\ge1$, put $R=\mathbb C^r$ with its standard ordered register basis ([[def-qc-register-and-computational-basis]]). Write an operator $X\in\mathcal L(H\otimes R)$ in its unique $r\times r$ block form $X=[X_{ij}]$ with $X_{ij}\in\mathcal L(H)$, and define $\Phi^{(r)}(X)$ to have blocks $[\Phi(X_{ij})]$ on $K\otimes R$. Lemma [[lem-qc-finite-ancilla-amplification-is-block-map]] proves that this block rule defines a linear map on the full operator space for every finite $r$. For $r=1$, the extension is $\Phi$ under the canonical unitary identifications $x\mapsto x\otimes e_0$ and $y\mapsto y\otimes e_0$ proved in that lemma.

The map $\Phi$ is **completely positive** if, for every finite $r\ge1$, $\Phi^{(r)}$ sends every nonnegative operator on $H\otimes R$ to a nonnegative operator on $K\otimes R$ ([[def-non-negative-and-positive-operator]]). The quantifier includes $r=1$; complete positivity therefore implies positivity. No Kraus, Choi, or Stinespring characterization is part of this definition.
