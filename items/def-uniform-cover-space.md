---
id: def-uniform-cover-space
kind: definition
title: "Uniform space in the uniform-cover formulation"
status: published
origin: session
deps: [def-topological-space, def-finite-cardinality]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Definition

For a cover $\mathcal V$ of $X$ and $A\subseteq X$, write $\operatorname{St}(A,\mathcal V)$ for the union of the members of $\mathcal V$ meeting $A$. A cover $\mathcal V$ **star-refines** $\mathcal W$ if for every $V\in\mathcal V$, $\operatorname{St}(V,\mathcal V)$ is contained in some member of $\mathcal W$.

A **uniform-cover structure** is a nonempty family $\mathfrak C$ of covers of $X$ such that a cover refined by a member of $\mathfrak C$ belongs to $\mathfrak C$, any two members have a common refinement in $\mathfrak C$, and every member has a star-refinement in $\mathfrak C$. Its members are **uniform covers**. The topology it induces and its equivalence with entourages are proved in [[lem-entourage-and-uniform-cover-dictionary]].
