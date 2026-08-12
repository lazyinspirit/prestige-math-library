---
id: def-filtered-category-and-filtered-colimit
kind: definition
title: "Filtered categories and filtered colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-isomorphism-groupoid-and-connected-category, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: [def-filtered-category]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.8.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

A category $\mathcal J$ is **filtered** when every finite diagram in
$\mathcal J$ admits a cocone. Equivalently:

1. $\mathcal J$ is nonempty;
2. for every $j,k$ there are an object $\ell$ and arrows
   $j\to\ell\leftarrow k$;
3. for every parallel pair $f,g:j\rightrightarrows k$, there is
   $h:k\to\ell$ with $hf=hg$.

The equivalence uses finite diagrams as in
[[def-small-finite-and-large-limits-completeness-and-cocompleteness]]; the
nonempty and zigzag language agrees with the connectedness convention in
[[def-isomorphism-groupoid-and-connected-category]]. A **filtered colimit** is
a colimit ([[def-limit-and-colimit-of-a-diagram]]) of a diagram indexed by a
small filtered category. Smallness is included so the colimit is among the
ordinary small colimits.
