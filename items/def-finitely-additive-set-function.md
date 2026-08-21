---
id: def-finitely-additive-set-function
kind: definition
title: "Finitely additive nonnegative set functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-algebra, def-extended-reals]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $\mathcal A$ be a sigma-algebra on $X$ ([[def-sigma-algebra]]). A **finitely additive nonnegative set function** is a function $\phi:\mathcal A\to[0,+\infty]$ such that $\phi(\varnothing)=0$ and

$$\phi(A\cup B)=\phi(A)+\phi(B)$$

whenever $A,B\in\mathcal A$ are disjoint. By induction, the same equality holds for every finite pairwise disjoint family, with the empty union and empty sum both equal to $0$. No countable-additivity condition is part of this definition.

