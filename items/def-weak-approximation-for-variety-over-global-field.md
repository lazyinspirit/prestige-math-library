---
id: def-weak-approximation-for-variety-over-global-field
kind: definition
title: "Weak approximation on a variety over a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-scheme-over-base
  - def-separated-scheme-over-base
  - def-locally-finite-type-and-finite-type-morphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §2.6.4.5 and Exercise 2.17"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Weak approximation as product-topology density and the finite-place simultaneous-approximation formulation."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §2.2"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Local topology and weak approximation for rational points."
verification: {}
---

## Definition

Assume the Axiom of Choice (AC), as in the place and completion conventions.
Let $K$ be a global field, let $S$ be a finite set of places of $K$, and let
$X$ be a separated finite-type $K$-scheme. For each $v\in S$, give
$X(K_v)$ its local-field topology: on an affine chart presented as a closed
subscheme of affine space, use the subspace topology from $K_v^n$; the chart
topologies agree on overlaps because regular transition maps are continuous.
The diagonal map is
$$\Delta_S:X(K)\longrightarrow\prod_{v\in S}X(K_v),\qquad
P\longmapsto(P)_v.$$
The scheme $X$ satisfies **weak approximation** if $\Delta_S(X(K))$ is dense
in $\prod_{v\in S}X(K_v)$ for every nonempty finite set $S$ of places;
dense means that every nonempty open subset of the product meets the diagonal
image.

## Definition references

[[def-global-field|Global field]]

[[def-place-of-a-global-field|Places of a global field]]

[[def-completion-of-a-global-field-at-a-place|Local completions]]

[[def-scheme-over-base|Schemes over a base]]

[[def-separated-scheme-over-base|Separated schemes]]

[[def-locally-finite-type-and-finite-type-morphism|Finite-type morphisms]]

[[def-axiom-of-choice|Axiom of Choice for the place convention]]

[Poonen, §2.6.4.5 and Exercise 2.17](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §2.2](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** A global field $K$, its places $v$, their completions $K_v$, a
separated finite-type $K$-scheme $X$, and AC.

[A1] AC is used by the place-classification convention.
[[def-axiom-of-choice]] [[def-place-of-a-global-field]]

[F1] A global field has its specified number-field or finite-constant
function-field branch. [[def-global-field]]

[F2] A place determines a completion $K_v$ with a dense embedding of $K$.
[[def-place-of-a-global-field]] [[def-completion-of-a-global-field-at-a-place]]

[F3] A scheme over a base is a scheme equipped with a structure morphism to
that base. [[def-scheme-over-base]]

[F4] Separatedness is a property of the structure morphism, and finite type
means locally finite type plus quasi-compactness.
[[def-separated-scheme-over-base]]
[[def-locally-finite-type-and-finite-type-morphism]]

## Proof

**Proof technique:** define the local topologies and state density of the
diagonal image.

**Given:** The data above.

1.1 On each affine chart, regular functions are polynomial quotients with
denominator nonzero on the chart, so they induce continuous maps on local
points. The chart subspace topologies therefore agree on overlaps and define
the stated topology on $X(K_v)$. [F2, F3, given]

1.2 The finite product carries its product topology. The diagonal map is
defined by the canonical embeddings $K\hookrightarrow K_v$ and base change
of $K$-points. For each nonempty finite $S$, density of this image is exactly
the stated weak-approximation property. [A1, F1, F2, step 1.1, given]
∎
