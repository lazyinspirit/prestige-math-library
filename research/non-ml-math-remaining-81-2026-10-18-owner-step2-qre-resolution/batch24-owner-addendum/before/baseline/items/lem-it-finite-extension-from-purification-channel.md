---
id: lem-it-finite-extension-from-purification-channel
kind: lemma
title: Every finite extension is obtained from a purification by a channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
- thm-qc-purification-existence-and-unitary-equivalence
- thm-qc-schmidt-decomposition
- def-qc-quantum-channel
- thm-qc-isometry-partial-trace-is-channel
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Let $\omega_{ZA}$ be any finite-dimensional extension of $\rho_A$, and let $|\psi\rangle_{RA}$ purify $\rho_A$ with $R$ a copy of $A$. There is a CPTP map $\Lambda:R\to Z$ with $(\Lambda\otimes\operatorname{id}_A)(\psi)=\omega$.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[thm-qc-purification-existence-and-unitary-equivalence]]: Purifications exist and are unitarily equivalent after padding.

[F2] [[thm-qc-schmidt-decomposition]]: Schmidt decomposition.

[F3] [[def-qc-quantum-channel]]: Finite-dimensional quantum channel.

[F4] [[thm-qc-isometry-partial-trace-is-channel]]: An isometry followed by partial trace is a channel.

## Proof

1.1 Purify $\omega$ on $ZAF$ and reorder to $A(ZF)$. [F1, F2, F3, F4, given, algebra, construct]

2.1 In an eigenbasis of the positive part of $\rho_A$, the two purifications have the same Schmidt coefficients. Send each corresponding Schmidt vector of $R$ isometrically to its partner in $ZF$. Enlarge $F$ by a finite pure ancilla if necessary so this partial isometry extends to an isometry on all of $R$; the remaining orthonormal basis vectors are sent to unused orthonormal vectors. [F1, F2, F3, F4, given, algebra, construct, step 1.1]

3.1 Taking the partial trace of that isometric output over $F$ defines the desired channel. Its action on the fixed purification is the chosen purification of $\omega$. This also covers singular $\rho_A$, since the zero-Schmidt directions never occur in $\psi$. [F1, F2, F3, F4, given, algebra, construct, step 2.1] ∎
