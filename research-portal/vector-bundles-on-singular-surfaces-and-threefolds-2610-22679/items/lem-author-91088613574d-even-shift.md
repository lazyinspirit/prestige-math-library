---
id: lem-author-91088613574d-even-shift
kind: lemma
title: Cohomology after an even cochain shift
status: published
domain: mathematics
deps: &a1
  - math:def-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
dependency_roles:
  math:def-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
formulation_deps: *a1
argument_deps: *a1
---

## Statement
Let $\mathcal A$ be an abelian category and $A=(A^q,d_A^q)$ a cochain complex in $\mathcal A$. For integers $i,j$, use the shift convention $A[m]^q=A^{q+m}$ and $d_{A[m]}^q=(-1)^m d_A^{q+m}$ for every integer $m$. Then there is a canonical isomorphism $H^i(A[-2j])\cong H^{i-2j}(A)$ in $\mathcal A$.

## Facts & Assumptions
**Given:** An abelian category $\mathcal A$, a cochain complex $A$ in it, and integers $i,j$, with the stated shift convention.

**Goal:** Compute the cohomology of its indicated shift.

[F1] A cochain complex in an abelian category consists of objects and degree-one differentials satisfying $d_A^{q+1}d_A^q=0$ for every integer $q$. [[math:def-cochain-complex-in-an-abelian-category]]

[F2] For a cochain complex $C$, its cohomology is $H^q(C)=\operatorname{coker}(B^q(C)\to Z^q(C))$, where $Z^q(C)=\ker(d_C^q)$ and $B^q(C)=\operatorname{im}(d_C^{q-1})$, with the canonical boundary-to-cycle inclusion. [[math:def-cohomology-object-of-a-cochain-complex]]

[F3] An abelian category is additive, so morphisms have additive inverses and composition is bilinear; this gives meaning to the signs in the shifted differential. [[math:def-abelian-category]]

## Proof
1.1 The stated shift is a cochain complex: $d_{A[m]}^{q+1}d_{A[m]}^q=(-1)^{2m}d_A^{q+m+1}d_A^{q+m}=0$. For $m=-2j$, the sign is $1$, so the degree-$i$ object is $A^{i-2j}$ and its incoming and outgoing differentials are exactly $d_A^{i-2j-1}$ and $d_A^{i-2j}$. [F1, F3, given, algebra]

2.1 Consequently the degree-$i$ cycles, boundaries and their inclusion for $A[-2j]$ are canonically the degree-$(i-2j)$ cycles, boundaries and inclusion for $A$. Taking the cokernel of this same inclusion gives the canonical isomorphism $H^i(A[-2j])\cong H^{i-2j}(A)$. [F2, step 1.1] ∎
