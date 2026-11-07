---
id: thm-proper-base-change-for-compact-support
kind: theorem
title: "Proper base change for compact-support direct image"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-derived-category-of-etale-sheaves
  - def-derived-direct-image-with-proper-supports
  - def-compactly-supported-etale-cohomology
  - def-l-adic-sheaf-as-compatible-system
  - thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Theorems 17.7 and 17.10"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $f:X\to S$ be a proper morphism between Noetherian schemes, let $\ell$ be invertible on $S$, and let $K$ be a bounded constructible $\mathbb Q_\ell$-complex on the small étale site of $X$. For every morphism $g:S'\to S$, form the Cartesian square with $X'=X\times_S S'$, projections $f':X'\to S'$ and $g':X'\to X$, and $K'=g'^*K$. Then the canonical base-change morphism $g^*Rf_!K\to Rf'_!K'$ is an isomorphism.

## Statement references

[Milne, *Lectures on Étale Cohomology*, Chapter I, Theorem 17.10, p. 117](https://jmilne.org/math/CourseNotes/LEC.pdf)
