---
id: lem-author-13e6fe931c45-prime-field-restriction
kind: lemma
title: Restriction of the base field for weight one
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
---

## Statement
Let $k$ be a field with prime subfield $F$, and let $X$ be a quasi-compact quasi-separated $k$-scheme. Then $X$ is a quasi-compact quasi-separated $F$-scheme, and the weight-one complex assigned to $X$ in [[def-motivic-cohomology]] is the value at this same scheme of the Elmanto–Morrow prime-field functor. The small Nisnevich site of $X$ and its sheaf of units depend on $X$, not on which of these two structure maps is retained.

## Facts & Assumptions

**Given:** $k$, $F$, and $X$ as in the statement.

**Goal:** Identify the scheme, motivic value, and small-site data used after restriction of scalars.

[F1] The motivic complex over $k$ is defined by restricting the Elmanto–Morrow functor on qcqs $F$-schemes ([[def-motivic-cohomology]], [[lem-author-b747b28c359f-elmanto-morrow-complexes]]).

## Proof

1.1 Composition of $X\to\operatorname{Spec}k$ with $\operatorname{Spec}k\to\operatorname{Spec}F$ changes neither the underlying scheme nor its quasi-compactness or quasi-separatedness. Thus $X$ belongs to the prime-field domain. [given]

2.1 By [F1], evaluating the restricted functor on $X$ is evaluation of the original functor on that same underlying $F$-scheme. The objects and morphisms of the small Nisnevich site are étale schemes over $X$ and maps over $X$; its covers are specified by their underlying étale maps and residue-field lifting property. These data, and the units of the structure sheaves on them, are unchanged by forgetting the $k$-structure. Hence the asserted identifications hold. [F1, step 1.1] ∎
