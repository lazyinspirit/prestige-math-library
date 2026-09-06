---
id: ex-hopf-formula-from-a-one-relator-presentation
kind: example
title: "Hopf formula from a one-relator presentation"
status: draft
origin: pipeline
deps: [thm-hopf-formula-for-the-schur-multiplier, def-free-presentation-kernel-data]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For ⟨x | x^n⟩, Hopf’s quotient is trivial.

## Verification

**Given:** Take $F=\langle x\rangle$ and $R=\langle x^n\rangle$.

1.1 As $F$ is cyclic, $[F,F]=1$ and $R\cap[F,F]=1$. [given]

2.1 Thus Hopf’s quotient is trivial. [step 1.1, algebra] ∎
