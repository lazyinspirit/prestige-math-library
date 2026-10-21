---
id: lem-oriented-bordism-classes-over-a-space-form-an-abelian-group
kind: lemma
title: Oriented bordism classes over a space form an abelian group
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-oriented-bordism-group-of-a-space
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: §8.4.2, pp.169–170, bordism-of-a-space definition baseline. The disjoint-union group operations and inverse proof are supplied locally, not quoted as a new external theorem.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

For every path-connected CW space $X$, disjoint union makes $\Omega_n^{SO}(X)$ an abelian group with identity the empty manifold with its unique map to $X$ and inverse of $(M,f)$ represented by $(-M,f)$.

## Statement references

[[def-oriented-bordism-group-of-a-space|Oriented bordism classes of maps to a space]]

## Facts & Assumptions

**Given:** A path-connected CW space $X$ and the bordism classes of closed oriented $n$-manifolds equipped with maps to $X$.

[F1] A bordism class is represented by a pair $(M,f)$, and its equivalence is witnessed by a compact oriented bordism with an extending map to $X$. [[def-oriented-bordism-group-of-a-space]]

## Proof

1.1 The sum is well-defined: if $F_i:W_i\to X$ are bordisms witnessing equivalences of pairs for $i=0,1$, then $W_0\sqcup W_1$ with map $F_0\sqcup F_1$ is a bordism witnessing the equivalence of the disjoint unions. Boundary orientations are inherited componentwise. [F1, given, construct]

2.1 Disjoint union is associative and commutative up to the orientation-preserving diffeomorphisms that rebracket or permute its components; composing the maps with these diffeomorphisms preserves the bordism classes. The empty manifold with its unique map is a two-sided identity. [F1, step 1.1, algebra]

3.1 The cylinder $M\times[0,1]$ with map $f\circ\operatorname{pr}_M$ has boundary $(M,f)\sqcup(-M,f)$ under the product orientation convention. Thus $(-M,f)$ is a two-sided inverse of $(M,f)$, so the operation is an abelian group operation. [F1, step 1.1, step 2.1, construct] ∎
