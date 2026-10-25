---
id: cex-faithful-transitive-action-need-not-be-free
kind: counterexample
title: "The natural action of $S_3$ on three points is faithful and transitive but not free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-action, def-free-group-action, def-orbit-and-stabilizer, def-symmetric-group, lem-symmetric-group-is-a-group]
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
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Statement refuted

**False claim.** Every faithful transitive group action is free.

## Facts & Assumptions

**Given:** The symmetric group $S_3=\operatorname{Sym}(\{1,2,3\})$ acting on $X=\{1,2,3\}$ by evaluation.

[L1] An action is transitive when every point can be carried to every other and faithful when only the identity fixes every point ([[def-group-action]]).

[L2] An action is free when no nonidentity element fixes any point ([[def-free-group-action]]).

[L3] Stabilizers record the elements fixing a chosen point ([[def-orbit-and-stabilizer]]).

[L4] The symmetric group consists of all bijections of the set ([[def-symmetric-group]]).

[L5] The symmetric group is a group under composition ([[lem-symmetric-group-is-a-group]]).

## Counterexample

**Proof technique:** direct.

1.1 Evaluation satisfies $e(i)=i$ and $(\sigma\tau)(i)=\sigma(\tau(i))$, so [L4] and [L5] give an action of $S_3$ on $X$. [L4, L5]

2.1 For any $i,j\in X$, a permutation carries $i$ to $j$, so the action is transitive. If a permutation fixes all three points, it is the identity function, so the action is faithful. [step 1.1, L1, L4]

3.1 The nonidentity transposition $(2\,3)$ fixes $1$, so $G_1$ is nontrivial and the action is not free by [L2] and [L3]. Thus the false claim fails. [step 2.1, L2, L3] ∎
