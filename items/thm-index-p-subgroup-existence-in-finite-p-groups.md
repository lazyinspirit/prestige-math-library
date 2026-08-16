---
id: thm-index-p-subgroup-existence-in-finite-p-groups
kind: theorem
title: "Every nontrivial finite $p$-group has a normal subgroup of index $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-p-groups-are-nilpotent, thm-maximal-subgroups-of-finite-nilpotent-groups, thm-lagrange]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, The Sylow Theorems, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf"
pipeline_run: null
---

## Statement

Every nontrivial finite $p$-group has a normal subgroup of index $p$. See [[thm-finite-p-groups-are-nilpotent]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero. ([[thm-finite-p-groups-are-nilpotent]]).

[L2] Every maximal proper subgroup of a finite nilpotent group is normal and has prime index. ([[thm-maximal-subgroups-of-finite-nilpotent-groups]]).

[L3] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 In the finite nonempty collection of proper subgroups choose one maximal by inclusion. [L1, L2, L3, given, algebra]

2.1 The nilpotent maximal-subgroup theorem makes its index prime, while Lagrange makes that index divide a power of $p$, so it is $p$. [step 1.1, given, algebra]

3.1 The maximal-subgroup theorem also makes $M$ normal, so $M$ is the required normal subgroup of index $p$. This proves the stated claim. [step 2.1, given, algebra] ∎
