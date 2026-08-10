---
id: thm-p-group-fixed-point-congruence
kind: theorem
title: 'If a finite $p$-group $P$ acts on a finite set $X$, then $|X|\equiv|X^P|\pmod p$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, def-fixed-point-sets-of-a-group-action, thm-orbits-partition-the-set, cor-orbit-stabilizer-cardinality, lem-subgroups-of-finite-p-groups-are-p-groups, def-congruence-modulo-an-integer, thm-sum-rule, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 5.3"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

If a finite $p$-group $P$ acts on a finite set $X$, then

$$|X|\equiv|X^P|\pmod p.$$

## Facts & Assumptions

**Given:** A finite $p$-group $P$ acting on a finite set $X$.

[L1] A finite $p$-group has prime-power order ([[def-finite-p-group]]).

[L2] The global fixed-point set is $X^P=\{x:g\cdot x=x\text{ for every }g\in P\}$ ([[def-fixed-point-sets-of-a-group-action]]).

[L3] The $P$-orbits partition $X$ ([[thm-orbits-partition-the-set]]).

[L4] An orbit has size $|P\cdot x|=[P:P_x]$ ([[cor-orbit-stabilizer-cardinality]]).

[L5] Every subgroup of $P$ has prime-power order ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[L6] The congruence $a\equiv b\pmod p$ means that $p$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

[L7] A finite partition has total cardinality equal to the sum of its block cardinalities ([[thm-sum-rule]]).

[L8] Finite sums over finite index sets are well-defined ([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $X$ is the disjoint union of its $P$-orbits. An orbit is a singleton exactly when its point is fixed by every element of $P$, so the singleton orbits are indexed by $X^P$. [L2, L3]

1.2 For a non-singleton orbit $P\cdot x$, the stabilizer $P_x$ is proper. By [L1], [L4], and [L5], its index is a positive power of $p$, so $p$ divides $|P\cdot x|$. [L1, L4, L5]

2.1 Applying [L7] and [L8] to the orbit partition, every non-singleton orbit contributes a multiple of $p$ and the singleton orbits contribute $|X^P|$. Thus $p$ divides $|X|-|X^P|$, which is the asserted congruence by [L6]. [step 1.1, step 1.2, L6, L7, L8] ∎
