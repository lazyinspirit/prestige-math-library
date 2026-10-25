---
id: def-specialisation-and-generic-point
kind: definition
title: "Specialisations, generalisations, and generic points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-space, def-interior-closure-boundary-top]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Sections 5.8 and 10.17"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ be a topological space.

A point $y\in X$ is a **specialisation** of $x\in X$ when $$ y\in\overline{\{x\}}, $$ and then $x$ is a **generalisation** of $y$.

If $Z\subseteq X$ is closed, a point $\eta\in Z$ is a **generic point** of $Z$ when $$ \overline{\{\eta\}}=Z. $$

