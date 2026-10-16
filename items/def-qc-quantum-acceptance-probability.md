---
id: def-qc-quantum-acceptance-probability
kind: definition
title: "Quantum acceptance probability for a finite promise computation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-promise-computation-model
  - def-real-and-complex-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-qc-povm-and-outcome-law
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections III.2 and IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Fix a length-$n$ finite promise computation from [[def-qc-promise-computation-model]], with input $x\in\{0,1\}^n$, zero-initialized auxiliary register $|0^{a(n)}\rangle$, circuit unitary $U_{C_n}$, and ordered output-wire tuple $O_n$. Let $P_{O_n}$ be the tensor-factor permutation that moves $O_n$, in its declared order, to the front, and let $W_n$ be the ordered tuple of all remaining wires ([[def-qc-tensor-register-and-permutation]]). Set
$$\psi_x:=U_{C_n}(|x\rangle\otimes|0^{a(n)}\rangle),\qquad v_x:=\operatorname{coord}(P_{O_n}\psi_x).$$
Here coordinates are in the ordered computational basis. In this definition, $\langle\cdot,\cdot\rangle_{\rm root}:=\langle\cdot,\cdot\rangle_{\otimes}$ denotes the inner product on the reordered complete tensor register from [[def-qc-tensor-register-and-permutation]], linear in its first argument and conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]). For $z\in\{0,1\}^{|O_n|}$ and $w\in\{0,1\}^{|W_n|}$, write $e_{z,w}$ for the corresponding product-basis vector and define
$$p_{C_n}(z\mid x):=\sum_{w\in\{0,1\}^{|W_n|}}\left|\langle P_{O_n}\psi_x,e_{z,w}\rangle_{\rm root}\right|^2.$$
The acceptance probability is
$$p_{C_n}(x):=\sum_{\substack{z\in\{0,1\}^{|O_n|}\\A_n(x,z)=1}}p_{C_n}(z\mid x).$$
Equivalently, if $E_{A,x}$ is the diagonal projection onto the basis vectors $(z,w)$ with $A_n(x,z)=1$, then $p_{C_n}(x)=\operatorname{Tr}(E_{A,x}v_xv_x^\dagger)$; the matrix adjoint is conjugate transpose in an orthonormal basis ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

These are finite sums. The definition itself does not assert normalization, positivity of the resulting operator expression, or a probability bound; those consequences are the purpose of [[thm-qc-output-acceptance-law-normalizes]]. No Dirac bra convention is used here: every amplitude uses the root pairing displayed above.
