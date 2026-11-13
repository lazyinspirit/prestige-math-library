---
id: def-author-ab209e1f475e-compact-banach-triple
kind: definition
domain: mathematics
title: Compatible compact Banach triples
status: draft
proof_strategy: direct
deps:
  - math:def-banach-space
  - math:def-compact-linear-operator
  - math:def-linear-map
dependency_roles:
  math:def-banach-space: mathematical-premise
  math:def-compact-linear-operator: mathematical-premise
  math:def-linear-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $X,B,Y$ be real Banach spaces, or complex Banach spaces over the same field, in the sense of [[math:def-banach-space]]. A **compatible compact Banach triple** is a pair of injective linear maps $j:X\to B$ and $k:B\to Y$ such that $j$ is compact in the sense of [[math:def-compact-linear-operator]] and $k$ is bounded. We identify $X$ with $j(X)$ and $B$ with $k(B)$, using $k\circ j$ for the map from $X$ into $Y$; the notation is $X\Subset B\hookrightarrow Y$. Bounded means that there are finite constants $C_j,C_k$ with $\|jx\|_B\le C_j\|x\|_X$ and $\|kb\|_Y\le C_k\|b\|_B$. No density, reflexivity or Hilbert pivot is part of this definition. Compact means that the image of every norm-bounded subset of $X$ has compact closure in $B$.

## Justification

**Given:** The spaces and maps in the Definition.

1.1 A compact linear map is bounded by the final assertion of [[math:def-compact-linear-operator]], so $C_j$ exists. The composite is injective because both maps are injective, and $\|kjx\|_Y\le C_k C_j\|x\|_X$. Thus the three spaces can consistently be identified along these maps. [given, algebra]

1.2 Completeness is already required of each space by [[math:def-banach-space]]. The definition adds specified embeddings and compactness; it does not assert existence of such maps for arbitrary Banach spaces. Therefore its notation has exactly the stated hypotheses and no implicit Hilbert-space assumption. [given] ∎
