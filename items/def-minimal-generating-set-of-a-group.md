---
id: def-minimal-generating-set-of-a-group
kind: definition
title: "Minimal generating sets of a group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-generated-subgroup]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, before Theorem 3.7"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Definition

A subset $X$ of a group is a minimal generating set when it generates and no proper subset of $X$ generates. In symbols,

$$\langle X\rangle=G,\qquad \langle Y\rangle\ne G\quad\text{for every }Y\subsetneq X,$$

with generated subgroups as in [[def-generated-subgroup]]. Here minimal means inclusion-minimal, not minimum cardinality.

