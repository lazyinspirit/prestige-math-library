---
id: cor-hopf-formula-is-independent-of-the-free-presentation
kind: corollary
title: "Hopf formula is presentation-independent"
status: draft
origin: pipeline
deps: [thm-hopf-formula-for-the-schur-multiplier]
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

Hopf's quotient is independent of the free presentation through $M(G)$.

## Facts & Assumptions

**Given:** Choose two free presentations $G=F/R=F'/R'$.

## Proof

**Proof technique:** direct.

1.1 Hopf's theorem gives isomorphisms $(R\cap[F,F])/[F,R]\cong M(G)$ and $(R'\cap[F',F'])/[F',R']\cong M(G)$. [given, algebra]

2.1 Composing the first isomorphism with the inverse of the second identifies the two presentation quotients.  Thus their isomorphism type depends only on $G$, through $M(G)$. [step 1.1, algebra] ∎
