---
id: def-frattini-subgroup-of-a-finite-group
kind: definition
title: "The Frattini subgroup $\\Phi(G)$ as the intersection of the maximal subgroups of a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-maximal-subgroup-of-a-group]
justified_by: []
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
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Definition

For a finite group $G$, the **Frattini subgroup** is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$.
