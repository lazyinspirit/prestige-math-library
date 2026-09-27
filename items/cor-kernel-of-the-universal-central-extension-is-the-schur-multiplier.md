---
id: cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier
kind: corollary
title: "Kernel of the universal central extension"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group, thm-free-presentation-construction-has-the-universal-property, lem-free-presentation-construction-is-a-central-extension, lem-five-term-homology-sequence-for-a-free-presentation, def-axiom-of-choice, def-supplied-projective-resolution-datum]
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
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice and supplied projective-resolution data
for group homology. For a perfect group $G=F/R$ with $F$ free, the kernel of
the free-presentation universal central extension
$[F,F]/[F,R]\to G$ is naturally isomorphic to
$M(G)=H_2(G;\mathbb Z)$.

## Proof

**Given:** Use the stated choice and resolution hypotheses and the
free-presentation universal extension of a perfect group $G=F/R$.
Choice supplies the infinite free-basis lifts required by
[[thm-free-presentation-construction-has-the-universal-property]] and
implies the dependent-choice premise of the five-term sequence.

1.1 Its kernel is $(R\cap[F,F])/[F,R]$. [given]

2.1 Under the stated hypotheses, the free-presentation five-term exact sequence identifies its initial $H_2(G;\mathbb Z)$ with the kernel of $R/[F,R]\to F_{\mathrm{ab}}$, namely $(R\cap[F,F])/[F,R]$. This is $M(G)$ by definition. [step 1.1, algebra] ∎
