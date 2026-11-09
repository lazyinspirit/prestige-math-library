---
id: lem-author-9f61e4df2141-split-couple-degeneration
kind: lemma
title: Degeneration of the spectral sequence of a split tower
status: published
domain: mathematics
deps:
  - lem-author-9f61e4df2141-split-tower-boundaries
  - prop-tower-exact-couple-interface
dependency_roles:
  lem-author-9f61e4df2141-split-tower-boundaries: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement
Under the hypotheses of [[lem-author-9f61e4df2141-split-tower-boundaries]], the tower spectral sequence of [[prop-tower-exact-couple-interface]] has zero differentials on every page $E_s$ for $s\geq2$. This assertion alone does not assert convergence or resolve extensions.

## Facts & Assumptions
**Given:** A tower with the specified equivalence to a direct-sum tail tower.

**Goal:** Show that all differentials in its tower spectral sequence vanish.

[F1] [[lem-author-9f61e4df2141-split-tower-boundaries]] makes every stage connecting homomorphism zero.

[F2] [[prop-tower-exact-couple-interface]] constructs the exact couple from stage long exact sequences and derives its pages; its initial map from a graded term to a stage term is the connecting homomorphism.

## Proof
1.1 In the initial exact couple the map $k$ from a graded term to a stage term is zero by [F1]. Its initial differential $jk$ is therefore zero. [F1, F2, given]

2.1 On derivation, the new connecting map sends a surviving graded class to the image in the derived stage group of its former connecting image; because that image is zero, the new connecting map is zero. Induction gives zero connecting map and hence zero differential at every derived page. The reindexing in [F2] gives the asserted pages $s\geq2$. No convergence claim is used. [F2, step 1.1] ∎
