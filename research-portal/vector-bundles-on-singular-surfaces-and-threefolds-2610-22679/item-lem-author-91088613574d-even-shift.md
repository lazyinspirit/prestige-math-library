---
title: Cohomology after an even cochain shift
status: draft
research_item: lem-author-91088613574d-even-shift
dependency_level: 0
---

PDF p. 4: Property (4): shift by twice the weight

## Prerequisites

None.

## Statement
For a cochain complex $A$, integers $i,j$, and the standard shift convention $A[m]^q=A^{q+m}$ with differential multiplied by $(-1)^m$, there is a canonical isomorphism $H^i(A[-2j])\cong H^{i-2j}(A)$.

## Facts & Assumptions
**Given:** A cochain complex $A$ and integers $i,j$.

**Goal:** Compute the cohomology of its indicated shift.

## Proof
1.1 In degree $i$ the shifted group is $A^{i-2j}$, and both adjacent differentials are the corresponding differentials of $A$ because $(-1)^{-2j}=1$. [given, algebra]

2.1 The kernels and images defining the two displayed cohomology groups are consequently identical, giving the canonical isomorphism. [step 1.1] ∎
