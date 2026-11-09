---
id: lem-author-60d95bfb692a-subintegral-matching
kind: lemma
title: Sections match across a finite subintegral cover
status: draft
domain: mathematics
deps:
  - lem-author-60d95bfb692a-subintegral-diagonal-cover
  - lem-author-60d95bfb692a-cover-restriction-injective
dependency_roles:
  lem-author-60d95bfb692a-subintegral-diagonal-cover: mathematical-premise
  lem-author-60d95bfb692a-cover-restriction-injective: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Let $p:T\to X$ be a finite subintegral morphism of separated finite-type schemes over a field, and let $F$ be a set-valued cdh sheaf. For every $s\in F(T)$, its pullbacks along the two projections $T\times_X T\rightrightarrows T$ agree. The fibre product represents pairs of maps to $T$ with the same composite to $X$.

## Facts & Assumptions

**Given:** $p$, $F$ and $s$ as stated.

**Goal:** Prove equality of the two pullbacks.

[F1] The diagonal $\Delta:T\to T\times_X T$ is a cdh covering singleton. [[lem-author-60d95bfb692a-subintegral-diagonal-cover]]

[F2] Restriction of a sheaf along a covering singleton is injective. [[lem-author-60d95bfb692a-cover-restriction-injective]]

## Proof

**Proof technique:** Compare after restriction to the diagonal.

1.1 Each projection composed with $\Delta$ is $\operatorname{id}_T$. Consequently the two pullbacks of $s$ restrict along $\Delta$ to the same element $s$. [given]

2.1 By [F1] and [F2], restriction along $\Delta$ is injective. The two pullbacks are therefore equal. [F1, F2, step 1.1] ∎
