---
id: lem-author-13e6fe931c45-cone-exact-range
kind: lemma
title: Exact range of a cofiber connectivity bound
status: published
domain: mathematics
deps:
  - lem-author-13e6fe931c45-cone-low-degrees
dependency_roles:
  lem-author-13e6fe931c45-cone-low-degrees: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
---

## Statement
If the cofiber of $f:A\to B$ in $D(\mathbb Z)$ is supported in degrees $>3$, meaning its cohomology vanishes in every degree at most three, then $H^i(f)$ is an isomorphism for every $i\leq3$.

## Facts & Assumptions

**Given:** $f$ and the stated cofiber bound.

**Goal:** Prove the isomorphism range.

[F1] The mapping-cone long exact sequence used in [[lem-author-13e6fe931c45-cone-low-degrees]] contains $H^{i-1}(C)\to H^i(A)\to H^i(B)\to H^i(C)$.

## Proof

1.1 For each $i\leq3$, both $i-1$ and $i$ are at most three, so both adjacent groups in [F1] vanish. [F1, given]

2.1 Exactness makes $H^i(A)\to H^i(B)$ injective and surjective. Thus the stated range follows. [F1, given, step 1.1] ∎
