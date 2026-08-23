---
id: def-caratheodory-measurable-set
kind: definition
title: "Carathéodory measurable sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-outer-measure]
justified_by: []
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
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Definition 1.7.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $\mu^*$ be an outer measure on $X$ ([[def-outer-measure]]). A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$.

Write $\mathcal M_{\mu^*}$ for the family of all Carathéodory measurable subsets of $X$. The quantifier over every test set $A$ is part of the definition.
