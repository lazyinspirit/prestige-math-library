---
id: def-separating-set-and-coseparating-set
kind: definition
title: "Separating and coseparating sets of objects"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-small-locally-small-and-large-category]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, section V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a category. A set $\mathcal G$ of objects of $\mathcal C$ is a **separating set** if, whenever $f,g:X\to Y$ are distinct morphisms, there are $G\in\mathcal G$ and $h:G\to X$ with $f\circ h\ne g\circ h$.

A set $\mathcal H$ of objects is a **coseparating set** if, whenever $f,g:X\to Y$ are distinct, there are $H\in\mathcal H$ and $k:Y\to H$ with $k\circ f\ne k\circ g$. A single object whose singleton family has the relevant property is called a separating or coseparating object.
