---
id: "lem-constructible-dense-contains-open"
kind: "lemma"
title: "Dense constructible subsets contain an open"
deps: ["def-constructible-subset-variety"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Proposition 9.6"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Use the finite locally closed decomposition; irreducibility forces one closed factor to contain the closure, and its open factor meets it."
---

## Statement

If a constructible subset $C\subseteq X$ has nonempty irreducible closure $Z$, then $C$ contains a nonempty open subset of $Z$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A subset $S$ of a classical variety $X$ is locally closed if $S=U\cap Z$ for some open $U\subseteq X$ and closed $Z\subseteq X$. A subset is constructible if it is a finite union of locally closed subsets. The empty union is allowed, so $\varnothing$ is constructible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-constructible-subset-variety]]).

## Proof

1.1 Write $C=\bigcup_{i=1}^m(U_i\cap Z_i)$ with $U_i$ open and $Z_i$ closed, discarding empty pieces. The family is nonempty because $Z$ is nonempty. As $Z=\overline C\subseteq\bigcup_i Z_i$, irreducibility implies $Z\subseteq Z_j$ for some $j$. [F1]

2.1 Then $Z\cap U_j\subseteq Z_j\cap U_j\subseteq C$. This open subset of $Z$ is nonempty because the retained piece $U_j\cap Z_j$ is nonempty and contained in $C\subseteq Z$. Thus it is the required open. [F1, step 1.1] ∎
