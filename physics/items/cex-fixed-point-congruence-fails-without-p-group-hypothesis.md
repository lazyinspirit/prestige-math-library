---
id: cex-fixed-point-congruence-fails-without-p-group-hypothesis
kind: counterexample
title: "$S_3$ acting on three points has $|X|=3$ and $|X^{S_3}|=0$, so the fixed-point congruence modulo $2$ fails without the $p$-group hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-p-group-fixed-point-congruence, def-fixed-point-sets-of-a-group-action, cex-faithful-transitive-action-need-not-be-free, ex-class-equation-of-s-three, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 4.1 and following discussion"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement refuted

**False claim.** For every finite group $G$ acting on a finite set $X$, one has
$|X|\equiv|X^G|\pmod2$.

## Facts & Assumptions

**Given:** The natural action of $S_3$ on $X=\{1,2,3\}$.

[L1] The fixed-point congruence is proved for finite $p$-groups ([[thm-p-group-fixed-point-congruence]]).

[L2] The global fixed set consists of the points fixed by every group element ([[def-fixed-point-sets-of-a-group-action]]).

[L3] The natural $S_3$-action on three points is faithful and transitive ([[cex-faithful-transitive-action-need-not-be-free]]).

[L4] The group $S_3$ has order $6$ ([[ex-class-equation-of-s-three]]).

[L5] Congruence modulo $2$ means divisibility of the difference by $2$ ([[def-congruence-modulo-an-integer]]).

## Counterexample

**Proof technique:** direct.

1.1 For each $i\in X$, some transposition moves $i$, so no point is fixed by every element of $S_3$ and $X^{S_3}=\varnothing$. Thus $|X|=3$ and $|X^{S_3}|=0$. [L2, L3]

2.1 The difference $3-0=3$ is not divisible by $2$, so [L5] shows that the congruence fails. By [L4], $|S_3|=6$ is not a power of $2$, so this does not contradict [L1] and isolates its $p$-group hypothesis. [step 1.1, L1, L4, L5, algebra] ∎
