---
id: ex-even-and-odd-character-theta-kernels
kind: example
title: "Even and odd theta kernels"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-twisted-poisson-summation, thm-primitive-dirichlet-l-functional-equation]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kedlaya, Chapter 6"
      url: "https://kskedlaya.org/ant/chap-funceq2.html"
---

## Example

For the even character modulo $1$, the kernel is $\sum_ne^{-\pi n^2t}$.
For odd $\chi_4$, it is $\sum_n n\chi_4(n)e^{-\pi n^2t/4}$; the extra $n$
produces the $-i$ in its transformation.

## Facts & Assumptions

**Given:** Twisted Poisson summation ([[thm-twisted-poisson-summation]]) and the functional equation ([[thm-primitive-dirichlet-l-functional-equation]]).

## Verification

**Proof technique:** direct.

1.1 The parity-$a$ Mellin kernel is $\sum_n\chi(n)n^a e^{-\pi n^2t/q}$, so the two displayed kernels are its $a=0,1$ cases. [given]

2.1 Applying the given transformation yields phase $(-i)^a$, agreeing with the stated functional equations. [step 1.1, given] ∎
