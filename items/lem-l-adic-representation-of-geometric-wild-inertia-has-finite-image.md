---
id: lem-l-adic-representation-of-geometric-wild-inertia-has-finite-image
kind: lemma
title: "Continuous l-adic representations have finite geometric wild inertia image"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-geometric-wild-inertia-subgroup-of-absolute-galois-group
  - lem-l-adic-representation-of-pro-p-group-has-finite-image
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free restriction to geometric wild inertia using the finite-coordinate finite-image proof."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, Trace functions over finite fields and applications, §3.1"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: pending
---
## Statement

Let $K_x$ be a geometric local field of residue characteristic $p$, let $P_{K_x}$ be its geometric wild inertia subgroup, let $\ell\ne p$, and let $V$ be a finite-dimensional continuous $\mathbb Q_\ell$-representation of $G_{K_x}$. Then the image of $P_{K_x}$ in $\operatorname{GL}(V)$ is finite.

## Statement references

[[def-geometric-wild-inertia-subgroup-of-absolute-galois-group|Geometric wild inertia]]

[[lem-l-adic-representation-of-pro-p-group-has-finite-image|Continuous l-adic representations of pro-p groups have finite image]]

## Facts & Assumptions

**Given:** The field $K_x$, its wild inertia subgroup, and the continuous representation $V$ in the Statement.

[F1] [[def-geometric-wild-inertia-subgroup-of-absolute-galois-group]]: $P_{K_x}$ is a pro-$p$ group.

[F2] [[lem-l-adic-representation-of-pro-p-group-has-finite-image]]: every continuous finite-dimensional $\mathbb Q_\ell$-representation of a profinite pro-$p$ group has finite image when $\ell\ne p$.

## Proof

1.1 By [F1], $P_{K_x}$ is a profinite pro-$p$ group. The restriction of the given continuous representation to its closed subgroup $P_{K_x}$ remains continuous. [F1, given, algebra]

2.1 Apply the choice-free [F2] to this restricted representation. Its image in $\operatorname{GL}(V)$ is finite, as claimed. [F2, step 1.1, algebra] ∎

## Axiom use

No choice principle is used in this restriction argument or its finite-image supplier. The latter works directly with finite coordinate and congruence quotients, without a compactness assertion.
