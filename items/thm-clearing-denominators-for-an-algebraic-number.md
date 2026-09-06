---
id: thm-clearing-denominators-for-an-algebraic-number
kind: theorem
title: "Clearing denominators for an algebraic number"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-number-field, def-ring-of-integers-of-a-number-field]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Proposition 2.6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For every $\alpha\in K$, some positive integer $m$ satisfies $m\alpha\in\mathcal O_K$; hence $K=\operatorname{Frac}(\mathcal O_K)$.

## Facts & Assumptions

**Given:** $\alpha\in K$.

## Proof

**Proof technique:** direct.

1.1 Write the monic minimal polynomial of $\alpha$ as $$X^n+c_{n-1}X^{n-1}+\cdots+c_0\in\mathbb Q[X],$$ and choose a positive common denominator $m$ of the $c_i$. Multiplying the equation for $\alpha$ by $m^n$ shows that $m\alpha$ satisfies $$X^n+(mc_{n-1})X^{n-1}+(m^2c_{n-2})X^{n-2}+\cdots+m^nc_0,$$ a monic polynomial in $\mathbb Z[X]$. [given, algebra]

2.1 Thus $m\alpha\in\mathcal O_K$, and $\alpha=(m\alpha)/m$ lies in its fraction field; the reverse inclusion is contained in $K$. [step 1.1] ∎
