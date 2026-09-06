---
id: thm-ideal-norm-is-multiplicative
kind: theorem
title: "Ideal norm is multiplicative"
status: draft
origin: pipeline
deps: [def-absolute-norm-of-an-ideal, lem-nonzero-number-field-ideal-has-finite-quotient, thm-number-field-integral-ideal-factorisation-in-zf]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 4.2(a)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For nonzero integral ideals $\mathfrak a,\mathfrak b$ of $\mathcal O_K$,
$N(\mathfrak a\mathfrak b)=N\mathfrak a\,N\mathfrak b$.

## Proof

**Given:** nonzero integral ideals $\mathfrak a,\mathfrak b$.

1.1 Factor both ideals over their finite union of prime supports. The DVR calculation in the factorisation proof makes $\mathfrak p^r/\mathfrak p^{r+1}$ one-dimensional over $\mathcal O_K/\mathfrak p$, so every successive quotient has cardinality $N\mathfrak p$. [given, algebra]

2.1 Hence $N(\mathfrak p^{r+s})=N(\mathfrak p^r)N(\mathfrak p^s)$ at every prime; multiply over the finite support to obtain the claim. [step 1.1, algebra] ∎
