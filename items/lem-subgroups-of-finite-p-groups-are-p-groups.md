---
id: lem-subgroups-of-finite-p-groups-are-p-groups
kind: lemma
title: "Every subgroup of a finite $p$-group has order a power of $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, thm-lagrange, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

If $P$ is a finite $p$-group and $H\le P$, then $H$ is finite and

$$|H|=p^k$$

for some $k\in\mathbb N$. If $|P|=p^n$, then $k\le n$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ with $|P|=p^n$ and a subgroup $H\le P$.

[L1] A finite $p$-group has order $p^n$ for a prime $p$ and a natural $n$ ([[def-finite-p-group]]).

[L2] Lagrange gives $|P|=[P:H]|H|$ ([[thm-lagrange]]).

[L3] Positive integers have unique prime factorisations ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the finite set $H$ has positive order dividing $p^n$. [L1, L2]

2.1 By uniqueness in [L3], no prime other than $p$ can divide $|H|$, so $|H|=p^k$ for some natural $k\le n$. [step 1.1, L3]

3.1 This includes the trivial subgroup, whose order is $1=p^0$, and proves that every subgroup of $P$ is a finite $p$-group. [step 2.1, algebra] ∎
