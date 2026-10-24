---
id: thm-word-problem-for-free-groups
kind: theorem
title: "The word problem for a finitely generated free group is solvable by free reduction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-alphabet-words-and-reduction, def-word-problem-for-a-fixed-finite-presentation, thm-normal-form-for-the-word-quotient-model]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
    - title: "Dexter Chua after H. Wilton, Topics in Geometric Group Theory"
      url: "https://dec41.user.srcf.net/h/IV_M/topics_in_geometric_group_theory/full"
pipeline_run: null
---

## Statement

Let $F(X)$ be a free group on a finite set $X$. The word problem in $F(X)$ is
solvable: a word on $X\sqcup X^{-1}$ represents the identity if and only if its
free reduction is the empty word.

## Facts & Assumptions

**Given:** A finite basis $X$ and a word $w$ on $X\sqcup X^{-1}$.

[L1] A word is reduced exactly when no adjacent inverse pair remains, and free reduction is obtained by repeatedly deleting such pairs. ([[def-alphabet-words-and-reduction]])

[L2] Every class in the reduced-word model of the free group contains exactly one reduced word. ([[thm-normal-form-for-the-word-quotient-model]])

## Proof

**Proof technique:** direct.

1.1 Repeatedly apply the elementary cancellations of [L1] until no adjacent inverse pair remains. Because each cancellation shortens the word by two letters, the process halts after finitely many steps with a reduced word $r$. [L1, given]

2.1 The free group element represented by $w$ is the same as that represented by $r$, because step 1.1 used only the free-equivalence moves of [L1]. By [L2], the identity class has exactly one reduced representative, namely the empty word. Therefore $w$ represents the identity if and only if $r$ is empty. [L1, L2, step 1.1]

3.1 The halting free-reduction procedure of step 1.1 therefore decides the word problem in $F(X)$. [step 2.1, algebra] ∎
