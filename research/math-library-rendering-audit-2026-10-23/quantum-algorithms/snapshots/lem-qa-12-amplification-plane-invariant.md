---
id: lem-qa-12-amplification-plane-invariant
kind: lemma
title: "Amplitude-amplification invariant plane"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-12-prepared-success-subspace
  - def-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qc-dirac-notation-conversion
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-unit-vector-projector-is-density
  - def-trace-of-an-endomorphism
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-bessel-inequality-and-finite-parseval-identity
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-addition-formulas
  - cor-pi-is-the-first-positive-sine-zero
justified_by: []
proof_strategy: direct
axiom_use: "None; the only basis used is a finite orthonormal basis, and no choice principle is needed."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Let $A,\Pi_{\mathrm{good}},a,|G\rangle,|B\rangle$ be as in [[def-qa-12-prepared-success-subspace]], with $0<a<1$, and let $\theta\in(0,\pi/2)$ be the unique angle satisfying $\sin^2\theta=a$. For
$
Q:=-A S_0 A^\dagger S_{\mathrm{good}},
$
the subspace $\operatorname{span}\{|B\rangle,|G\rangle\}$ is invariant. In the ordered orthonormal basis $(|B\rangle,|G\rangle)$, the restriction of $Q$ is
$
\begin{pmatrix}
\cos(2\theta)&-\sin(2\theta)\\
\sin(2\theta)&\cos(2\theta)
\end{pmatrix}.
$
For $a=0$ the prepared vector spans an invariant bad line and $Q|\psi\rangle=|\psi\rangle$; for $a=1$ it spans an invariant good line and $Q|\psi\rangle=-|\psi\rangle$.

## Facts & Assumptions

**Given:** The prepared unitary, success projection, and access operations in the Statement.

[F1] [[def-qa-12-prepared-success-subspace]]: $|\psi\rangle=A|0\rangle=\sqrt a\,|G\rangle+\sqrt{1-a}\,|B\rangle$, with normalized good and bad components when $0<a<1$.

[F2] [[def-qc-reflection]]: $S_{\mathrm{good}}=I-2\Pi_{\mathrm{good}}$ and $S_0=I-2|0\rangle\langle0|$; these are the $S$-sign reflections, distinct from $R_\Pi=2\Pi-I$.

[F3] [[thm-qc-reflection-unitary-involution]]: each orthogonal-projector reflection $S_\Pi$ is a self-adjoint unitary involution.

[F4] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: sine and cosine obey the real addition formulas and $\sin^2x+\cos^2x=1$.

[F5] [[thm-quarter-turn-values-and-shift-formulas]] and [[def-pi-via-first-positive-cosine-zero]]: $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, and $\pi/2$ is the first positive cosine zero. [[thm-sine-and-cosine-derivatives]] gives $\sin'=\cos$, so sine is strictly increasing on $[0,\pi/2]$ because cosine is positive before its first positive zero.

## Proof

1.1 Put $c=\sqrt{1-a}=\cos\theta$ and $s=\sqrt a=\sin\theta$. The two components $\Pi_{\mathrm{good}}|\psi\rangle$ and $(I-\Pi_{\mathrm{good}})|\psi\rangle$ are orthogonal because $\Pi_{\mathrm{good}}$ is an orthogonal projection. Their nonzero normalized vectors therefore form an orthonormal pair, and $|\psi\rangle=c|B\rangle+s|G\rangle$. The angle $\theta$ is unique in $(0,\pi/2)$: sine is continuous there, has endpoint values $0,1$, and is strictly increasing because its derivative is the positive cosine before the first positive cosine zero. [given, F1, F5, algebra]

2.1 In the ordered basis $(|B\rangle,|G\rangle)$, $\Pi_{\mathrm{good}}=\operatorname{diag}(0,1)$, so $S_{\mathrm{good}}=\operatorname{diag}(1,-1)$. Also $A S_0 A^\dagger=I-2|\psi\rangle\langle\psi|$, since $A|0\rangle=|\psi\rangle$. The matrix of this latter reflection is [given, F1, F2, F3, F4, step 1.1, algebra]
$
\begin{pmatrix}1-2c^2&-2cs\\-2cs&1-2s^2\end{pmatrix}
=\begin{pmatrix}-\cos(2\theta)&-\sin(2\theta)\\-\sin(2\theta)&\cos(2\theta)\end{pmatrix}.
$
The product $Q=- (A S_0 A^\dagger)S_{\mathrm{good}}$ is therefore the displayed rotation matrix. This proves invariance and the claimed restriction. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 If $a=0$, then $\Pi_{\mathrm{good}}|\psi\rangle=0$, so $S_{\mathrm{good}}|\psi\rangle=|\psi\rangle$, while $A S_0 A^\dagger|\psi\rangle=-|\psi\rangle$; hence $Q|\psi\rangle=|\psi\rangle$. If $a=1$, then $S_{\mathrm{good}}|\psi\rangle=-|\psi\rangle$ and $A S_0 A^\dagger|\psi\rangle=-|\psi\rangle$, hence $Q|\psi\rangle=-|\psi\rangle$. No zero component is normalized. [given, F2, F3, algebra] ∎
