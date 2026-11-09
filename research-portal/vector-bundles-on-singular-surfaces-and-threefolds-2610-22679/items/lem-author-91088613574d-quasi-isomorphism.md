---
id: lem-author-91088613574d-quasi-isomorphism
kind: lemma
title: Cohomology of equivalent derived complexes
status: published
domain: mathematics
deps:
  - lem-author-b747b28c359f-derived-cohomology
dependency_roles:
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
---

## Statement
An isomorphism $A\cong B$ in the derived category of complexes of abelian groups induces an isomorphism $H^i(A)\cong H^i(B)$ for each integer $i$. The derived category is the category in which quasi-isomorphisms, meaning cochain maps inducing isomorphisms on all cohomology groups, have been inverted.

## Facts & Assumptions
**Given:** An isomorphism $A\cong B$ in the derived category and an integer $i$.

**Goal:** Obtain the induced cohomology isomorphism.

[F1] Degree-i cohomology is a functor on the derived category. [[lem-author-b747b28c359f-derived-cohomology]]

## Proof
1.1 Apply the functor in [F1] to the isomorphism and to its inverse. [given, F1]

2.1 Functoriality sends the two inverse composites to identity maps, so the resulting maps on cohomology are inverse isomorphisms. [F1, step 1.1] ∎
