---
id: lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple
kind: lemma
title: "Minimal normal subgroups of finite groups are characteristically simple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-characteristic-subgroup, def-minimal-normal-subgroup-and-socle, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "James E. Humphreys, A Course in Group Theory, Corollary 16.12"
      url: "https://djvu.online/file/3PC3bR3vM2abK"
---

## Statement

Every minimal normal subgroup of a finite group is characteristically simple.

## Facts & Assumptions

**Given:** A finite group $G$ and a minimal normal subgroup $M \trianglelefteq G$.

[L1] If $K$ is characteristic in a normal subgroup $M \trianglelefteq G$, then
$K$ is normal in $G$
([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

[A1] A finite group is characteristically simple exactly when it has no proper
nontrivial characteristic subgroup.

## Proof

**Proof technique:** direct.

1.1 Let $K$ be a characteristic subgroup of $M$. By [L1], the subgroup $K$ is normal in $G$. Since $K \le M$ and $M$ is minimal normal in $G$, either $K=1$ or $K=M$. [given, L1]

2.1 Thus $M$ has no proper nontrivial characteristic subgroup, so [A1] shows that $M$ is characteristically simple. [A1, step 1.1] ∎ 