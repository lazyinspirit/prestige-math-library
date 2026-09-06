---
id: lem-nonzero-number-field-ideal-has-finite-quotient
kind: lemma
title: "A nonzero number-field ideal has finite quotient"
status: draft
origin: pipeline
deps: [thm-ring-of-integers-free-of-rank-degree]
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

Every nonzero integral ideal of $\mathcal O_K$ has finite additive quotient.

## Proof

**Given:** $0\ne\mathfrak a\subseteq\mathcal O_K$ and an integral basis of rank $n$.

1.1 Choose $0\ne a\in\mathfrak a$.  Multiplication by $a$ is an injective endomorphism of the free rank-$n$ lattice $\mathcal O_K$, with nonzero integral determinant. [given, construct]

2.1 Its image $(a)$ has finite index, and $(a)\subseteq\mathfrak a\subseteq\mathcal O_K$; thus $\mathcal O_K/\mathfrak a$ is a quotient of the finite group $\mathcal O_K/(a)$. [step 1.1, algebra] ∎
