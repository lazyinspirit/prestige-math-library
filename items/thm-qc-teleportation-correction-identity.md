---
id: thm-qc-teleportation-correction-identity
kind: theorem
title: Teleportation Pauli correction identity
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - thm-qc-teleportation-bell-expansion
  - def-qc-pauli-matrices
justified_by: []
proof_strategy: direct
axiom_use: "None; the identity is a finite calculation for two bits."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.3, equation (140), PDF p.84."
---

## Statement

For every qubit vector $|\psi\rangle$ and bits $a,b\in\{0,1\}$, the
teleportation branch byproduct is $X^bZ^a|\psi\rangle$, and the prescribed
correction returns it exactly:

$$Z^aX^bX^bZ^a|\psi\rangle=|\psi\rangle.$$

The operator order is part of the statement; no Pauli factors are commuted.

## Facts & Assumptions

**Given:** $a,b\in\{0,1\}$ and a qubit vector $|\psi\rangle$.

[A1] $a$ and $b$ are bits.

[F1] [[thm-qc-teleportation-bell-expansion]] gives the branch byproduct $X^bZ^a|\psi\rangle$.

[F2] [[def-qc-pauli-matrices]] defines $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

## Proof

1.1 From the matrices in [F2], direct multiplication gives $X^2=I$ and $Z^2=I$. Therefore $X^bX^b=I$ and $Z^aZ^a=I$ for the two possible values of each bit. [given, A1, F2, algebra]

2.1 Keeping the operator order fixed, $Z^aX^bX^bZ^a=Z^a(X^bX^b)Z^a=Z^aIZ^a=Z^aZ^a=I$ by step 1.1. This also covers $a=b=1$ without using an anticommutation swap. [step 1.1, algebra]

3.1 Applying the identity in step 2.1 to the byproduct vector from [F1] yields $Z^aX^b(X^bZ^a|\psi\rangle)=|\psi\rangle$ for every qubit vector. [step 2.1, F1, algebra] ∎
