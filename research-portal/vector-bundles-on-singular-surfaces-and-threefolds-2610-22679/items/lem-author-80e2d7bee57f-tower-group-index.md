---
id: lem-author-80e2d7bee57f-tower-group-index
kind: lemma
title: Reading spectrum homotopy from an Omega tower
status: draft
domain: mathematics
deps:
  - lem-author-e0b0bf18ed2b-omega-tower-shift
dependency_roles:
  lem-author-e0b0bf18ed2b-omega-tower-shift: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
---

## Statement
Let $Y=(Y_n)$ be a coherent Omega tower of pointed spaces, meaning that its specified maps $Y_n\to\Omega Y_{n+1}$ are equivalences, and let $E$ be its associated spectrum. For every integer $i$ and every sufficiently large $n$, the natural comparison identifies $\pi_i(E)$ with $\pi_{n+i}(Y_n)$ and with the stable group of the tower.

## Facts & Assumptions
**Given:** $Y$, $E$, and $i$ as stated.

**Goal:** Identify the stable group with the enhanced homotopy group.

[F1] [[lem-author-e0b0bf18ed2b-omega-tower-shift]] gives the comparison when $n+i\geq2$, compatible with advancement in the tower.

## Proof
1.1 Choose $n$ with $n+i\geq2$. The first isomorphism and its compatibility with advancement are exactly those of [F1]. [F1, given, choose]

2.1 Each tower transition induces an isomorphism on the relevant homotopy group, so its stable colimit is identified with any such sufficiently late group. Combining this with step 1.1 proves the claim. [F1, step 1.1] ∎
