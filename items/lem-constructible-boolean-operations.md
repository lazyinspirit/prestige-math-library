---
id: "lem-constructible-boolean-operations"
kind: "lemma"
title: "Constructible subsets form a Boolean algebra"
deps: ["def-constructible-subset-variety"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §9a p.200, paragraph preceding Proposition 9.6"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Distribute finite unions and intersections; complement of U intersect Z is (X minus U) union (X minus Z). Do not copy the displayed complement formula in the PDF literally."
---

## Statement

Constructible subsets are closed under finite unions, finite intersections and complements. If $C$ is constructible in $X$ and $S\subseteq X$ is any subspace, $C\cap S$ is constructible in $S$. If $S$ is locally closed and $C$ is constructible in $S$, then $C$ is constructible in $X$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A subset $S$ of a classical variety $X$ is locally closed if $S=U\cap Z$ for some open $U\subseteq X$ and closed $Z\subseteq X$. A subset is constructible if it is a finite union of locally closed subsets. The empty union is allowed, so $\varnothing$ is constructible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-constructible-subset-variety]]).

## Proof

1.1 Finite unions are built into the definition. Intersections distribute over finite unions, and $(U\cap Z)\cap(V\cap W)=(U\cap V)\cap(Z\cap W)$ is locally closed. The complement of $U\cap Z$ is $(X\setminus U)\cup(X\setminus Z)$, a union of a closed and an open set. De Morgan then handles the complement of any finite union using the intersection result. Empty unions and intersections give $\varnothing$ and $X$. [F1]

2.1 Restricting $U\cap Z$ to $S$ replaces its factors by an open and a closed subset of $S$. Conversely, write $S=U_0\cap Z_0$, and a locally closed subset of $S$ as $(S\cap U_1)\cap(S\cap Z_1)$ with $U_1$ open and $Z_1$ closed in $X$. This equals $(U_0\cap U_1)\cap(Z_0\cap Z_1)$, locally closed in $X$. Finite unions prove extension. [F1, step 1.1] ∎
