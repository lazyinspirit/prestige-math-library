---
id: def-split-coequalizer
kind: definition
title: "Split coequalizer diagrams"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equalizers-and-coequalizers]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.4.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Section VI.6"
      url: "https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Definition

A **split coequalizer diagram** consists of morphisms

$$x\mathrel{\substack{\xrightarrow{f}\\[-3pt]\xrightarrow[g]{}}}y\xrightarrow{h}z,\qquad t:y\to x,\qquad s:z\to y$$

such that

$$hf=hg,\qquad hs=1_z,\qquad gt=1_y,\qquad ft=sh.$$

Thus a split coequalizer diagram has maps $f,g:x\rightrightarrows y$, $h:y\to z$, $t:y\to x$, and $s:z\to y$ satisfying $hf=hg$, $hs=1_z$, $gt=1_y$, and $ft=sh$. The morphism $h$ is called a **split coequalizer** of $f$ and $g$ ([[def-equalizers-and-coequalizers]]).
