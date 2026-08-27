---
id: ex-boundary-expansion-in-the-free-group
kind: example
title: "Boundary expansion in the free group"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-free-group-of-rank-two-is-nonamenable]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

In the free group $F(a,b)$ with symmetric generating set
$S=\{a,a^{-1},b,b^{-1}\}$, the balls $B_n$ satisfy

$$\frac{|SB_n\setminus B_n|}{|B_n|}\longrightarrow 2.$$

In particular their one-sided generator boundary proportion stays uniformly
positive.

## Facts & Assumptions

**Given:** The free group $F(a,b)$ with the symmetric generating set $S=\{a,a^{-1},b,b^{-1}\}$.

[L1] The rank-two free group is nonamenable ([[thm-free-group-of-rank-two-is-nonamenable]]).

## Verification

**Proof technique:** direct.

1.1 For every $n\ge0$, one has $|B_n|=1+4\sum_{k=1}^n3^{k-1}=2\cdot3^n-1$. Every element of $SB_n\setminus B_n$ has reduced-word length exactly $n+1$, and every reduced word of length $n+1$ is obtained by taking its length-$n$ prefix in $B_n$ and multiplying by its final letter in $S$. Hence $SB_n=B_{n+1}$ and $$|SB_n\setminus B_n|=|B_{n+1}|-|B_n|=4\cdot3^n.$$ Therefore $$\frac{|SB_n\setminus B_n|}{|B_n|}=\frac{4\cdot3^n}{2\cdot3^n-1}\longrightarrow2.$$ [given, algebra]

2.1 In particular the one-sided generator boundary ratio of the balls never approaches $0$. This explicit boundary expansion is the geometric obstruction behind the nonamenability recorded in [L1]. [L1, step 1.1] ∎
