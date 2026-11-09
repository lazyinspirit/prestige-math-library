---
id: lem-author-91088613574d-even-shift
kind: lemma
title: Cohomology after an even cochain shift
status: published
domain: mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
For a cochain complex $A$, integers $i,j$, and the standard shift convention $A[m]^q=A^{q+m}$ with differential multiplied by $(-1)^m$, there is a canonical isomorphism $H^i(A[-2j])\cong H^{i-2j}(A)$.

## Facts & Assumptions
**Given:** A cochain complex $A$ and integers $i,j$.

**Goal:** Compute the cohomology of its indicated shift.

## Proof
1.1 In degree $i$ the shifted group is $A^{i-2j}$, and both adjacent differentials are the corresponding differentials of $A$ because $(-1)^{-2j}=1$. [given, algebra]

2.1 The kernels and images defining the two displayed cohomology groups are consequently identical, giving the canonical isomorphism. [step 1.1] ∎
