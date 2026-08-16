---
id: lem-independent-initial-vectors-give-independent-jordan-strings
kind: lemma
title: "Independent initial vectors make a family of nilpotent Jordan strings independent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jordan-block-and-jordan-string, def-linear-independence]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Theorem 4.1"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

Let $N:V\to V$ be an endomorphism and let $(v_{i,1},\ldots,v_{i,m_i})$ be finitely many Jordan strings for $N$ at $0$. If their initial vectors $v_{i,1}$ are linearly independent, then the union of all vectors in the strings is linearly independent. The empty family is allowed.

## Facts & Assumptions

**Given:** A finite family of nilpotent Jordan strings whose initial vectors are linearly independent.

[L1] In each string, $Nv_{i,1}=0$ and $Nv_{i,j}=v_{i,j-1}$ for $j\ge2$ ([[def-jordan-block-and-jordan-string]]).

[L2] A finite family is linearly independent when its only vanishing finite linear combination has every coefficient zero ([[def-linear-independence]]).

## Proof

**Proof technique:** induction.

1.1 Induct on a natural number $r$ bounding all the string lengths, taking $r=0$ for the empty family, which has no strings and no maximum length. At $r=0$ the family is empty and the assertion is immediate, the empty union being independent by [L2]. [base, L2]

1.2 Assume the result for families whose lengths are bounded by $r-1$, and let the present family have lengths bounded by $r\ge1$ with some string of length exactly $r$. In a relation $\sum_{i,j}a_{i,j}v_{i,j}=0$, applying $N^{r-1}$ and using [L1] gives $\sum_{i:m_i=r}a_{i,r}v_{i,1}=0$. [L1, ih, algebra]

2.1 Independence of the initial vectors forces every coefficient $a_{i,r}$ to vanish. Removing the terminal vectors at position $r$ leaves a relation among truncated strings of maximum length at most $r-1$, so the induction hypothesis makes all remaining coefficients zero; [L2] gives independence of the whole union. [step 1.2, ih, L2, discharge-induction] ∎
