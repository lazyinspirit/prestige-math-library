---
id: thm-jordans-derangement-theorem
kind: theorem
title: "Jordan's derangement theorem: every transitive action of a finite group on a finite set with more than one element has a nonidentity element with no fixed points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, def-fixed-point-sets-of-a-group-action, thm-cauchy-frobenius-orbit-counting, def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 6.6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let a finite group $G$ act transitively on a finite set $X$ with $|X|>1$.
Then some nonidentity $g\in G$ is a derangement:

$$X^g=\varnothing.$$

## Facts & Assumptions

**Given:** A transitive action of a finite group $G$ on a finite set $X$ with $|X|>1$.

[L1] A transitive action has exactly one orbit ([[def-group-action]]).

[L2] The fixed-point set is $X^g=\{x:g\cdot x=x\}$ ([[def-fixed-point-sets-of-a-group-action]]).

[L3] Cauchy-Frobenius gives $|G|\,|X/G|=\sum_{g\in G}|X^g|$ ([[thm-cauchy-frobenius-orbit-counting]]).

[L4] Finite cardinalities add over disjoint unions ([[thm-sum-rule]], [[def-finite-cardinality]]).

[L5] Finite sums over finite index sets are well-defined ([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** contradiction.

1.1 By transitivity [L1], $|X/G|=1$, so [L3] gives $\sum_{g\in G}|X^g|=|G|$. [L1, L3]

1.2 The identity fixes every point, so $|X^e|=|X|$; splitting its term from the finite sum gives $\sum_{g\in G}|X^g|=|X|+\sum_{g\ne e}|X^g|$. [L2, L4, L5]

2.1 Suppose, for contradiction, that every nonidentity $g$ fixes a point. Then every term in the remaining sum is at least $1$, so step 1.2 gives $\sum_g|X^g|\ge |X|+(|G|-1)>|G|$, since $|X|>1$. [assume-contra, step 1.2, L2, L4, L5]

3.1 This contradicts step 1.1. Therefore some $g$ has $X^g=\varnothing$; the identity fixes all of $X$, so this $g$ is nonidentity. [step 1.1, step 2.1, L2, discharge-contradiction] ∎
