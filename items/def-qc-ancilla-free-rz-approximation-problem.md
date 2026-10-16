---
id: def-qc-ancilla-free-rz-approximation-problem
kind: definition
title: Ancilla-free Rz approximation problem and T-count
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-clifford-t-gate-library
  - def-qc-elementary-circuit-resources
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-circuit-denotational-semantics
  - def-qc-global-phase-equivalence
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 10
---

## Definition

For $\theta\in\mathbb R$ set
$R_z(\theta)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$. Given
$\varepsilon>0$, the on-the-nose ancilla-free approximation problem is to
find a finite one-qubit Clifford+T word $U$ such that

$$\|R_z(\theta)-U\|_{\mathrm{op}}\le\varepsilon,$$

and minimize the number of occurrences of $T$ or $T^\dagger$; the $T$-count
of a word is this integer. An overall scalar Clifford phase $\omega^j I$,
viewed under [[def-qc-global-phase-equivalence]], is free in the resource
count but remains part of the exact matrix used in the displayed norm
inequality. Thus changing the representative can change feasibility even
when it leaves T-count unchanged. No workspace wire is
permitted. The operator norm is the finite-dimensional norm from
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]].

This defines a mathematical optimization problem for exact real inputs
$(\theta,\varepsilon)$. It does not specify a bit representation or assert a
Turing algorithm for arbitrary real input.

## Unresolved supplier checks

The actual QC07 gate/rotation and QC09 circuit/resource bodies were inspected.
The resource vector counts explicit occurrences and keeps weighted/query costs
separate; this problem's T-count is the stated number of $T$ or $T^\dagger$
occurrences while exact matrix phase remains in the error objective. No bit
encoding or Turing-time claim for arbitrary real inputs is made.
