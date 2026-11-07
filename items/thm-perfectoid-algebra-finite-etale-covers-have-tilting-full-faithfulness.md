---
id: thm-perfectoid-algebra-finite-etale-covers-have-tilting-full-faithfulness
kind: theorem
title: "Finite étale covers of perfectoid algebras and tilting"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-perfectoid-k-algebra
  - thm-tilting-equivalence-for-perfectoid-k-algebras
  - def-dependent-choice
  - def-almost-module-and-almost-finite-etale-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 5.25"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
---

## Statement

Assume Dependent Choice. Let $R$ be a perfectoid Banach algebra over a perfectoid field $K$, and let $R^\flat$ be its tilt over $K^\flat$. Tilting induces a fully faithful functor from finite étale $R^\flat$-algebras to finite étale $R$-algebras. Its essential image consists exactly of finite étale $R$-algebras $S$ for which $S$, with its natural topology, is a perfectoid Banach $K$-algebra and $S^{\circ a}$ is a finite étale $R^{\circ a}$-algebra in the almost category for the maximal ideal of $K^\circ$. In this case $S^{\circ a}$ is a uniformly finite projective $R^{\circ a}$-module in the almost category.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 5.25](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

## Remaining local proof obligations

The local source proof uses almost purity and the Gabber–Ramero almost-ring results behind its finite-étale lifting and essential-image assertions. Their full hypotheses and proofs have not been reconstructed in this batch. The claim is retained at the source's stated scope and is escalated.

