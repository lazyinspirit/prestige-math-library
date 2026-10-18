---
id: def-critical-locus-and-critical-value-set
kind: definition
title: "The critical locus and critical value set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-and-critical-points-and-values]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $F:M\to N$ be smooth. The **critical locus** of $F$ is

$$\operatorname{Crit}(F):=\{p\in M:p\text{ is a critical point of }F\},$$

and the **critical value set** of $F$ is its image

$$\operatorname{CV}(F):=F(\operatorname{Crit}(F)).$$

Its complement $N\setminus\operatorname{CV}(F)$ is the set of regular values.
