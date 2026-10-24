---
id: def-composition-series-and-length-of-a-module
kind: definition
title: "Composition series and length of a module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule, def-quotient-module, def-simple-module]
justified_by: [thm-jordan-holder-theorem-for-modules]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Definition

A **composition series** of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the **length** $\ell_R(M)$ is its number $n$ of factors; [[thm-jordan-holder-theorem-for-modules]] proves independence of the chosen series. The zero module has the empty series and length $0$.
