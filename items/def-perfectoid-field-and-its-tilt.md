---
id: def-perfectoid-field-and-its-tilt
kind: definition
title: "Perfectoid field and its tilt"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-complete-nonarchimedean-field, def-valuation-ring]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Definition 3.1 and Lemma 3.4"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §§4.1.2 and 4.3"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a complete rank-one nonarchimedean field. Set
$K^\circ=\{x\in K:|x|_K\le1\}$ and
$K^{\circ\circ}=\{x\in K:|x|_K<1\}$, so that $K^\circ$ is its valuation
ring, $K^{\circ\circ}$ is its maximal ideal, and
$k_K=K^\circ/K^{\circ\circ}$ is its residue field. The residue
characteristic is $p>0$ when $k_K$ has characteristic $p$. The value group
$|K^\times|_K$ is nondiscrete when it is not a discrete subgroup of
$\mathbb R_{>0}$.

For a field of residue characteristic $p>0$, the field is **perfectoid** if
$|K^\times|_K$ is nondiscrete and the Frobenius ring map
$K^\circ/pK^\circ\to K^\circ/pK^\circ$, $x\mapsto x^p$, is surjective.
For such a field, choose $\varpi\in K$ with
$|p|_K<|\varpi|_K<1$ and form the inverse-limit ring
$K^{\flat\circ}_\varpi=\varprojlim_{x\mapsto x^p}K^\circ/\varpi K^\circ$.
Frobenius is well-defined on each quotient because $p\in\varpi K^\circ$.
When this ring is a domain, its fraction field is denoted $K^\flat$.

## Definition references

[[def-complete-nonarchimedean-field]]

[[def-valuation-ring]]

[Peter Scholze, *Perfectoid Spaces*, Definition 3.1 and Lemma 3.4](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §§4.1.2 and 4.3](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)
