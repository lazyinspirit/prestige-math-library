---
id: cex-maurer-cartan-equation-does-not-determine-gauge-classes
kind: counterexample
title: "The Maurer–Cartan equation alone does not specify gauge classes"
status: draft
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-complete-filtered-l-infinity-algebra
  - def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
  - def-shifted-coalgebra-l-infinity-algebra
  - def-filtered-maurer-cartan-gauge-path
  - ex-abelian-maurer-cartan-gauge-classes-are-cohomology
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification: {}
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement refuted

For every complete filtered L∞-algebra, its operations and
Maurer–Cartan equation alone specify a unique equivalence relation on its
Maurer–Cartan solutions.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$.

[F1] [[def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra]]:
Maurer–Cartan solutions are the degree-zero elements satisfying the
convergent Maurer–Cartan equation; the definition supplies no equivalence
relation.

[F2] [[def-complete-filtered-l-infinity-algebra]]: the filtration and
completeness conditions define the setting for the Maurer–Cartan series.

[F3] [[def-shifted-coalgebra-l-infinity-algebra]]: the operations define an
L∞-structure by a square-zero coderivation.

[F4] [[def-field]]: $0\ne1$ in $k$.

## Counterexample

Take $V^1=kt$ and all other $V^j=0$, so $W=V[1]$ has $W^0=kt$. Let every
operation $q_n$ be zero, and use the filtration $F^1W=W$ and $F^rW=0$ for
$r\ge2$.

1.1 The zero coderivation is square-zero, so the all-zero operations define an L∞-structure by [F3]. The filtration is separated. Its compatible cosets are determined by the representative in $W/F^2W=W$, so the natural map in [F2] is bijective; all filtration-preservation inclusions hold because every $q_n=0$. This is a complete filtered L∞-algebra. [given, F2, F3, construct]

2.1 Every $w\in W^0$ satisfies the Maurer–Cartan equation because every term is zero. Thus the solution set is $W^0=k$. [F1, step 1.1]

3.1 Equality and the relation containing every ordered pair are both reflexive, symmetric, and transitive, so each is an equivalence relation on the same solution set. Since $0\ne1$ by [F4], their quotients have, respectively, more than one class and exactly one class. No part of [F1]–[F3] selects either relation. Therefore the Maurer–Cartan equation alone does not determine gauge classes or deformation equivalence classes. [F1, F2, F3, F4, step 2.1, algebra] ∎


## Remarks

This counterexample concerns a specification consisting only of a Maurer–Cartan solution set and an unspecified equivalence relation. It does not assert that the full L∞ operations together with a fixed gauge convention leave the relation ambiguous. With the completed polynomial convention of [[def-filtered-maurer-cartan-gauge-path]], the displayed zero structure has no degree-minus-one parameters, so its gauge paths are constant and the resulting relation is equality. The indiscrete relation in the counterexample is not that convention's gauge relation. The companion example [[ex-abelian-maurer-cartan-gauge-classes-are-cohomology]] shows how the same solution set can instead acquire distinct canonical gauge quotients when the full unary operation changes.
