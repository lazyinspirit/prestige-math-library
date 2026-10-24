---
id: def-qc-phase-aware-n-qubit-pauli-group
kind: definition
title: Phase aware n qubit pauli group
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-z-mod-p-is-a-field
  - def-finite-field-and-its-order
  - def-vector-space
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-tensor-map
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: [thm-qc-pauli-product-and-adjoint]
dependency_level: 5
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Preskill, Quantum Error Correction, Physics 229 Lecture Notes,
        Chapter 7
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None; this is a finite-dimensional definition."
verification:
  precheck: n/a
---

## Definition

The displayed tensor powers are tensor maps on the ordered factors, using [[def-qc-tensor-map]].
Fix an integer $n\ge 1$. Let $\mathcal H_n=Q_2^{\otimes n}$ be the ordered tensor register of $n$ qubits from [[def-qc-tensor-register-and-permutation]], and let $\mathbb F_2=\mathbb Z/2\mathbb Z$. We name the wires $1,\ldots,n$; wire $j$ is position $j-1$ in the source's $0$-based factor list. Bit tuples use the big-endian encoding from [[def-qc-ordered-bitstring-encoding]], so the first wire is the most significant bit. Write $X_j$ and $Z_j$ for the tensor maps with the displayed one-qubit matrix on wire $j$ and the identity on every other wire. For $x,z\in\mathbb F_2^n$, set $X^x=\bigotimes_{j=1}^n X^{x_j}$ and $Z^z=\bigotimes_{j=1}^n Z^{z_j}$, where an exponent $0$ means the identity on that factor and an exponent $1$ means the displayed Pauli matrix. For $k\in\mathbb Z/4\mathbb Z$, define

$$P(k,x,z):=i^kX^xZ^z.$$

The **phase-aware $n$-qubit Pauli set** $\mathcal P_n$ is the set of these operators with matrix multiplication. Its scalar subset is $Z_n:=\{i^k I_{\mathcal H_n}:k\in\mathbb Z/4\mathbb Z\}$. The product-and-adjoint theorem proves that $\mathcal P_n$ is a group and that $Z_n$ is its center.

## Remarks

The Pauli algebra theorem [[thm-qc-pauli-algebra]] verifies Y=iXZ, so the one-qubit Y is P(1,1,1). The phase coordinate is modulo 4; the binary label (x,z) alone is used only after quotienting by Z_n.
