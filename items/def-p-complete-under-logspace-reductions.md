---
id: def-p-complete-under-logspace-reductions
kind: definition
title: "P-completeness under logspace reductions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dtime-ntime-dspace-and-nspace, def-logspace-many-one-reduction]
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 6.25"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

Write $\mathrm P=\bigcup_{k\ge1}\mathrm{DTIME}(n^k)$. A language $B$ is
**P-complete under logspace reductions** when $B\in\mathrm P$ and every
$A\in\mathrm P$ satisfies $A\leq_{\log}B$. The direction is important: a
reduction maps an arbitrary P language *to* the proposed complete problem.
