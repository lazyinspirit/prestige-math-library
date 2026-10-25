---
id: cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated
kind: corollary
title: "Multiplier of a finitely presented group"
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
homology. A finitely presented group has finitely generated Schur multiplier.

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses. Let $G=F/R$ have
finitely many generators and finitely many defining relators. Choice implies
the dependent-choice premise of
[[thm-hopf-formula-for-the-schur-multiplier]].

## Proof

**Proof technique:** direct.

1.1 Modulo $[F,R]$, every conjugate of a defining relator has the same class as that relator. Since $R$ is the normal closure of the finite relator set, their images generate $R/[F,R]$. This quotient is abelian because $[R,R]\le[F,R]$. [given, algebra]

2.1 Hopf's formula, under the stated hypotheses, identifies $M(G)$ with the subgroup $(R\cap[F,F])/[F,R]$ of this finitely generated abelian group. Subgroups of finitely generated abelian groups are finitely generated, so $M(G)$ is finitely generated. [step 1.1, algebra] ∎
