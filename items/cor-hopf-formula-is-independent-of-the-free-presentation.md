---
id: cor-hopf-formula-is-independent-of-the-free-presentation
kind: corollary
title: "Hopf formula is presentation-independent"
status: published
origin: pipeline
deps: [lem-five-term-homology-sequence-for-a-free-presentation, def-dependent-choice, def-schur-multiplier-of-a-group, def-hopf-formula-quotient]
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

## Statement

Assume dependent choice and supplied projective-resolution data for group
homology. Then Hopf's quotient is independent of the free presentation through
$M(G)$.

## Facts & Assumptions

**Given:** Dependent choice, the supplied group-homology resolution data, and
two free presentations $G=F/R=F'/R'$.

## Proof

**Proof technique:** direct.

1.1 For each presentation, the conditional five-term sequence injects $H_2(G;\mathbb Z)$ into $R/[F,R]$ with image the kernel of $R/[F,R]\to F_{\mathrm{ab}}$. That kernel is $(R\cap[F,F])/[F,R]$, since the map sends $r[F,R]$ to $r[F,F]$. By the definition of the Schur multiplier this gives $(R\cap[F,F])/[F,R]\cong M(G)$, and the same argument gives $(R'\cap[F',F'])/[F',R']\cong M(G)$. [given, algebra]

2.1 Composing the first isomorphism with the inverse of the second identifies the two presentation quotients.  Thus their isomorphism type depends only on $G$, through $M(G)$. [step 1.1, algebra] ∎
