---
id: thm-tilting-equivalence-for-finite-extensions-of-perfectoid-fields
kind: theorem
title: "Tilting equivalence for finite extensions of perfectoid fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-perfectoid-field-and-its-tilt
  - thm-perfectoid-algebra-finite-etale-covers-have-tilting-full-faithfulness
  - lem-krasner-lemma-for-complete-rank-one-nonarchimedean-fields
  - thm-perfectoid-field-tilt-is-perfectoid
  - def-dependent-choice
  - def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Theorem 3.7"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §4.3"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Assume Dependent Choice and Countable Choice. Let $K$ be a perfectoid field of residue characteristic $p$ and let $K^\flat$ be its tilt. Tilting induces an equivalence between the category of finite field extensions $L/K$ and the category of finite field extensions $L^\flat/K^\flat$, where each $L^\flat$ is the tilt of the completed valued extension $L$; the equivalence preserves finite extension degrees and carries finite Galois extensions and their intermediate fields to the corresponding finite Galois extensions and intermediate fields.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Theorem 3.7](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §4.3](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Remaining local proof obligations

The source proof reduces the field-extension statement to finite étale tilting and Krasner's lemma. The complete rank-one Krasner input is now locally supplied, replacing the batch-35 carrier whose actual hypotheses are restricted to discrete local fields. The finite-étale almost-purity and algebra-tilting suppliers remain escalated, so this theorem is also escalated.

