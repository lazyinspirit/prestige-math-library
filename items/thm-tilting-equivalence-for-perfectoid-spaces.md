---
id: thm-tilting-equivalence-for-perfectoid-spaces
kind: theorem
title: "Tilting equivalence for perfectoid spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-perfectoid-space
  - thm-perfectoid-affinoid-algebras-and-rational-subspaces-tilt
  - thm-perfectoid-affinoid-structure-sheaf-and-almost-acyclicity
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 1.9 and Proposition 6.17"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §7"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice. Let $K$ be a perfectoid field with tilt $K^\flat$. Tilting induces an equivalence between the category of perfectoid spaces over $K$ and the category of perfectoid spaces over $K^\flat$. For each perfectoid space $X$ the tilted space $X^\flat$ exists and is unique up to unique isomorphism; its underlying topological space is canonically homeomorphic to that of $X$, and on every perfectoid affinoid chart the homeomorphism is the valuation correspondence induced by $f\mapsto f^\sharp$.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 1.9 and Proposition 6.17](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §7](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

Scholze's proof glues the tilted affinoid charts using the affinoid tilt and the sheaf theorem. Both local suppliers remain escalated because their proofs import unharvested algebraic and analytic results. The global equivalence is therefore retained as a complete statement but not claimed proved.

