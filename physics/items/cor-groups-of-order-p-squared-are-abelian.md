---
id: cor-groups-of-order-p-squared-are-abelian
kind: corollary
title: "Every group of order $p^2$, for prime $p$, is abelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nontrivial-center-of-a-finite-p-group, lem-cyclic-quotient-by-center-implies-abelian, cor-order-of-a-quotient-group, cor-prime-order-group-is-cyclic, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, lem-center-is-normal, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Corollary 5.2"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian.

## Facts & Assumptions

**Given:** A prime $p$ and a finite group $G$ with $|G|=p^2$.

[L1] A nontrivial finite $p$-group has nontrivial center ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L2] If $G/Z(G)$ is cyclic, then $G$ is abelian ([[lem-cyclic-quotient-by-center-implies-abelian]]).

[L3] For finite $G$, $|G/Z(G)|=|G|/|Z(G)|$ ([[cor-order-of-a-quotient-group]]).

[L4] A group of prime order is cyclic ([[cor-prime-order-group-is-cyclic]]).

[L5] A group of order $p^2$ is a finite $p$-group ([[def-finite-p-group]]).

[L6] Every subgroup of a finite $p$-group has prime-power order ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[L7] The center $Z(G)$ is a normal subgroup, hence in particular a subgroup, of $G$ ([[lem-center-is-normal]]).

[L8] A finite subset with the same cardinality as its ambient finite set is the whole set ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L7], $Z(G)$ is a nontrivial subgroup of $G$; [L5] and [L6] therefore show that it has order $p$ or $p^2$. [L1, L5, L6, L7]

2.1 If $|Z(G)|=p^2=|G|$, then [L8] gives $Z(G)=G$, so $G$ is abelian. If $|Z(G)|=p$, then [L3] gives $|G/Z(G)|=p$, so [L4] makes $G/Z(G)$ cyclic. [step 1.1, L3, L4, L8]

3.1 In the second case [L2] makes $G$ abelian, and the first case already did so. Hence every group of order $p^2$ is abelian. [step 2.1, L2] ∎
