---
id: ex-hopf-formula-from-a-one-relator-presentation
kind: example
title: "Hopf formula from a one-relator presentation"
status: published
origin: pipeline
deps: [def-hopf-formula-quotient, def-free-presentation-kernel-data]
provenance:
  statement: literature-derived
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

## Example

For ⟨x | x^n⟩, Hopf’s quotient is trivial.

## Verification

**Given:** Take $F=\langle x\rangle$ and $R=\langle x^n\rangle$ in the Hopf quotient of [[def-hopf-formula-quotient]].

1.1 As $F$ is cyclic, $[F,F]=1$ and $R\cap[F,F]=1$. [given]

2.1 Thus Hopf’s quotient is trivial. [step 1.1, algebra] ∎
