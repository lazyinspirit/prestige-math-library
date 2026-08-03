---
id: def-left-and-right-modules
kind: definition
title: "Unital left and right modules over a ring; unqualified module means left module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring, def-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a ring. A **left $R$-module** is an abelian group $(M,+,0_M)$ with a
scalar action $R\times M\to M$, $(r,m)\mapsto rm$, satisfying

$$r(m+n)=rm+rn,\quad (r+s)m=rm+sm,\quad (rs)m=r(sm),\quad 1_Rm=m.$$

A **right $R$-module** has an action $M\times R\to M$, $(m,r)\mapsto mr$, with
the analogous right-handed axioms. Unless “right” is stated, **module** means a
unital left module.
