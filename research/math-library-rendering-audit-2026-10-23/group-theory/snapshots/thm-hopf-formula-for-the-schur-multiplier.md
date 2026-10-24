---
id: thm-hopf-formula-for-the-schur-multiplier
kind: theorem
title: "Hopf formula for the Schur multiplier"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group, def-hopf-formula-quotient, lem-five-term-homology-sequence-for-a-free-presentation, def-dependent-choice, def-supplied-projective-resolution-datum]
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

Assume the Axiom of Dependent Choice and supplied projective-resolution data
for group homology. For $G=F/R$ with $F$ free,
$M(G)\cong(R\cap[F,F])/[F,R]$.

## Proof

**Given:** Dependent choice, the supplied group-homology resolution data, and a
free presentation $G=F/R$.

1.1 Under the stated hypotheses, [[lem-five-term-homology-sequence-for-a-free-presentation]] gives an injection $H_2(G;\mathbb Z)\to R/[F,R]$ whose image is the kernel of $R/[F,R]\to F_{\mathrm{ab}}$. This kernel is $(R\cap[F,F])/[F,R]$, since the map sends $r[F,R]$ to $r[F,F]$. [given, algebra]

2.1 Exactness identifies that kernel with $H_2(G;\mathbb Z)=M(G)$ by [[def-schur-multiplier-of-a-group]], giving the stated isomorphism. [step 1.1, algebra] ∎
