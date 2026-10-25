---
id: def-divisible-module-over-an-integral-domain
kind: definition
title: "Divisible modules over an integral domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Definition

Let $R$ be an integral domain and $D$ a left $R$-module ([[def-left-and-right-modules]], [[def-zero-divisor-and-integral-domain]]). The module $D$ is **divisible** if for every $0\ne r\in R$ and every $d\in D$, there exists $x\in D$ with $rx=d$. Equivalently, multiplication by every nonzero $r$ is surjective on $D$.

The zero module is divisible. For $R=\mathbb Z$, divisible $R$-modules are precisely divisible abelian groups.
