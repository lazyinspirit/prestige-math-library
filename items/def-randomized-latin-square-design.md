---
id: def-randomized-latin-square-design
kind: definition
title: Randomized Latin-square design
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-finite-probability-space-and-event
  - def-randomized-complete-block-design
  - def-uniform-finite-probability-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.3"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Definition

Fix $t\ge1$ and put $R_t=\{0,1,\ldots,t-1\}$, with addition interpreted
modulo $t$. A **Latin-square allocation of order $t$** is a function
$L:R_t\times R_t\to R_t$ such that for
each fixed row the map from columns to treatments is a bijection, and for
each fixed column the map from rows to treatments is a bijection. Thus each
treatment occurs exactly once in every row and every column. Let
$\mathcal L_t$ be the finite set of these allocations and assign the uniform
law on $\mathcal L_t$. This law is well-defined: $L_0(r,c)=r+c\pmod t$ is a
Latin square, since adding a fixed residue modulo $t$ permutes the residues; hence
$\mathcal L_t$ is nonempty. This specifies one exact
restricted randomization law. It randomizes over treatment-by-row-by-column
assignments and, for $t\ge2$, is distinct from the product of independent
within-block permutations in an RCBD ([[def-randomized-complete-block-design]]).
