---
id: cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated
kind: corollary
title: "Multiplier of a finitely presented group"
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

## Statement

A finitely presented group has finitely generated Schur multiplier.

## Facts & Assumptions

**Given:** Let $G=F/R$ have finitely many generators and finitely many defining relators.

## Proof

**Proof technique:** direct.

1.1 Modulo $[F,R]$, every conjugate of a defining relator has the same class as that relator.  Hence the finitely many defining relators generate the abelian group $R/[F,R]$. [given, algebra]

2.1 Hopf's formula identifies $M(G)$ with the subgroup $(R\cap[F,F])/[F,R]$ of this finitely generated abelian group.  Subgroups of finitely generated abelian groups are finitely generated, so $M(G)$ is finitely generated. [step 1.1, algebra] ∎
