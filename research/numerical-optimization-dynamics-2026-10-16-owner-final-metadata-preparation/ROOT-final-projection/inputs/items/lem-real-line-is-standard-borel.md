---
id: lem-real-line-is-standard-borel
kind: lemma
title: The real line with its Borel sigma-algebra is standard Borel
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-polish-space
  - def-separable-space
  - def-standard-borel-space
  - lem-rat-embeds-dense
  - thm-euclidean-space-complete
  - thm-rationals-countable
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "O. Biskup, MATH 275D notes, Chapter 2: Kolmogorov Extension Theorem"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

The measurable space $(\mathbb R,\mathcal B(\mathbb R))$ with its usual
topology is standard Borel.

## Facts & Assumptions

**Given:** The real line with its usual metric and Borel sigma-algebra.

[F1] A topological space is Polish if and only if it is separable and has a compatible complete metric.
[[def-polish-space]]

[F2] A space is separable when it has a countable dense subset.
[[def-separable-space]]

[F3] The real line with its usual metric is complete.
[[thm-euclidean-space-complete]]

[F4] The rationals form a countable set.
[[thm-rationals-countable]]

[F5] The rational numbers are dense in the real line.
[[lem-rat-embeds-dense]]

[F6] A measurable space is standard Borel when it is measurably isomorphic
to the Borel space of a Polish topology. [[def-standard-borel-space]]

## Proof

**Given:** $(\mathbb R,\mathcal B(\mathbb R))$ with its usual metric.

1.1 By [F4] and [F5], $\mathbb Q$ is a countable dense subset of $\mathbb R$, so [F2] makes the usual real line separable. Its usual metric is complete by [F3]. Thus the usual topology is Polish by [F1]. [F1, F2, F3, F4, F5]

2.1 The identity map from $(\mathbb R,\mathcal B(\mathbb R))$ to the usual Polish real line is a bijection and preserves exactly the Borel sets. The standard-Borel definition [F6] therefore applies. [F1, F6, step 1.1] ∎

## Source notes

Biskup, Chapter 2, Definition 2.3 and the immediately following examples,
identifies the real line with its Euclidean Borel sigma-algebra as a standard
Borel space. The proof above supplies the separability and completeness
argument from the named local interfaces.
