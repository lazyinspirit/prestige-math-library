---
id: def-recursive-and-finite-group-presentations
kind: definition
title: "Recursive presentations and finite presentations of groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-presentation, def-recursive-and-recursively-enumerable-languages, def-relators-relations-and-finite-presentations]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
    - title: "Dexter Chua after H. Wilton, Topics in Geometric Group Theory"
      url: "https://dec41.user.srcf.net/h/IV_M/topics_in_geometric_group_theory/full"
pipeline_run: null
---

## Definition

Let $X$ be a finite generating alphabet and let $R$ be a set of relator words
on $X\sqcup X^{-1}$.

- The presentation $\langle X\mid R\rangle$ is **recursive** when the language
  of words representing the members of $R$ is recursively enumerable.
- It is **finite** when $R$ itself is finite, equivalently when it is one of
  the finite presentations of [[def-relators-relations-and-finite-presentations]].

The group presented is the quotient from [[def-group-presentation]].
