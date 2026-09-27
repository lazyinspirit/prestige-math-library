---
id: thm-existence-of-schur-covering-groups-for-finite-groups
kind: theorem
title: "Existence of Schur covering groups"
status: published
origin: pipeline
deps: [def-schur-covering-group-of-a-finite-group, lem-every-finite-group-is-finitely-presented, thm-hopf-formula-for-the-schur-multiplier, lem-schur-multiplier-of-a-finite-group-is-finite, def-axiom-of-choice, def-supplied-projective-resolution-datum]
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
homology. Every finite group has a Schur covering group.

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses. Let $G=F/R$ be a
finite presentation and put $A=R/[F,R]$ and
$M=(R\cap[F,F])/[F,R]$. Choice implies the dependent-choice
premise of [[thm-hopf-formula-for-the-schur-multiplier]] and supports the
group-homology data used to identify its kernel with $M(G)$.

## Proof

**Proof technique:** direct.

1.1 The quotient $A/M\cong R/(R\cap[F,F])$ embeds in the finite-rank free abelian group $F_{\mathrm{ab}}$, so it is free abelian. Thus $0\to M\to A\to A/M\to0$ splits. Let $S/[F,R]$ be the image of a splitting, a complement to $M$ in $A$. Because $[F,R]\le S\le R$, conjugation by any $f\in F$ preserves $S$, so $S$ is normal in $F$. [given, algebra]

2.1 The extension $R/S\to F/S\to G$ is central because $[F,R]\le S$. Projection $A\to A/(S/[F,R])$ restricts to an isomorphism from $M$, so $R/S\cong M\cong M(G)$ by Hopf's formula. Since every element of $M$ comes from $R\cap[F,F]$, the kernel $R/S$ lies in $[F/S,F/S]$. Thus it is a stem extension with multiplier kernel. The kernel is finite by [[lem-schur-multiplier-of-a-finite-group-is-finite]], hence $F/S$ is finite because $G$ is finite. This is a Schur cover. [step 1.1, algebra] ∎
