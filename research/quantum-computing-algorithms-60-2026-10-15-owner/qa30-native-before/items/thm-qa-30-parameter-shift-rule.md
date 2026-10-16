---
id: thm-qa-30-parameter-shift-rule
kind: theorem
title: "Parameter-shift derivative for a Pauli generator"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-30-variational-quantum-algorithm
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
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
---

## Statement

Suppose one parameter occurs in exactly one gate $U_j(\theta)=e^{-i\theta P/2}$ with $P=P^*$ and $P^2=I$, while all other circuit factors, the input state, and the Hermitian observable are independent of $\theta$. Then for each linear expectation term $C(\theta)$,
$$\partial_\theta C(\theta)=\frac12\bigl(C(\theta+\pi/2)-C(\theta-\pi/2)\bigr).$$
The identity is exact. Finite-shot estimates of the two shifted terms have separate sampling and measurement costs.

## Facts & Assumptions

**Given:** $P^2=I$, finite-dimensional unitary factors, a fixed density operator, and a Hermitian observable.

[F1] [[def-qc-circuit-denotational-semantics]]: circuit composition denotes the corresponding finite product of operators.

[F2] [[def-qc-dirac-notation-conversion]]: Dirac expectations agree with the root-space matrix coefficient convention.

## Proof

**Proof technique:** direct.

1.1 The power series and $P^2=I$ give $e^{-i\theta P/2}=\cos(\theta/2)I-i\sin(\theta/2)P$. Absorb all other fixed circuit factors into fixed vectors/operators and expand the expectation bilinearly. Products of the two trigonometric factors reduce by the double-angle identities to $C(\theta)=a+b\cos\theta+c\sin\theta$ for constants independent of $\theta$. [given, F1, F2, algebra]

2.1 Differentiating gives $C'(\theta)=-b\sin\theta+c\cos\theta$. Direct substitution yields $C(\theta+\pi/2)-C(\theta-\pi/2)=2(-b\sin\theta+c\cos\theta)$, proving the formula. For a finite sum of such expectation terms, differentiation and the shifted difference both distribute linearly. [given, step 1.1, algebra] ∎
