---
id: def-randomized-complete-block-design
kind: definition
title: Randomized complete-block design
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-finite-probability-space-and-event
  - def-uniform-finite-probability-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §§13.1–13.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13 §§13.2 and 13.4.4"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
---

## Definition

Fix integers $t\ge2$ and $b\ge1$. There are $b$ blocks, each containing the
same $t$ fixed experimental units, indexed within block $j$ by
$i\in\{1,\ldots,t\}$. The $t$ treatments form a fixed set $\mathcal T$ with
$|\mathcal T|=t$. A **complete block** is a block in which each treatment is
assigned to exactly one unit. The blocks and their units are fixed before
randomization.

Let $S_t$ be the set of permutations from the unit labels to $\mathcal T$.
The **randomized complete-block design (RCBD)** uses assignment space
$\mathcal Z=(S_t)^b$ and the uniform probability law on this finite nonempty
set. Thus each $z=(\pi_1,\ldots,\pi_b)$ has probability $(t!)^{-b}$; the
within-block treatment permutations are independent and individually uniform.
This is a finite randomized-treatment assignment model
([[def-finite-randomized-treatment-assignment-model]]) whose units are the
$tb$ cells and whose assignment is the only randomness supplied by the
design. The design specifies no response model, Gaussian errors, additivity,
or absence of interference. A pair is the special case $t=2,b=1$.
