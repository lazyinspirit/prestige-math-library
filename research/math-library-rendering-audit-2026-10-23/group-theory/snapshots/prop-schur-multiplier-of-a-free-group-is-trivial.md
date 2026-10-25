---
id: prop-schur-multiplier-of-a-free-group-is-trivial
kind: proposition
title: "Multiplier of a free group"
status: published
origin: pipeline
deps: [thm-hopf-formula-for-the-schur-multiplier, def-free-presentation-kernel-data, def-dependent-choice]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
---

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data
for group homology. Then $M(F)=0$ for every free group $F$.

## Proof

**Given:** The stated choice and resolution data, and the free presentation
$F=F/1$.

1.1 Hopf’s numerator is $1\cap[F,F]=1$ and its denominator is $[F,1]=1$. [given]

2.1 Thus the Hopf quotient, and hence $M(F)$, is zero. [step 1.1, algebra] ∎
