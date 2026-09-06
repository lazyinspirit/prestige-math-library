---
id: thm-ramified-primes-and-the-number-field-discriminant
kind: theorem
title: "Ramification is detected by the number-field discriminant"
status: draft
origin: pipeline
deps: [thm-fundamental-identity-for-primes-in-number-fields, thm-number-field-discriminant-is-well-defined-and-nonzero]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 3.35"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

A rational prime $p$ ramifies in $K/\mathbb Q$ if and only if $p\mid d_K$.

## Proof

**Given:** an integral basis of $\mathcal O_K$.

1.1 Reducing its trace-pairing matrix modulo $p$, a nontrivial radical is equivalent to failure of the residue algebra to be a product of separable fields, hence to some ramification index exceeding $1$. [given, algebra]

2.1 The determinant of that matrix is $d_K$, so the radical is nontrivial exactly when $p\mid d_K$.  This proves both directions. [step 1.1, algebra] ∎
