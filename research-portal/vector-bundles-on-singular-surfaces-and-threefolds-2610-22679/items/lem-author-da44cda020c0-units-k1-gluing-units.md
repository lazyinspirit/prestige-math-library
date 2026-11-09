---
id: lem-author-da44cda020c0-units-k1-gluing-units
kind: lemma
title: Compatible local units glue uniquely
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let X be a ringed space with structure sheaf O and let {Uᵢ} cover X. Units uᵢ∈O(Uᵢ)× that agree on every overlap Uᵢ∩Uⱼ glue to a unique u∈O(X)×. The resulting operation is compatible with multiplication.

A ringed space is a topological space equipped with a sheaf of commutative unital rings; a unit is a section having a multiplicative inverse.

## Facts & Assumptions

**Given:** A ringed space, an open cover, and compatible local units as in the statement.

**Goal:** Glue the units and prove uniqueness and multiplicativity.

## Proof

**Proof technique:** Apply the sheaf axiom to the sections and their inverses.

1.1 The sheaf gluing axiom gives a unique section u∈O(X) restricting to uᵢ. On overlaps the inverse sections agree, since each is the inverse of the same section. They therefore glue to v∈O(X). [given, construct]

2.1 Both uv and 1 restrict to 1 on each Uᵢ. The uniqueness part of the sheaf axiom gives uv=1; commutativity also gives vu=1. Thus u is a unit. If another global unit restricts to the same local units, uniqueness for sections makes it equal to u. [step 1.1, algebra]

3.1 The product of two glued sections restricts to the products of the local sections, so uniqueness identifies it with their glued product. This proves multiplicativity. [step 2.1, algebra] ∎
