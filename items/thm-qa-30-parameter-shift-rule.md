---
id: thm-qa-30-parameter-shift-rule
kind: theorem
title: "Parameter-shift derivative for a Pauli generator"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-30-variational-quantum-algorithm
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
  - def-qa-19-finite-matrix-dynamics
  - def-functional-calculus-for-a-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-eulers-formula
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - thm-quarter-turn-values-and-shift-formulas
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Suppose one parameter occurs in exactly one gate $U_j(\theta)=e^{-i\theta P/2}$ with $P=P^*$ and $P^2=I$, while all other circuit factors, the input state, and the Hermitian observable are independent of $\theta$. Then for each linear expectation term $C(\theta)$,
$$\partial_\theta C(\theta)=\frac12\bigl(C(\theta+\pi/2)-C(\theta-\pi/2)\bigr).$$
The identity is exact. Finite-shot estimates of the two shifted terms have separate sampling and measurement costs.

## Facts & Assumptions

**Given:** $P^2=I$, finite-dimensional unitary factors, a fixed density operator, and a Hermitian observable.

[F1] [[def-qc-circuit-denotational-semantics]]: circuit composition denotes the corresponding finite product of operators.

[F2] [[def-qc-dirac-notation-conversion]]: Dirac expectations agree with the root-space matrix coefficient convention.

[F3] [[def-qa-19-finite-matrix-dynamics]] and [[def-functional-calculus-for-a-normal-endomorphism]] define $e^{-itP}$ by the finite spectral functional calculus.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] diagonalizes Hermitian $P$; since $P^2=I$, each eigenvalue is $+1$ or $-1$.

[F5] [[thm-eulers-formula]]: $\exp(ix)=\cos x+i\sin x$ for real $x$.

[F6] [[cor-trigonometric-parity-and-pythagorean-identity]]: cosine is even and sine is odd.

[F7] [[thm-sine-and-cosine-addition-formulas]] gives the double-angle identities.

[F8] [[thm-sine-and-cosine-derivatives]] gives $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$.

[F9] [[thm-quarter-turn-values-and-shift-formulas]] gives the shifts by $\pm\pi/2$ used in the centered difference.

## Proof

**Proof technique:** direct.

1.1 By [F3]–[F4], write the spectral projections of $P$ as $\Pi_+,\Pi_-$ (either may be zero), so $e^{-i\theta P/2}=\exp(-i\theta/2)\Pi_++\exp(i\theta/2)\Pi_-$. Euler's formula [F5] and parity [F6] give $e^{-i\theta P/2}=\cos(\theta/2)I-i\sin(\theta/2)P$. Absorb all other fixed circuit factors into fixed vectors/operators and expand the expectation bilinearly. Products of the two trigonometric factors reduce by [F7] to $C(\theta)=a+b\cos\theta+c\sin\theta$ for constants independent of $\theta$. [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 By [F8], differentiation gives $C'(\theta)=-b\sin\theta+c\cos\theta$. The shift formulas [F9] give $C(\theta+\pi/2)-C(\theta-\pi/2)=2(-b\sin\theta+c\cos\theta)$, proving the formula. For a finite sum of such expectation terms, differentiation and the shifted difference both distribute linearly. [given, F8, F9, step 1.1, algebra] ∎
