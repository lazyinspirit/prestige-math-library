---
title: Open subsets containing generic points are componentwise dense
status: draft
research_item: lem-author-2389e5bafea8-open-generic-density
dependency_level: 0
---

PDF p. 10: Dense smooth locus in Lemma 5.1

## Prerequisites

None.

## Statement
Let $U$ be an open subset of a topological space $X$. If an irreducible component $C$ has generic point $\eta\in U$, then $U\cap C$ is a dense open subset of $C$.

The generic point condition means $\overline{\{\eta\}}=C$; density means that the closure in $C$ is all of $C$.

## Facts & Assumptions

**Given:** An open $U\subseteq X$ and a component $C$ with generic point $\eta\in U$.

**Goal:** Prove that $U\cap C$ is open and dense in $C$.

## Proof

1.1 The intersection $U\cap C$ is open in the subspace topology on $C$ and contains $\eta$. [given]

2.1 Its closure in $C$ contains the closure of $\{\eta\}$ in $C$, which is $C$. Hence it is dense in $C$. [step 1.1, given] ∎
