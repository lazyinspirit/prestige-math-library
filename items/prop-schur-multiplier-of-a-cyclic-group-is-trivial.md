---
id: prop-schur-multiplier-of-a-cyclic-group-is-trivial
kind: proposition
title: "Multiplier of a cyclic group"
status: published
origin: pipeline
deps: [thm-hopf-formula-for-the-schur-multiplier, def-free-presentation-kernel-data, def-axiom-of-choice, def-supplied-projective-resolution-datum]
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

Assume the Axiom of Choice and supplied projective-resolution data for group
homology. Then $M(C)=0$ for every cyclic group $C$.

## Proof

**Given:** The stated choice and resolution hypotheses. For finite cyclic
$C_n$, take $F=\langle x\rangle$ and $R=\langle x^n\rangle$; the infinite
cyclic group has $R=1$. Choice implies the dependent choice required by
[[thm-hopf-formula-for-the-schur-multiplier]].

1.1 The group $F$ is abelian, hence $R\cap[F,F]=1$. [given]

2.1 Under the stated hypotheses, Hopf's formula gives $M(C)=(R\cap[F,F])/[F,R]=0$ in both cases. The trivial group is also cyclic; its free presentation $F=R=1$ gives the same result. [step 1.1, algebra] ∎
