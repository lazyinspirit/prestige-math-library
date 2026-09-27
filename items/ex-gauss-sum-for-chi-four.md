---
id: ex-gauss-sum-for-chi-four
kind: example
title: "Gauss sum for the character modulo 4"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gauss-sum-dirichlet-character, thm-primitive-gauss-sum-norm, def-parity-dirichlet-character, thm-primitive-dirichlet-l-functional-equation]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Andersen, section 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Example

For $\chi_4(1)=1$, $\chi_4(3)=-1$, one has $\tau(\chi_4)=2i$ and
$\varepsilon(\chi_4)=1$.

## Facts & Assumptions

**Given:** The displayed Gauss normalization ([[def-gauss-sum-dirichlet-character]]) and odd parity convention ([[def-parity-dirichlet-character]]). The root number is $\varepsilon(\chi)=(-i)^a\tau(\chi)/\sqrt q$ for primitive $\chi$ of parity $a$ ([[thm-primitive-dirichlet-l-functional-equation]]).

## Verification

**Proof technique:** direct.

1.1 The two nonzero terms are $e(1/4)-e(3/4)=i-(-i)=2i$. [given, algebra]

2.1 Its squared modulus is $4$, agreeing with the primitive norm theorem; $\chi_4$ is primitive of parity $a=1$, so the cited root-number formula gives $\varepsilon(\chi_4)=(-i)\tau(\chi_4)/2=1$. [step 1.1, given, algebra] ∎
