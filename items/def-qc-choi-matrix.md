---
id: def-qc-choi-matrix
kind: definition
title: "Choi matrix with input factor first"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, def-qc-tensor-map]
justified_by: []
dependency_level: 3
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1–2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.3.1–3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Definition

Let $H_{\mathrm{in}}$ and $H_{\mathrm{out}}$ be finite-dimensional (have
finite bases by [[def-dimension]]) complex inner-product spaces
([[def-real-and-complex-inner-product-space]]), and fix an
ordered orthonormal basis $\mathcal B=(e_0,\ldots,e_{n-1})$ of
$H_{\mathrm{in}}$ (the register basis convention is in
[[def-qc-register-and-computational-basis]]). For $i,j<n$, let
$E_{ij}\in\mathcal L(H_{\mathrm{in}})$ be the matrix unit, where
$\mathcal L(H_{\mathrm{in}})$ denotes the complex-linear endomorphisms
([[def-linear-map]]),
$E_{ij}x:=\langle x,e_j\rangle e_i$, using the root inner product convention
that the first argument is linear. Given a complex-linear map
$\Phi:\mathcal L(H_{\mathrm{in}})\to\mathcal L(H_{\mathrm{out}})$
([[def-linear-map]]), its **Choi matrix relative to $\mathcal B$** is

$$J_{\mathcal B}(\Phi):=\sum_{i,j<n} E_{ij}\otimes\Phi(E_{ij})\in\mathcal L(H_{\mathrm{in}}\otimes H_{\mathrm{out}}),$$
where the operator tensor is the tensor map of [[def-qc-tensor-map]] and the
tensor inner product is the finite product pairing in
[[def-qc-tensor-register-and-permutation]].

The tensor factors are ordered input first and output second. The coordinate
matrix has size $(n\,\dim H_{\mathrm{out}})\times(n\,\dim H_{\mathrm{out}})$.
The chosen input basis is part of this definition. If the input basis is
empty, the displayed sum is empty; if $\dim H_{\mathrm{out}}=0$, each
summand is zero and $J_{\mathcal B}(\Phi)$ is the unique endomorphism of the
zero-dimensional tensor product.
