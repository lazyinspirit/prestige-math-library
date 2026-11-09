---
title: External finite-type dimension, rational-point and etale-fiber inputs
status: published
research_item: thm-author-fc2380accb47-finite-type-geometric-input
dependency_level: 0
---

PDF p. 15: Theorem6.7: rank-three Bertini functional

## Prerequisites

None.

## Statement
Import the exact finite-type geometric facts in the source record: dimension/codimension and image-closure inequalities for finite-type field schemes; product dimensions; the Jacobson and closed-point residue-field facts; and the implication $\Omega_{B/L}=0\Rightarrow B$ finite étale for $B$ finite type over a field $L$. Consequently over algebraically closed $L$, $\operatorname{Spec}B$ is a finite disjoint union of reduced rational points. No characteristic-zero generic-smoothness theorem is part of this input.

## Source contract
**Given:** Finite-type schemes over a field, with the irreducible hypotheses of the dimension statements applied componentwise; a finite-type field algebra for the last implication.

**Goal:** Import the ordinary geometric foundations used in the locally authored parameter argument.

[F1] Stacks33.20.3–33.20.5 provide the exact dimension facts;33.14.1 provides the closed-point facts.

[F2] Stacks10.143.3(7) and10.143.4 provide the field-algebra differential and finite étale conclusions.

## External input
Import [F1]–[F2] with the source record's hypotheses and honest proof-reading limits. These foundations do not import the proposition being authored: finite first-jet generation, the determinant-incidence dimension and simultaneous avoidance are proved in the five local items. In particular a smooth total incidence scheme is not being used to assume separability of its projection.
