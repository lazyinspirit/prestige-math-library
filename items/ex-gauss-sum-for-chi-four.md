---
id: ex-gauss-sum-for-chi-four
kind: example
title: "Gauss sum for the character modulo 4"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gauss-sum-dirichlet-character, thm-primitive-gauss-sum-norm, def-parity-dirichlet-character]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, section 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Example

For $\chi_4(1)=1$, $\chi_4(3)=-1$, one has $\tau(\chi_4)=2i$ and
$\varepsilon(\chi_4)=1$.

## Facts & Assumptions

**Given:** The displayed Gauss normalization ([[def-gauss-sum-dirichlet-character]]) and odd parity convention ([[def-parity-dirichlet-character]]).

## Verification

**Proof technique:** direct.

1.1 The two nonzero terms are $e(1/4)-e(3/4)=i-(-i)=2i$. [given, algebra]

2.1 Its squared modulus is $4$, agreeing with the primitive norm theorem; with $a=1$, $(-i)\tau(\chi_4)/2=1$. [step 1.1, algebra] ∎
