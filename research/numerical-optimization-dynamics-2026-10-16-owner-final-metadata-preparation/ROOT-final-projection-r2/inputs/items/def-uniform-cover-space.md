---
id: def-uniform-cover-space
kind: definition
title: "Uniform space in the uniform-cover formulation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-finite-cardinality]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

For a cover $\mathcal V$ of $X$ and $A\subseteq X$, write $\operatorname{St}(A,\mathcal V)$ for the union of the members of $\mathcal V$ meeting $A$. A cover $\mathcal V$ **star-refines** $\mathcal W$ if for every $V\in\mathcal V$, $\operatorname{St}(V,\mathcal V)$ is contained in some member of $\mathcal W$.

A **uniform-cover structure** is a nonempty family $\mathfrak C$ of covers of $X$ such that a cover refined by a member of $\mathfrak C$ belongs to $\mathfrak C$, any two members have a common refinement in $\mathfrak C$, and every member has a star-refinement in $\mathfrak C$. Its members are **uniform covers**. When $X\ne\varnothing$, the topology it induces and its equivalence with entourages are proved in [[lem-entourage-and-uniform-cover-dictionary]].
