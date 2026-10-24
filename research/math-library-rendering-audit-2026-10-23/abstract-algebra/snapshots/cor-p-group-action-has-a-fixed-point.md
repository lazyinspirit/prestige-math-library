---
id: cor-p-group-action-has-a-fixed-point
kind: corollary
title: 'A finite $p$-group action on $X$ has a global fixed point whenever $p\nmid|X|$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-p-group-fixed-point-congruence, def-fixed-point-sets-of-a-group-action, def-congruence-modulo-an-integer, def-prime]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Corollary 4.2"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let a finite $p$-group $P$ act on a finite set $X$. If $p\nmid|X|$, then
$X^P\ne\varnothing$; equivalently, the action has a point fixed by every
element of $P$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ acting on a finite set $X$, with $p\nmid|X|$.

[L1] The fixed-point congruence gives $|X|\equiv|X^P|\pmod p$ ([[thm-p-group-fixed-point-congruence]]).

[L2] The set $X^P$ consists of the points fixed by every element of $P$ ([[def-fixed-point-sets-of-a-group-action]]).

[L3] Congruence modulo $p$ means divisibility of the difference by $p$ ([[def-congruence-modulo-an-integer]]).

[L4] A prime is positive and greater than $1$ ([[def-prime]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $X^P=\varnothing$. Then $|X^P|=0$. [assume-contra, L2]

2.1 By [L1] and [L3], $p$ divides $|X|-|X^P|=|X|$, contradicting the hypothesis. [step 1.1, L1, L3]

3.1 Therefore $X^P$ is nonempty, and any of its elements is a global fixed point by [L2]. [step 2.1, L2, L4, discharge-contradiction] ∎
