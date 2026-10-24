---
id: thm-real-de-moivre-binomial-multiple-angle-formulas
kind: theorem
title: "Finite binomial formulas for $\\cos(n\\theta)$ and $\\sin(n\\theta)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sine-and-cosine-addition-formulas, thm-pascals-rule, def-binomial-coefficient, def-finite-sum, def-integer-power, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

For every $n\in\mathbb N$ and real $\theta$,
$$\cos(n\theta)=\sum_{2j\le n}(-1)^j\binom n{2j}\cos^{n-2j}\theta\sin^{2j}\theta,$$
$$\sin(n\theta)=\sum_{2j+1\le n}(-1)^j\binom n{2j+1}\cos^{n-2j-1}\theta\sin^{2j+1}\theta.$$ The conventions and prerequisite facts used below are recorded in [[thm-sine-and-cosine-addition-formulas]], [[thm-pascals-rule]], [[def-binomial-coefficient]], [[def-finite-sum]], [[def-integer-power]], [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A natural $n$ and real $\theta$.

[L1] [[thm-sine-and-cosine-addition-formulas]] gives the formulas for $\sin(a+b)$ and $\cos(a+b)$ for all real $a,b$.

[L2] [[thm-pascals-rule]] gives $\binom{n+1}{k+1}=\binom n k+\binom n{k+1}$ for all natural $n,k$.

## Proof

**Proof technique:** induction.

1.1 At $n=0$ the two displayed finite sums give $1$ and $0$. [base]

1.2 Assume the two formulas at $n$. [ih]

2.1 Apply [L1] to $n\theta+\theta$ and insert the two induction sums. Collecting the coefficient of each monomial $\cos^{n+1-r}\theta\sin^r\theta$ leaves the sum of the two adjacent binomial coefficients. [L1, step 1.2, algebra]

3.1 By [L2], those adjacent sums are exactly $\binom{n+1}r$; even $r$ contribute to cosine with sign $(-1)^{r/2}$ and odd $r$ contribute to sine with sign $(-1)^{(r-1)/2}$. This proves both formulas at $n+1$ without using complex numbers. [L2, step 2.1, discharge-induction] ∎
