---
id: thm-real-automorphisms-of-the-complex-numbers
kind: theorem
title: 'The only real-field automorphisms of $\mathbb C$ are the identity and complex conjugation'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, lem-complex-conjugation-and-modulus-laws, cor-universal-property-of-the-complex-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Every field automorphism of $\mathbb C$ that fixes $\mathbb R$ pointwise is
either the identity or complex conjugation, and these two automorphisms are
distinct.

## Facts & Assumptions

**Given:** A real-field automorphism $\sigma$ of $\mathbb C$.

[F1] Every complex number has a unique form $a+bi$, and $\mathbb C$ is a field ([[thm-complex-numbers-form-a-field]]); $i^2=-1$ ([[def-complex-numbers-and-arithmetic]]).

[F2] Complex conjugation is an involutive real-field automorphism ([[lem-complex-conjugation-and-modulus-laws]]).

[F3] A square root of $-1$ determines a unique real-field homomorphism from $\mathbb C$ by the image of $i$ ([[cor-universal-property-of-the-complex-numbers]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $i^2=-1$; since $\sigma$ is a field homomorphism fixing $-1$, applying it gives $\sigma(i)^2=-1$. [F1, algebra]

2.1 In the complex field, $t^2+1=(t-i)(t+i)$; hence a root has $t=i$ or $t=-i$. Thus $\sigma(i)\in\{i,-i\}$. [F1, step 1.1, algebra]

3.1 If $\sigma(i)=i$, uniqueness in [F3] makes $\sigma$ the identity. If $\sigma(i)=-i$, [F2] and uniqueness in [F3] make $\sigma$ conjugation. [F2, F3, step 2.1]

4.1 The two maps are distinct because they send $i$ to the distinct elements $i$ and $-i$. [F1, step 3.1, algebra] ∎
