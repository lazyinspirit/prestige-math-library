---
id: def-formal-power-series-derivative
kind: definition
title: "The formal derivative $D(\\sum a_nx^n)=\\sum_{n\\ge1}na_nx^{n-1}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-formal-power-series-and-coefficient-extraction, thm-formal-power-series-ring-and-polynomial-embedding]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Definition

For $f=\sum_{n\ge0}a_nx^n\in R\llbracket x\rrbracket$, its **formal derivative** is

$$Df=f':=\sum_{n\ge1}na_nx^{n-1},$$

where $na_n$ means the sum of $n$ copies of $a_n$ in the additive group of $R$. Define $D^0f=f$ and $D^{k+1}f=D(D^kf)$.

This is coefficientwise algebra, not a limit. In particular $D(x^n)=nx^{n-1}$ for $n\ge1$ and $D(1)=0$. In a ring of characteristic $p>0$, one can have $D(x^p)=0$ although $x^p$ is not constant.
