---
id: def-qc-relative-phase
kind: definition
title: Relative Phase
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-pure-state-and-ray
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-dirac-notation-conversion
  - thm-qc-dirac-notation-coordinate-identity
  - def-real-and-complex-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
dependency_level: 6
---

## Definition

Fix an ordered orthonormal pair $e_0,e_1$ in a finite-dimensional complex inner-product space. If a vector has nonzero coordinates $\alpha,\beta$ on this pair, its **relative phase** on these coordinates is

$$\eta:=\frac{\beta/\alpha}{|\beta/\alpha|}\in\mathbb C,\qquad |\eta|=1.$$

The relative phase is undefined when either coordinate is zero. It is unchanged by multiplying the whole vector by any nonzero complex scalar. It can distinguish rays: for the unit vectors $\psi_\eta=(e_0+\eta e_1)/\sqrt2$, distinct values of $\eta$ give distinct rank-one projectors and distinct rays.

## Facts & Assumptions

**Given:** The ordered orthonormal pair and nonzero coordinates $\alpha,\beta$ in the Definition.

[F1] [[def-real-and-complex-inner-product-space]]: the root pairing is linear in the first argument and conjugate-linear in the second.

[L1] [[def-qc-pure-state-and-ray]] defines a pure state as a ray under nonzero common scalar multiplication. Its current draft definition body was read.

[L2] [[def-qc-one-qubit-gate-alphabet-and-rotations]] fixes the ordered computational basis for the qubit instance. Its current draft definition body was read; its item is now present in the QC07 manifest and page; the page remains draft.

[L3] [[def-qc-dirac-notation-conversion]] defines $|x\rangle\langle y|z=\langle z,y\rangle_{\rm root}x$ and the Dirac pairing. Its current draft definition body was read; the separate coordinate-matrix identity is assigned to its linked QC01 theorem.

[L4] [[thm-qc-dirac-notation-coordinate-identity]] proves that the coordinate matrix of $|x\rangle\langle y|$ is $[x][y]^\dagger$ in the stated orthonormal bases. Its current draft proof was read.

## Verification

1.1 For any nonzero scalar $c$, the ratio of the two coordinates of $c\psi$ is $(c\beta)/(c\alpha)=\beta/\alpha$. Its unit-modulus part is therefore also unchanged, so the Definition assigns a property of the ray. [given, L1, algebra]

1.2 Since $|\eta|=1$ and $e_0,e_1$ are orthonormal, $\psi_\eta$ has norm one. In the qubit instance [L2] identifies this ordered pair with $|0\rangle,|1\rangle$. By [L3] and [L4], its rank-one projector has matrix $\frac12\begin{pmatrix}1&\overline\eta\\\eta&1\end{pmatrix}$ in the ordered pair. [given, F1, L2, L3, L4, algebra]

2.1 If $\eta\ne\eta'$, the lower-left entries of these two projector matrices differ, so the projectors differ. Also, if $\psi_{\eta'}=c\psi_\eta$ for a nonzero scalar $c$, comparison of the $e_0$ coordinate forces $c=1$ and comparison of the $e_1$ coordinate forces $\eta'=\eta$, a contradiction. Hence changing the relative phase can change the ray. [step 1.2, L1, algebra] ∎
