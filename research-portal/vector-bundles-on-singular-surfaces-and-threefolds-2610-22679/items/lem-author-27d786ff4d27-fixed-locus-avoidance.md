---
id: lem-author-27d786ff4d27-fixed-locus-avoidance
kind: lemma
title: A rank-two family avoids each prescribed codimension-two locus
status: published
domain: mathematics
deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-regular-section-parameter-family
  - lem-surjection-kernel-bundle
  - thm-author-fc2380accb47-normal-geometric-input
  - thm-author-fc2380accb47-finite-type-geometric-input
dependency_roles:
  lem-author-27d786ff4d27-dual-global-controls: mathematical-premise
  lem-regular-section-parameter-family: mathematical-premise
  lem-surjection-kernel-bundle: mathematical-premise
  thm-author-fc2380accb47-normal-geometric-input: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 14
---

## Statement
Fix a closed subset $Z\subset U$ of codimension at least two before choosing the functional. Set $B=Z\cup U_{\mathrm{sing}}$ with reduced structure. Then $\dim B\leq1$, and a nonempty open $T_{\mathrm{av}}\subset T$ consists of parameters whose zero schemes are disjoint from $B$. The allowed open may depend on $Z$; this is $\forall Z\,\exists t$, not $\exists t\,\forall Z$.

## Facts & Assumptions
**Given:** The integral normal threefold and fixed $Z$; the globally value-generating family of [[lem-author-27d786ff4d27-dual-global-controls]].

**Goal:** Combine the prescribed avoidance with all later generic conditions.

[F1] [[thm-author-fc2380accb47-normal-geometric-input]] gives normality's $(R_1)$ and the smooth/regular equality over the perfect field. [[thm-author-fc2380accb47-finite-type-geometric-input]] gives dimension and image-closure bounds.

[F2] [[lem-regular-section-parameter-family]] and [[lem-surjection-kernel-bundle]] identify zero incidence over $B$ with the total space of the rank-$(N-2)$ value kernel.

## Proof
1.1 Codimension at least two in the integral threefold gives $\dim Z\leq1$. By [F1] the singular locus is closed of dimension at most one. Hence their union $B$ is a closed finite-type subset of $U$ with $\dim B\leq1$. The restricted evaluation surjection $\mathcal O_B^N\to E|_B$ has locally free kernel of rank $N-2$, even if $B$ is singular. Thus its total space, the actual zero incidence $I_B$, has dimension at most $1+N-2=N-1$. [F1, F2, given]

2.1 The closure of the image of $I_B$ in $T$ has dimension at most $N-1$ by [F1]. Its complement $T_{\mathrm{av}}$ is nonempty open. Its inverse image in $I_B$ is empty and remains empty after every field extension. Hence all its zero fibers avoid $B$. Intersecting this open with any finitely many nonempty parameter opens retains a nonempty open since $T$ is irreducible. The construction starts with the chosen $Z$, giving exactly the stated quantifier order. [F1, F2, step 1.1] ∎
