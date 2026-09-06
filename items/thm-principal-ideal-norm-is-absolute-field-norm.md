---
id: thm-principal-ideal-norm-is-absolute-field-norm
kind: theorem
title: "The norm of a principal integral ideal"
status: draft
origin: pipeline
deps: [def-absolute-norm-of-an-ideal, lem-nonzero-number-field-ideal-has-finite-quotient, cor-trace-and-norm-of-an-algebraic-integer]
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
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 4.1(c)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For $0\ne\alpha\in\mathcal O_K$, $N((\alpha))=|N_{K/\mathbb Q}(\alpha)|$.

## Proof

**Given:** $0\ne\alpha\in\mathcal O_K$ and an integral basis.

1.1 Multiplication by $\alpha$ is an injective integer matrix on the integral lattice, and its image is $(\alpha)$. [given, algebra]

2.1 The index of the image of an injective integer matrix is the absolute determinant; that determinant is the field norm.  Hence the quotient cardinality has the asserted value. [step 1.1, algebra] ∎
