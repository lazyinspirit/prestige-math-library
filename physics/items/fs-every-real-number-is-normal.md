---
id: fs-every-real-number-is-normal
kind: false-statement
title: Not every real number is normal
status: published
origin: pipeline
deps: [def-canonical-base-b-expansion-and-normality]
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, printed pp. 99–101"
proof_strategy: constructive
---

## Statement

**False claim:** every real number is normal in every base.

## Facts & Assumptions

**Given:** The binary number $x=0.101010\ldots{}_2$.

[F1] Base-two normality requires every word of length $2$, including $00$, to have limiting frequency $2^{-2}=1/4$ ([[def-canonical-base-b-expansion-and-normality]]).

## Refutation

**Proof technique:** constructive periodic witness.

1.1 The displayed digit string is not eventually one and is therefore the canonical binary expansion under [F1]'s convention. [F1, given, construct]

2.1 Its adjacent pairs alternate between $10$ and $01$.  The word $00$ never occurs, so its frequency is $0$. [step 1.1, algebra]

3.1 Since $0\neq1/4$, [F1] shows that $x$ is not normal in base two and hence is not normal in every base.  This single real number refutes the universal claim. [F1, step 2.1, discharge-construct] ∎
