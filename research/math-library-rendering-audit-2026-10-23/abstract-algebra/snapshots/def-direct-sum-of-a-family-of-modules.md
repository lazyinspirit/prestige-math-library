---
id: def-direct-sum-of-a-family-of-modules
kind: definition
title: "The direct sum of an indexed family of modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-submodule]
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

Let $R$ be a unital ring and $(M_i)_{i\in I}$ a family of left $R$-modules ([[def-left-and-right-modules]]). Their **direct product** is the module $\prod_{i\in I}M_i$ with coordinatewise operations. The **support** of $m=(m_i)$ is $\{i\in I:m_i\ne0\}$, and the **direct sum** is the submodule
$$\bigoplus_{i\in I}M_i=\{m\in\prod_{i\in I}M_i:\operatorname{supp}(m)\text{ is finite}\}$$
([[def-submodule]]).

This subset is a submodule because the support of a sum is contained in the union of two finite supports and scalar multiplication cannot enlarge support.

For each $i$, the coordinate inclusion $\jmath_i:M_i\to\bigoplus_jM_j$ puts its input in coordinate $i$ and zero elsewhere. If $I=\varnothing$, both product and direct sum are the zero module.
