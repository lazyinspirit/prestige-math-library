---
id: cor-norm-of-a-prime-ideal
kind: corollary
title: "The norm of a prime ideal"
status: draft
origin: pipeline
deps: [def-absolute-norm-of-an-ideal, lem-nonzero-number-field-ideal-has-finite-quotient, def-finite-field-and-its-order]
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
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For a nonzero prime $\mathfrak P\subseteq\mathcal O_K$, there is a rational
prime $p$ and an integer $f\ge1$ with $\mathfrak P\cap\mathbb Z=(p)$ and
$N\mathfrak P=p^f$.

## Proof

**Given:** a nonzero prime ideal $\mathfrak P$.

1.1 The finite domain $\mathcal O_K/\mathfrak P$ is a finite field; its characteristic is a rational prime $p$ and its kernel on $\mathbb Z$ is $(p)$. [given, algebra]

2.1 As a finite-dimensional vector space over $\mathbb F_p$, that field has $p^f$ elements for some $f\ge1$, which is exactly $N\mathfrak P$. [step 1.1, algebra] ∎
