---
id: lem-author-80e2d7bee57f-shift-cohomology
kind: lemma
title: Cohomology of an integer shift
status: draft
domain: mathematics
deps:
  - math:def-derived-category-of-an-abelian-category
dependency_roles:
  math:def-derived-category-of-an-abelian-category: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 0
---

## Statement
For a cochain complex $C$ of abelian groups and integers $q,k$, the convention $C[k]^q=C^{q+k}$ and $d_{C[k]}^q=(-1)^k d_C^{q+k}$ gives a natural isomorphism $H^q(C[k])\cong H^{q+k}(C)$.

## Facts & Assumptions
**Given:** $C$, $q$, and $k$ as stated.

**Goal:** Compare the indicated cohomology groups.

[F1] [[math:def-derived-category-of-an-abelian-category]] specifies the cochain shift and its sign.

## Proof
1.1 Multiplication of a homomorphism by $(-1)^k$ changes neither its kernel nor its image. Hence the cycles and boundaries of $C[k]$ in degree $q$ are respectively the cycles and boundaries of $C$ in degree $q+k$. [F1, given]

2.1 The identity on representatives induces the displayed quotient isomorphism, and it commutes with maps of complexes because those maps commute with the differentials. [step 1.1] ∎
