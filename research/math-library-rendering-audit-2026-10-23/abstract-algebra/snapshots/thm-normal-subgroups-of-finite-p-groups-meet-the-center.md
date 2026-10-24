---
id: thm-normal-subgroups-of-finite-p-groups-meet-the-center
kind: theorem
title: "Every nontrivial normal subgroup of a finite $p$-group meets the center nontrivially"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, thm-p-group-fixed-point-congruence, def-normal-subgroup, thm-normal-subgroup-characterisations, thm-conjugation-is-an-automorphism, def-center-of-a-group, lem-subgroups-of-finite-p-groups-are-p-groups]
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
    - title: "K. Conrad, Group Actions, Theorem 5.3"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a finite $p$-group and let $N\mathrel{\trianglelefteq}P$ be
nontrivial. Then

$$N\cap Z(P)\ne\{e\}.$$

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and a nontrivial normal subgroup $N\mathrel{\trianglelefteq}P$.

[L1] A finite $p$-group has prime-power order ([[def-finite-p-group]]).

[L2] A finite $p$-group action satisfies the fixed-point congruence ([[thm-p-group-fixed-point-congruence]]).

[L3] Normality means $gNg^{-1}=N$ for every $g\in P$ ([[def-normal-subgroup]], [[thm-normal-subgroup-characterisations]]).

[L4] Conjugation by $g$ is an automorphism ([[thm-conjugation-is-an-automorphism]]).

[L5] The center consists of the elements fixed by every conjugation ([[def-center-of-a-group]]).

[L6] A nontrivial subgroup of a finite $p$-group has order $p^k$ for some $k\ge1$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] and [L4], conjugation restricts to an action of $P$ on the finite set $N$. [L3, L4]

2.1 A point of $N$ is fixed by every element of $P$ exactly when it lies in $N\cap Z(P)$ by [L5]. [step 1.1, L5]

3.1 By [L6], $p$ divides $|N|$. Applying [L2] to the action in step 1.1 therefore shows that $p$ divides $|N\cap Z(P)|$. [step 1.1, step 2.1, L1, L2, L6]

4.1 The intersection contains $e$, and its cardinality is a positive multiple of the prime $p>1$; hence it contains a nonidentity element. [step 3.1, L5, algebra] ∎
