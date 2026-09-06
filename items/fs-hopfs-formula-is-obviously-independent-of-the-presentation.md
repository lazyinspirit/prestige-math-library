---
id: fs-hopfs-formula-is-obviously-independent-of-the-presentation
kind: false-statement
title: "Hopf formula is obviously independent"
status: draft
origin: pipeline
deps: [cor-hopf-formula-is-independent-of-the-free-presentation]
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

## Statement

The presentation-independence of Hopf's quotient follows directly from its
displayed formula, without identifying it with $M(G)$.

## Facts & Assumptions

**Given:** Take two unrelated free presentations of the same group.

## Refutation

**Proof technique:** direct.

1.1 Their groups $(R\cap[F,F])/[F,R]$ are built from different free groups and there is no presentation-free identification between the displayed quotients from their formulas alone. [given]

2.1 Independence is obtained only after Hopf's theorem identifies each quotient with the invariant $M(G)$, as in [[cor-hopf-formula-is-independent-of-the-free-presentation]].  It is not a formal or "obvious" consequence of writing the quotient. [step 1.1] ∎
