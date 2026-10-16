---
id: thm-qa-12-amplification-rotation-correctness
kind: theorem
title: "Exact success probability after amplitude amplification"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-12-amplitude-amplification
  - lem-qa-12-amplification-plane-invariant
  - thm-qc-reflection-unitary-involution
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-unit-vector-projector-is-density
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - cor-pi-is-the-first-positive-sine-zero
  - thm-sine-cosine-signs-monotonicity-and-ranges
justified_by: []
proof_strategy: direct
axiom_use: "None; the induction is over the natural-number iteration count."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

Let $a\in[0,1]$ be the initial success weight and let $\theta\in[0,\pi/2]$ be the unique angle satisfying $\sin^2\theta=a$. After exactly $k\ge0$ standard amplitude-amplification iterates, the probability of the good outcome of $\{\Pi_{\mathrm{good}},I-\Pi_{\mathrm{good}}\}$ is
$
\sin^2((2k+1)\theta).
$
The endpoints $a=0$ and $a=1$ are included by direct evaluation, without normalizing a zero component.

## Facts & Assumptions

**Given:** The sampler, success projection, and integer $k$ in the Statement.

[F1] [[lem-qa-12-amplification-plane-invariant]]: for $0<a<1$, the ordered $(|B\rangle,|G\rangle)$ matrix of $Q$ is the rotation through $2\theta$; at $a=0,1$, the prepared vector is fixed up to phase.

[F2] [[thm-qc-unit-vector-projector-is-density]]: the outer product of a unit vector is a density operator.

[F3] [[thm-qc-projective-measurement-outcome-law]]: for a density operator $\rho$, the probability of the outcome projection $\Pi$ is $\operatorname{tr}(\rho\Pi)$.

[F4] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]]: sine and cosine satisfy the real angle-addition identities; [[cor-trigonometric-parity-and-pythagorean-identity]] gives $\sin^2x+\cos^2x=1$.

[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$.

[F6] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing on $[0,\pi/2]$, so $\sin^2\theta=a$ has a unique $\theta\in[0,\pi/2]$ for each $a\in[0,1]$.

## Proof

1.1 Assume $0<a<1$. The initial coordinates in the invariant ordered basis are $(\cos\theta,\sin\theta)$. Multiplication by the matrix in [F1] and the addition formulas in [F4] send $(\cos t,\sin t)$ to $(\cos(t+2\theta),\sin(t+2\theta))$. Starting at $t=\theta$, induction on $k$ therefore gives coordinates $(\cos((2k+1)\theta),\sin((2k+1)\theta))$ after $k$ iterates. [given, F1, F4, F6, induction]

2.1 The good component is the second coordinate, so its squared norm is $\sin^2((2k+1)\theta)$. The prepared unit vector gives a density operator by [F2], and [F3] identifies this squared component norm with the projective-measurement outcome probability. [given, F2, F3, step 1.1, algebra]

3.1 If $a=0$, then $\theta=0$ and [F1] gives success probability $0=\sin^2((2k+1)0)$. If $a=1$, then $\theta=\pi/2$; [F1] changes only the global sign on each iterate, and [F5] gives $\sin^2((2k+1)\pi/2)=1$. Thus the same formula holds at both endpoints. [given, F1, F5, algebra] ∎
