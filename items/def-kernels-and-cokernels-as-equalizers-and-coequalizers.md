---
id: def-kernels-and-cokernels-as-equalizers-and-coequalizers
kind: definition
title: "Kernels and cokernels in a category with zero morphisms as equalizers and coequalizers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equalizers-and-coequalizers, def-category-with-zero-morphisms]
justified_by: []
aliases: [def-kernel-and-cokernel]
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.26"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

Let $\mathcal C$ be a category with specified zero morphisms
([[def-category-with-zero-morphisms]]), and let $f:A\to B$.

The **kernel** of $f$ is an equalizer

$$\ker(f)\xrightarrow{k}A\mathrel{\substack{\xrightarrow{f}\\[-0.6ex] \xrightarrow[0_{A,B}]{} }}B.$$

The **cokernel** of $f$ is a coequalizer

$$A\mathrel{\substack{\xrightarrow{f}\\[-0.6ex] \xrightarrow[0_{A,B}]{} }}B\xrightarrow{q}\operatorname{coker}(f).$$

in the sense of [[def-equalizers-and-coequalizers]]. Thus $fk=0$ and every
$h$ with $fh=0$ factors uniquely through $k$; dually, $qf=0$ and every $h$
with $hf=0$ factors uniquely through $q$.
