---
id: lem-unbounded-stationary-fibres-yield-a-partition
kind: lemma
title: "Unboundedly many stationary fibres yield a partition"
status: published
origin: pipeline
deps: ["thm-fodor-pressing-down", "prop-basic-stationary-set-calculus"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Theorem 5.14 proof, case 1 after Claim 5.17, p.44"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Statement

In ZFC let $\kappa$ be regular uncountable and $g:S\to\kappa$ be regressive, with stationary $S\subseteq\kappa\setminus\{0\}$. If $\{\alpha\in S:g(\alpha)\ge\beta\}$ is stationary for every $\beta<\kappa$, then $S$ has a partition into $\kappa$ stationary sets.

## Facts & Assumptions

[F1] [[thm-fodor-pressing-down]]: A regressive function on a stationary subset of regular uncountable kappa has a stationary fibre.

[F2] [[prop-basic-stationary-set-calculus]]: Supersets of stationary sets are stationary.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For each $\beta<\kappa$, apply Fodor to the stated stationary tail domain. Its stationary constant subset lies in a fibre $g^{-1}(\{\gamma\})$ with $\gamma\ge\beta$. Thus $B=\{\gamma<\kappa:g^{-1}(\{\gamma\})\text{ stationary}\}$ is unbounded. Regularity gives $|B|=\kappa$, so its increasing enumeration has domain kappa. [F1, F2]

2.1 The fibres at values in B are pairwise disjoint stationary sets. Keep them all, and adjoin every remaining point of S to the fibre at the least value in B. That enlarged fibre remains stationary and disjoint from all the others, and the union is now S. [F2, step 1.1] ∎
