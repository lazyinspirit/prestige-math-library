---
id: def-k-isogeny-of-abelian-varieties
kind: definition
title: "Isogenies and isogeny classes of abelian varieties over a field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-field
  - def-abelian-variety-over-a-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.00, Chapter I §§7–10"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Chapter I §7, printed pp. 32–33, definition of isogeny and Proposition 7.1; Chapter I §10, printed p. 43, use of the isogeny equivalence relation."
verification:
  precheck: n/a
---

## Definition

Let $K$ be a field and let $A$ and $B$ be abelian varieties over $K$. A $K$-isogeny from $A$ to $B$ is a surjective $K$-homomorphism with finite kernel. Write $[A]_K$ for the class of $A$ under isomorphisms defined over $K$. The $K$-isogeny relation is the smallest equivalence relation on $K$-isomorphism classes that contains every pair $([A]_K,[B]_K)$ for which a $K$-isogeny from $A$ to $B$ exists. The equivalence class of $[A]_K$ is the $K$-isogeny class of $A$.

## Definition references

[Milne, Abelian Varieties, Chapter I §7, printed pp. 32–33, and Chapter I §10, printed p. 43](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

[F1] [[def-field]]: $K$ is a field.

[F2] [[def-abelian-variety-over-a-field]]: $A$ and $B$ are proper geometrically connected group varieties over $K$.
