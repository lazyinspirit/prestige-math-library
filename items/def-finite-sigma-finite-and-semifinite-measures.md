---
id: def-finite-sigma-finite-and-semifinite-measures
kind: definition
title: "Finite, sigma-finite, and semifinite measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-space, def-measure, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space ([[def-measure-space]]).

- The measure $\mu$ is **finite** if $\mu(X)<+\infty$.
- It is **sigma-finite** if there is a sequence $(E_n)_{n\in\mathbb N}$ in $\mathcal A$ such that $X=\bigcup_nE_n$ and $\mu(E_n)<+\infty$ for every $n$.
- It is **semifinite** if, whenever $E\in\mathcal A$ and $\mu(E)>0$, there is $F\in\mathcal A$ with $F\subseteq E$ and $0<\mu(F)<+\infty$.

The last condition is automatic when $0<\mu(E)<+\infty$, by taking $F=E$; its substantive case is $\mu(E)=+\infty$.
