---
id: def-qc-pauli-group-on-zero-qubits
kind: definition
title: Pauli group on the empty register
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by: []
dependency_level: 2
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

The zero-qubit register is the empty tensor product $H_0=\mathbb C$ with
identity operator $I_{H_0}$. Define

$$P_0(k):=i^kI_{H_0}\quad(k\in\mathbb Z/4\mathbb Z),\qquad
\mathcal P_0:=\{P_0(k):k\in\mathbb Z/4\mathbb Z\}.$$

Then $P_0(k)P_0(\ell)=P_0(k+\ell)$ and $P_0(k)^*=P_0(-k)$, so
$\mathcal P_0$ is the cyclic scalar Pauli group of order four. Its Hermitian
elements are $I_{H_0}$ and $-I_{H_0}$. The binary-label space
$\mathbb F_2^0\times\mathbb F_2^0$ is the zero space, and the label of each
$P_0(k)$ is its unique element.

This supplies the empty-register case when an item uses Pauli notation whose
general positive-wire convention is stated separately.

## Sources

The empty tensor product and its basis are specified by
[[def-qc-register-and-computational-basis]] and
[[def-qc-tensor-register-and-permutation]]. The scalar phase convention is
the one used in de Wolf, *Quantum Computing: Lecture Notes*, §20.1. The
empty-register extension follows from the local empty-tensor definition and
the scalar arithmetic displayed above.
