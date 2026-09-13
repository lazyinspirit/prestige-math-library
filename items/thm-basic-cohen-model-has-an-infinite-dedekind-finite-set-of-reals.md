---
id: thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals
kind: theorem
title: The basic Cohen model has an infinite Dedekind-finite set of reals
status: draft
origin: pipeline
deps: [lem-basic-cohen-generic-reals-form-a-symmetric-set, thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset, def-dedekind-infinite-set, thm-dedekind-infinite-iff-countable-subset]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, discussion after Theorem 10.25", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

$A$ is infinite and Dedekind-finite. For $A$, no countably infinite subset, no injection from $\omega$, and no bijection with a proper subset are equivalent and all hold.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-basic-cohen-generic-reals-form-a-symmetric-set]] gives $a_n\in A$, pairwise distinctness, and infinitude of $A$.

[F2] [[thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset]] gives the first two negative properties.

[F3] [[def-dedekind-infinite-set]] defines a bijection with a proper subset.

[F4] [[thm-dedekind-infinite-iff-countable-subset]] proves the equivalences in ZF.

## Proof

1.1 For every $k$, the finite set $\{a_0,\ldots,a_{k-1}\}$ belongs to the model and has $k$ distinct members, so $A$ is not finite. This uses each finite initial collection, not the absent full enumeration. [F1]

2.1 F2 says there is no injection from $\omega$ and no countably infinite subset. F4 identifies either positive condition with Dedekind infinitude as defined by F3. Negating the equivalent clauses shows that there is no bijection from $A$ to a proper subset and that $A$ is Dedekind-finite. No Choice is used. [F2, F3, F4] ∎
