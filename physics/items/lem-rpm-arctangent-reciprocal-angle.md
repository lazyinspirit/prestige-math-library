---
id: lem-rpm-arctangent-reciprocal-angle
kind: lemma
title: "Reciprocal positive arguments of the principal inverse tangent"
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-principal-inverse-tangent
  - lem-tangent-principal-branch-is-bijective
  - def-tangent-cotangent-secant-cosecant
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
dependency_roles:
  def-principal-inverse-tangent: mathematical-premise
  lem-tangent-principal-branch-is-bijective: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
physical_scope: "Pure trigonometric identity for the principal inverse tangent; it is used only to rewrite a formal model limit."
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.23 Inverse Trigonometric Functions, principal values and reflection formulas"
      url: "https://dlmf.nist.gov/4.23"
    - title: "OpenStax, Precalculus 2e, §6.3 Inverse Trigonometric Functions"
      url: "https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions"
verification: {}
---

## Statement

For every $y>0$,

$$\arctan y+\arctan(1/y)=\frac{\pi}{2},$$

where $\arctan$ takes values in $(-\pi/2,\pi/2)$.

## Facts & Assumptions

**Given:** A positive real $y$ and the principal inverse-tangent convention.

[F1] Tangent is a continuous strictly increasing bijection from $(-\pi/2,\pi/2)$ onto $\mathbb R$, and its inverse obeys $\tan(\arctan z)=z$ and $\arctan(\tan u)=u$ on that interval ([[def-principal-inverse-tangent]], [[lem-tangent-principal-branch-is-bijective]]).

[F2] Tangent is $\sin u/\cos u$ on the domain where cosine is nonzero ([[def-tangent-cotangent-secant-cosecant]]).

[F3] The values at zero, quarter-turn shifts, and sine-cosine parity identities hold ([[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[F4] Cosine is positive on $[0,\pi/2)$ and tangent is defined on $(-\pi/2,\pi/2)$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-tangent-cotangent-secant-cosecant]]).

## Proof

**Proof technique:** use the complementary-angle tangent identity and uniqueness of the principal inverse.

1.1 Put $u=\arctan y$. By [F3], $\tan0=0$; [F1] therefore gives $\arctan0=0$. Since $y>0$ and the inverse in [F1] is strictly increasing, $u>0$, while its range gives $u<\pi/2$. [given, F1, F2, F3, algebra]

2.1 The angle $\pi/2-u$ lies in $(0,\pi/2)$. The shift and parity identities in [F3] give $\sin(\pi/2-u)=\cos u$ and $\cos(\pi/2-u)=\sin u$. By [F4], $\cos u>0$; because $\tan u=y>0$ and $\tan u=\sin u/\cos u$, also $\sin u>0$. Thus tangent is defined at both $u$ and $\pi/2-u$, and [F2] gives $\tan(\pi/2-u)=\cos u/\sin u=1/y$. [step 1.1, F2, F3, F4, given, algebra]

3.1 Since $\pi/2-u\in(-\pi/2,\pi/2)$, the inverse identity in [F1] yields $\arctan(1/y)=\pi/2-u$. Substituting $u=\arctan y$ proves the formula. [step 1.1, step 2.1, F1, given, algebra] ∎
