---
id: thm-qc-bell-transform-inverse
kind: theorem
title: Bell preparation transform and inverse
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qc-bell-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-cnot-and-control-target-order
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-tensor-map
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
justified_by: []
proof_strategy: direct
axiom_use: "None; all spaces and basis calculations are finite-dimensional and choice-free."
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
      locator: "Chapter 6, §6.3.1, Example 6.50 and Bell-basis discussion."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§7.2, equation (82) and the decoding table, PDF pp.61–62."
---

## Statement

On the ordered two-qubit register, let
$B:=\operatorname{CNOT}_{1\to2}(H\otimes I)$, where operator products act
right-to-left. For $a,b\in\{0,1\}$,

$$B|ab\rangle=\frac{|0,b\rangle+(-1)^a|1,b\mathbin\oplus1\rangle}{\sqrt2}=(I\otimes X^b)(Z^a\otimes I)|\Phi^+\rangle.$$

In the label order $00,01,10,11$, these are respectively
$|\Phi^+\rangle,|\Psi^+\rangle,|\Phi^-\rangle,|\Psi^-\rangle$. They form an
orthonormal basis of $Q_2\otimes Q_2$, and
$B^\dagger=(H\otimes I)\operatorname{CNOT}_{1\to2}$ maps those four vectors
back to their labels.

## Facts & Assumptions

**Given:** The ordered two-qubit computational basis, $a,b\in\{0,1\}$, and the operators in the Statement.

[A1] $a$ and $b$ are bits; $\oplus$ is addition modulo $2$.

[F1] [[def-qc-bell-basis]] defines $|\Phi^+\rangle,|\Phi^-\rangle,|\Psi^+\rangle,|\Psi^-\rangle$ and fixes the label order $00,01,10,11$ as phase bit then flip bit.

[F2] [[def-qc-one-qubit-gate-alphabet-and-rotations]] gives $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and verifies $H^*=H$ and $H^2=I$.

[F3] [[def-qc-cnot-and-control-target-order]] defines $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin\oplus a\rangle$ in control-first order.

[F4] [[def-qc-tensor-register-and-permutation]] makes the ordered product basis lexicographic in the factor indices; for $Q_2\otimes Q_2$ it consists of $|00\rangle,|01\rangle,|10\rangle,|11\rangle$.

[F5] [[thm-qc-computational-basis-orthonormal]] proves that the ordered computational basis of each $Q_2$ factor is orthonormal.

[F6] [[def-qc-tensor-map]] defines $H\otimes I$ by $(H\otimes I)(x\otimes y)=Hx\otimes y$ and extends this rule linearly.

[F7] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] defines $T^*$ by $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F8] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]] identifies the matrix of an adjoint in orthonormal bases with the conjugate transpose.

## Proof

1.1 The matrix in [F2] gives $H|a\rangle=(|0\rangle+(-1)^a|1\rangle)/\sqrt2$ for each bit $a$. By [F6], $(H\otimes I)|ab\rangle=(|0,b\rangle+(-1)^a|1,b\rangle)/\sqrt2$. [given, A1, F2, F6, algebra]

1.2 From [F3], applying CNOT twice fixes every basis vector because $(t\oplus a)\oplus a=t$. Its matrix permutes the orthonormal basis [F4], so its inverse is its transpose and equals itself. The matrix of $H\otimes I$ in [F4] is real symmetric and its square is the identity by [F2]. Thus both factors are self-adjoint involutions, and direct composition gives $(H\otimes I)\operatorname{CNOT}_{1\to2}B=I=B(H\otimes I)\operatorname{CNOT}_{1\to2}$. [F2, F3, F4, F5, F6, algebra]

2.1 Apply the control-first action in [F3] to the two terms of step 1.1. The control-zero term is fixed, while the control-one term changes its target from $b$ to $b\oplus1$. Therefore $B|ab\rangle=(|0,b\rangle+(-1)^a|1,b\oplus1\rangle)/\sqrt2$. [step 1.1, F3, algebra]

3.1 Substituting $00,01,10,11$ into step 2.1 gives $\Phi^+,\Psi^+,\Phi^-,\Psi^-$ in that order, exactly as defined in [F1]. Each has norm one because it is a signed sum of two distinct orthonormal computational basis vectors from [F5], divided by $\sqrt2$. The inner product of $\Phi^+$ with $\Phi^-$ and of $\Psi^+$ with $\Psi^-$ is $(1-1)/2=0$; cross-pair inner products are zero because their computational supports are disjoint. [step 2.1, F1, F5, algebra]

4.1 The four vectors in step 3.1 are an orthonormal set of four vectors in the four-dimensional space whose product basis is listed in [F4]; hence they are an orthonormal basis. [step 3.1, F4, F5, algebra]

5.1 In matrices, $(AB)_{ij}=\sum_k A_{ik}B_{kj}$, so conjugating and transposing this finite sum gives $(AB)^\dagger=B^\dagger A^\dagger$. By [F7]–[F8] this is the adjoint product rule in the register pairing. Since both factors in [F6] and [F3] are self-adjoint by step 1.2, $B^\dagger=(H\otimes I)\operatorname{CNOT}_{1\to2}$. Applying CNOT sends the four Bell vectors to $\frac{|0\rangle+|1\rangle}{\sqrt2}\otimes|0\rangle$, $\frac{|0\rangle+|1\rangle}{\sqrt2}\otimes|1\rangle$, $\frac{|0\rangle-|1\rangle}{\sqrt2}\otimes|0\rangle$, and $\frac{|0\rangle-|1\rangle}{\sqrt2}\otimes|1\rangle$, respectively. By the matrix in [F2], $H$ sends the first factors in these expressions to $|0\rangle,|0\rangle,|1\rangle,|1\rangle$, respectively, so the reverse sequence recovers $00,01,10,11$. [step 3.1, step 1.2, F2, F3, F6, F7, F8, algebra] ∎
