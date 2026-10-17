---
id: ex-occupied-projector-discontinuity-at-zero-gap
kind: example
title: The occupied spectral projector has no continuous extension through a zero gap
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-self-consistent-projector-response-map]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §1.4–§1.6
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
verification:
  precheck: pending
---

## Example

For $n=2,r=1$, let $H(t)=\operatorname{diag}(-t,t)$. For every $t\ne0$ the
lowest eigenvalue is simple, so its occupied projector is defined; at $t=0$ the
occupied/unoccupied gap vanishes and the lowest rank-one projector is not
unique. The two one-sided limits of the defined projectors differ.

## Facts & Assumptions

**Given:** The Hermitian path $H(t)=\operatorname{diag}(-t,t)$ and the rank-one lowest-eigenvalue projector $\Pi_1(H(t))$ when the gap is positive.

[F1] The occupied projector is uniquely defined only on a domain with a strict $r$th gap ([[def-self-consistent-projector-response-map]]).

## Verification

1.1 If $t>0$, then $-t<t$ and the lowest eigenvector is $e_1$, so $\Pi_1(H(t))=e_1e_1^*$. If $t<0$, then $t<-t$ and the lowest eigenvector is $e_2$, so $\Pi_1(H(t))=e_2e_2^*$. [given, F1, algebra]

1.2 At $t=0$, both eigenvalues equal $0$, so the gap is $0$ and every rank-one orthogonal projector onto a line is a lowest-eigenspace projector; there is no unique $\Pi_1(H(0))$ under [F1]. [given, F1, algebra]

2.1 The limits as $t\downarrow0$ and $t\uparrow0$ are respectively $e_1e_1^*$ and $e_2e_2^*$, which are distinct because their Frobenius distance is $\sqrt2$. Thus no continuous extension of the uniquely gapped projector exists at $t=0$. [step 1.1, step 1.2, algebra] ∎
