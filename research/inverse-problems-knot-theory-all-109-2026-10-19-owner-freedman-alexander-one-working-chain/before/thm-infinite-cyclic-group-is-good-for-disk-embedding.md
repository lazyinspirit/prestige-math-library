---
id: thm-infinite-cyclic-group-is-good-for-disk-embedding
kind: theorem
title: "The infinite cyclic group is good for disk embedding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-good-fundamental-group-for-disk-embedding
  - def-countable-choice
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§2.9, printed pp.42–44"
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://doi.org/10.1093/oso/9780198841319.001.0001"
      locator: "Chapter 19, printed pp.273–282"
---

## Statement

Assume the Axiom of Countable Choice. The infinite cyclic group $\mathbb Z$ is good for the Freedman disk-embedding theorem, in the sense of the $\pi_1$-null disk property defined for a good fundamental group.

## Statement references

[[def-good-fundamental-group-for-disk-embedding|The $\pi_1$-null disk property defining a good group]]

[[def-countable-choice|Axiom of Countable Choice]]

Michael H. Freedman and Frank Quinn, *Topology of 4-Manifolds*, §2.9, https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf

## Facts & Assumptions

**Given:** Countable choice and the definition of a good group.

[F1] [[def-good-fundamental-group-for-disk-embedding]]: Goodness means the $\pi_1$-null disk property for all disk-like height-$1.5$ capped gropes and all homomorphisms to the group.

[A1] [[def-countable-choice]]: Every countable family of nonempty sets admits a choice function.

## Proof

1.1 To prove the statement, one must start with an arbitrary disk-like height-$1.5$ capped grope $C$ and homomorphism $\phi:\pi_1(C)\to\mathbb Z$, then construct a framed immersed disk with the same attaching circle whose double-point loops lie in $\ker\phi$. This is precisely the property in [F1]. [given, F1]

1.2 The construction is not completed here: the reduction of the cyclic labels and the finite-growth/height-raising argument from FQ §2.9, including the estimates used to pass between stages, have not been proved locally. Thus [F1] does not by itself establish the property for $\mathbb Z$. [A1, F1, step 1.1]

## Unresolved proof obligation

Give the complete cyclic-label height-reduction proof and state whether its recursive selection uses only countable choice, dependent choice, or a definable recursion. The source discussion on pp.42–44 is not a substitute for that local proof.

