---
id: thm-existence-of-schur-covering-groups-for-finite-groups
kind: theorem
title: "Existence of Schur covering groups"
status: draft
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, lem-every-finite-group-is-finitely-presented, thm-hopf-formula-for-the-schur-multiplier, lem-schur-multiplier-of-a-finite-group-is-finite]
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

Every finite group has a Schur covering group.

## Facts & Assumptions

**Given:** Let $G=F/R$ be a finite presentation and put $A=R/[F,R]$ and $M=(R\cap[F,F])/[F,R]$.

## Proof

**Proof technique:** direct.

1.1 The quotient $A/M\cong R/(R\cap[F,F])$ embeds in the free abelian group $F_{\mathrm{ab}}$, so it is free abelian.  Hence $0\to M\to A\to A/M\to0$ splits.  Choose a complement $S/[F,R]$ to $M$ in $A$. [given, algebra]

2.1 The extension $R/S\to F/S\to G$ is central because $[F,R]\le S$.  Its kernel is $R/S\cong M(G)$ by Hopf's formula, and it lies in $[F/S,F/S]$ because the chosen complement meets $M$ trivially.  Thus it is a stem extension with multiplier kernel.  The kernel and $G$ are finite, so $F/S$ is finite, and [[def-schur-covering-group-of-a-finite-group]] makes it a Schur cover. [step 1.1, algebra] ∎
