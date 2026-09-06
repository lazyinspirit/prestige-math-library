---
id: thm-ramification-and-residue-degrees-in-towers
kind: theorem
title: "Ramification and residue degrees in towers"
status: draft
origin: pipeline
deps: [def-prime-above-and-residue-degree, def-ramification-index]
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
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 4, Exercise 4-2"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For $M/L/K$ and $\mathfrak Q\mid\mathfrak P\mid\mathfrak p$,
$$e(\mathfrak Q/\mathfrak p)=e(\mathfrak Q/\mathfrak P)e(\mathfrak P/\mathfrak p),\qquad f(\mathfrak Q/\mathfrak p)=f(\mathfrak Q/\mathfrak P)f(\mathfrak P/\mathfrak p).$$

## Proof

**Given:** the indicated tower and primes.

1.1 Substitute the prime factorisation of $\mathfrak p\mathcal O_L$ into its extension to $\mathcal O_M$ and compare the exponent of $\mathfrak Q$. [given, algebra]

2.1 The three residue fields form a finite tower, so the dimensions multiply.  These are exactly the two asserted equalities. [step 1.1, algebra] ∎
