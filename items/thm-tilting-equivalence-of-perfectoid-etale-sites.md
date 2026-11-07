---
id: thm-tilting-equivalence-of-perfectoid-etale-sites
kind: theorem
title: "Tilting equivalence of perfectoid étale sites"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-etale-site-of-a-perfectoid-space
  - thm-perfectoid-affinoid-etale-covers-correspond-to-finite-etale-algebras
  - thm-tilting-equivalence-for-perfectoid-spaces
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 7.12"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §7"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice. Let $X$ be a perfectoid space over a perfectoid field $K$ and let $X^\flat$ be its tilt over $K^\flat$. Tilting induces an isomorphism of sites $X_{\acute et}\cong X^\flat_{\acute et}$, functorially in $X$; thus it gives an equivalence between perfectoid spaces étale over $X$ and perfectoid spaces étale over $X^\flat$, preserving the covering families whose underlying maps jointly cover the target topological space.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 7.12](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces, §7](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

The source calls the site equivalence immediate after the local almost-purity and gluing results. The affinoid cover theorem and the site axioms are not yet proved locally, so the global statement remains escalated.

