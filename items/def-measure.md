---
id: def-measure
kind: definition
title: "Measures on sigma-algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-algebra, def-nonnegative-extended-series, def-extended-reals]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, §2C"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $\mathcal A$ be a sigma-algebra on $X$ ([[def-sigma-algebra]]). A **measure** on $(X,\mathcal A)$ is a function

$$\mu:\mathcal A\longrightarrow[0,+\infty]\subseteq\overline{\mathbb R}$$

such that:

1. $\mu(\varnothing)=0$;
2. for every pairwise disjoint sequence $(E_k)_{k\in\mathbb N}$ in $\mathcal A$,
   $$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)=\sum_{k=0}^{\infty}\mu(E_k),$$
   where the right side is the nonnegative extended sum of [[def-nonnegative-extended-series]].

The second condition is **countable additivity**. It begins at index $0$ and includes the case in which some term or the total sum is $+\infty$.

