---
id: lem-author-f08c343a07fc-cancel-module-classes
kind: lemma
title: Affine bundle classes are actual projective-module classes
status: draft
domain: mathematics
deps:
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
dependency_roles:
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
Assume AC. For a commutative unital ring $A$, the maps $E\mapsto\Gamma(\operatorname{Spec}A,E)$ and $P\mapsto\widetilde P$ induce inverse bijections between rank-$r$ bundle isomorphism classes and constant-rank-$r$ finite projective module isomorphism classes. In particular two bundles are isomorphic if and only if their modules of sections are isomorphic.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The affine equivalence preserves rank and is quasi-inverse. [[lem-affine-bundle-module-interface]]

## Proof

1.1 The equivalence sends rank-$r$ objects into rank-$r$ objects. A functor sends an invertible morphism to an invertible morphism, so both assignments descend to isomorphism classes. [F1]

2.1 The unit and counit are isomorphisms. Thus the composites induce the identity on classes, and a module isomorphism sheafifies to a bundle isomorphism and conversely. [F1, step 1.1] ∎
