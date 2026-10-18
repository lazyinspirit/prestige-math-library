---
id: ex-temperley-lieb-localization-denominator-v-plus-one
kind: example
title: "The normalized Hecke generator requires inverting v plus one"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-generic-type-a-hecke-algebra
  - def-temperley-lieb-quotient-and-jones-specialization
  - thm-temperley-lieb-hecke-markov-trace-descends-at-jones-specialization
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: normalized Hecke generators and loop parameter."
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.1, PDF pp. 13–15: localization and diagram parameter convention."
---

## Example

Over $D=\mathbb C[v,v^{-1},(v+1)^{-1}]$, the Jones idempotent generator $e_i=(T_i+1)/(v+1)$ is defined. The specialization $v=-1$ is not a ring map from $D$ to $\mathbb C$, because it sends the inverted element $v+1$ to zero. Moreover, in the specialized two-strand Hecke algebra the element $T_1+1$ is a nonzero square-zero element, so no scalar multiple of it is an idempotent generator.

## Facts & Assumptions

**Given:** The rank-two Hecke quadratic relation and the normalized generator definition.

[F1] $T_i^2=(v-1)T_i+v$ and $1,T_i$ are distinct standard-basis elements ([[def-generic-type-a-hecke-algebra]]).

[F2] The element $e_i=(T_i+1)/(v+1)$ is defined in the localization where $v+1$ is a unit ([[def-temperley-lieb-quotient-and-jones-specialization]]).

## Verification

**Proof technique:** direct calculation.

1.1 A unital map from $D$ to $\mathbb C$ specializing $v$ to $-1$ would have to send the unit $(v+1)^{-1}$ to an inverse of $(-1)+1=0$. No element of $\mathbb C$ is an inverse of zero, so the localization has no such specialization. Thus the formula in [F2] does not define $e_i$ at $v=-1$. [F2, given, algebra]

2.1 In the specialized Hecke algebra, put $x=T_1+1$. The quadratic relation at $v=-1$ gives $T_1^2=-2T_1-1$, hence $x^2=T_1^2+2T_1+1=0$. The standard basis in [F1] shows $x\ne0$ because $1$ and $T_1$ are linearly independent. If $c\in\mathbb C$ and $cx$ were idempotent, then $(cx)^2=cx$ would force $0=cx$; for $c\ne0$ this contradicts $x\ne0$. Therefore a scalar multiple cannot supply a normalized idempotent at this specialization. [F1, F2, step 1.1, algebra] ∎
