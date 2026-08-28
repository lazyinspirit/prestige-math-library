---
id: thm-conjugacy-theorem-for-cyclically-reduced-hnn-words
kind: theorem
title: "Collins' conjugacy theorem for cyclically reduced HNN words"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate, lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let $u$ and $v$ be cyclically Britton-reduced HNN words of positive
stable-letter length. Then $u$ and $v$ are conjugate in the HNN extension if
and only if some cyclic permutation $u'$ of $u$ is conjugate to $v$ by an
element of the base group.

In particular, conjugate cyclically Britton-reduced words of positive
stable-letter length have the same stable-letter length. The length-zero
base-group case of Collins' theorem is deferred: it requires a separate chain
criterion through the associated subgroups.

## Facts & Assumptions

**Given:** The cyclically Britton-reduced words $u$ and $v$ of positive stable-letter length.

[L1] Every cyclic permutation of a positive-length cyclically Britton-reduced HNN word is conjugate to the original word and remains cyclically Britton-reduced. ([[lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate]])

[L2] Conjugacy between positive-length cyclically Britton-reduced words reduces to conjugacy by a base-group element after a cyclic permutation. ([[lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy]])

## Proof

**Proof technique:** direct.

1.1 Suppose first that $u$ and $v$ are conjugate. Then [L2] gives a cyclic permutation $u'$ of $u$ that is conjugate to $v$ by an element of the base group. Because a cyclic permutation preserves the number of stable letters, conjugate positive-length cyclically Britton-reduced words have the same stable-letter length. [L2, given]

1.2 Conversely, if some cyclic permutation $u'$ of $u$ is conjugate to $v$ by an element of the base group, then [L1] shows that $u$ is conjugate to $u'$. Composing with the given base-group conjugacy yields that $u$ is conjugate to $v$. [L1, given]

2.1 The two directions prove the equivalence. [step 1.1, step 1.2] ∎
