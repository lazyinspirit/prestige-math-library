---
title: Restriction of finite-support divisors
status: draft
research_item: lem-author-4057f3195e4f-free-boundary
dependency_level: 0
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

None.

## Statement
Let $S$ be a set and $B\subseteq S$. Write $\mathbb Z^{(S)}$ for the abelian group of integer-valued functions on $S$ with finite support. Restriction to $S\setminus B$ gives an exact sequence $\mathbb Z^{(B)}\to\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}\to0$, where the first map extends functions by zero.

## Facts & Assumptions

**Given:** A set $S$ and a subset $B$.

**Goal:** Prove the displayed sequence exact.

## Proof

1.1 Extension by zero and restriction preserve finite support and addition. Every finitely supported function on $S\setminus B$ extends by zero to $S$, so restriction is surjective. [given, construct]

2.1 A finitely supported function on $S$ restricts to zero on $S\setminus B$ exactly when its support is contained in $B$; it is then the extension by zero of its restriction to $B$. This proves exactness. [step 1.1] ∎
